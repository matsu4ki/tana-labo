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

MAツールでは <span style="color: crimson; font-weight: bold;">商談創出</span> のため、集めたリードに色んな施策が行われる。特にメールによるアプローチは一般的なもので、携わっているMAツールのメールでは <span style="color: crimson; font-weight: bold;">マルチパート対応</span> で提供されていた。

まずメールの仕様について、ヘッダーの **Content-Type** が **text/plain** であれば **テキストメール** と判別され、**text/html** であれば **HTMLメール** として扱われる。更に **multipart/alternative** でマルチパートの扱いになるが、わざわざ **HTML + テキスト** の2種類を作ることに疑問に感じていた。

この件を業界関係者に聞くと、**toC** ではスマホによるHTMLメールの利用が主流だが、一般企業では未だOutlook採用率が高く、テキストメールは無視できず、**toB向けのMAツール** では <span style="color: crimson; font-weight: bold;">マルチパート対応</span> が一般的らしい（そもそもメールは、テキストメールが基本で、両方の指定が望ましいようだが...）

HTMLメールの方が表現力に優れているので、MAツールでも重要な役割を担っているが、MAツールでHTMLメールが重要視される理由には、配信メールの <span style="color: crimson; font-weight: bold;">開封率</span> を計測可能な点にある。

その測定方法は、メール中の画像が読み込まれたか、あとはメール中のリンクが押下されたかどうかで判定可能（前者が多いイメージで、私が携わるMAでも前者で計測されていた）

一般の方はこんな事実を殆ど知らないと思うが、知らぬ間に色んな行動履歴が収集されていることを知るとゾッとする。一応個人特定が可能なものは個人情報（メアド含む）になるため、メールアドレスに紐づく行動履歴（開封率）を取得する際、本人許可をとっていれば大丈夫らしいけど...