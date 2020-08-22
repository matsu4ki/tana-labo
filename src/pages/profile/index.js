import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"

const Profile = props  => {
  return (
    <Layout location={props.location} title={props.data.site.siteMetadata.title} >
      <div>
        <div>
          <p>自己紹介</p>
        </div>
        <div>
          <p>自己PR</p>
        </div>
        <div>
          <p>開発実績</p>
        </div>
      </div>
    </Layout>
  )
}

export default Profile

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`