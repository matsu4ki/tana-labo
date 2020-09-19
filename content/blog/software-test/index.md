---
title: WEBシステムの品質を保つために最低限やるべきソフトウェアテストとは
date: "2020-09-15T00:00:00.284Z"
description: "システムの品質を担保するためには、どの観点でどこまでテストすればよいのか!?過度にカバレッジを追い求めても、コストに見合った成果が得られないし、セキュリティやパフォーマンスのような非機能要件は終わりがない。コレだけやれば大丈夫！と言える明確な目安はないが、私は開発者として品質を保つため、次の観点に気を配ってきた。"
pagetype: "category"
categoryname: "システム開発"
categoryslug: "systemdevelop"
tags: ["テスト", "品質", "機能要件"]
thumbnail: software-test-1.png
---

![](./software-test-1.png)

システムの品質を担保するためには、どの観点でどこまでテストすればよいのか!?

過度にカバレッジを追い求めても、コストに見合った成果が得られないし、セキュリティやパフォーマンスのような非機能要件は終わりがない。**コレだけやれば大丈夫！**と言える明確な目安はないが、私は開発者として品質を保つため、次の観点に気を配ってきた。

<div class="blackboard-box">
<p>1. コードレビューやコーディング規約を順守し、可読性の向上に努める.</p>
<p>2. xUnitでステートメントカバレッジやバリデーション周りの単体試験を実施.</p>
<p>3. 第一に境界値テストでバグを解消し、必要に応じてディシジョンテーブルや状態遷移を確認.</p>
<p>4. 一般的な脆弱性対策を行っているか（＝フレームワークのルールに則った作りであるか）</p>
<p>5. ユーザビリティテストでは、ニールセンの10原則の観点から使いやすさを追求.</p>
<p></p>
<div class="chalk1"></div>
<div class="chalk2"></div>
</div>
<br/>

ソフトウェアテストの領域は、工程・品質の観点・実行方法・技法など幅広いが、試験に割り当てられる工数は少ないことが多い。限られた工数の中で品質を保つには、どうしても最低限やるべき観点に絞っていたので、機能要件が中心になっていることは反省すべきかもしれない。

## 静的テスト ＊主にコードレビュー

新人時代にリーダブルコードを読み、大変感銘を受けたことを覚えている。

<div class="cstmreba"><div class="booklink-box"><div class="booklink-image"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202009152242597564?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F11753651%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" ><img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5658/9784873115658.jpg?_ex=150x150" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202009152242597564?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F11753651%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >リーダブルコード</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">ダスティン・ボズウェル/トレバー・フォシェ オライリー・ジャパン 2012年06月    </div><div class="booklink-link2"><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202009152242597564?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F11753651%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >楽天ブックス</a></div><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4873115655/kanon123-22/" target="_blank" >Amazon</a></div><div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=%E3%83%AA%E3%83%BC%E3%83%80%E3%83%96%E3%83%AB%E3%82%B3%E3%83%BC%E3%83%89&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=kanon123-22" target="_blank" >Kindle</a></div>                              	  	  	  	  	</div></div><div class="booklink-footer"></div></div></div>
<br/>

私が携わった開発案件の多くは、コーディング規約と呼べるものがなかったので、本書を定期的に読み返し、その内容に基づいてレビュー指摘をしていた。

最近はJavaScriptのESLintなど、品質を担保するツールが多くあるので適宜利用していくことになる。

■ [ソフトウェアテスト基本テクニック ー 静的テスト](https://gihyo.jp/dev/serial/01/tech_station/0002)  
■ [クックパッド ー コーディング規約](https://github.com/cookpad/styleguide/blob/master/ruby.ja.md)  
■ [PHPコーディング規約まとめ](https://qiita.com/hshimo/items/04be1f432240c58300f4)  

## ホワイトボックステスト

プログラムの論理構造が正しいかを解析するテストで、ホワイトボックスの代表的な手法の **<span style="color: #ff8c00;">制御パステスト法</span>** は **<span style="color: #ff8c00;">カバレッジ率</span>** を計測するために使われている。

私はカバレッジ率を正確に算出した経験がないが、言語毎のxUnitでそれなりに単体試験を実施していた。多分肌感覚で60%くらいは網羅できるよう意識していたと思う。

まず単体試験を書くポイントだが、APIであればステータスコードとレスポンスタイプの確認、条件分岐はステートメントカバレッジ、あとはバリデーション周りを重点的に確認することが挙げられる。

本当はブランチカバレッジが望ましいだろうけど、工数が膨大になるし、ステートメントカバレッジだけでも、単体レベルのバグはある程度消せるので、これは最低限やるべきことだと思う。

またカバレッジ率の参考値は、一般的には **<span style="color: #ff8c00;">60〜90%</span>** と言われ、Googleでは **<span style="color: #ff8c00;">±85%</span>** としている。人の生命が関わる場合は限りなく100%であるべきだが、エンタメ系なら多少低くても大丈夫かも。

■ [CakePHP3.6のコントローラでのPHPUnitの使い方メモ](https://qiita.com/machio77777/items/46dfb91b444d20667528)  
■ [テストカバレッジ100%を追求しても品質は高くならない理由と推奨されるカバレッジの目標値](https://qiita.com/bremen/items/d02eb38e790b93f44728)  
■ [テストコードの方針を考える（何をテストすべきか？どんなテストを書くべきか？）](https://qiita.com/jnchito/items/2a5d3e15761fd413657a)  

## ブラックボックステスト

ソースコードを見ずに様々な入力を行う手法で、最もポピュラーな手法だと思われる。

正直私はやりたくない（もしくは新人にアウトソーシングしたい）が、ホワイトボックスではソフトウェアの仕様誤りや、実装の抜け漏れを防げないため、絶対にやらなければならない。

まずブラックボックステストの代表例には、**<span style="color: #ff8c00;">同値分割法</span>** と **<span style="color: #ff8c00;">境界値分析法</span>** の2つが挙げられ、**<span style="color: #ff8c00;">第一に境界値分析法で境界値付近のバグを解消</span>** すれば良いと思う。同値分割法はあまり見たことがない。

```js
if (a >= 1) {
  // 印刷処理
} else {
  // エラー処理
}
```
<br/>

上のサンプルプログラムの場合、境界値分析法の正しいテストケースは次のとおりになる。

<div class="blackboard-box">
<p>テストケース1：aに1を入力 ＞ 結果：正常な処理がなされること</p>
<p>テストケース2：aに0を入力 ＞ 結果：エラー処理がなされること</p>
<div class="chalk1"></div>
<div class="chalk2"></div>
</div>
<br/>

仕様に誤りがないか、機能の実装漏れが無いかをチェックする必要があるので、確認観点を洗い出し、一つ一つ丁寧に検証していくことになる。システム開発で一番泥臭い作業だ。

## 最低限のセキュリティチェック

非機能要件の代表であるセキュリティテスト。

まずIPAの普及啓蒙資料に掲載されている内容を理解し、ブラウザ上で特殊文字を入力したり、意図しないSQLが実行されないかを確認する。完全に専門外なので、これくらいしかやってない。

正しくフレームワークを使っていれば、サニタイジングやバインド機構を使うはずなので、問題があればコードレビュー時に発見できるかもしれない。

■ [IPA ー 脆弱性対策脆弱性対策](https://www.ipa.go.jp/security/vuln/index.html#section20)

## ユーザビリティテスト

最近はUI/UXの言葉をよく耳にするが、ソフトウェアとして使いやすいかにも厳しい目が向けられる。

専門家ではないので明確な指針はないけど、**<span style="color: #ff8c00;">ニールセンの10原則</span>** は理解し、テスターとして次の★印の観点だけは、重点的にチェックするよう心掛けている。

<div class="blackboard-box">
<p>1. システム状態の視認性を高める <span style="color: #ff69b4;">★</span></p>
<p>2. 実環境に合ったシステムを構築する</p>
<p>3. ユーザーにコントロールの主導権と自由度を与える <span style="color: #ff69b4;">★</span></p>
<p>4. 一貫性を保持し、標準に従う <span style="color: #ff69b4;">★</span></p>
<p>5. エラーの発生を事前に防止する <span style="color: #ff69b4;">★</span></p>
<p>6. 記憶しなくても、見ればわかるようなデザインを行う <span style="color: #ff69b4;">★</span></p>
<p>7. 柔軟性と効率性を持たせる</p>
<p>8. 最小限で美しいデザインを施す</p>
<p>9. ユーザーによるエラー認識、診断、回復をサポートする</p>
<p>10. ヘルプとマニュアルを用意する</p>
<div class="chalk1"></div>
<div class="chalk2"></div>
</div>
<br/>

人間は慣れの動物なので、多少使いづらくても違和感を感じなくなるそうだ。

なるべく初見の人に上の観点でチェックしてもらうのが良いかもしれない。

■ [ソフトウェアテスト基本テクニック ー ユーザビリティテスト](https://gihyo.jp/dev/serial/01/tech_station/0009)  

## ソフトウェアテストを考える上で参考になる本

日常業務でテストのことを深く考える時間は少なかったかもしれないが、こちらの書籍ではブラックボックス、ホワイトボックスなど基本的なことから、非機能要件や自動化など、幅広く説明されていた

<div class="cstmreba"><div class="booklink-box"><div class="booklink-image"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202009141619510777?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12597357%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" ><img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0606/9784798130606.jpg?_ex=150x150" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202009141619510777?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12597357%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >知識ゼロから学ぶソフトウェアテスト改訂版</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">高橋寿一 翔泳社 2013年12月    </div><div class="booklink-link2"><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202009141619510777?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F12597357%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >楽天ブックス</a></div><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4798130605/kanon123-22/" target="_blank" >Amazon</a></div><div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=%E7%9F%A5%E8%AD%98%E3%82%BC%E3%83%AD%E3%81%8B%E3%82%89%E5%AD%A6%E3%81%B6%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%83%86%E3%82%B9%E3%83%88%E6%94%B9%E8%A8%82%E7%89%88&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=kanon123-22" target="_blank" >Kindle</a></div>                              	  	  	  	  	</div></div><div class="booklink-footer"></div></div></div>
<br/>

システム開発に携わって日が浅い場合、まずはブラックボックス観点の境界値テストで、境界値に関わるバグを解消し、ディシジョンテーブルや状態遷移テストの実施を推奨している。

相変わらず単体テストを書いていない現場は多く、ブラックボックス中心だとは思うが、xUnitでの単体試験を義務付ける現場も増えており、開発者はホワイトボックスの知見が必須になると思われる。
