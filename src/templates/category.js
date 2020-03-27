import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/atom/posts"

const Category = ({ location, pageContext, data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <div style={{ fontSize: `24px`, fontWeight: `bold`, textAlign: `center` }}>
        {pageContext.category} ({data.allMarkdownRemark.totalCount}件)
      </div>
      <SEO title="Category posts" />
      <Posts posts={posts} />
    </Layout>
  )
};

export default Category

export const pageQuery = graphql`
  query($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categoryname: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(truncate: true)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            categoryname
            tags
            thumbnail {
              base
            }
          }
        }
      }
    }
  }
  `