---
title: Goプログラミング言語のチュートリアル 〜 基礎的な文法・Part1
date: "2020-05-22T00:00:00.284Z"
description: "最近のWEB開発ではGo言語の採用が増えているので、書籍で基本的な文法に触れてみた。内容としては、言語基礎、関数とメソッド、構造体など。"
pagetype: "category"
perma: "golang-basic"
categoryname: "システム開発"
categoryslug: "systemdevelop"
tags: ["Go", "初心者"]
thumbnail: post-40.png
---

![](./post-40.png)

最近のWEB開発ではGo言語の採用が増えているので、こちらの書籍で基本に触れてみた。

<div class="cstmreba"><div class="booklink-box"><div class="booklink-image"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202005211313266227?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F13310126%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" ><img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/1788/9784863541788.jpg?_ex=150x150" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202005211313266227?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F13310126%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >基礎からわかるGo言語改訂2版</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">古川昇 シーアンドアール研究所 2015年07月    </div><div class="booklink-link2"><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202005211313266227?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F13310126%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >楽天ブックス</a></div><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4863541783/kanon123-22/" target="_blank" >Amazon</a></div><div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=%E5%9F%BA%E7%A4%8E%E3%81%8B%E3%82%89%E3%82%8F%E3%81%8B%E3%82%8BGo%E8%A8%80%E8%AA%9E%E6%94%B9%E8%A8%822%E7%89%88&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=kanon123-22" target="_blank" >Kindle</a></div>                              	  	  	  	  	</div></div><div class="booklink-footer"></div></div></div>
<br/>

本書では以下のように一通りの言語仕様が解説されている。

■ Chapter1 - Go言語による開発の概要 ★  
■ Chapter2 - Go言語の基本 ★  
■ Chapter3 - 関数とメソッド ★  
■ Chapter4 - 構造体 ★  
■ Chapter5 - インタフェース  
■ Chapter6 - 配列・スライス・マップ  
■ Chapter7 - エラーハンドリング  
■ Chapter8 - 並列処理    
■ Chapter9 - 逆引きリファレンス  

本記事では★印の4分野に絞って確認。

## コンパイルと実行

コンパイルは、Go言語インストールディレクトリ中のbinに格納されている **goツール** を使用。

```shell
go build -o 実行ファイル名 ソースファイル名
```
<br/>

コンパイルと同時実行する場合、以下のコマンドを実行。

```shell
go run ソースファイル名
```
<br/>

ただし上記コマンドでは、実行ファイルは残らない。

## インポート

インポート宣言を行った場合、必ず何かしらインポート対象のパッケージ識別子にアクセスの必要がある。インポートしたのに、一度も使用しないとコンパイルエラーとなってしまう。

```go
package main

import "fmt"

func main() {
}

[実行結果] ./prog.go:3:8: imported and not used: "fmt"
```
<br/>

またインポートによる副次的処理（DB接続のような自動処理される初期化処理）のため、パッケージをインポートする必要があるケースでは **ブランク識別子** で対応。

```go
import (
	"net/http"
	_ "github.com/mattn/go-sqlite3"
)
```

## エクスポート

**エクスポート** は、識別子にパッケージ外からアクセスを許可すること。

```go
package main

const Export = true  // 先頭が大文字なので、エクスポートされる
const export = false // 先頭が小文字なので、エクスポートされない

func main() {
	const Z = 123    // 先頭は大文字だが、ローカル変数のためエクスポートされない
}
```
<br/>

また識別子の先頭文字を大文字にすることで、外部パッケージからのアクセスが可能となる。

## 文字列

**文字列** は **string型** で定義。

```go
var val1 = "test1"
fmt.Println(val1) // test1
```
<br/>

シングルクォーテーションでは **ルーンリテラル（Unicodeコードポイント）** で定義される。

```go
var val = 'a'
fmt.Println(val) // 97
```
<br/>

**len** はバイト数。文字数カウントは、unicode/utf8パッケージの **RuneCountInString** を利用。

```go
package main

import "fmt"
import "unicode/utf8"

func main() {

	var ja string = "Go言語"
	fmt.Println(ja, "len:", len(ja)) // Go言語 len: 8
	fmt.Println(ja, "len:", utf8.RuneCountInString(ja)) // Go言語 len: 4
}
```

## 変数と定数

**変数定義** では **var** を利用する。

```go
// var 変数名 型
var x int = 10

// [省略系] 変数名 := 初期値
y := 123
```
<br/>

**定数定義** では **const** を利用する。

```go
// const 定数名 型
const x int = 10
```

## ポインタ

基本的な文法では **ポインタ** が気になったので利用方法を確認。

```go
package main

import "fmt"

func main() {
	var ptr *int
	var i int = 12345
	ptr = &i
	fmt.Println(ptr) 
}

```
<br/>

ある変数を関数に渡すと、実際の値はコピーされる。そのため関数内で値を変更しても、元の値に影響はないが、値のポインタを関数に渡すと、元の変数の値を書き換えることは可能となる。

## 関数

関数宣言の書式は以下のとおり。

```go
func 関数名(パラメータリスト) 戻り値の型　{
	// 処理
	return 戻り値
}
```
<br/>

戻り値に名前を付けることで、パラメータの記述なしにreturnが可能。

```go
package main

import "fmt"

func calc(a int, b int)(add int, sub int, mul int, div float32) {
	add = a + b
	sub = a - b
	mul = a * b
	div = float32(a) / float32(b)	
	return
}


func main() {
	add, sub, mul, div := calc(10, 2)
	fmt.Println(add, sub, mul, div)
}

[実行結果] 12 8 20 5
```

## メソッド

関数とメソッドの違いは **レシーバ** を記述するかどうか。

```go
package main

import "fmt"

type myType int

// func (レシーバの変数名 レシーバの型) メソッド名(引数) {}
func (value myType) println() {
	fmt.Println(value)
}

func main() {
	var z myType = 1234
	z.println() // 実行結果:1234
}
```
<br/>

レシーバで指定する型は、同一パッケージ内で宣言する必要があり、レシーバを持つ変数経由で値へのアクセスが可能（インタフェース型はレシーバに指定出来ない）

またメソッド内で値を変更する場合は、レシーバの型の前に*を記述して、ポインタにする必要がある。

```go
package main

import "fmt"

type myType int

func (value *myType) setByPointer(newValue myType) {
	*value = newValue
}

func main() {
	var x myType = 0
	x.setByPointer(1)
	fmt.Println(x) // 実行結果:1
}
```
<br/>

最初からポインタ型である型を利用出来ない。

## 構造体

フィールドと呼ばれる要素を持つ集合体で、フィールドは名前と型を持つ。

```go
type 構造体名 struct {
	UserId string
	Name   string
	Email  string
}
```
<br/>

他の識別子と同様、先頭1文字を大文字にするとエクスポートされる（外部パッケージから参照可能）
