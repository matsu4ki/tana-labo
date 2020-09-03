---
title: AWSでのサーバレスアーキテクチャ入門 Lambdaの仕組みと使い方
date: "2020-02-06T00:00:00.284Z"
description: "昨今ではサーバレス技術の進化が目覚しく、従来のサーバーを持つという当たり前が変わり始めている。そうは言われつつも、2020年までは結構癖のある技術だと言われていたが、クラウド事業者の努力で様々な問題が解決され出し、2020年以降はサーバレス開発が当たり前になるかも。"
pagetype: "category"
perma: "serverless-architecture"
categoryname: "クラウド"
categoryslug: "cloud"
tags: ["AWS", "サーバレス", "初心者"]
thumbnail: post-24.png
---

![](./post-24.png)

**<span style="color: #ff8c00;">サーバレスアーキテクチャ</span>** を使いこなすには、試行錯誤が必要である話をよく聞く。

AWSが提唱する **ベストプラクティス** や、日々追加されるサーバレスアーキテクチャの新機能を見るかぎり、AWSがサーバレスアーキテクチャに力を入れていることが伝わってくる。

実際にAWSで働いている方のTwitter投稿を見ても、今まで抱えていたLambdaの問題点も随分と解消されており、2020年以降は本格的にサーバレスアーキテクチャの需要が増える話もある。

ただ魅力はあっても、簡単な技術ではないため、概要を理解するために次の本を読んでみた。

<div class="cstmreba"><div class="booklink-box"><div class="booklink-image"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202002061507500683?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F15179436%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" rel="noopener noreferrer"><img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/2529/9784295002529.jpg?_ex=160x160" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202002061507500683?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F15179436%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" rel="noopener noreferrer">AWS　Lambda実践ガイド</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow noopener noreferrer" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">大澤文孝 インプレス 2017年10月    </div><div class="booklink-link2"><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202002061507500683?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F15179436%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" rel="noopener noreferrer">楽天ブックス</a></div><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4295002526/kanon123-22/" target="_blank" rel="noopener noreferrer">Amazon</a></div><div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=AWS%E3%80%80Lambda%E5%AE%9F%E8%B7%B5%E3%82%AC%E3%82%A4%E3%83%89&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=kanon123-22" target="_blank" rel="noopener noreferrer">Kindle</a></div>                              	  	  	  	  	</div></div><div class="booklink-footer"></div></div></div>
<br/>

2020年時点では内容も古くなっているので、AWS公式HPが発表している内容を付記してみた。

## 本書のあらすじ

**第1章** では、従来のシステム開発(EC2)との違いとLambda利用のメリット。

**第2章** では、Lambda関数をどのような書式で作成し、登録するかをハンズオン形式で解説。

**第3章** では、Lambdaの内部的な仕組みと、開発に欠かせない基礎知識。

**第4章 〜 第6章** では、Lambda開発のユースケース(S3 / API Gatewat / DynamoDB / SES / SQS / SNSとの組み合わせ)が幾つか紹介（今回はほぼ割愛）

## Lambdaで実現するサーバレスアーキテクチャ

AWSでアプリケーションを構築する場合、EC2上でプログラムを動かすことが多い。

ただし運用には手間やコストが必要で、性能上の問題（最初に選択したインスタンスタイプは一時停止しないと変更できない）も併せて考慮が必要となる。

そのような手間を軽減するのが **<span style="color: #ff8c00;">AWS Lambda</span>** で、実行時間に対して課金されるため、コスト削減効果を期待できる。また高負荷になった時には、自動的にスケーリングされる。

ただ **<span style="color: #ff8c00;">2つの制限（①.ステートレス / ②.最大稼働時間5分）</span>** があるため、全てをサーバレスにするではなく、限定して利用するのが一般的**<span style="color: #ff8c00;">（2018年には15分に変更され、複雑な処理も可能になった）</span>**

Webサイトの管理機能に、画像をサーバー上に格納すると、サムネイル画像を自動生成する機能があるが、LambdaならS3アップロード時の自動生成処理を簡単に作れる。

![](./post-24-1.png)

またLambdaの呼び出しには、ファイルがS3に置かれたタイミングや、API Gatewayと組み合わせ、Web API (JavaScriptのAjax通信)を呼び出したり、CloudWatchでスケジューリングなど、サービス間の接着剤的な役割を担っている。

## Lambda関数の作り方

**第2章** では、簡単なLambda関数を作って実行するまでのハンズオン。

PythonではLambda関数を次のように記述**（eventにリクエスト、contextに実行環境の情報）**

```python
# def 関数名 (event, context):
#  ・・関数の処理・・
#   return 戻り値
 
def myfunc_handler (event, context):
  return 戻り値
```
<br/>

ちなみに本書では、Python3系（Python 3.6）で解説されている。

## Lambdaの仕組み

**第3章** では、Lamdbaの仕組みを知ることで、パフォーマンス低下を防いだり、同時実行時に期待した動きにならなかった際の対応方法を理解していく。

まずLambda関数は **<span style="color: #ff8c00;">Lambdaコンテナ（Linuxコンテナ環境）</span>**で動作されるため、初回起動時に多少時間がかかり、2回目以降は一度生成したコンテナを再利用する仕組みが採用されている。

またLambdaはインターネットと接続可能なパブリック環境にあり、デフォルトではプライベートなネットワークであるVPCと接続ができない。

これを実現するため、Lambda関数のVPCオプションを設定し、VPCの任意のサブネットに配置する構成とする必要がある（主にVPC内のRDSになる）

**<span style="color: #ff8c00;">VPCアクセスのレイテンシーコストの改善は、2019年9月以降に順次適用予定で、今後悩まされることも無くなり、RDSに対する最大同時接続数の問題も、RDS Proxyで改善されると思われる。</span>**

■ [[発表] Lambda 関数が VPC 環境で改善されます](https://aws.amazon.com/jp/blogs/news/announcing-improved-vpc-networking-for-aws-lambda-functions/)  
■ [Amazon RDS プロキシのご紹介 (プレビュー)](https://aws.amazon.com/jp/about-aws/whats-new/2019/12/amazon-rds-proxy-available-in-preview/)  

さらにLambda関数呼び出しには2種類があり、利用頻度の高いプッシュモデルは、キューに溜まっているイベントを複数回処理される可能性もある。何かしらの理由で実行時エラーが発生した場合、2回の試行（初回を含めれば、最大3回の実行可能性）が発生する。

<span class="mark">POINT</span>**ここでの失敗とは、Lambda関数呼び出しの失敗だけでなく、処理中の例外が発生した場合も含まれ、また正常実行されても複数回実行されるケースも考えられるので、冪等性を考慮した作り（例えば前回実行したかのフラグを持たせ、フラグ判定を入れるとか）が求められる。**

## API Gateway + Lambda + DynamoDB + S3

**第5章** では主要なサービスとLambdaを活用した事例を紹介されている。

S3にホスティングされているWebサイトにて、ユーザーが入力した値をAPI Gatewayで経由させ、Lambda関数でDynamoDBに登録と、著名付きURLの発行 + SESでのメール送信を実現している。

![](./post-24-2.png)

**API Gateway** は一種のプロトコル変換器であり、HTTPSプロトコルで送られてきたリクエスト値を受け取り、Lambda関数に渡し、戻り値をHTTPSプロトコルに変換して返却しり。

![](./post-24-3.png)

API Gatewayは重要サービスなので必須知識になっていると思う（もうなってる？）

以前まではDynamoDBとの連携が必須に思われていたが、様々な問題が解消され始めているので、2020年以降はRDS連携でも十分に使えるかもしれない。
