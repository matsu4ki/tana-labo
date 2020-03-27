---
title: WordPressにサヨナラバイバイ Gatsby.jsでのブログ運営が快適過ぎる!
date: "2020-03-28T00:00:00.284Z"
description: "WordPressは素晴らしいオープンソースだが、CMSが孕むセキュリティーの問題、コストに難がある点、表示速度の遅さ(インフラ知ってれば改善出来るけど)等、無料で使ってるのに不満を持っていた。そんな背景もあって、今回は以前より話題になっていた静的サイトジェネレーターを使ってみた。少し調べるだけで簡単に作れるし、簡単・便利・カッコいいの三拍子が揃っている事を実感。"
pagetype: "category"
categoryname: "テクノロジー"
categoryslug: "technology"
tags: ["Gatsby.js", "Markdown"]
thumbnail: post-30.png
---

![](./post-30.png)

ブログ運営で最もポピュラーな手段としてWordPressがある。

WordPressは素晴らしいオープンソースだが、CMSが孕むセキュリティーの問題、コストに難がある点、表示速度の遅さ(インフラ知ってれば改善出来るけど)等、無料で使ってるくせに不満を持っていた。

そんな背景もあり、以前より話題になっていた静的サイトジェネレーターを使ってみたが <span style="color: crimson; font-weight: bold;">少し調べるだけで簡単に作れるし、簡単・便利・カッコいいの三拍子が揃っている事を実感。</span>

Markdownで記事をサクサク書けるのも◎で、正直もうWordPressには戻れない。

冒頭で簡単だと紹介したが、Gatsby.js自体がReactJSとGraphQLをベースに構築され、JavaScriptやReactJSの知識が求められるので、非エンジニアには非常にハードルが高い。

またCMSのような機能は実装されていない。なのでGatsby.jsで用意されている各種プラグインを活用し、自作する必要があるので、今回はブログ構築でやった対応、参考になった記事をいくつか紹介。

## gatsby-imageでの画像表示

Gatsby.jsの初心者殺しと言われる最初の関門は以下の記事が参考になった。

■ [GatsbyJSのimageを使ってみよう@Crieit](https://crieit.net/posts/GatsbyJS-image)

マークダウン上では楽に画像表示が可能だが、Gatsby.js上ではかなり癖がある模様。

## カテゴリとタグの実装

こちらの記事が参考になった。

■ [GatsbyJSで作っているブログにタグ機能を導入した@キクナントカドットコム](https://kikunantoka.com/2019/12/01--install-tags/)

Markdown記述 → gatsby-node.jsの追記 → templates作成の順に作れば、タグでの検索が可能。

タグ検索さえ実装出来れば、カテゴリ検索もほぼ同様なので、簡単に実装出来ると思われる。


## サイトマップ作成

gatsby-config.jsにsiteUrlを設定することで、最低限のサイトマップが作成される。

```js
siteMetadata: {
  siteUrl: `https://hogehoge.com`,
},
plugins: [`gatsby-plugin-sitemap`]
```

## Youtubeの埋め込み

gatsby-config.jsにgatsby-remark-embed-youtubeを追加。

```js
{
  resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-embed-youtube",
          options: {
            width: 800,
            height: 400
          }
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
      ],
    },
},
```

マークダウンファイルには以下のフォーマットで追記。

```bash
`youtube:https://www.youtube.com/embed/XXXXXXXXX`
```

## ローディングバー

gatsby-config.jsにgatsby-plugin-nprogressを追加。

```js
plugins: [
  {
    resolve: `gatsby-plugin-nprogress`,
    options: {
      color: `#444`,
      showSpinner: false,
    },
  },
]
```

## 参考にさせて頂いたブログ

■ [Gatsby.jsの公式HP](https://www.gatsbyjs.org/)  
■ [Takumon Blog](https://takumon.com/)  
■ [suzukalight.com](https://suzukalight.com/)  
■ [Crieit](https://crieit.net/tags/Gatsby)  
■ [Corylog](https://www.corylog.com/)  
■ [キクナントカドットコム](https://kikunantoka.com/)  
■ [Nakamu Blog](https://blog.nakamu.life/)  
■ [RIGHTCODE](https://rightcode.co.jp/blog)  