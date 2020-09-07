import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Image from "../../components//atom/image"

import "./about.css"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <div id="about">
        <p id="title">管理人について</p>
        <p>ブログをご覧いただき、ありがとうございます！</p>
        <p>当ブログは私が学んだことをアウトプットする場です。</p>
        <div>
          <div id="profile">
            <div id="prof-icon">
              <Image filename={`prof-icon.png`} />
            </div>
            <p id="name">Shintarou Tanaka</p>
            <p id="job">Project manager / Software engineer</p>
            <div id="sns">
              <a href="https://github.com/machio77777" target="_blank" rel="noopener noreferrer"><Image filename={`github_logo-light.png`} /></a>
              <a href="https://twitter.com/tanashin77777" target="_blank" rel="noopener noreferrer"><Image filename={`twitter_logo.png`} /></a>
              <a href="https://www.instagram.com/?hl=ja" target="_blank" rel="noopener noreferrer"><Image filename={`instagram-logo.png`} /></a>
              <a href="https://booklog.jp/users/machio77777" target="_blank" rel="noopener noreferrer"><Image filename={`booklog.jpeg`} /></a>
              <a href="https://qiita.com/machio77777" target="_blank" rel="noopener noreferrer"><Image filename={`qiita-icon.png`} /></a>
              <a href="https://scrapbox.io/gogo71889-37308989/" target="_blank" rel="noopener noreferrer"><Image filename={`scrapbox_logo.png`} /></a>
            </div>
          </div>
          <p class="sub-title">ブログについて</p>
          <p>次の技術で構築しています。</p>
          <div id="blog">
            <Image filename={`gatsby.png`} />
            <Image filename={`react.png`} />
            <Image filename={`firebase.png`} />
            <Image filename={`html.png`} />
            <Image filename={`css.jpg`} />
          </div>
            <p class="sub-title">運営しているサイト</p>
          <div id="manage-site">
            <div class="manage-site-sub">
              <a href="/" rel="noopener noreferrer">
                <Image filename={`fukuoka.jpg`} />
                <div class="manage-site-sub-title">リンクを準備中</div>
              </a>
            </div>
            <div class="manage-site-sub">
              <a href="/" rel="noopener noreferrer">
                <Image filename={`fukuoka.jpg`} />
                <div class="manage-site-sub-title">リンクを準備中</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
