---
title: MAツールのメール配信で考慮すべき迷惑メール防止法と送信ドメイン認証
date: "2020-08-02T00:00:00.284Z"
description: "MAツール開発に関わってると、メール絡みの法律やメール配信の仕組みにも気を配る必要がある。その知っておくべき法律の一つに迷惑メール防止法（特定電子メール法）があり、この法律では営利目的の企業や個人事業主が、広告・宣伝のために送信するメールを特定電子メールと規程している。"
pagetype: "category"
perma: "ma-mail"
categoryname: "マーケティング"
categoryslug: "marketing"
tags: ["BtoBマーケティング", "メールビジネス"]
thumbnail: post-52.png
---

![](./post-52.png)

MAツール開発に関わっていると、メール絡みの法律や配信の仕組みにも気を配る必要がある。

その知っておくべき法律の一つに **<span style="color: #ff8c00;">迷惑メール防止法（特定電子メール法）</span>**があり、この法律では営利目的の企業や個人事業主が、広告・宣伝のために送信するメールを **<span style="color: #ff8c00;">特定電子メール</span>** と規程している。

2019年、国内の迷惑メール件数は **1日に7億通を超える** と言われ、全電子メールの約44%を占める。

本法律は、迷惑メールから消費者を守るために制定されているので、特定電子メールでは **オプトイン・オプトアウト・送信者の氏名または名称の明記** が義務付けられている。

<div class="cstmreba"><div class="booklink-box"><div class="booklink-image"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202008022254551036?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F14665971%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" ><img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0501/9784295000501.jpg?_ex=150x150" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202008022254551036?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F14665971%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >実践マーケティングオートメーション</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">永井俊輔/できるシリーズ編集部 インプレス 2017年02月    </div><div class="booklink-link2"><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202008022254551036?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F14665971%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >楽天ブックス</a></div><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4295000507/kanon123-22/" target="_blank" >Amazon</a></div><div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=%E5%AE%9F%E8%B7%B5%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%82%AA%E3%83%BC%E3%83%88%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=kanon123-22" target="_blank" >Kindle</a></div>                              	  	  	  	  	</div></div><div class="booklink-footer"></div></div></div>
<br/>

ちなみに迷惑メールの詳細は、参考文献の迷惑メール白書で理解が深まると思う。

## オプトインとオプトアウト

まず迷惑メール被害から、消費者を守るための施策に **<span style="color: #ff8c00;;">オプトイン</span>** と **<span style="color: #ff8c00;;">オプトアウト</span>** の2つがある。

**オプトイン** は**「事前の同意」**のことで、相手から事前に同意を得なければ、メールを送信出来ない。

ただし名刺などでメールアドレスを通知していた場合、オプトインを取得したとみなされる。

私の関わるMAツールでも、リード登録時にメール配信の希望有無を選択できる。

展示会で名刺を入手するなど、対象者のメールアドレスを知っていれば「希望する」を選択、Unknownユーザーは、フォーム問い合わせ時にオプトインを取得する仕組みとなっている。

**オプトアウト** は**「受信拒否の通知」**のことで、申し出があった場合、配信を中止する仕組みになる。

一般的には、受信したメールの下部に **配信停止フォーム** のURLが記載されており、オプトアウトの仕組みが提供されている（たまに配信停止リンクが無いメルマガも見受けられるけど）

ちなみに2017年に **<span style="color: #ff8c00;">改正個人情報保護法</span>** が施行されるまで、ユーザーの受信承諾が不要だった。

つまりユーザーがオプトアウトを行わない限り、メールを送り続けることが可能だった。

本法律が制定されても、迷惑メール問題はまだ解決してないっぽいようです。

## 送信ドメイン認証

メール配信は、自社のメールアドレス（送信元アドレスが自社ドメイン）から、MAツールのメールサーバを経由して配信が行われる。しかしこの場合、両者のドメインが一致せず、メールアプリによっては迷惑メールと判別され、メールの到達率や開封率が著しく低下する恐れがある。

そのような事態を防ぐため、MAツールでは、メールの送信元が正規のものであると証明する **<span style="color: #ff8c00;">送信ドメイン認証</span>** の仕組みが用意されており、**SPF** と **DKIM** の設定が一般的となっている。

**<span style="color: #ff8c00;">SPF</span>** では、まず送信側メールアドレスのIPアドレスをDNSに登録。受信側では、送信元ドメインを管理するDNSからSPFレコードを取得し、送信元メールサーバのIPアドレスと一致するか確認する。

**<span style="color: #ff8c00;">DKIM</span>** は電子署名で認証を実施。送信側メールサーバの公開鍵をDNSに登録し、送信側メールサーバは自身の秘密鍵で電子署名を付けて送信する。

受信側ではDNSから取得した公開鍵で電子署名を検証し、なりすましや改ざんの有無をチェック。

私が関わるMAツールでも対応されているが、これらに馴染みの無い一般消費者にはハードルが高く、サポートチームの負荷は大きなものになっていた（UIの問題かもしれないが）

ちなみに迷惑メール白書では、SPFとDKIMで検証したドメイン名と、メールソフトで表示される送信元アドレスのドメイン名が一致しているかチェックするDMARKが紹介されている。

日本での普及率は低いが、米国や英国では高い水準で採用されているため、将来必須になるかも。

## 参考文献
■ [迷惑メール白書](https://www.dekyo.or.jp/soudan/aspc/wp.html)  
■ [SPF・DKIMの特徴と違い](https://sendgrid.kke.co.jp/blog/?p=10121)  
■ [迷惑メール対策に必要な「SPF」と「DKIM」とは？](https://baremail.jp/blog/2019/06/07/138/)  
■ [バウンスメールとは？その仕組みと原因、対策について](https://www.onemarketing.jp/lab/lead-nurturing/bounce-mail_171)  
■ [エンベロープ（envelope）From/To とヘッダーのFrom/To](https://www.cuenote.jp/documents/smtp/000204.html)  
■ [メール設定で最初につまずくSMTP・POP・IMAP その意味＆設定方法は？](https://time-space.kddi.com/ict-keywords/kaisetsu/20170824/2081) 