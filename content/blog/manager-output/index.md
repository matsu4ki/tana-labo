---
title: マネージャーの成果物とは何か!? プロジェクトリーダー業務で考えたこと
date: "2020-11-20T00:00:00.284Z"
description: "30代を境に私のポジションは大きく変わった。システム開発の現場では、自身でコードを書く機会が減り、顧客折衝やチームマネジメントの割合が増えたのだが、マネジメント業務を深く考える時間は殆ど無かった気がしている。マネジメントって何をやるのか!? マネージャーのアウトプットとは何だろうか!?"
pagetype: "category"
categoryname: "マネジメント"
categoryslug: "management"
tags: ["アウトプット", "品質"]
thumbnail: manager-output-1.png
---

![](./manager-output-1.png)

30代を境に仕事における自分のポジションは大きく変わった。

システム開発の現場では（良い意味で）コードを書く機会が減り、顧客折衝やチームマネジメントの割合が増えたのだが、マネジメント業務について、深く考える時間はほとんど無かった気がする。

**そもそもマネージャーのアウトプットって何だろうか!?**

次の本には上の疑問を解消してくれる数々のヒントが紹介されていた。

<div class="cstmreba"><div class="booklink-box"><div class="booklink-image"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202011092231158029?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F14598584%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" ><img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5015/9784822255015.jpg?_ex=150x150" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202011092231158029?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F14598584%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >HIGH OUTPUT MANAGEMENT 人を育て、成果を最大にするマネジメント</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">アンドリュー・S・グローブ/小林 薫 日経BP 2017年01月12日頃    </div><div class="booklink-link2"><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202011092231158029?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F14598584%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >楽天ブックス</a></div><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4822255018/kanon123-22/" target="_blank" >Amazon</a></div><div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=HIGH%20OUTPUT%20MANAGEMENT%20%E4%BA%BA%E3%82%92%E8%82%B2%E3%81%A6%E3%80%81%E6%88%90%E6%9E%9C%E3%82%92%E6%9C%80%E5%A4%A7%E3%81%AB%E3%81%99%E3%82%8B%E3%83%9E%E3%83%8D%E3%82%B8%E3%83%A1%E3%83%B3%E3%83%88&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=kanon123-22" target="_blank" >Kindle</a></div>                              	  	  	  	  	</div></div><div class="booklink-footer"></div></div></div>
<br/>

まず本書冒頭では **<span style="color: #ff8c00;">マネージャーのアウトプット</span>** が次のように示されている。

<span class="mark">POINT</span>**自分の組織のアウトプット ＋ 自分の影響力が及ぶ隣接諸組織のアウトプット.**

マネージャーはチームのパフォーマンス ＋ アウトプットで評価されるべきとあり、この考え方は自身がチームマネジメントを行う上で一つの指標となったので、直近PJでも取り入れてみた。

## チームのアウトプット最大化に向けた施策

本書に倣えば、マネジメントでやるべきは **<span style="color: #ff8c00;">チームのアウトプットを最大化</span>** させること!!

直近PJの課題やチーム状況を鑑みて、次の指標でアウトプットを判断することにしてみた。

<div class="blackboard-box">
<p>(1) 開発スピードが向上したか（リリース頻度・回数 / 売上に直結する機能追加の有無）</p>
<p>(2) 品質の担保（本番障害や受入時のバグ・問い合わせの少なさ）</p>
<p>(3) 持続可能な開発体制構築（将来の内製化に寄与する取組み）</p>
<div class="chalk1"></div>
<div class="chalk2"></div>
</div>
<br/>

まず(1)と(2)を実現するため、案件終了時に振返りの場を設け、チーム成熟化に尽力。

担当PJではタスク管理をRedmineで行っていたので、クライアントの検収時に起票されるバグや問い合わせの内容を、開発者と共に振り返り、次のような課題と対応策を洗い出せた。

<div class="blackboard-box">
<p>1. ブラウザ毎の挙動が一致せず、検収時に多くの問い合わせを頂いた.</p>
<p style="color: #ff8c00;">＝ デザイン変更の際は、クライアント先のデザインチームにモックを作成してもらう.</p>
<p>2. 開発担当者の試験項目書の作成が雑でチェック漏れが多い（操作手順の記載のみ）</p>
<p style="color: #ff8c00;">＝ 試験観点を列挙したシートを作成し、RV担当者に配慮する.</p>
<p>3. 役割分担問題（出来るエンジニアに負荷が集中している）</p>
<p style="color: #ff8c00;">＝ 出来るエンジニアの負担軽減のため、初級要員が軽微改修や問合せを対応する仕組み作り.</p>
<p>4. 実装漏れ ＋ 確認観点漏れ</p>
<p style="color: #ff8c00;">＝ 実装前後でディレクターと認識合わせを行うことで、無駄な問合せを減らす.</p>
<p>5. 工数算出の甘さ（納期間際に間に合わないことが多発）</p>
<p style="color: #ff8c00;">＝ 開始当初にタスクを細かく分割 ＋ 定期的な進捗報告を実施.</p>
<p>6. 受入時の問合せ数を削減</p>
<p style="color: #ff8c00;">＝ 基本的なホウレンソウで防げる問合せが多いので、密に連携が取れる体制構築.</p>
<div class="chalk1"></div>
<div class="chalk2"></div>
</div>
<br/>

マネジメント側の改善点も見えてくるので、定期的な振り返りの場は大切だと痛感させられる。

ちなみに本書の第2章でもインディケーターが大事だと述べており、今回は検収時のRedmineチケットを参考にしたが、他に良い指標がないかは引き続き追求していきたい。

## マネージャーにとって大事な手段であるミーティング

本書はミーティングに1章を割いており、ミーティングが重要な手段であるかを述べている。

その理由について、マネージャーの仕事の大半は情報・ノウハウの提供で、これがチームのアウトプット最大化に欠かせないから。またその時間を最大限、有効活用させるのも使命の一つ。

ミーティングの目的や役割には、**<span style="color: #ff8c00;">プロセス中心（知識の共有化や情報交換）</span>**を主にするものと、**<span style="color: #ff8c00;">使命中心（具体的な問題解決や意思決定を行う）</span>**の2種類があり、直近PJで前任者からマネジメント業務を引き継いだ際、前者のミーティングに課題感を感じたので、まず次の基本的なことから見直してみた。

<div class="blackboard-box">
<p>1. 各要員の作業状況を把握できる状態になっていない（WBS未更新）</p>
<p style="color: #ff8c00;">＝ WBSで最低限のタスク管理を行い、日次の夕会で確認（その場で更新）</p>
<p style="color: #ff8c00;">＝ かつ、進捗遅延上  のボトルネックを把握し、適切にフォロー（要員調整等）</p>
<br/>
<p>2. 何をどこまでやるかの指示が明確になっていない（進捗が不明）</p>
<p style="color: #ff8c00;">＝ なんとなくで依頼せず、完了までの具体的なゴール設定を行う.</p>
<br/>
<p>3. 細かいタスク消化のための工数が考慮されていない（RV対応、etc）</p>
<p style="color: #ff8c00;">＝ 事前にわかっているタスクはスケジュール作成時に考慮する.</p>
<div class="chalk1"></div>
<div class="chalk2"></div>
</div>
<br/>

プロセス中心のミーティングでは、チーム間のコミュニケーションを活発化させるため、日々の案件完了時、開発者自身がチーム全体に共有した方が良いと思うことを、定例の場で共有する運用とした。

日次の夕会で挙げられた各担当者のボトルネックや相談事は、別途有識者が集まり、課題解決まで道筋を話し合うスタイル。これらを繰り返すことで、チーム間の風通しは幾分か良くなった気がする。

## 経験の浅いメンバーとの向き合い方

経験浅めのメンバーをメンターすることもあるが、第3章に参考となる考え方が紹介されていた。

<span class="mark">POINT</span>**自分には ”わずかな” 時間でも、他人の業務遂行で ”長い” 期間に渡って影響を与えられる.**  
<span class="mark">POINT</span>**部下への権限委譲について、委譲後にフォローしないのは職務放棄となる.**

**特定の経営管理活動により生じるアウトプットの尺度 ＝ <span style="color: #ff8c00;">テコ作用</span> としている。**

そういえば、ある部下にタスクを振った後、日々進捗をモニタリングしていると、あるボトルネックが解決出来ず、相談されたことがある。私自身が直接的な解決策を持っていた訳では無かったが、問題解決までの道筋や今後の進め方を軽くアドバイスしたら、即解決でき、納期を守ることができた。

その件以降、メンバーは早期の相談を心掛け、進捗遅延が無くなった気がする。またメンバー毎にどの程度フォローするか、タスク習熟度別に効果的なマネジメント・スタイルの特徴も解説されている。

<div class="blackboard-box">
<p>タスク習熟度：低（明確な仕組み ＋ タスク志向）</p>
<p style="color: #ff8c00;">”何を” ”いつまで” ”どうして” を示す.</p>
<p>タスク習熟度：中（個人志向）</p>
<p style="color: #ff8c00;">双方向通行的コミュニケーション、支持、お互いの判断力を重視する.</p>
<p>タスク習熟度：高（マネジャーの関与を最小限に）</p>
<p style="color: #ff8c00;">目標を設定し、モニターする</p>
<div class="chalk1"></div>
<div class="chalk2"></div>
</div>
<br/>

上記は何が「良い」とか「悪い」ではなく、何が最も”効果的” か!? だとしている。

## ワン・オン・ワン・ミーティングの進め方

上記のミーティングにも繋がるワン・オン・ワンについても詳しく言及されていた。

主な目的には、相互に教えたり、情報交換で、特定の問題や状況を話すことで、監督者は物事のアプローチの仕方を提案、部下は自分が何をやっているのか、何に関心があり心配しているかを伝えられる。

私自身、直属の部下を持っている訳ではないので、個別に実施はしていないが、もし実施する場合には、次のような点に配慮することが推奨されていた。

<div class="blackboard-box">
<p>1. ワン・オン・ワン・ミーティングは、最低1時間は続けるべき.</p>
<p>2. 部下のミーティングであり、議題や各種調整は部下が決めるべき筋合いのもの.</p>
<p>3. 話す議題は実績数値、部下が使用している指標（トラブルの存在を知らせてくれるもの）</p>
<p>4. ミーティングのアウトラインを事前に作っておく.</p>
<div class="chalk1"></div>
<div class="chalk2"></div>
</div>
<br/>

ちなみに本書は、部下がある主題について言いたいことを全部話したと思ったら、もうひとつ念のために質問し、双方が問題の底にまで達したと、満足感を覚えるまで質問を繰り返すことを推奨している。