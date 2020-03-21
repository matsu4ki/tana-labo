import React from "react"

import { rhythm　} from "../../utils/typography"
import Header from "../header"
import Intro from "../intro"

const Layout = ({ location, title, children }) => {

  const rootPath = `${__PATH_PREFIX__}/`
  let intro
  let width = 32

  if (location.pathname === rootPath) {
    intro = <Intro />
    width = 42
  }

  return (
    <div style={{ backgroundColor: `whitesmoke`, fontFamily: `Kosugi Maru`, }}>
      <link href="https://fonts.googleapis.com/css?family=Kosugi+Maru" />
      <Header title={title} />
      {intro}
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(width),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          backgroundColor: `white`,
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
