---
title: Ruby on Rails開発経験0の自分が最低限の基礎理解のためにやったこと
date: "2020-05-03T00:00:00.284Z"
description: "急遽PLとしてRailsアプリの開発案件に参画することになり、知識0では苦労しそうなので、簡易的なWebアプリを作ったり、自分が過去経験した言語（Java/PHP/C#）での開発と比べてどう違うのか、こちらの書籍を一読して確認してみた。"
pagetype: "category"
perma: "ruby-on-rails"
categoryname: "WEB"
categoryslug: "WEB"
tags: ["Ruby", "Rails"]
thumbnail: post-39.png
---

![](./post-39.png)

急遽PLとしてRailsアプリの開発案件に参画することになり、差し迫ってRails開発のノウハウが必要になった訳だが、直接自分でRailsアプリを開発する訳ではないし、正直どこまで理解すべきか悩ましい。

とはいえ知識0では苦労しそうなので、簡易的なWebアプリを作ったり、自分が過去経験した言語（Java/PHP/C#）での開発と比べてどう違うのか、こちらの書籍を一読して確認してみた。

<div class="cstmreba"><div class="booklink-box"><div class="booklink-image"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202005031810231786?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F15628625%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" ><img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/2227/9784839962227.jpg?_ex=160x160" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202005031810231786?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F15628625%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >現場で使える Ruby on Rails 5速習実践ガイド</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">大場寧子/松本拓也 マイナビ出版 2018年10月19日    </div><div class="booklink-link2"><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202005031810231786?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F15628625%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >楽天ブックス</a></div><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4839962227/kanon123-22/" target="_blank" >Amazon</a></div><div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=%E7%8F%BE%E5%A0%B4%E3%81%A7%E4%BD%BF%E3%81%88%E3%82%8B%20Ruby%20on%20Rails%205%E9%80%9F%E7%BF%92%E5%AE%9F%E8%B7%B5%E3%82%AC%E3%82%A4%E3%83%89&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=kanon123-22" target="_blank" >Kindle</a></div>                              	  	  	  	  	</div></div><div class="booklink-footer"></div></div></div>
<br/>

本書ではRubyの言語仕様からRails開発手順など、実際に求められる知識が網羅的に説明されている。

■ Chapter 1 - RailsのためのRuby入門 <span style="color: #ff1493;">★</span>  
■ Chapter 2 - Railsアプリケーションをのぞいてみよう　<span style="color: #ff1493;">★</span>  
■ Chapter 3 - タスク管理アプリケーションを作ろう　<span style="color: #ff1493;">★</span>  
■ Chapter 4 - 現実の複雑さに対応する　<span style="color: #ff1493;">★</span>  
■ Chapter 5 - テストをはじめよう  
■ Chapter 6 - Railsの全体像を理解する　<span style="color: #ff1493;">★</span>  
■ Chapter 7 - 機能を追加してみよう  
■ Chapter 8 RailsとJavaScript  
■ Chapter 9 複数人でRailsアプリケーションを開発する  
■ Chapter 10 Railsアプリケーションと長く付きあうために  

<span style="color: #ff1493;">★</span>の章を重点的に確認。

## タスク管理アプリケーション開発

Chapter3 〜 Chapter4で解説されている[タスク管理アプリケーション](https://github.com/machio77777/taskleaf/tree/chapter-4)のハンズオン。

gemを活用しながらの機能実装なので、ハンズオンでRails開発の全体像はざっくり把握できると思う。

■ Railsの仕組み（ ルーティング / CRUD操作 / テンプレート化 ）  
■ gem導入と使い方（ slim / html2slim / bootstrap / bcrypt ）  
■ Rails標準であるジェネレータの使い方（ コントローラ / モデル作成 ）  
■ モデルクラスでのバリデーション（ 標準機能 / 独自実装 ）  
■ モデルクラスでのデータ操作（ 関連 / 絞り込み / ソート ）  
■ DBマイグレーション（ 主なコマンド / バージョン管理 / テーブル定義の制約制御 ）  
■ ログイン機能実装（ Railsでのセッション管理 / Cookie ）  

記事を執筆しながらの実装で1日くらい要したが、開発だけであれば2〜3時間で完了可能。

■ [Ruby on RailsでCRUD操作が出来るタスク管理アプリケーション構築 Part1](https://qiita.com/machio77777/private/6ba3f61437e8e40d7f02)  
■ [Ruby on RailsでCRUD操作が出来るタスク管理アプリケーション構築 Part2](https://qiita.com/machio77777/private/41afa3c845c4cee651e2)  
■ [Ruby on RailsでCRUD操作が出来るタスク管理アプリケーション構築 Part3](https://qiita.com/machio77777/private/903a826417e2f5089203)  
■ [Ruby on RailsでCRUD操作が出来るタスク管理アプリケーション構築 Part4](https://qiita.com/machio77777/private/0cae74a98c1eaddfbab6)  
■ [Ruby on RailsでCRUD操作が出来るタスク管理アプリケーション構築 Part5](https://qiita.com/machio77777/private/9dae856b1cc5a909fc25)  

## Rails APIモード

こちらの記事を拝見し、API開発は需要がありそうなので、RailsのAPIモードも試しに触ってみた。

■ [Railsは終わったと言われる理由](https://qiita.com/klriutsa/items/86ac5e94ec99c0d95b61)

docker環境での手順含め、動作検証に利用したコードは[こちら](https://github.com/machio77777/rails-api-practice)。

## RSpecでの自動テスト

Chapter5ではRSpec導入からテスト実装までを解説されている。

個人的に今回は手を動かせていないが、モダンな開発環境であれば必須領域。

Rails界隈で有名な伊藤淳一さんが綺麗に整理されているので、一読して実践すれば大丈夫かな。

■ [使えるRSpec入門・その1「RSpecの基本的な構文や便利な機能を理解する」](https://qiita.com/jnchito/items/42193d066bd61c740612)  
■ [使えるRSpec入門・その2「使用頻度の高いマッチャを使いこなす」](https://qiita.com/jnchito/items/2e79a1abe7cd8214caa5)  
■ [使えるRSpec入門・その3「ゼロからわかるモック（mock）を使ったテストの書き方」](https://qiita.com/jnchito/items/640f17e124ab263a54dd)  
■ [使えるRSpec入門・その4「どんなブラウザ操作も自由自在！逆引きCapybara大辞典」](https://qiita.com/jnchito/items/607f956263c38a5fec24)

## RailsとJavaScript

Chapter8ではAjaxでRailsサーバとの通信について説明されている。

小規模システムであればRailsモノリスで問題ないだろうけど、最近はAPIファーストでフロントエンドとバックエンドを切り離した構成が多くなっているので、参考レベルに読めば良い内容かな。

■ [Reactチュートリアル](https://ja.reactjs.org/tutorial/tutorial.html)  
■ [基礎から学ぶVue.js - チュートリアル](https://cr-vue.mio3io.com/tutorials/)  
■ [Nuxt.js公式ホームページ](https://ja.nuxtjs.org/)  
■ [Next.js公式ホームページ](https://nextjs.org/)  

## その他参考記事

■ [Ruby on Railsガイド](https://railsguides.jp/)  
■ [Railsドキュメント](https://railsdoc.com/)  
■ [マイクロサービス時代に捧ぐ、Railsでの中規模APIサーバ開発のための技術構成](https://qiita.com/qsona/items/0274c7c1fd27a4a9a545)  
■ [100万行オーバーのモノリシックRailsアプリをマイクロサービス化したクックパッドの手順](https://employment.en-japan.com/engineerhub/entry/2019/09/17/103000)  