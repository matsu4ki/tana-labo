import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import "./case-common.css"

const Case1 = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Case1" />
      <div class="case">
        <p id="title">BtoB向けのMAツール開発</p>
        <p>BtoB向けのMAツール開発PJにて、プロジェクト管理やチームビルディングに従事.</p>
        <p class="sub-title">プロジェクトの課題</p>
        <div id="pj-task">
          <p>XXXXX</p>
        </div>
        <p class="sub-title">技術領域</p>
        <div id="skills">
          <span class="server">Ruby2.4</span>
          <span class="server">Rails5.1</span>
          <span class="front">HTML5</span>
          <span class="front">CSS3</span>
          <span class="infra">MySQL5.7</span>
          <span class="infra">Aurora</span>
          <span class="infra">CloudFront</span>
          <span class="infra">Firehose</span>
          <span class="infra">CloudFront</span>
          <span class="infra">CloudWatch</span>
          <span class="infra">API Gateway</span>
          <span class="infra">Redshift</span>
          <span class="infra">S3</span>
          <span class="infra">SQS</span>
          <span class="infra">Elastic Beanstalk</span>
          <span class="tool">Github</span>
          <span class="tool">Docker Compose</span>
          <span class="tool">Slack</span>
          <span class="tool">Chatwork</span>
          <span class="tool">Redmine</span>
        </div>
        <p class="sub-title">現場での職務内容</p>
        <div class="role">
          <p>XXXXX</p>
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
