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
        <p>USPの記載</p>
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
