---
title: ドメイン駆動設計入門は新人時代にDDD挫折した私にも分かりやすかった
date: "2020-04-17T00:00:00.284Z"
description: ""
pagetype: "category"
perma: "microservice-transaction"
categoryname: "テクノロジー"
categoryslug: "technology"
tags: ["DDD", "アーキテクチャ"]
thumbnail: post-35.png
---

![](./post-35.png)

先輩エンジニアからエリック・エヴァンスのDDD本を薦められた新人時代。当時は今よりも技術力が未熟な上、内容も難解だったので、数ページ見開いただけで挫折してしまった。それから長い間DDDに触れる機会は無く現在に至る（読んだ人に話を聞いても、よく分からなかったと言う人ばかりだった）

<div class="cstmreba"><div class="booklink-box"><div class="booklink-image"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202004121959571623?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F11146351%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" ><img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/1963/9784798121963.jpg?_ex=160x160" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202004121959571623?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F11146351%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >エリック・エヴァンスのドメイン駆動設計</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">エリック・エヴァンス/今関剛 翔泳社 2011年04月    </div><div class="booklink-link2"><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202004121959571623?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F11146351%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >楽天ブックス</a></div><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4798121967/kanon123-22/" target="_blank" >Amazon</a></div><div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=%E3%82%A8%E3%83%AA%E3%83%83%E3%82%AF%E3%83%BB%E3%82%A8%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%B9%E3%81%AE%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E9%A7%86%E5%8B%95%E8%A8%AD%E8%A8%88&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=kanon123-22" target="_blank" >Kindle</a></div>                              	  	  	  	  	</div></div><div class="booklink-footer"></div></div></div>

あれから数年コードを書き続けたけど、自身の中で指針となるコードの書き方も定まっておらず、現場毎に異なる開発ルールに翻弄されている気がして、再度DDDへ入門することになった。しかし数年コードを書き続けたとて、エリック・エヴァンス本は相変わらず敷居が高い。

なのでこちらの本読んでみた。一読した感想はとにかく理解しやすく**「ちゃんとオブジェクト指向で開発しよう♪」**との印象。本記事のタイトルどおり、DDD挫折した私にも分かりやすい良書だと思う。

<div class="cstmreba"><div class="booklink-box"><div class="booklink-image"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202004111104577927?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16167672%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" ><img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0727/9784798150727.jpg?_ex=160x160" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202004111104577927?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16167672%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >ドメイン駆動設計入門 ボトムアップでわかる！ドメイン駆動設計の基本</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">成瀬 允宣 翔泳社 2020年02月13日    </div><div class="booklink-link2"><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202004111104577927?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16167672%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >楽天ブックス</a></div><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/479815072X/kanon123-22/" target="_blank" >Amazon</a></div><div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E9%A7%86%E5%8B%95%E8%A8%AD%E8%A8%88%E5%85%A5%E9%96%80%20%E3%83%9C%E3%83%88%E3%83%A0%E3%82%A2%E3%83%83%E3%83%97%E3%81%A7%E3%82%8F%E3%81%8B%E3%82%8B%EF%BC%81%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E9%A7%86%E5%8B%95%E8%A8%AD%E8%A8%88%E3%81%AE%E5%9F%BA%E6%9C%AC&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=kanon123-22" target="_blank" >Kindle</a></div>                              	  	  	  	  	</div></div><div class="booklink-footer"></div></div></div>

## 本書のあらすじ

エリック・エヴァンス本では、ユビキタス言語の解説に始まり、ドメインエキスパートや境界付けられたコンテキスト、エンティティ、値オブジェクトなど、とにかく専門用語が多くて初心者を悩ませる。

本書ではそんな挫折をしないで済むように、ドメイン駆動設計で重要な <span style="color: crimson; font-weight: bold;">概念を抽出するモデリング</span> には触れず <span style="color: crimson; font-weight: bold;">概念を実装に落とし込むパターン</span> を中心に解説されている。

<div class="blackboard-box">
<p>■ 知識を表現するパターン</p>
<p>・値オブジェクト</p>
<p>・エンティティ</p>
<p>・ドメインサービス</p>
<br/>
<p>■ アプリケーションを表現するためのパターン</p>
<p>・リポジトリ</p>
<p>・アプリケーションサービス</p>
<p>・ファクトリ</p>
<br/>
<p>■ 知識を表現するより発展的なパターン</p>
<p>・集約</p>
<p>・仕様</p>
<div class="chalk1"></div>
<div class="chalk2"></div>
</div>

ドメイン駆動設計のパターンだけ取り入れる手法は **軽量DDD** と呼ばれるが、重要なことはドメインの本質と向き合うことで、パターンはあくまでサポート役であることを念押しされている。

## 知識を表現するパターン

ドメイン知識をコードへ落とし込む基本パターンとして挙げられる <span style="color: crimson; font-weight: bold;">値オブジェクト</span> は、ドメインオブジェクトの一つ。システム固有の値を定義する役割を担う。

プリミティブ型だけでも実装可能だが、汎用的で表現力に乏しいプログラムになる。値オブジェクトで定義すれば、クラスにルールが付与されるので、コードをドキュメントとして機能させることが可能。

```Csharp
class FullName : IEquatable<FullName>
{
  private readonly FirstName firstName;
  private readonly LastName lastName;
  public FullName(FirstName firstName, LastName lastName)
  {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  # 省略
}

# 名を表す値オブジェクト
class FirstName
{
  private readonly string value;
  public FirstName(string value)
  {
    if (string.IsNullOrEmpty(value)) throw new ArgumentException("1文字以上である必要があります。", nameof(value));
    this.value = value; 
  }
}

# 姓を表す値オブジェクト
class LastName
{
  # 省略
}
```

今まで関わった案件で、姓名を分けて、値オブジェクトで定義した現場は無かったが、確かにプリミティブ型よりもオブジェクトのルールが明確化され、不正な値の混入も防げる。

また値オブジェクトは <span style="color: crimson; font-weight: bold;">ただのデータ構造体ではなく、ふるまいも定義でき、自身のルールを語るドメインオブジェクト</span> となるので、ロジックの散在が改善され、可読性の向上が見込める。

もう一つのドメインオブジェクトとして <span style="color: crimson; font-weight: bold;">エンティティ</span> が紹介されているが、値オブジェクトとの違いは、以下リンクが具体例を挙げて説明されていたので一読して理解が深まった。

■ [DDD基礎解説：Entity、ValueObjectってなんなんだ](https://little-hands.hatenablog.com/entry/2018/12/09/entity-value-object)  

本書でも同一性で識別されるか否か、またはライフサイクルが存在するか否かを判断基準としている。

最後に値オブジェクトやエンティティに記述すると不自然に見えるので、これらのふるまいを定義するものとして <span style="color: crimson; font-weight: bold;">ドメインサービス</span> がある。**不自然なふるまい** とは、例えば以下のようなコード。

```Csharp
# エンティティ
class User
{
  # UserId と UserName は 値オブジェクト
  public User(UserId id, UserName name)
  {
    # 省略
  }
  # 不自然なふるまい
  public bool Exists(User user)
  {
    # 重複を確認するコード
  }
}

var userId = new UserId("id");
var userName = new UserName("nrs");
var user = new User(userId, userName);
var duplicateCheckResult = user.Exists(user);
```

上記のコードでは重複の有無を自身に対して問い合わせすることになり、多くの開発者を混乱させる不自然な記述に見えるので、DDDではこのような不自然なふるまいの解決にドメインサービスを利用。

```Csharp
# ドメインサービス
class UserService
{
  public bool Exists(User user)
  {
    # 重複を確認する処理
  }
}
```

ドメインサービスでは、自身のふるまいを変更するようなインスタンス特有の状態は持たせない。役割は理解しやすいが濫用は危険で、エンティティや値オブジェクトで定義出来ないか検討するのが吉。

## アプリケーションを実現するためのパターン

（追記予定）

## 知識を表現する、より発展的なパターン

（追記予定）


## 参考文献

■ [正誤表@ドメイン駆動設計入門 ボトムアップでわかる！ドメイン駆動設計の基本](https://www.shoeisha.co.jp/book/detail/9784798150727)  
■ [ドメイン駆動設計のメリットと始め方@CodeZine](https://codezine.jp/article/detail/9546#cxrecs_s)  
■ [little hands' lab - ドメイン駆動設計を布教したい](https://little-hands.hatenablog.com/)  
■ [[DDD]ドメイン駆動設計で実装を始めるのに一番とっつきやすいアーキテクチャは何か](https://qiita.com/little_hand_s/items/ebb4284afeea0e8cc752)  
■ [今すぐ「レイヤードアーキテクチャ+DDD」を理解しよう（golang）](https://qiita.com/tono-maron/items/345c433b86f74d314c8d)  
■ [Goのpackage構成と開発のベタープラクティス](https://engineer.recruit-lifestyle.co.jp/techblog/2018-03-16-go-ddd/)  
■ [ドメイン駆動設計の比類なきパワーでRailsレガシーコードなど大爆殺したるわあああ](https://qiita.com/MinoDriven/items/3c7db287e2c66f36589a)  
■ [RailsでDDD](https://qiita.com/haazime/items/5776e4e25b6527b682e7)  