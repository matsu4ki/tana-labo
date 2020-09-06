import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Image from "../../components//atom/image"

import "../case1/case-common.css"

const Case2 = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Case2" />
      <div class="case">
        <p id="title">建設現場での現場勤怠管理システム</p>
        <div class="capture">
          <Image filename={`construction-site.jpg`} />
        </div>
        <p>土木建設における現場管理と作業員の勤怠管理のシステム開発に従事.</p>
        <div class="skills">
          <span class="server">PHP7.2</span>
          <span class="server">CakePHP3.69</span>
          <span class="front">HTML5</span>
          <span class="front">CSS3</span>
          <span class="front">Bootstrap4</span>
          <span class="front">Vue.js</span>
          <span class="infra">MySQL5.7</span>
          <span class="infra">EC2</span>
          <span class="infra">RDS</span>
          <span class="infra">S3</span>
          <span class="infra">CloudFront</span>
          <span class="infra">SQS</span>
          <span class="infra">API Gateway</span>
          <span class="infra">Docker</span>
        </div>
        <p class="sub-title">プロジェクトの課題</p>
        <div class="pj-task">
          <p>クライアント企業は、土木建築系のシステム開発に強みをもっていたが、開発リソースやノウハウが乏しく、次のような課題を抱えていた。</p>
          <br/>
          <p>1. 単純にPHPに精通した技術者が少なく、開発面で不安を抱えていた。</p>
          <p>2. 総合試験でも単体レベルのバグが多く、品質面で不安を抱えていた。</p>
          <p>3. 初めてのAWS利用だったので、運用含め、全体的に不安を抱えていた。</p>
        </div>
        <p class="sub-title">現場での職務内容</p>
        <div class="role">
          <p><b>■ 基本設計 〜 結合試験の工程で次のタスクに従事</b></p>
          <p>1. テーブル定義設計 / 画面仕様書 / SwaggerでのREST-API定義</p>
          <p>2. CakePHP3.69でのRESTfulAPIの開発とコマンドクラスの開発</p>
          <p>3. 未経験のVue.jsを短期間でキャッチアップしてコンポーネント実装</p>
          <p>4. AWS対応①（Cognito周りの実装 / CORS認証 / ユーザー管理）</p>
          <p>5. AWS対応②（CloudWatchでのmonolog出力 / S3とCloudFront連携）</p>
          <p>6. デプロイ手順の構築（Babelトランスパイラ後にS3連携するnpmscript）</p>
          <br/>
          <p><b>■ 技術調査を主体的リード</b></p>
          <p>PHP経験者が乏しかったので、環境構築〜試験手順迄を主体的にリード。</p>
          <br/>
          <p><b>■ 単体試験の導入とルール策定</b></p>
          <p>単体試験の文化が無かったのでPHPUnitを導入。また運用ルールを策定することで、結合試験時に頻発していた単体レベルのバグ減少に寄与した。</p>
        </div>
        <div class="previous">
          <Link to={`/work`}>戻る</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Case2

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
