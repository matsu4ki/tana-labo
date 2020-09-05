import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import "../case1/case-common.css"

const Case2 = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Case2" />
      <div class="case">
        <p id="title">建設現場での現場勤怠管理システム</p>
        <p>土木建設における現場管理と作業員の勤怠管理のシステム開発に従事.</p>
        <p class="sub-title">プロジェクトの課題</p>
        <div id="pj-task">
          <p>XXXXX</p>
        </div>
        <p class="sub-title">技術領域</p>
        <div id="skills">
          <span class="server">PHP7.2</span>
          <span class="server">CakePHP3.69</span>
          <span class="front">HTML5</span>
          <span class="front">CSS3</span>
          <span class="front">Bootstrap4</span>
          <span class="front">ES6</span>
          <span class="front">jQuery</span>
          <span class="front">Vue.js</span>
          <span class="infra">MySQL5.7</span>
          <span class="infra">EC2</span>
          <span class="infra">RDS</span>
          <span class="infra">S3</span>
          <span class="infra">CloudFront</span>
          <span class="infra">Cognito</span>
          <span class="infra">SQS</span>
          <span class="infra">CloudFront</span>
          <span class="infra">API Gateway</span>
          <span class="tool">Docker</span>
          <span class="tool">Github</span>
          <span class="tool">A5SQL</span>
          <span class="tool">Babel</span>
          <span class="tool">Polyfill</span>
        </div>
        <p class="sub-title">現場での職務内容</p>
        <div class="role">
          <p>XXXXX</p>
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
