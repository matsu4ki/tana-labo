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
        <p>ポイント事業管理システムのリプレイス対応に従事.</p>
        <p class="sub-title">プロジェクトの基本情報</p>
        <div class="pj-info">
          <p><b>[ フェーズ ]</b> 基本設計 〜 結合試験</p>
          <p><b>[ 開発規模 ]</b> 10人</p>
          <p><b>[ 期間 ]</b> 2016.04 - 2016.07</p>
        </div>
        <p class="sub-title">プロジェクトの利用技術</p>
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
          <p>クライアント企業は、ポイント事業者と深い繋がりをもっていたが、開発リソースやノウハウに乏しく、次のような課題を抱えていた。</p>
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
          <br/>
          <p><b>■ 限られた人員と予算で最善の体制作り</b></p>
          <p>
            案件参画者にJava経験者が1名しかおらず、また開発経験がない要員も多かったので、当初は円滑に進められなかった。
            最善を尽くすため、Java経験者には開発以外をさせず、可能な限りJava経験者を外部から集め、またデザイン面の改修を出来る要員がいなかったので、自身で対応する等、
            限られた人員と予算内で出来る施策は全て行い、納期を守れる体制作りに貢献した。
          </p>
          <br/>
          <p><b>■ 次期案件へ参画するための施策</b></p>
          <p>
            本案件の参画メンバーで、日本語に少し難のある外国人エンジニアがおり、当初は開発経験がなかった。
            次期案件への参画を考慮し、開発経験を積んでもらい、業務推進のノウハウを共有。次期案件に参加できるよう貢献した。
          </p>
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
