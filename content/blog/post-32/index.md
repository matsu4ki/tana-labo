---
title: MAツールにおけるトラッキングの仕組みと個人とCookieを紐付ける方法
date: "2020-04-05T00:00:00.284Z"
description: "BtoBマーケティングの目的である商談の創出では、まず展示会等で集めた名刺情報をMAツールでデジタル化。その後にお礼メールやフォーム登録で個人とCookieを紐づけてトラッキング、ナーチャリング活動後に営業に引き渡し、SFAやCRMで案件管理するのが一般的な流れとなる。"
pagetype: "category"
perma: "ma"
categoryname: "ビジネス"
categoryslug: "business"
tags: ["BtoBマーケティング", "MA"]
thumbnail: post-32.png
---

![](./post-32.png)

以前取引先のお客様に、BtoBマーケティングの業務理解を深めるにはどうすれば良いか尋ねた際、シンフォニーマーケティングの庭山さんと、Nexalの上島千鶴さんのお二方を薦められた。

上島さんはナーチャリングの概念を広めた第一人者と紹介されることが多いが、複数の外資系IT企業に勤めた経歴から、リードビジネスは勿論、MAツールのシステム的な知見も著書で解説されている。

本書では主にマーケティングにおけるKPIを解説されているが、MAツールの技術周りを集中的に一読。

<div class="cstmreba"><div class="booklink-box"><div class="booklink-image"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202004041645517401?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F14291219%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" ><img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7615/9784822237615.jpg?_ex=160x160" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202004041645517401?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F14291219%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >マーケティングのKPI</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">上島千鶴 日経BP 2016年06月20日    </div><div class="booklink-link2"><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202004041645517401?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F14291219%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >楽天ブックス</a></div><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4822237613/kanon123-22/" target="_blank" >Amazon</a></div><div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AEKPI&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=kanon123-22" target="_blank" >Kindle</a></div>                              	  	  	  	  	</div></div><div class="booklink-footer"></div></div></div>

まずマーケターが案件を創出し、営業へ引き渡すまでのデマンドジェネレーションを円滑に行うためには、何よりリードの管理が大切になるが、上島さんは以下のようにリードを定義されている。

<span class="mark">POINT</span>**制約に繋がる、または取引成立の可能性が少しでも見込める個客(BtoBは組織内個人) ≒ 個客**

BtoBマーケティングの目的である<span style="color: crimson; font-weight: bold;">商談の創出</span>では、まず展示会等で集めた名刺情報をMAツールでデジタル化。その後にお礼メールやフォーム登録で個人とCookieを紐づけてトラッキング、ナーチャリング活動後に営業に引き渡し、SFAやCRMで案件管理するのが一般的な流れとなる。

![](./post-32-1.png)

<span style="color: darkgray; font-weight: bold;">（実態としては、マーケターと営業の間には大きな溝が生まれがちで、マーケターがMAツールで案件創出しても営業が追わなかったり、営業がSFAに案件を登録するだけでも、責任者から結果を追求されるので、導入してもSFAが活用されないという話は、結構あるあるらしいんだけど）</span>

まずリードを管理するシステム側の仕組みはどうなっているのか？

一般的には、WebサイトのヘッダーにJavaScriptの解析タグを貼り付け、Cookieを活用したトラッキングが行われている(昨今は色々問題視されているけど)

![](./post-32-2.png)

解析タグを貼り付けるだけでも色んな情報が分かる。

<div class="blackboard-box">
<p>①. どの端末でアクセスしたか</p>
<p>②. どの企業から閲覧されているか</p>
<p>③. いつ、どのページを、何秒見たか（閲覧時刻/滞在時間/直帰率）</p>
<p>④. 何人来たか</p>
<p>⑤. どこ経由で自社サイトに来たか.</p>
<p>⑥. 検索エンジンで入力されたキーワード（検索エンジンに未ログインの場合のみ）</p>
<p>⑦. サイト内検索ワード.</p>
<div class="chalk1"></div>
<div class="chalk2"></div>
</div>

自分が関わっているMAでは、上記以外にもページの読了率も解析していた。

ただサイト訪問するだけではUnknowユーザーだが、個人のメールアドレスと行動履歴を追跡するためにCookieを紐づける方法には、以下の2種類しかない。

<div class="blackboard-box">
<p>①. フォーム経由で個人のメールアドレスと使用ブラウザを紐付ける.</p>
<p>②. メール経由で個人のメールアドレスと仕様ブラウザを紐付ける.</p>
<div class="chalk1"></div>
<div class="chalk2"></div>
</div>

フォーム経由は例えば、サイトに設置されているホワイトペーパーをダウンロードする際、必要情報(メールアドレス等)を入力することで、紐付ける事が可能(自社サイトのポリシー欄に記載する必要がある)

メールの場合は、メール中のリンクURLを踏んでもらうことでCookieと紐付ける。

しかし上島さん自身も、正直合法なやり方なのかは判断出来ず、利用者側はこんな使われ方は多分想定していないので、オプトアウトやCookieの削除方法などを説明するなどフォローが求められるようだ。
