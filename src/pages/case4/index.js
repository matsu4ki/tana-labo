import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import "../case1/case-common.css"

const Case4 = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Case4" />
      <div class="case">
        <p id="title">ポイント管理システムのリプレイス対応</p>
        <p>XXXXX.</p>
        <p class="sub-title">プロジェクトの課題</p>
        <div id="pj-task">
          <p>XXXXX</p>
        </div>
        <p class="sub-title">技術領域</p>
        <div id="skills">
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
          <span class="tool">Maven</span>
          <span class="tool">A5SQL</span>
          <span class="tool">Sequel</span>
          <span class="tool">Git</span>
          <span class="tool">InteliJ</span>
          <span class="tool">Backlog</span>
        </div>
        <p class="sub-title">現場での職務内容</p>
        <div class="role">
          <p>XXXXX</p>
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
