import React from "react"

import { rhythm　} from "../../utils/typography"
import Header from "../header"
import Intro from "../intro"

const Layout = ({ title, children }) => {

  return (
    <div style={{ backgroundColor: `whitesmoke` }}>
      <Header title={title} />
      <Intro />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(42),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          backgroundColor: `white`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
