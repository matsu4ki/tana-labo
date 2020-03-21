import React, { Component } from 'react'
import Card from "../card"

class Posts extends Component {
  render() {
    const posts = this.props.posts
    return (
      <div>
        {posts.map(({ node }) => {
          return (
            <Card node={node} />
          )
        })}
      </div>
    )
  }
}

export default Posts