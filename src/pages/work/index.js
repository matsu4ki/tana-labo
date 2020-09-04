import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import "./work.css"

const Work = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Work" />
      <div id="work">
        <p id="title">これまでの経歴について</p>
        <p>XXXX</p>
        <p>開発事例</p>
        <div id="case">
          <div>MAツール</div>
          <div>建築現場管理システム</div>
          <div>医学論文特許システム</div>
          <div>ポイント管理システム</div>
          <div>販売管理システム</div>
          <div>メガバンクの基盤構築</div>
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
