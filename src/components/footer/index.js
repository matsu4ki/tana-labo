import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div style={{
        textAlign: `center`,
        backgroundColor: `dimgray`
      }}>
        <p style={{ 
          padding: `10px 0`,
          color: `white`,
        }}>©Copyright2020 TaNA LABO. All Rights Reserved.</p>
      </div>
    )
  }
}

export default Footer