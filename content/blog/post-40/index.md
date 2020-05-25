---
title: 基礎からわかるGo言語について 〜文法基礎と並列処理に触れてみる〜
date: "2020-05-22T00:00:00.284Z"
description: ""
pagetype: "category"
perma: "golang-basic"
categoryname: "テクノロジー"
categoryslug: "technology"
tags: ["go", "並列処理"]
thumbnail: post-40.png
---

![](./post-40.png)

最近Webの現場では、Golang開発が増えてるらしいので、コチラで基本に触れてみた。

<div class="cstmreba"><div class="booklink-box"><div class="booklink-image"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202005211313266227?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F13310126%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" ><img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/1788/9784863541788.jpg?_ex=140x140" style="border: none;" /></a></div><div class="booklink-info"><div class="booklink-name"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202005211313266227?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F13310126%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >基礎からわかるGo言語改訂2版</a><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">古川昇 シーアンドアール研究所 2015年07月    </div><div class="booklink-link2"><div class="shoplinkrakuten"><a href="https://hb.afl.rakuten.co.jp/hgc/146fe51c.1fd043a3.146fe51d.605dc196/yomereba_main_202005211313266227?pc=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F13310126%2F%3Fscid%3Daf_ich_link_urltxt%26m%3Dhttp%3A%2F%2Fm.rakuten.co.jp%2Fev%2Fbook%2F" target="_blank" >楽天ブックス</a></div><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4863541783/kanon123-22/" target="_blank" >Amazon</a></div><div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=%E5%9F%BA%E7%A4%8E%E3%81%8B%E3%82%89%E3%82%8F%E3%81%8B%E3%82%8BGo%E8%A8%80%E8%AA%9E%E6%94%B9%E8%A8%822%E7%89%88&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=kanon123-22" target="_blank" >Kindle</a></div>                              	  	  	  	  	</div></div><div class="booklink-footer"></div></div></div>
<br/>

本書では以下の言語仕様が網羅的に解説されている↓

■ Chapter1 - Go言語による開発の概要  
■ Chapter2 - Go言語の基本  
■ Chapter3 - 関数とメソッド  
■ Chapter4 - 構造体  
■ Chapter5 - インタフェース  
■ Chapter6 - 配列・スライス・マップ  
■ Chapter7 - エラーハンドリング  
■ Chapter8 - 並列処理    
■ Chapter9 - 逆引きリファレンス  

## コンパイルと実行

コンパイルは、Go言語をインストールしたディレクトリ中のbinに格納されている **goツール** を使用。

```shell
go build -o 実行ファイル名 ソースファイル名
```
<br/>

コンパイルと実行を同時に行う場合は以下コマンドを実行（ただし実行ファイルは残らない）

```shell
go run ソースファイル名
```

## Go言語のポインタ

基本的な文法で **ポインタ** が気になったので、使い方のみ確認。

```go
package main

import "fmt"

func main() {
	// int型のポインタ変数を宣言
	var ptr *int
	// int型の変数を宣言
	var i int = 12345
	// アドレス演算子でiのアドレス値を代入
	ptr = &i
	// アドレス値の出力
	fmt.Println(ptr) 
}

```
<br/>

ある変数を関数に渡すと、実際の値はコピーされるため、関数内で値を変更しても、元の値に影響はないが、値のポインタを関数に渡すと、元の変数の値を書き換えることが可能。

## 関数とメソッド

メソッドと関数との違いは **レシーバ** を記述するかどうか。

```go
// func (レシーバの変数名 レシーバの型) メソッド名(引数) {}
package main

import "fmt"

type myType int

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

メソッド内で値を変更する場合は、レシーバの型の前に*を記述して、ポインタにする必要がある。

```go
package main

import "fmt"

type myType int

// レシーバのポインタのメソッド
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

最初からポインタ型である型を利用することは不可。

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

## インタフェース

Goにはクラスが存在しないが、インタフェースは用意されている。

```go
package main

import "fmt"

// 演算インタフェース型
type Calculator interface {
	// 関数の定義
	Calculate(a int, b int) int
}

// 足し算型
type Add struct {
	// フィールドは持たない
}

// Add型にCalcuratorインタフェースのCalculate関数を実装
func (x Add) Calculate(a int, b int) int {
	// 足し算
	return a + b
}

// 引き算型
type Sub struct {
	// フィールドは持たない
}

// Syb型にCalcuratorインタフェースのCalculate関数を実装
func (x Sub) Calculate(a int, b int) int {
	// 引き算
	return b - a
}

func main() {
	// Calculatorインタフェースを実装した型の変数を宣言
	var add Add
	var sub Sub
	
	// Calculatorインタフェース型の変数を宣言
	var cal Calculator
	
	// Add型の値を代入
	cal = add
	
	// インタフェース経由でメソッドを呼び出す
	fmt.Println("和：", cal.Calculate(1, 2))
	
	// Sub型の値を代入
	cal = sub
	
	// インタフェース経由でメソッドを呼び出す
	fmt.Println("差：", cal.Calculate(1, 2))
}

```

## エラーハンドリング

Goでは戻り値に多値を返す仕様を利用し、標準関数の中ではerrorを返すものがある。

```go
package main

import "fmt"
import "os"

func main() {
	file, err := os.Open("test.txt")
	if err != nil {
		// エラーの詳細情報を出力
		// open test.txt: no such file or directory
		fmt.Println(err.Error())
		// 終了
		os.Exit(1)
	}
	
	// ファイルのクローズ
	file.Close()
	fmt.Println("OK")
}
```
<br/>

自作関数のエラー処理も実装可能。

```go
package main

import "fmt"

type MyError struct {
	message string // エラー詳細
}

// Errorメソッドの実装
func (err MyError) Error() string {
	// エラーメッセージを返す
	return err.message
}

func main() {
	val, err := hex2int("1")
	fmt.Println(val, err)
}

func hex2int(hex string) (val int, err error) {
	// エラーの場合
	return 0, MyError{"不正な文字です。:" + string(r)}
	
	// 戻り値errには初期値であるnilが返る
	return
}
```
<br/>

パニックとリカバリの使い方は別途学習が必要そう。

## ゴルーチンとは!?

Goでは並列処理に **ゴルーチン** という仕組みが用意されており、goキーワードで関数を呼び出す。

Go言語では <span style="color: crimson; font-weight: bold;">ランタイムが暗黙的にゴルーチンを1つ作成し、ゴルーチン上でmain関数を実行</span>、mainのゴルーチンが終了すると、他のゴルーチンが動作中であってもプログラムは終了。

```go
package main

import "fmt"
import "time"

/**
 * main:開始
 * testを通常の関数として起動
 * 01234testをゴルーチンとして起動
 * 0123main:終了
 */
func main() {
	fmt.Println("main:開始")
	fmt.Println("testを通常の関数として起動")
	test()
	
	fmt.Println("testをゴルーチンとして起動")
	go test()
	
	// 3秒待つ
	time.Sleep(3 * time.Second)
	fmt.Println("main:終了")
}

// ゴルーチンとして起動する関数
func test() {
	for i := 0; i < 5; i++ {
		// 連番出力
		fmt.Print(i)
		// 1秒待つ
		time.Sleep(1 * time.Second)
	}
}
```
<br/>

チャネルやselect文は、実際に並列処理を書く状況になったら、別途学習が必要そう。

## 参考文献
■ [The Go Playground](https://play.golang.org/)  
■ [A Tour of Go](https://go-tour-jp.appspot.com/list)  
