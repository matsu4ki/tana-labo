import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Image from "../../components//atom/image"

import "../case1/case-common.css"

const Case3 = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Case3" />
      <div class="case">
        <p id="title">医療文献の特許管理システム</p>
        <div class="capture">
          <Image filename={`medical.jpg`} />
        </div>
        <p>医学論文の著作権を管理するシステム構築に従事.</p>
        <p class="sub-title">プロジェクトの基本情報</p>
        <div class="pj-info">
          <p><b>[ フェーズ ]</b> 要件定義 〜 保守運用</p>
          <p><b>[ 開発規模 ]</b> 10人</p>
          <p><b>[ 期間 ]</b> 2016.08 - 2017.10</p>
        </div>
        <p class="sub-title">プロジェクトの利用技術</p>
        <div class="skills">
            <span class="server">PHP7.0</span>
            <span class="server">CakePHP3.0</span>
            <span class="server">baserCMS</span>
            <span class="front">HTML5</span>
            <span class="front">CSS3</span>
            <span class="front">jQuery</span>
            <span class="infra">MariaDB</span>
            <span class="infra">EC2</span>
            <span class="infra">RDS</span>
            <span class="infra">S3</span>
            <span class="infra">CloudFront</span>
            <span class="infra">CloudWatch</span>
            <span class="infra">Vagrant</span>
        </div>
        <p class="sub-title">プロジェクトの課題</p>
        <div class="pj-task">
          <p>クライアント企業は、医学業界と深い繋がりを持っていたが、開発リソースやノウハウに乏しく、次のような課題を抱えていた。</p>
          <br/>
          <p>1. 単純にPHPに精通した技術者が少なく、開発面で不安を抱えていた。</p>
          <p>2. 総合試験でも単体レベルのバグが多く、品質面で不安を抱えていた。</p>
          <p>3. 開発者だけでなく、マネージメント人材にも乏しく、不安を抱えていた。</p>
        </div>
        <p class="sub-title">現場での職務内容</p>
        <div class="role">
          <p><b>■ プレイングマネージャーとして、次のタスクに従事</b></p>
          <p>1. 上流 〜 下流工程を担当し、開発 / 試験 / リリースまでのルールを策定。</p>
          <p>2. マスター系CSV取り込みバッチとAWSへの連携（画像変換後のS3へ）</p>
          <p>3. 新人教育の一環でコードレビューと一連業務引き継ぎにおける指導。</p>
          <p>4. 運用フローの策定（各種運用マニュアル + 保守開発マニュアル）</p>
          <br/>
          <p><b>■ テックリードの役割と業務効率化の施策</b></p>
          <p>
            開発現場にノウハウがない技術（CakePHP3 / ImageMagick / 全文検索）を率先して調査し、業務未経験者のフォローに努めた。
            またSlask導入やVagrantでの開発環境構築など、可能な範囲で環境改善にも貢献。
          </p>
          <br/>
          <p><b>■ 持続可能な開発体制の構築</b></p>
          <p>プログラム未経験のプロパー社員に、コードの書き方、PHP・フレームワーク開発の情報共有、簡易的なコードレビューなど人材育成に貢献することで、自身が現場退場後も業務が円滑に行えるよう対応した。</p>
        </div>
        <div class="previous">
          <Link to={`/work`}>戻る</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Case3

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
