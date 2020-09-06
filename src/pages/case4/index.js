import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Image from "../../components//atom/image"

import "../case1/case-common.css"

const Case4 = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Case4" />
      <div class="case">
        <p id="title">ポイント管理システムのリプレイス対応</p>
        <div class="capture">
          <Image filename={`point-manage.jpg`} />
        </div>
        <p>複数事業者のポイント管理を行うWEBシステムのリプレイス対応に従事.</p>
        <div class="skills">
          <span class="server">Java7</span>
          <span class="server">Struts2</span>
          <span class="server">MyBatis</span>
          <span class="front">HTML5</span>
          <span class="front">CSS3</span>
          <span class="front">jQuery</span>
          <span class="infra">MySQL</span>
          <span class="infra">Vagrant</span>
          <span class="infra">Virtulbox</span>
          <span class="infra">Apache</span>
          <span class="infra">Tomcat</span>
          <span class="infra">Maven</span>
        </div>
        <p class="sub-title">プロジェクトの課題</p>
        <div class="pj-task">
          <p>クライアント企業は、ポイント事業者と深いパイプをもっていたが、開発リソースやノウハウが乏しく、次のような課題を抱えていた。</p>
          <br/>
          <p>1. 限られた工数とタイトなスケジュールで、リプレイスの必要があった。</p>
          <p>2. 開発リソースだけでなく、マネージメント人材にも不安を抱えていた。</p>
        </div>
        <p class="sub-title">現場での職務内容</p>
        <div class="role">
          <p><b>■ プロジェクトマネージャーとして、次のタスクに従事</b></p>
          <p>1. スケジュール策定と工数調整など、お客様との折衝業務を中心に従事。</p>
          <p>2. 約30画面のデザイン刷新とSQLパフォーマンスチューニングを担当。</p>
          <p>3. モダン開発環境の導入（Vagrant仮想環境化 / Mavenビルド環境）</p>
          <p>4. プロパー新人や外部パートナーの各種フォローと品質担保チェック。</p>
        </div>
        <div class="previous">
          <Link to={`/work`}>戻る</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Case4

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
