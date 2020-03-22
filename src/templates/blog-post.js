import React from "react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./blog-post.css"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <div style={{ marginBottom: `10px` }}>
            <div style={{
              display: `inline-block`,
              marginRight: `10px`,
              padding: `3px 0`,
              width: `110px`,
              backgroundColor: `gold`, 
              fontSize: `12px`,
              fontWeight: `bold`,
              textAlign: `center`,
            }}>{post.frontmatter.categoryname}</div>
            <p style={{ display: `inline-block`, marginBottom: `0` }}>{post.frontmatter.date}</p>
          </div>
          <div style={{ marginBottom: `10px` }}>
            {(post.frontmatter.tags || []).map(tag => (
              <div style={{
                display: `inline`,
                flexWrap: `wrap`, 
                marginRight: `10px`, 
                padding: `5px 10px`, 
                textDecoration: `none`, 
                fontSize: `14px`,
                color: `white`,
                backgroundColor: `lightpink`,
              }}>{tag}</div>
            ))}
          </div>
          <h1
            style={{
              margin: `0 0 15px 0`,
              fontSize: `22px`,
              fontFamily: `Kosugi Maru`
            }}
          >
            {post.frontmatter.title}
          </h1>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categoryname
        tags
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
