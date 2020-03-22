import React from "react"
import kebabCase from "lodash/kebabCase"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

const Tags = ({ data: { allMarkdownRemark: { group }, site: {siteMetadata: { title }}}}) => (
  <div>
    <Helmet title={title} />
    <div>
      <h1>Tags</h1>
      <div style={{ display: `flex`, flexWrap: `wrap` }}>
        {group.map(tag => (
          <div key={tag.fieldValue} style={{
            margin: ` 0 10px 10px 0`,
            padding: `3px 5px`,
            textDecoration: `none`, 
            backgroundColor: `lightpink`,
            borderRadius: `5px`,
          }}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} style={{
              boxShadow: `none`,
              color: `white`
            }}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Tags

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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