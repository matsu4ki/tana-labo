import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Image from "../../components//atom/image"

import "./case-common.css"

const Case1 = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Case1" />
      <div class="case">
        <p id="title">BtoB向けのMAツール開発</p>
        <div class="capture">
          <Image filename={`marketing-automation.jpg`} />
        </div>
        <p>BtoB向けのMAツール開発PJにて、プロジェクト管理やチームビルディングに従事.</p>
        <div class="skills">
          <span class="server">Ruby2.4</span>
          <span class="server">Rails5.1</span>
          <span class="front">HTML5</span>
          <span class="front">CSS3</span>
          <span class="infra">MySQL5.7</span>
          <span class="infra">Aurora</span>
          <span class="infra">CloudFront</span>
          <span class="infra">SQS</span>
          <span class="infra">S3</span>
          <span class="infra">API Gateway</span>
          <span class="infra">Redshift</span>
          <span class="infra">Elastic Beanstalk</span>
          <span class="infra">Docker</span>
        </div>
        <p class="sub-title">プロジェクトの課題</p>
        <div class="pj-task">
          <p>クライアント企業は積極的なシステム投資を行い、DXの推進を試みていたが、開発リソースやノウハウが乏しく、次のような課題を抱えていた。</p>
          <br/>
          <p>1. 開発リソースが限られているため、経営層の要望に応えられていない。</p>
          <p>2. システム開発のノウハウがないため、業務フローが曖昧で無駄が多い。</p>
          <p>3. 将来的にはクライアント企業で内製化を考えているが、進んでいない。</p>
          <p>4. モノリスなアプリケーションで、仕様の理解者が極少数しかいない。</p>
          <p>5. 開発は全て外部ベンダー任せのため、品質チェックが甘くてバグが多い。</p>
          <p>6. 運用面でインフラに精通した者がおらず、障害対応に不安を抱えている。</p>
        </div>
        <p class="sub-title">現場での職務内容</p>
        <div class="role">
          <p><b>■ DX推進を後押しするための体制構築に寄与</b></p>
          <p>組織改善から上流工程、開発、運用面で、クライアントのDX推進に尽力するため、事業部長と体制構築の提案と新規メンバーのフォローに注力した。</p>
          <br/>
          <p><b>■ 経営層の要望にスピード感をもって応えるための施策</b></p>
          <p>
            日々挙げられる要望にスピード感をもって対応するため、機能改善チームを立ち上げ、要件定義とディレクション、機能改善チームの構築に注力。
            また将来クライアント先の担当者に引継ぐため、業務フローやルールを策定。
          </p>
          <br/>
          <p><b>■ CS向上とサポートの負荷を減らす施策</b></p>
          <p>
            外部ベンダーと協業してCSマネージメントシステムを導入、リードの行動履歴を可視化した。
            その施策ではクライアントの負荷を削減するため、API連携やZapierによる自動連携などの提案と実現に尽力した。
          </p>
        </div>
        <p><b>＊2020年9月時点、現在も参画中</b></p>
        <div class="previous">
          <Link to={`/work`}>戻る</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Case1

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`