import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const location = ""
const TagsPage = ({ data: { allMarkdownRemark: { group }, site: {siteMetadata: { title }}}}) => (
  <Layout location={location} title={title}>
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
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

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