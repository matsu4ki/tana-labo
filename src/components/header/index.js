import React, { Component } from 'react'
import { Link } from "gatsby"
import { rhythm　} from "../../utils/typography"

import "./header.css"

class Header extends Component {

  render() {
    const title = this.props.title
    const width = 47.3
    return (
      <div>
        <div id="header">
          <div id="header-contents"
            style={{
              margin: `0 auto`,
              padding: `0 35px`,
              maxWidth: rhythm(width),
            }}
          >
            <div>
              <Link to={`/`} style={{ fontSize: `30px`, marginRight: `auto` }}>{title}</Link>
            </div>
            <div class="header-sub">
              <Link to={`/`}>Home</Link>
            </div>
            <div class="header-sub">
              <Link to={`/about`}>About</Link>
            </div>
            <div class="header-sub">
              <Link to={`/work`}>Work</Link>
            </div>
            <div class="header-sub">
              <Link to={`/contact`}>Contact</Link>
            </div>
          </div>
        </div>
        <div style={{ height:`52px`}}></div>
      </div>
    )
  }
}

export default Header