---
title: ドメイン駆動設計入門は新人時代にDDD挫折した私にも分かりやすかった
date: "2020-04-17T00:00:00.284Z"
description: ""
pagetype: "category"
perma: "ddd"
categoryname: "テクノロジー"
categoryslug: "technology"
tags: ["DDD", "アーキテクチャ"]
thumbnail: post-35.png
---

![](./post-35.png)

先輩エンジニアからエリック・エヴァンスのDDD本を薦められた新人時代。当時は今よりも技術力が未熟な上、内容も難解だったので、数ページ見開いただけで挫折してしまった。それから長い間DDDに触れる機会は無く現在に至る（読んだ人に話を聞いても、よく分からなかったと言う人ばかりだった）

<div class="cstmreba"><div class="booklink-box"><div class="booklink-image"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202004121959571623?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F11146351%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" ><img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/1963/9784798121963.jpg?_ex=160x160" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202004121959571623?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F11146351%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >エリック・エヴァンスのドメイン駆動設計</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">エリック・エヴァンス/今関剛 翔泳社 2011年04月    </div><div class="booklink-link2"><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202004121959571623?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F11146351%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >楽天ブックス</a></div><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4798121967/kanon123-22/" target="_blank" >Amazon</a></div><div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=%E3%82%A8%E3%83%AA%E3%83%83%E3%82%AF%E3%83%BB%E3%82%A8%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%B9%E3%81%AE%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E9%A7%86%E5%8B%95%E8%A8%AD%E8%A8%88&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=kanon123-22" target="_blank" >Kindle</a></div>                              	  	  	  	  	</div></div><div class="booklink-footer"></div></div></div>

あれから数年コードを書き続けたけど、自身の中で指針となるコードの書き方も定まっておらず、現場毎に異なる開発ルールに翻弄されている気がしたので、再度DDDへ入門することに決めた。しかし数年コードを書き続けたとしても、エリック・エヴァンス本は相変わらず敷居が高い。

なのでこちらの本読んでみた。一読した感想はとにかく理解しやすく**「ちゃんとオブジェクト指向で開発しよう♪」**との印象を受けた。記事タイトルどおり、DDD挫折した私にも分かりやすい良書。

<div class="cstmreba"><div class="booklink-box"><div class="booklink-image"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202004111104577927?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16167672%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" ><img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0727/9784798150727.jpg?_ex=160x160" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202004111104577927?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16167672%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >ドメイン駆動設計入門 ボトムアップでわかる！ドメイン駆動設計の基本</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">成瀬 允宣 翔泳社 2020年02月13日    </div><div class="booklink-link2"><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202004111104577927?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16167672%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >楽天ブックス</a></div><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/479815072X/kanon123-22/" target="_blank" >Amazon</a></div><div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E9%A7%86%E5%8B%95%E8%A8%AD%E8%A8%88%E5%85%A5%E9%96%80%20%E3%83%9C%E3%83%88%E3%83%A0%E3%82%A2%E3%83%83%E3%83%97%E3%81%A7%E3%82%8F%E3%81%8B%E3%82%8B%EF%BC%81%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E9%A7%86%E5%8B%95%E8%A8%AD%E8%A8%88%E3%81%AE%E5%9F%BA%E6%9C%AC&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=kanon123-22" target="_blank" >Kindle</a></div>                              	  	  	  	  	</div></div><div class="booklink-footer"></div></div></div>

## 本書のあらすじ

エリック・エヴァンス本では、ユビキタス言語の解説に始まり、ドメインエキスパートや境界付けられたコンテキスト、エンティティ、値オブジェクトなど、とにかく専門用語が多くて初心者を悩ませる。

本書ではそんな挫折をしないで済むように、ドメイン駆動設計で重要な <span style="color: crimson; font-weight: bold;">概念を抽出するモデリング</span> には触れず <span style="color: crimson; font-weight: bold;">概念を実装に落とし込むパターン</span> を中心に解説されている。

<div class="blackboard-box">
<p>■ 知識を表現するパターン</p>
<p>・値オブジェクト ★</p>
<p>・エンティティ ★</p>
<p>・ドメインサービス ★</p>
<br/>
<p>■ アプリケーションを表現するためのパターン</p>
<p>・リポジトリ ★</p>
<p>・アプリケーションサービス ★</p>
<p>・ファクトリ ★</p>
<br/>
<p>■ 知識を表現するより発展的なパターン</p>
<p>・集約</p>
<p>・仕様</p>
<div class="chalk1"></div>
<div class="chalk2"></div>
</div>

ドメイン駆動設計のパターンだけを取り入れる手法は **軽量DDD** と呼ばれるが <span style="color: crimson; font-weight: bold;">重要なことはドメインの本質と向き合うことで、パターンはあくまでサポート役であること</span> を念押しされている。

## 知識を表現するパターン

ドメイン知識をコードへ落とし込む基本パターンとして挙げられる <span style="color: crimson; font-weight: bold;">値オブジェクト</span> は、ドメインオブジェクトの一つで、システム固有の値を定義する役割を担っている（FirstNameとLastNameが該当）

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

わざわざ値オブジェクトを定義せずに、プリミティブ型だけでも実装は可能だが、それでは汎用的で表現力に乏しいプログラムになりがち。値オブジェクトで定義をすれば、クラスにルールが付与されるので、ドキュメントとして機能させることが可能になる（パッと見で何やってるか理解しやすい）

また値オブジェクトは <span style="color: crimson; font-weight: bold;">ただのデータ構造体ではなく、ふるまいも定義可能で、自身のルールを語るドメインオブジェクト</span> になり、ロジックの散在が改善されて可読性の向上が見込める。

もう一つのドメインオブジェクトに <span style="color: crimson; font-weight: bold;">エンティティ</span> が紹介されており、値オブジェクトとの違いが紛らわしく、本書では同一性で識別されるか否か、またはライフサイクルが存在するか否かを判断基準にしている。ちなみに以下ブログでは、具体例を挙げて説明されている。

■ [DDD基礎解説：Entity、ValueObjectってなんなんだ](https://little-hands.hatenablog.com/entry/2018/12/09/entity-value-object)  

最後に値オブジェクトやエンティティに記述すると不自然に見えるので、これらのふるまいを定義する <span style="color: crimson; font-weight: bold;">ドメインサービス</span> があり、具体的に不自然なふるまいとは以下のようなコードがある。

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

上記では重複有無を、自身に対して問い合わせすることになり、多くの開発者を混乱させる不自然な記述に見える。このような不自然なふるまいの解決には、ドメインサービスの利用を推奨している。

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

アプリケーションを表現するパターンの一つが <span style="color: crimson; font-weight: bold;">リポジトリ</span> で、データを永続化（インスタンスを保存して復元出来るようにすること）し、再構築する処理を抽象的に扱うオブジェクトになる。

```Csharp
# リポジトリを利用したユーザ作成処理
class Program
{
  private IUserRepository userRepository;
  public Program(IUserRepository userRepository)
  {
    this.userRepository = userRepository;
  }
  public void CreateUser(string userName)
  {
    var user = new User(new UserName(userName));
    var userService = new UserService(userRepository);
    if (userService.Exists(user)) {
      throw new Exception("既に存在します");
    }
    userRepository.Save(user);
  }
}
```

リポジトリの役割は、あくまでもオブジェクトの永続化なので、ユーザ重複確認のようなドメインルールに近い内容の実装は好ましくなく、そういった処理はドメインサービスでの実装が推奨される（本書でも、Userの識別子であるUserIdでの検索メソッドはリポジトリ定義が望まいとしており、リポジトリへの定義は単純なCRUD操作に限られる印象を受けた）

```Csharp
public interface IUserRepository
{
  User Find(UserId id);

  # ドメインサービスに定義すべき内容
  bool Exists(User user);

  # 特定項目のCRUDはNG（多くのCRUD定義が乱立する結果となる）
  void updateName(UserId id, UserName name);
  # オブジェクトが保持する項目の変更はオブジェクト自身に依頼
  void Save(User user);
}
```

不自然さを解決するサービスに <span style="color: crimson; font-weight: bold;">アプリケーションサービス</span> があり、ドメインオブジェクトのふるまいを呼び出す役目を担っている。ドメインオブジェクトの公開には大きな危険性が潜んでいるので、本書では公開しないことを推奨している（代用としてDTOの活用だったり、コマンドオブジェクトがある）

```Csharp
public class UserApplicationService
{
  private readonly IUserRepository userRepository;
  private readonly UserService userService;

  public UserApplicationService(IUserRepository userRepository, UserService userService)
  {
    this.userRepository = userRepository;
    this.userService = userService;
  }

  public void Register(string name)
  {
    var user = new User(new UserName(name));

    # NGパターン
    var duplicatedUser = userRepository.Find(mailAddress);
    if (duplicatedUser != null) {
      throw new Exception(mailAddress);
    }
    # OKパターン（ドメインサービスを利用してユーザの重複チェックを実施）
    if (userService.Exists(user)) {
      throw new Exception("既に存在しています");
    }
    userRepository.Save(user)
  }
}
```

アプリケーションサービスは、<span style="color: crimson; font-weight: bold;">あくまでもドメインオブジェクトのタスク調整に徹し、ドメインルールを記述させないことが重要</span>（ルールはドメイン側に寄せることが大切）

アプリケーションを実現させる最後のパターンに、複雑なオブジェクトの生成処理をオブジェクトとして定義する <span style="color: crimson; font-weight: bold;">ファクトリ</span> があり、これは生成のみを責務とするオブジェクトになる。

```Csharp
public class UserFactory : IUserFactory
{
  public User Create(UserName name)
  {
    # データベースのコネクション処理
    # 省略

    # インスタンスの返却
    return new User(id, name);
  }
}
```

ファクトリ利用の目安について、生成処理が複雑でない場合は素直にコンストラクタでの呼び出しが望ましく、データベース接続など複雑な処理はファクトリ実装でカプセル化して柔軟性を確保。

Chapter11では解説された全知識を活用して、SNSを実装するサンプルが説明されている。

## 参考文献

■ [正誤表@ドメイン駆動設計入門 ボトムアップでわかる！ドメイン駆動設計の基本](https://www.shoeisha.co.jp/book/detail/9784798150727)  
■ [ドメイン駆動設計のメリットと始め方@CodeZine](https://codezine.jp/article/detail/9546#cxrecs_s)  
■ [little hands' lab - ドメイン駆動設計を布教したい](https://little-hands.hatenablog.com/)  
■ [[DDD]ドメイン駆動設計で実装を始めるのに一番とっつきやすいアーキテクチャは何か](https://qiita.com/little_hand_s/items/ebb4284afeea0e8cc752)  
■ [今すぐ「レイヤードアーキテクチャ+DDD」を理解しよう（golang）](https://qiita.com/tono-maron/items/345c433b86f74d314c8d)  
■ [Goのpackage構成と開発のベタープラクティス](https://engineer.recruit-lifestyle.co.jp/techblog/2018-03-16-go-ddd/)  
■ [ドメイン駆動設計の比類なきパワーでRailsレガシーコードなど大爆殺したるわあああ](https://qiita.com/MinoDriven/items/3c7db287e2c66f36589a)  
■ [RailsでDDD](https://qiita.com/haazime/items/5776e4e25b6527b682e7)  