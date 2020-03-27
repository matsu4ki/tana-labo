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

ブログ運営で最もポピュラーなやり方に**WordPress**の利用がある。

WordPressは素晴らしいオープンソースだが、CMSが孕むセキュリティーの問題、コストに難がある点、表示速度の遅さ(インフラ知ってれば改善出来るけど)等、無料で使ってるのに不満を持っていた。

そんな背景もあって、今回は以前より話題になっていた静的サイトジェネレーターを使ってみた。<span style="color: crimson; font-weight: bold;">少し調べるだけで簡単に作れるし、簡単・便利・カッコいいの三拍子が揃っている事を実感。</span>

Markdownで記事をサクサク書けるのは◎で、正直もうWordPressには戻れない（間違いない）


## 求められる事前知識

構築だけであれば、以下の数行を実行するだけで可能。

```bash
npm install -g gatsby-cli

gatsby new gatsby-blog https://github.com/gatsbyjs/gatsby-starter-blog
cd gatsby-blog/
gatsby develop
gatsby clean
```

ただGatsby.js自体はReactJSとGraphQLをベースに構築されている。

冒頭で簡単と書いたが、JavaScriptやReactJSの知識が必須なので、非エンジニアにはハードル高し。

しかしGatsby.jsには色々便利なプラグインが用意されているので、そこさえクリア出来れば有用!!

とは言え、CMSのように機能がデフォルト実装されている訳ではないので、自作する必要がある。

今回は以下にブログを構築する上で参考になった記事をいくつか紹介。


## gatsby-imageでの画像表示

Gatsby.jsの初心者殺しと言われる最初の関門らしく、以下の記事参考になった。

■ [GatsbyJSのimageを使ってみよう@Crieit](https://crieit.net/posts/GatsbyJS-image)

マークダウン上では楽に画像表示が可能だが、Gatsby.js上ではかなり癖がある模様。


## カテゴリとタグの実装

こちらの記事が参考になった。

■ [GatsbyJSで作っているブログにタグ機能を導入した@キクナントカドットコム](https://kikunantoka.com/2019/12/01--install-tags/)

Markdown記述 → gatsby-node.jsの追記 → templates作成の順に作れば、タグでの検索が可能。

タグ検索さえ実装出来れば、カテゴリ検索もほぼ同様なので、簡単に実装出来ると思われる。


## Netlifyへのデプロイ

（ 記載予定 ）


## 参考にさせて頂いたブログ

■ [Gatsby.jsの公式HP](https://www.gatsbyjs.org/)  
■ [Takumon Blog](https://takumon.com/)  
■ [suzukalight.com](https://suzukalight.com/)  
■ [Crieit](https://crieit.net/tags/Gatsby)  
■ [Corylog](https://www.corylog.com/)  
■ [キクナントカドットコム](https://kikunantoka.com/)  
■ [Nakamu Blog](https://blog.nakamu.life/)  
■ [RIGHTCODE](https://rightcode.co.jp/blog)  