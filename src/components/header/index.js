import React, { Component } from 'react'
import { Link } from "gatsby"

class Header extends Component {
  render() {
    const title = this.props.title
    return (
      <div style={{ textAlign: `center`, backgroundColor: `steelblue`, display: `flex`, justifyContent: `flex-end` }}>
        <Link to={`/`} style={{ boxShadow: `none`, color: `white`, fontSize: `35px`, marginRight: `auto`, marginLeft: `50px`}}>
          {title}
        </Link>
        <Link to={`/`} style={{ boxShadow: `none`, color: `white`, fontSize: `12px`, margin: `0 20px`, paddingTop: `6px` }}>
          <div style={{ borderBottom: `solid 1px` }}>リベラルアーツ<br/><span style={{ fontSize: `8px` }}>Liberal-Arts</span></div>
        </Link>
        <Link to={`/`} style={{ boxShadow: `none`, color: `white`, fontSize: `12px`, margin: `0 20px`, paddingTop: `6px` }}>
          <div style={{ borderBottom: `solid 1px` }}>テクノロジー<br/><span style={{ fontSize: `8px` }}>Technology</span></div>
        </Link>
        <Link to={`/`} style={{ boxShadow: `none`, color: `white`, fontSize: `12px`, margin: `0 20px`, paddingTop: `6px` }}>
          <div style={{ borderBottom: `solid 1px` }}>ビジネス<br/><span style={{ fontSize: `8px` }}>Buisiness</span></div>
        </Link>
      </div>
    )
  }
}

export default Header