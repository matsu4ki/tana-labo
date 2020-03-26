import React, { Component } from 'react'
import { Link } from "gatsby"

class Header extends Component {
  render() {
    const title = this.props.title
    return (
      <div style={{ textAlign: `center`, backgroundColor: `steelblue` }}>
        <Link to={`/`} style={{ boxShadow: `none`, color: `white`, fontSize: `35px`, marginRight: `auto` }}>
          {title}
        </Link>
      </div>
    )
  }
}

export default Header