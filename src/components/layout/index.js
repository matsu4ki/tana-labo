import React from "react"
import { rhythm　} from "../../utils/typography"
import Header from "../header"
import Intro from "../intro"
import Category from "../atom/category"
import Footer from "../footer"

const Layout = ({ location, title, children }) => {

  const rootPath = `${__PATH_PREFIX__}/`
  let intro
  let category
  let width = 28

  if (location.pathname === rootPath || location.pathname.match(/page/) || location.pathname.match(/category/) || location.pathname.match(/tags/)) {
    intro = <Intro />
    category = <Category />
    width = 47.3
  }

  return (
    <div style={{ backgroundColor: `whitesmoke`, fontFamily: `Kosugi Maru`, }}>
      <link href="https://fonts.googleapis.com/css?family=Kosugi+Maru" />
      <Header title={title} />
      {intro}
      <div style={{ margin: `0 auto`, maxWidth: rhythm(width) }}>
        {category}
      </div>
      <div
        style={{
          marginBottom: `30px`,
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(width),
          padding: `${rhythm(0.6)} ${rhythm(3 / 4)}`,
          backgroundColor: `white`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
