---
title: MAのメールマーケティング HTML+テキストを同時送信するマルチパート
date: "2020-07-17T00:00:00.284Z"
description: ""
pagetype: "category"
perma: "mail-multipart"
categoryname: "マーケティング"
categoryslug: "marketing"
tags: ["BtoBマーケティング", "メールビジネス"]
thumbnail: post-50.png
---

![](./post-50.png)

MAツールでは <span style="color: crimson; font-weight: bold;">商談創出</span> のため、集めたリードに対し、色んな施策が行われるが、中でもメールによるアプローチは一般的なもので、携わっているMAも <span style="color: crimson; font-weight: bold;">マルチパート</span> で対応されている。

マルチパートの仕様は **[こちら](https://sendgrid.kke.co.jp/blog/?p=8262)** でも説明されているが、メールの構造上、ヘッダー部の **Content-Type** が **text/plain** だと **テキストメール** と判別され、**text/html** であれば **HTMLメール** として扱われる。

マルチパートはContent-Typeに **multipart/alternative** を指定することで、両方利用が可能となるが、MAでメールを書く際、何故わざわざHTML + テキストの2種類を作るのか疑問に感じていた。

この件を業界関係者に聞いてみると、toCではスマホ利用が一般的なので、HTMLメールが主流となっているが、一般企業ではOutlook採用率が高く、テキストメールの利用者が多いので、toB向けのMAでは <span style="color: crimson; font-weight: bold;">マルチパート対応</span> が当たり前になっていると知った。

とは言え、テキストメールを確認出来るメーラーは数少なく、Gmailでは標準の受信設定がHTMLで変更不可（送信メールは変更可能）で、Macユーザーは確認自体が難しい（Thunderbirdで見れた）

そもそもメールの世界では、あくまでテキストメールが基本であり、HTMLメールは表現力を増強する補助で、両方の指定が望ましいとされるが、MAのようなマーケティングツールで、HTMLメールが重要視される理由の一つに、配信されたメールの <span style="color: crimson; font-weight: bold;">開封率</span> を計測可能な点にある。

その測定方法は、メール中の画像が読み込まれたか、あとはメール中のリンクが押下されたかどうかで判定可能となっている（前者が多いイメージで、私が携わるMAでも前者となっている）

多分一般の方は、こんな事実を殆ど知らないと思うけど、きっと自分の知らないところで、色んな行動履歴が収集されてるんだろうなぁ（少なくとも自分は知らなかった）

個人特定が可能なものは個人情報になるので、メールアドレスも個人情報だが、一応各事業者はメールアドレスに紐づく行動履歴（開封率）を取得する際、本人許可をとっていればセーフとなるらしい。

## 参考文献
■ [SPF・DKIMの特徴と違い](https://sendgrid.kke.co.jp/blog/?p=10121)  
■ [迷惑メール対策に必要な「SPF」と「DKIM」とは？](https://baremail.jp/blog/2019/06/07/138/)  
■ [バウンスメールとは？その仕組みと原因、対策について](https://www.onemarketing.jp/lab/lead-nurturing/bounce-mail_171)  
■ [エンベロープ（envelope）From/To とヘッダーのFrom/To](https://www.cuenote.jp/documents/smtp/000204.html)  
■ [メール設定で最初につまずくSMTP・POP・IMAP その意味＆設定方法は？](https://time-space.kddi.com/ict-keywords/kaisetsu/20170824/2081)  