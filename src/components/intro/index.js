import React, { Component } from 'react'
import Image from "../atom/image"

import "./intro.css"

class Intro extends Component {
  render() {
    return (
      <div style={{
        textAlign: `center`,
        backgroundColor: `darkgray`,
        margin: `0 auto 30px`,
        position: `relative`,
        maxWidth: `1500px`,
      }}>
        <Image filename={`intro.png`} />
        <div id="intro">
          <div id="job">
            <p>MY JOB</p>
            <p>I'm a Software Engineer</p>
          </div>
          <div id="prof">
            <a href="https://machio77777.github.io/tana-profile/" style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `white`
            }} target="_blank" rel="noopener noreferrer">
            My Profile
            </a>
          </div>
          <div id="social">
            <a href="https://github.com/machio77777" target="_blank" rel="noopener noreferrer"><Image filename={`github.jpg`} /></a>
            <a href="https://twitter.com/tanashin77777" target="_blank" rel="noopener noreferrer"><Image filename={`twitter.png`} /></a>
            <a href="https://qiita.com/machio77777" target="_blank" rel="noopener noreferrer"><Image filename={`qiita.png`} /></a>
            <a href="https://booklog.jp/users/machio77777" target="_blank" rel="noopener noreferrer"><Image filename={`booklog.jpeg`} /></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro