import React, { Component } from 'react'
import { Link } from "gatsby"

import "./header.css"

class Header extends Component {
  render() {
    const title = this.props.title
    return (
      <div>
        <div id="header">
          <Link to={`/`} style={{ boxShadow: `none`, color: `white`, fontSize: `30px`, marginRight: `auto` }}>
            {title}
          </Link>
        </div>
        <div style={{ height:`52px`}}></div>
      </div>
    )
  }
}

export default Header