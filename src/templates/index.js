import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/atom/posts"
import Pagination from "../components/atom/pagination"

const Index = props => {

  return (
    <Layout location={props.location} title={props.data.site.siteMetadata.title} tags={props.data.tags.group} >
      <SEO title="All posts" />
      <Posts posts={props.data.posts.edges} />
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
      skip: $skip
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
            perma
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