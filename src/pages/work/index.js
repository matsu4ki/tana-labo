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
          <p>マネージメント専門のPM・SEとして<span>「システム開発に求められる普遍的な知識」</span>と<span>「クライアントのデジタル化を推進させるノウハウ」</span>を兼ね備えています。</p>
          <p>また単にモノを作るだけではなく、<span>業務効率化の提案と実行</span>に注力し、<span>チームビルディングに寄与</span>することで、クライアント様のDX推進に尽力いたします。</p>
          <br/>
          <p>私は大学を卒業してから11年、15社のシステム開発に携わってきました。</p>
          <p>サーバーサイド開発に精通、部下のマネージメントやクライアント様のチームビルディングにも寄与することで、納品後も契約終了を告げられたことは皆無です。</p>
          <p>またIPA情報処理試験や最新技術のキャッチアップ、マーケティングや簿記等の自己学習を通じて、IT・ビジネスの双方で信頼を受けてきた経歴があります。</p>
          <br/>
          <p>SDGsの理念に共感し、特に貧困や教育格差の問題には、社会活動や情報発信など、何かしらの形で取り組んでいきたいと考えています。</p>
          <p>一人で出来ることは限られますが、縁あってお仕事させていただくクライアント様のDXを推進し、より多くの人の役に立つため、日々学習と実践に励んでいます。</p>
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
