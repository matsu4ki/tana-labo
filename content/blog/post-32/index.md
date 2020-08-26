---
title: MAツールにおけるトラッキングの仕組みと個人とCookieを紐付ける方法
date: "2020-04-05T00:00:00.284Z"
description: "BtoBマーケティングの目的である商談の創出では、まず展示会等で集めた名刺情報をMAツールでデジタル化。その後にお礼メールやフォーム登録で個人とCookieを紐づけてトラッキング、ナーチャリング活動後に営業に引き渡し、SFAやCRMで案件管理するのが一般的な流れとなる。"
pagetype: "category"
perma: "ma"
categoryname: "マーケティング"
categoryslug: "marketing"
tags: ["BtoBマーケティング", "MAツール"]
thumbnail: post-32.png
---

![](./post-32.png)

Nexalの上島千鶴氏は、ナーチャリングの概念を広めた第一人者として紹介される方。

また複数の外資系IT企業に勤めた経歴から、リードビジネスは勿論、MAツールのシステム的な知見もあり、マーケティングに関する本も幾つか出版されている。

今回はこちらの本について、MAツールの技術周りを集中的に一読してみた。

<div class="cstmreba"><div class="booklink-box"><div class="booklink-image"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202004041645517401?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F14291219%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" ><img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7615/9784822237615.jpg?_ex=160x160" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202004041645517401?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F14291219%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >マーケティングのKPI</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">上島千鶴 日経BP 2016年06月20日    </div><div class="booklink-link2"><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202004041645517401?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F14291219%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >楽天ブックス</a></div><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4822237613/kanon123-22/" target="_blank" >Amazon</a></div><div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AEKPI&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=kanon123-22" target="_blank" >Kindle</a></div>                              	  	  	  	  	</div></div><div class="booklink-footer"></div></div></div>
<br/>

まずデマンドジェネレーション（マーケターが案件を創出し、営業へ引き渡すまで）を円滑に行うため、何より大切なリードの管理だが、上島さんはリードを次のように定義している。

<span class="mark">POINT</span>**成約に繋がる、または取引成立の可能性が少しでも見込める個客(BtoBは組織内個人) ≒ 個客**

BtoBマーケティングで商談を創出するためには、まず展示会等で集めた名刺情報をMAツールでデジタル化し、お礼メールやフォーム登録により、個人とCookieを紐づけてトラッキングしていく。

更にナーチャリング活動後は営業へ連携し、SFAやCRMで案件管理するのが一般的になる。

<span style="color: darkgray; font-weight: bold;">（[実態](/post-31/)としては、マーケターと営業には大きな溝が生まれがちで、マーケターが案件を創出しても、営業が追わないことが多い。また営業はSFAに案件を登録するだけでも、責任者から結果を追求されるので、導入してもSFAが活用されないという話は、結構あるあるらしい）</span>

![](./post-32-1.png)

まず疑問に思ったことは、どのようにリードを管理しているのか。

一般的にWebサイトのヘッダー内に、JavaScriptの解析タグを貼り付け、Cookieを活用したトラッキングが行われている（昨今は個人情報の観点から問題視されているけど）

![](./post-32-2.png)

ちなみに解析タグを貼り付けるだけでも、次のような情報が取得できる。

<div class="blackboard-box">
<p>1. どの端末でアクセスしたか</p>
<p>2. どの企業から閲覧されているか</p>
<p>3. いつ、どのページを、何秒見たか（閲覧時刻/滞在時間/直帰率）</p>
<p>4. 何人来たか</p>
<p>5. どこ経由で自社サイトに来たか.</p>
<p>6. 検索エンジンで入力されたキーワード（検索エンジンに未ログインの場合のみ）</p>
<p>7. サイト内検索ワード.</p>
<div class="chalk1"></div>
<div class="chalk2"></div>
</div>
<br>

私が関わっているMAツールでは、ページの読了率やメール開封率も解析されていた。

サイトを訪問するだけではUnknowユーザーだが、メールアドレスがあれば、行動を追跡できる。

そのため個人とCookieを紐づける必要があり、2種類（フォーム経由とメール経由）が考えられる。

第一の方法は **<span style="color: #ff8c00;">フォームCV</span>** で、サイトに設置されているホワイトペーパー等をダウンロードする際、問い合わせフォームに必要情報（メールアドレス等）が入力されると紐付けられる。

第二の方法は **<span style="color: #ff8c00;">リンク押下</span>** で、サンクスメール等のメール中にあるリンクURLを踏んでもらうことでCookieと紐付けできる（クエリストリングが埋め込まれている）

しかし著書自身も、これが合法なやり方は判断できず、また利用者もこのような使われ方は想定していないので、オプトアウトやCookie削除方法の説明など、最低限のフォローが必要と言われていた。
