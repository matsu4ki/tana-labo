import React, { Component } from 'react'
import { Link } from "gatsby"

class Intro extends Component {
  render() {
    return (
      <div style={{
        textAlign: `center`,
        backgroundColor: `darkgray`,
        marginBottom: `30px`,
        padding: `100px 0`,
      }}>
        <Link to={`/`} style={{ boxShadow: `none`, color: `white`, fontSize: `24px`,}}>
          TaNA Profile
        </Link>
      </div>
    )
  }
}

export default Intro