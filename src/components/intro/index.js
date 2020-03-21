import React, { Component } from 'react'
import Image from "../atom/image"

class Intro extends Component {
  render() {
    return (
      <div style={{
        textAlign: `center`,
        backgroundColor: `darkgray`,
        marginBottom: `30px`,
        position: `relative`,
      }}>
        <Image filename={`intro.png`} />
          <div style={{
          position: `absolute`,
          margin: `auto`,
          top: `45%`,
          right: `0`,
          bottom: `0`,
          left: `0`,
        }}
        >
          <div style={{ 
            margin: `0 auto`, 
            padding: `5px`,
            width: `200px`, 
            fontSize: `16px`,
            borderRadius: `5px`, 
            backgroundColor: `dimgray` 
          }}>
            <a href="https://machio77777.github.io/tana-profile/" style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `white`
            }}>
              My Profile
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro