---
title: Next.js＋TypeScript＋Firebaseで個人用の◯◯◯◯◯◯管理ツール作成
date: "2021-03-31T00:00:00.284Z"
description: ""
pagetype: "category"
categoryname: "システム開発"
categoryslug: "systemdevelop"
tags: ["Next.js", "TypeScript", "Firebase"]
thumbnail: nextjs-building-service-1.png
---

<br/>
（Next.js ＋ TypeScriptを使う背景について記載）

## コンセプトと目標設定

（作るものと要件と利用技術について記載）

## （メモ）コンセプト

個人の備蓄品を管理するメモ帳的なWEBサービス（とりあえず自分だけが使えれば良い）

**＜まず実現させたい機能要件＞**  
１ 登録項目（品目 / カテゴリ / 数量 / 賞味期限）◯  
２ テーブル形式で一覧表示させ、各項目でソート可能であること ◯  

**＜出来れば実現させたい機能要件＞**  
３ TrelloのようなUI操作が可能であること ◯（React-DnDで対応）  
４ FireStoreの特性を活かし、登録項目にある程度の可用性を持たせる

**＜利用技術＞**  
１ Next.js ＋ React.js ○ ＊必須  
２ TypeScript ＊尚良し(無理しない)  
３ Firebase ＋ FireStore ○  
４ Material-UI ○  

## （メモ）着手する順番

１ Next.jsチュートリアル  
２ Next.js ＋ Material-UIの導入  
３ TypeScriptチュートリアル  
４ デザイン作成  
５ Reactでの実装  
６ 要検討  



## 参考記事
■ [Getting Started＠NextJS公式ドキュメント](https://nextjs.org/docs/getting-started)  
■ [Create a Next.js App＠NextJS公式チュートリアル](https://nextjs.org/learn/basics/create-nextjs-app)  
■ [Official Reference＠getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)  
■ [Official Reference＠API Routes](https://nextjs.org/docs/api-routes/introduction)  
■ [Material-ui](https://material-ui.com/)  
■ [Next.js with Material-UI](https://itnext.io/next-js-with-material-ui-7a7f6485f671)  
■ [nextjs-with-material-ui](https://github.com/hadnazzar/nextjs-with-material-ui)  
■ [Next.jsプロジェクトでMaterial UIを使う方法](https://tech.playground.style/javascript/next-material-ui/)  
■ [React + Material-UIで管理画面を作成してみた](https://dev.classmethod.jp/articles/react-material-ui/)  
■ [React Routerのハマリどころと解決策](https://qiita.com/stakezaki/items/2beceb3cc8b5dd696a8f)  
■ [TypeScript](https://www.typescriptlang.org/)  
■ [React-DnDでドラッグ&ドロップを行う](https://qiita.com/mitubaEX328/items/7e4a279c58ef6501f8b9)  
■ [Macでnodeのバージョン切り替え nodebrewの使い方](https://qiita.com/chihiro/items/13652c461519f8922f56)  
■ [Firebase公式ページ](https://firebase.google.com/docs?hl=ja)  