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

MAツールでは <span style="color: crimson; font-weight: bold;">商談創出</span> のため、集めたリードに色んな施策が行われる。

特にメールによるアプローチは一般的で、多くのMAツールで <span style="color: crimson; font-weight: bold;">マルチパート対応</span> がされている。

メールの仕様について、**Content-Type** に**「multipart/alternative」**を指定すれば、マルチパート対応になるが、わざわざ **HTML + テキスト** の2種類を作ることに疑問に感じていた。

この件を業界関係者に聞くと、**toC** ではスマホによるHTMLメールの利用が主流となっているが、一般企業では未だOutlook採用率が高く、テキストメールは無視できないらしい（そもそもメールは、テキストメールが基本で、両方の指定が望ましいようだけど）

HTMLメールの方が表現力に優れているので、MAツールでも重要な役割を担っているが、MAツールでHTMLメールが重要視される理由には、他にも配信メールの <span style="color: crimson; font-weight: bold;">開封率</span> を計測可能な点にある。

その測定方法は、メール中の画像が読み込まれたか、あとはメール中のリンクが押下されたかどうかで判定可能（前者が多いイメージで、私が携わるMAでも前者で計測されていた）

一般の方はこんな事実を知らないと思うが、色んな行動履歴が収集されていることを知るとコワイ。

個人を特定可能な情報は、個人情報（メアド含む）に該当するので、メールアドレスに紐づく行動履歴（開封率）を取得する際、本人許可が必要になる（許可を得ていれば、一応問題はないらしい）