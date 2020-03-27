import React, { Component } from 'react'
import Card from "../card"
import "./post.css"

class Posts extends Component {
  render() {
    const posts = this.props.posts
    return (
      <div id="post">
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