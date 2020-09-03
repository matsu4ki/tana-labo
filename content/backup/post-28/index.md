---
title: 個人情報保護法改正で見直されるCookie規制とWebトラッキングの在り方
date: "2020-03-24T00:00:00.284Z"
description: "Cookie自体は個人情報に当たらないが、SNS上にはユーザーアカウントが存在しているので、閲覧履歴がサードパーティCookieでSNS経由されると、得られた閲覧情報から個人に紐付け出来る事がある。"
pagetype: "category"
perma: "revision-of-personal-information-protection-law"
categoryname: "マーケティング"
categoryslug: "marketing"
tags: ["BtoBマーケティング", "個人情報"]
thumbnail: post-28.png
---

![](./post-28.png)

少し前にリクルートキャリアのサービスが、個人を特定できる情報を収集していると話題になった。

プライバシーポリシーに不備があり、利用者から同意を得ていなかったことが問題の発端になる。

厳格化される個人情報の扱いについて、Web開発では個人情報をCookieで扱うケースが多い。

そんな昨今、ChromeでサードパーティCookieの廃止が決まったのは衝撃だった。

■ **[Google Chromium blog（英語）](https://blog.chromium.org/2020/01/building-more-private-web-path-towards.html)**  

日本でも **<span style="color: #ff8c00;">個人情報保護法</span>** が制定されているが、GDPRと比較すればグレーゾーンが多い。

最近システム開発の現場でも、この界隈の話を聞くので、個人的に調べてみた。

## 個人情報保護法改正で示されたCookie規制

まず個人情報保護法では **<span style="color: #ff8c00;">個人情報</span>** を次のように定義している。

> 個人情報とは、生存する個人に関する情報であって、氏名や生年月日等により特定の個人を識別することができるものをいいます。
>
> 個人情報は、他情報と容易に照合でき、それにより特定の個人を識別することができることとなるものも含みます。「生年月日と氏名の組合せ」「顔写真」も含む。

Cookieは個人情報に当たらないが、SNSにはユーザーアカウントが存在しており、SNSをサードパーティCookieで経由すると、閲覧情報から個人に紐付けできるケースがあるらしい。

また **<span style="color: #ff8c00;">個人情報保護法 いわゆる3年ごとの見直し 制度改正大綱（骨子）</span>** では、今後このような情報の第三者提供を制限することが述べられており、利用者に対して、利用目的を情報提供すること、SNS等への情報提供を拒否する権利の保証、個人情報保護委員会に届け出等が義務付けられる。

■ **[個人情報保護法の改正で示されたCookie規制の方向性とは？ IIJが解説](https://internet.watch.impress.co.jp/docs/news/1225265.html)**

利用者には透明性が担保されることになる。

## Cookie用途別の影響度

次に **[こちらの記事](https://www.principle-c.com/column/marketing/google-chrome-third-party-cookie/#__1690877137.1585022027)** でCookieの用途別に影響度が説明されていた。

トラッキングへの影響は限定的と述べられているが、携わっているシステムでサードパーティCookieを活用したトラッキング処理が行われており、Chrome80対応に影響を受けてしまった。

発行されたトラッキングコードを複数サイトで管理するケースで、今までは同一ユーザーとしてCookie情報を維持できたが、今回の対応で、SameSite=NoneとSecure属性を指定し、Cookieをクロスサイトアクセスの対象だと示す改修を行った（いずれ一切できなくなる）

■ **[新しいCookie設定 SameSite=None; Secure の準備を始めましょう](https://developers-jp.googleblog.com/2019/11/cookie-samesitenone-secure.html)**  

Chrome80以降では「SameSite=None; Secure」の設定で外部アクセスが可能となる。

## サードパーティCookie廃止の背景

また **[こちらの記事](https://blog.jxck.io/entries/2020-02-25/end-of-idyllic-cookie.html)** では、Cookieのユースケースや、サードパーティCookieが制限される背景、Privacy Sandboxの概念など詳細に説明されており、理解が深まった。

本記事によれば、現状のCookieには様々なユースケース（セッション維持 / Credential / SSO / 広告 / Analytics）があり、問題の本質はCookieの仕様ではなく、ユースケース側であると言われている。

今後の施策で考えられるのは、企業がユーザーデータにアクセスする際に、ユーザーの同意を得るための施策が標準化されるもの。もう一つは **<span style="color: #ff8c00;">Privacy Sandbox</span>** のアイディアが考えられる。

今後はAPIはプライバシーに配慮し、利用者の許諾を得る権限モデル、利用者がOpt-In/Outを選択できるなど、事業者も新たなエコシステム構築を迫られることになる。

## 参考文献
■ [個人情報保護委員会](https://www.ppc.go.jp/)  
■ [個人情報保護法ハンドブック](https://www.ppc.go.jp/files/pdf/kojinjouhou_handbook.pdf)  
■ [個人情報保護委、“リクナビの内定辞退率”利用企業に行政指導　トヨタ、京セラなど35社](https://www.itmedia.co.jp/news/articles/1912/04/news155.html)  
■ [サードパーティクッキーって何だっけ？ 今さら聞けないHTTP Cookieのキホン](https://webtan.impress.co.jp/e/2017/10/03/27016)  
■ [Googleの「 プライバシーサンドボックス 」とは？：Cookieの代わりとされる5つのAPI](https://digiday.jp/platforms/wtf-googles-privacy-sandbox/)  
■ [3rd-party cookieのない2年後のアドテックに向けた動きまとめ　各陣営紹介編](https://note.com/martech/n/n0943251e38f4)  
■ [GoogleがサードパーティーCookie廃止に向けて開発者向けツールのテストを開始](https://gigazine.net/news/20200803-google-third-party-cookies/)  
■ [オラクルとセールスフォースのCookie追跡がGDPR違反の集団訴訟に発展](https://jp.techcrunch.com/2020/08/17/2020-08-14-oracle-and-salesforce-hit-with-gdpr-class-action-lawsuits-over-cookie-tracking-consent/)  
