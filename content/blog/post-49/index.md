---
title: UXを実現させるWebサイトの振る舞いと顧客に寄り添ったUIのサンプル例
date: "2020-07-11T00:00:00.284Z"
description: ""
pagetype: "category"
perma: "ux-web-example"
categoryname: "ビジネス"
categoryslug: "business"
tags: ["UX", "UI"]
thumbnail: post-49.png
---

![](./post-49.png)

**[前回記事](/post-48/)** の事例以外にも、以下書籍では色んな企業サイトを例に、Webサイトの振る舞いについて説明しており、今まで思いつきで対応していたUIを考え直すキッカケになった。

<div class="cstmreba"><div class="booklink-box"><div class="booklink-image"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202007092105376388?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F14584960%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" ><img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9067/9784839959067.jpg?_ex=150x150" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202007092105376388?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F14584960%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >UX×Biz　Book</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">明海司/井登友一 マイナビ出版 2016年12月    </div><div class="booklink-link2"><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202007092105376388?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F14584960%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >楽天ブックス</a></div><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4839959064/kanon123-22/" target="_blank" >Amazon</a></div><div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=UX%C3%97Biz%E3%80%80Book&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=kanon123-22" target="_blank" >Kindle</a></div>                              	  	  	  	  	</div></div><div class="booklink-footer"></div></div></div>
<br/>

例えば <span style="color: crimson; font-weight: bold;">サイト内検索</span> では、製品カテゴリを入力すると、型番まで連動して表示されるサジェスト機能を提供。これによって、詳細を細かに記憶していないユーザーも、目的のページへ素早く辿り着ける。

**「目的の情報が探しやすく・見つけやすい」** という体験をUIで実現する方法は、過去私が携わったシステム開発の現場でも多く見受けられたが、本書では他にも色んな事例が紹介されている。

## 複数の検索軸を提供

検索軸について、従来は「製品情報」のメニュー下で「製品大カテゴリ → 製品中カテゴリ → 製品小カテゴリ」のようにドリルダウンさせ、目的の情報を見つけるルートは1つしかないサイトが多かった。

しかし数年前から、グローバルナビゲーション上に **アプリケーション（ガイド）** を表示させ、<span style="color: crimson; font-weight: bold;">「携帯電話用 / 車載用 / 医療機器用」と用途別に "複数の探すルート" を用意</span> する。

ナビゲーションに慣れ親しむ人からすれば、ナビゲーションの無いWebサイトは不便だと感じ、サイトを利用しなくなる可能性は十分考えられるため、必須施策の一つに思える。

また目的の情報を見つけやすくする施策に <span style="color: crimson; font-weight: bold;">事例紹介</span> があり、これは課題解決の方法を具体的に理解でき自分事化しやすい。購買検討に大きな影響力を発揮するコンテンツだと言われている。

そのため単に事例を紹介するのではなく<span style="color: crimson; font-weight: bold;">「テーマから探す / 業界・職種から探す / 工程・作業から探す / 製品から探す」</span>と複数の検索軸を提供すれば、より利便性を向上させる施策の一つとなると紹介。

世の中の企業HPを確認してみると、大体が上のように対応されている印象。

## 製品詳細ページとお問い合わせのふるまい

製品詳細ページとお問い合わせについても、典型的な良い事例が紹介されていた。

例えば製品詳細ページから「ご相談 / 見積もり」ボタンを押下しページ遷移する際、<span style="color: crimson; font-weight: bold;">詳細ページの「商品名」が引き継がれる</span> ことで、ユーザーは**「何に問い合わせをしようとしていたか？ 何の商品名だっただろう？」**と、再度詳細ページに戻る必要がなくなり、ストレスなく快適なUXを実現出来る。

また各詳細ページで、<span style="color: crimson; font-weight: bold;">製品詳細情報のみを印刷出来る</span> ようにすれば、稟議書や製品比較文書に添付する際、そのまま添付出来るので、ユーザーの利便性はより向上。

営業支援機能が期待されるお問い合わせページでは、<span style="color: crimson; font-weight: bold;">旧来の単に「お問い合わせ」ボタンを提供するのではなく「お問い合わせ / 価格・見積依頼 / 無料テスト機貸出 / 修理・代替機即納」と目的別に用意</span> することで、ユーザーのフォーム文章作成の手間を省く効果が見込める。

この施策によって「価格・見積依頼 / 無料テスト機貸出」のような引き合いの強いリードには、営業部門に直接対応し「修理・代替機即納」はサポート部門に連絡が行くような体制を取ることも可能。

## トップページ

最後に個人的に一番悩むトップページについて、限られたスペースで何を表示させるかは重要な話。

本書では <span style="color: crimson; font-weight: bold;">メガドロップダウンナビゲーション</span> が紹介されており、これはページ遷移せずとも、第2階層や第3階層の情報が表示されるため、ユーザーは目的の情報に辿り着きやすいと思われる。

また最後に **ユーザーが訪問目的を達成しやすいWebサイトの要件** がまとめられていた。

<div class="blackboard-box">
<p>・訪問者が必要としている情報がある.</p>
<p>・その情報は見つけやすい（分かりやすい / 使いやすいUI）</p>
<p>・その情報は分かりやすい（分かりやすい言葉遣い / 色使い / 表現）</p>
<p>・その情報が役に立つ（課題解決に有効）</p>
<p>・その会社に決める理由がある（競合他社との差別化 / 優位性）</p>
<p>・そのWebサイトは問題なく操作でき、閲覧できる（標準技術で構築されている）</p>
<div class="chalk1"></div>
<div class="chalk2"></div>
</div>
<br/>

なんとなくのUI設計から、本ブログも上記観点で見直しが必要だと痛感した。