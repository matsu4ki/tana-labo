---
title: 静的サイトジェネレータ活用入門 Gatsby.jsで画像最適化するための手順
date: "2020-07-23T00:00:00.284Z"
description: ""
pagetype: "category"
perma: gatsby-images
categoryname: "WEB"
categoryslug: "WEB"
tags: ["JavaScript", "Gatsby.js"]
thumbnail: post-51.png
---

![](./post-51.png)

本ブログも [他人の記事](/post-30/) を参考に突貫で作ったので、Gatsby.jsも理解出来ていない部分が多い。開発当初に比べ、参考書も幾つか出版されているので、こちらを一読してGatsby.jsの理解を深めてみた。

<div class="cstmreba"><div class="booklink-box"><div class="booklink-image"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202007231154047303?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16301755%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" ><img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3001/9784839973001.jpg?_ex=140x140" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202007231154047303?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16301755%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >Webサイト高速化のための　静的サイトジェネレーター活用入門</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">エビスコム マイナビ出版 2020年06月01日頃    </div><div class="booklink-link2"><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202007231154047303?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16301755%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >楽天ブックス</a></div><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4839973008/kanon123-22/" target="_blank" >Amazon</a></div><div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=Web%E3%82%B5%E3%82%A4%E3%83%88%E9%AB%98%E9%80%9F%E5%8C%96%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E3%80%80%E9%9D%99%E7%9A%84%E3%82%B5%E3%82%A4%E3%83%88%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC%E6%B4%BB%E7%94%A8%E5%85%A5%E9%96%80&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=kanon123-22" target="_blank" >Kindle</a></div>                              	  	  	  	  	</div></div><div class="booklink-footer"></div></div></div>
<br/>

一応ECMAScriptやReactに馴染みのない方でも、簡単なブログを構築出来るまでが紹介されており、一読した印象では丁寧に初心者向けて解説されていると思う。

今回はGatsby.jsの鬼門と呼ばれる **gatsby-image** での画像表示を試してみた。

## プロジェクト作成と下準備

ローカル環境にNode.jsが導入済みであることを前提に、以下手順に従ってプロジェクトを初期化。

```bash
# Gatsby.jsインストール
yarn global add gatsby-cli
gatsby -v

# 初期化と動作確認
gatsby new mysite
gatsby develop
```
<br/>

Gatsby.jsでは **gatsby-image** を利用することで、最適化や高速化を全て処理してくれる（大変便利）

<div class="blackboard-box">
<p>・劣化が目立たない範囲で圧縮.</p>
<p>・ファイルサイズが小さくなるフォーマットWebPを使用.</p>
<p>・デバイスの画面サイズや解像度に応じて適切なサイズで表示.</p>
<p>・遅延読み込み（Lazy Load）</p>
<div class="chalk1"></div>
<div class="chalk2"></div>
</div>
<br/>

gatsby-imageに必要なプラグインをインストール。

```bash
yarn add gatsby-image
yarn add gatsby-transformer-sharp gatsby-plugin-sharp
yarn add gatsby-source-filesystem
```
<br/>

gatsby-config.jsを修正。

```js
plugins: [
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    }
  }
]
```
<br/>

**gatsby-source-filesystem** は、ローカルにあるファイルを読み込むために必要なプラグインで、gatsby-config.jsのpathにGraphQLが見にいく場所を指定。

## gatsby-imageで画像表示

src/pages/index.jsでsrc/images配下にある画像を表示させる。

```js
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Img fluid={data.file.childImageSharp.fluid} alt="" />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    file(relativePath: {eq: "gatsby-icon.png"}) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
```
<br>

GraphQLでクエリ結果を取得するため、冒頭でgraphqlをimportする。

gatsby-imageをimport後、取得結果を変数dataで定義し、クエリ結果をImgに連携する。

## Fragment

GraphQLのクエリで定型部分をFragmentに置き換えてシンプルに記述が出来る。

```js
// 置換前
fluid(maxWidth: 1600) {
  base64
  aspectRatio
  src
  srcSet
  srcWebp
  srcSetWebp
  sizes
}

// 置換後
fluid(maxWidth: 1600) {
  ...GatsbyImageSharpFluid_withWebp
}
```
<br/>

gatsby-imageに合わせたデータを揃えるためクエリをFragmentとして用意されている。

[gatsbyjs-fragment](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js)