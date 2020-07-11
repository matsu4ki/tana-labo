import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Contact = props => {

  const siteTitle = props.data.site.siteMetadata.title
  
  return (
    <Layout location={props.location} title={siteTitle} >
      <SEO title="Contact" />
      <div>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
      </div>
    </Layout>
  );
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