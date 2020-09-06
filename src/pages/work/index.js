import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Image from "../../components//atom/image"

import "./work.css"

const Work = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Work" />
      <div id="work">
        <p id="title">経歴について</p>
        <div id="usp">
          <p>大手SIerや中規模ソフトウェア会社のSEとして「Webシステム開発に求められる普遍的な知識」を兼ね備えており、特にサーバーサイド開発に精通しています。</p>
          <br/>
          <p>大学卒業から11年間、金融 / 通信 / 公共 / マーケティングの業界で、OSSを活用したシステム開発に一貫して携わり続けてきました。</p>
          <p>これまで15社の開発案件に携わり、PMやSEポジションで上流〜下流工程を経験。</p>
          <p>またIPA情報処理試験や最新技術のキャッチアップ、BtoBマーケティングや簿記などの自己学習を通じて、
          IT・ビジネスの双方で、多くのクライアント様の信頼を受けてきた経歴があります。</p>
          <br/>
          <p>（想い）</p>
          <br/>
        </div>
        <p class="sub-title">開発事例</p>
        <p>過去に携わった開発事例の一例を紹介します！</p>
        <div id="case">
          <div class="case-sub">
            <Link to={`/case1`}>
              <Image filename={`marketing-automation.jpg`} />
              <div class="case-sub-title">BtoB向けの<br/>MAツール開発</div>
            </Link>
          </div>
          <div class="case-sub">
            <Link to={`/case2`}>
              <Image filename={`construction-site.jpg`} />
              <div class="case-sub-title">建設現場での<br/>現場勤怠管理システム</div>
            </Link>
          </div>
          <div class="case-sub">
            <Link to={`/case3`}>
              <Image filename={`medical.jpg`} />
              <div class="case-sub-title">医療文献の<br/>特許管理システム</div>
            </Link>
          </div>
          <div class="case-sub">
            <Link to={`/case4`}>
              <Image filename={`point-manage.jpg`} />
              <div class="case-sub-title">ポイント管理システムの<br/>リプレイス対応</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Work

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
