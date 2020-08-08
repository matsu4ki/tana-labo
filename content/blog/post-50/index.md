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

MAツールでは <span style="color: crimson; font-weight: bold;">商談創出</span> のため、集めたリードに対し、色んな施策が行われるが、中でもメールによるアプローチは一般的なもので、携わっているMAツールでも <span style="color: crimson; font-weight: bold;">マルチパート対応</span> で提供されている。

マルチパートの仕様は **[こちら](https://sendgrid.kke.co.jp/blog/?p=8262)** でも説明されているが、メールの構造上、ヘッダー部の **Content-Type** が **text/plain** だと **テキストメール** と判別され、**text/html** であれば **HTMLメール** として扱われる。

マルチパートはContent-Typeに **multipart/alternative** を指定することで、両方利用が可能となるが、MAでメールを書く際、何故わざわざHTML + テキストの2種類を作るのか疑問に感じていた。

この件を業界関係者に聞くと、toCではスマホでのHTMLメールが主流となっているが、一般企業ではOutlook採用率が高く、テキストメールは無視出来ない。なのでtoB向けのMAツールでは <span style="color: crimson; font-weight: bold;">マルチパート対応</span> されていると。ただ実際はテキストメールを書かず、HTMLメールだけで済ませる企業は多い（そもそもメールの世界では、あくまでテキストメールが基本であり、両方の指定が望ましいけど）

またMAツールでHTMLメールが重要視される理由に、配信メールの <span style="color: crimson; font-weight: bold;">開封率</span> を計測可能な点にある。

その測定方法は、メール中の画像が読み込まれたか、あとはメール中のリンクが押下されたかどうかで判定可能（前者が多いイメージで、私が携わるMAでも前者となっている）

多分一般の方は、こんな事実を殆ど知らないと思うけど、自身の知らぬ間に色んな行動履歴が収集されてるんだろうね。一応個人特定が可能なものは個人情報（メアド含む）になるので、メールアドレスに紐づく行動履歴（開封率）を取得する際、本人許可をとっていれば、一応セーフになるらしい。