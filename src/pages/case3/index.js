import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import "../case1/case-common.css"

const Case3 = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Case3" />
      <div class="case">
        <p id="title">医療文献の特許管理システム</p>
        <p>XXXXX.</p>
        <p class="sub-title">プロジェクトの課題</p>
        <div id="pj-task">
          <p>XXXXX</p>
        </div>
        <p class="sub-title">技術領域</p>
        <div id="skills">
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
            <span class="infra">Vagrant</span>
            <span class="tool">ImageMagick</span>
            <span class="tool">A5SQL</span>
            <span class="tool">Slack</span>
        </div>
        <p class="sub-title">現場での職務内容</p>
        <div class="role">
          <p>XXXXX</p>
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
