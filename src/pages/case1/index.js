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
        <p>BtoB向けのMAツール開発にて、プロジェクト管理やチームビルディングに従事.</p>
        <p class="sub-title">プロジェクトの基本情報</p>
        <div class="pj-info">
          <p><b>[ フェーズ ]</b> 要件定義 〜 保守運用</p>
          <p><b>[ 開発規模 ]</b> 30人</p>
          <p><b>[ 期間 ]</b> 2019.11 - now</p>
        </div>
        <p class="sub-title">プロジェクトの利用技術</p>
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
          <p>クライアント企業は積極的なシステム投資を行い、DXの推進を試みていたが、開発リソースやノウハウに乏しく、次のような課題を抱えていた。</p>
          <br/>
          <p>1. 開発リソースが限られているため、経営層の要望に応えられていない。</p>
          <p>2. システム開発のノウハウがないため、業務フローが曖昧で無駄が多い。</p>
          <p>3. 将来的にはクライアント企業で内製化を考えているが、進んでいない。</p>
          <p>4. モノリスなアプリケーションで、仕様の理解者が極少数しかいない。</p>
          <p>5. 開発は全て外部ベンダー任せのため、品質チェックが甘く、バグが多い。</p>
          <p>6. 運用ではインフラに精通した者がおらず、障害対応に不安を抱えていた。</p>
          <br/>
          <p>ただ上記はあくまで現象であり、チョークポイントは以下が考えられた。</p>
          <br/>
          <p class="imp">会社間で意思疎通が取れておらず、誤った意思決定がされる。</p>
          <p class="imp">結果、特定の担当者に作業負荷が集中し、物事が思うように進んでいない。</p>
        </div>
        <p class="sub-title">現場での職務内容</p>
        <div class="role">
          <p><b>■ DX推進を後押しする体制づくり</b></p>
          <p>幅広い領域を個人で対応するには限界があるので、組織レベルでクライアントのDXを支援するため、次の点に留意しながら体制作りに寄与した。</p>
          <p>1. クライアントが抱える課題の洗出しと社内共有（上記に抜粋）</p>
          <p>2. 円滑な業務推進に向けたキーパーソンとの信頼関係構築</p>
          <p>3. 事業部長と共同でクライアントへの提案資料を作成</p>
          <br/>
          <p><b>■ 組織を跨いでのディレクション業務</b></p>
          <p>クライアント先の他部署を巻き込みながら、要望ヒアリングから要件定義、開発チーム調整、本番リリースまでを一気通貫で対応。</p>
          <p>クライアント側の受入時には、問合せの窓口対応と報告されるバグ対応の優先度を見極め、品質に配慮しつつ、納期の厳守に尽力した。</p>
          <br/>
          <p><b>■ 要望に応えるためのチームビルディング</b></p>
          <p>日々挙げられる改善要望にスピード感をもって対応するため、関係部署と調整して改善専門チームを立ち上げ、PJの開発スピードUPに寄与。</p>
          <p>チーム立ち上げ後は、バグ数/問合せ数/納期遵守などの指標をモニタリングし、振返りの場を設け、都度改善が出来るようにチームをマネジメント。</p>
          <p>また将来クライアント先の担当者に引継ぐため、業務フローやルール策定。</p>
          <br/>
          <p><b>■ アウトプットを最大化するためのチームマネージメント</b></p>
          <p>開発チーム全体を俯瞰し、各メンバーのモチベーションを損わせない、かつ、PJの利益に繋がる提案活動（主に人員配置）と実行に尽力した。</p>
          <p>また初級レベルのエンジニアに開発業務の進め方、RV対応を通してメンターを務め、後進の教育と人材マネジメントに尽力した。</p>
        </div>
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
