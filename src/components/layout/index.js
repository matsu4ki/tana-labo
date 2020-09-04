import React from "react"
import Helmet from "react-helmet"
import { rhythm　} from "../../utils/typography"
import Header from "../header"
import Category from "../atom/category"
import Taglist from "../atom/taglist"
import Footer from "../footer"

const Layout = ({ location, title, tags, children }) => {

  const rootPath = `${__PATH_PREFIX__}/`
  let category
  let taglist
  let width = 28

  if (location.pathname === rootPath || location.pathname.match(/page/) || location.pathname.match(/category/) || location.pathname.match(/tags/)) {
    category = <Category />
    taglist = <Taglist tags={tags} />
    width = 47.3
  }

  return (
    <div style={{ backgroundColor: `whitesmoke`, fontFamily: `Kosugi Maru`, }}>
      <link href="https://fonts.googleapis.com/css?family=Kosugi+Maru" />
      <Helmet>
      <script id="_bownow_ts">
{`
var _bownow_ts = document.createElement('script');
_bownow_ts.charset = 'utf-8';
_bownow_ts.src = 'https://dev3-contents.bownow.jp/js/UTC_02d3e2aee9708e95103e/trace.js';
document.getElementsByTagName('head')[0].appendChild(_bownow_ts);
`}
      </script>
      </Helmet>
      <Header title={title} />
      <div style={{ margin: `35px auto 0`, maxWidth: rhythm(width) }}>
        {category}
      </div>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(width),
          padding: `${rhythm(0.6)} ${rhythm(3 / 4)}`,
          backgroundColor: `white`,
        }}
      >
        <main>{children}</main>
      </div>
      <div style={{ margin: `0 auto`, maxWidth: rhythm(width) }}>
        {category}
      </div>
      <div style={{ margin: `0 auto`, maxWidth: rhythm(width) }}>
        {taglist}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
