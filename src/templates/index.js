import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/atom/posts"
import Pagination from "../components/pagination"

const Index = props => {
  const siteTitle = props.data.site.siteMetadata.title
  const posts = props.data.posts.edges
  const tags = props.data.tags.group
  return (
    <Layout location={props.location} title={siteTitle} tags={tags} >
      <SEO title="All posts" />
      <Posts posts={posts} />
      <Pagination props={props} />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query ($skip: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    posts:allMarkdownRemark( 
      sort: { fields: [frontmatter___date], order: DESC } 
      skip: $skip ,
      limit: 12 
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
    tags:allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
