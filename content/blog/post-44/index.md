---
title: Docker環境でGolang+Gin+MySQL 環境構築〜DB接続してJSONを返却
date: "2020-06-01T00:00:00.284Z"
description: "Docker上でGolang+Gin+MySQLを環境構築し、データベース接続出来るかを確認。"
pagetype: "category"
perma: "golang-gin-mysql"
categoryname: "WEB"
categoryslug: "WEB"
tags: ["Go", "Gin", "Gorm", "Docker", "MySQL"]
thumbnail: post-44.png
---

![](./post-44.png)

Docker上で **Golang+Gin+MySQL** を環境構築し、データベース接続出来るかを確認。

**[前回](/post-43)** 同様、データベースへの接続にはGORMを利用。

## ディレクトリ構成

MySQLに関連するファイルは **mysql配下** に格納。

```bash
workspace/
         ├ mysql/
         |      ├ conf.d/
         |      |       └ my.cnf         # MySQLの各種設定
         |      └ initdb.d/              # 初期テーブル / 初期データ
         |      |         ├ schema.sql
         |      |         └ testdata.sql
         |      └ Dockerfile
         |
         ├ main.go
         ├ Dockerfile
         └ docker-compose.yml 
```

## MySQLの各種設定

MySQLの **Dockerfile** は以下のように定義。

```yml
FROM mysql:5.7
RUN touch /var/log/mysql/mysqld.log # 指定の場所にログを記録するファイルを作る
```
<br/>

**my.cnf** は以下のように定義。

```bash
[mysqld]
character-set-server=utf8mb4       # mysqlサーバー側が使用する文字コード
explicit-defaults-for-timestamp=1  # テーブルにTimeStamp型のカラムをもつ場合、推奨
general-log=1                      # 実行したクエリの全ての履歴が記録される
general-log-file=/var/log/mysql/mysqld.log # ログの出力先

[client]
default-character-set=utf8mb4 # mysqlのクライアント側が使用する文字コード
```
<br/>

DockerのMySQLイメージは **docker-entrypoint-initdb.d** にマウントした **.sql/.sh/.sql.gz** を、コンテナ生成・起動時に自動実行する仕組みがあるので、この仕組みで初期テーブル・データを登録。

**schema.sql** を以下のように定義。

```sql
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL,
    email VARCHAR(32) NOT NULL,
    PRIMARY KEY (id)
);
```
<br/>

**testdata.sql** を以下のように定義。

```sql
INSERT INTO users (id,name,email) VALUES (1, 'TOM','xxxx@mail.co.jp');
```

## 環境構築

appの **Dockerfile** を以下のように定義。

```yml
FROM golang:latest
RUN go get github.com/gin-gonic/gin
RUN go get github.com/jinzhu/gorm
RUN go get github.com/go-sql-driver/mysql
```
<br/>

docker-compose.ymlを定義。

```yml
version: '3'
services:
  app:
    build: .
    container_name: go_container
    tty: true
    ports:
      - "8080:8080"
    volumes:
      - .:/go
  db:
    build: ./mysql
    container_name: mysql_host
    environment:
      MYSQL_DATABASE: sample_db
      MYSQL_USER: user
      MYSQL_PASSWORD: password
      MYSQL_ROOT_PASSWORD: rootpassword
      TZ: 'Asia/Tokyo'
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
    volumes:
      - ./mysql/initdb.d:/docker-entrypoint-initdb.d
      - ./mysql/conf.d:/etc/mysql/conf.d
      - ./log/mysql:/var/log/mysql
    ports:
      - 3306:3306
```
<br/>

dockerを起動し、初期テーブル作成とデータ登録が正常に行われたか確認する。

```bash
# docker起動
docker-compose up -d

# MySQL確認
docker exec -it mysql_host bash
mysql -u user -p
use sample_db
show tables;
select * from users;
```

## GolangでMySQLに接続

**main.go** を以下のように定義。

```go
package main

import (
	"net/http"
	"encoding/json"
	"github.com/gin-gonic/gin"
	
    _ "github.com/go-sql-driver/mysql"
    "github.com/jinzhu/gorm"
)

type Users struct {
    ID    int
    Name  string `json:"name"`
    Email string `json:"email"`
}

func main() {

    db, err := sqlConnect()
    if err != nil {
        panic(err.Error())
    }
	
    defer db.Close()
    result := []*Users{}
    db.Find(&result)
    bytes, err := json.Marshal(result)

    r := gin.Default()
    r.GET("/hello", func(c *gin.Context) {
        c.String(http.StatusOK, string(bytes))
    })
    r.Run(":8080")
}

func sqlConnect() (database *gorm.DB, err error) {
    DBMS := "mysql"
    USER := "user"
    PASS := "password"
    PROTOCOL := "tcp(mysql_host:3306)"
    DBNAME := "sample_db"
	
    CONNECT := USER + ":" + PASS + "@" + PROTOCOL + "/" + DBNAME + "?charset=utf8&parseTime=true&loc=Asia%2FTokyo"
    return gorm.Open(DBMS, CONNECT)
}
```
<br/>

**main.go** を実行してデータベースに接続出来るか確認。

```bash
docker-compose exec app bash
go run main.go
```
<br/>

**http://localhost:8080/hello** でアクセスすると、画面上に以下が表示される。

```shell
[{"ID":1,"name":"TOM","email":"xxxx@mail.co.jp"}]
```

## 参考文献
■ [docker-composeでMySQL5.7を起動して接続してみた](https://qiita.com/LazyHippos/items/58d0f98a15656ed65136)  
■ [Docker MySQLコンテナ起動時に初期データを投入する](https://qiita.com/NagaokaKenichi/items/ae037963b33a85df33f5)  
■ [Go言語入門 - MySQL接続編](https://rightcode.co.jp/blog/information-technology/golang-introduction-mysql-connection)  
■ [Go+MySQL+Docker環境構築](https://qiita.com/__init__/items/f795ff5ba847898a05ae)  
■ [Golangで構造体を使ったJSON操作で出来ることを調べてみた](https://dev.classmethod.jp/articles/struct-json/)  
■ [Goでmapをjson文字列に変換する](https://qiita.com/konchanxxx/items/dce130f79c49e04e9931)  