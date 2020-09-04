import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import "./contact.css"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <div id="contact">
        <form method="POST" action="/" >
          <p id="title">お問合せフォーム</p>
          <p>必要事項をご入力の上、「送信」ボタンを押してください！</p>
          <div>
            <span class="require">必須</span>
            <span>名前</span>
            <p><input type="text" name="name" placeholder="テスト太郎" /></p>
          </div>
          <div>
            <span class="require">必須</span>
            <span>メールアドレス</span>
            <p><input type="email" name="_replyto" placeholder="example@xxx.com" /></p>
          </div>
          <div>
            <span class="require">必須</span>
            <span>お問合わせ内容</span>
            <p><textarea rows="7" name="message" placeholder="お問合わせ内容" /></p>
          </div>
          <button type="submit" value="Send">送信する</button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
