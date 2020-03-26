import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/atom/posts"

const CategoryIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.posts.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Posts posts={posts} />
    </Layout>
  )
}

export default CategoryIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    posts:allMarkdownRemark( 
      sort: { fields: [frontmatter___date], order: DESC } 
      filter: {frontmatter: {categoryslug: {eq: "liberalarts"}}}
    ) {
      edges {
        node {
          excerpt
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