import React, { Component } from 'react'
import { Link } from "gatsby"
import kebabCase from 'lodash/kebabCase';

import "./taglist.css"

class Taglist extends Component {
  render() {
    const tags = this.props.tags
    return (
      <div id="taslist">
        {tags.map((tag) => {
          const slug = tag.fieldValue
          return (
            <Link to={`/tags/${kebabCase(slug)}/`}>
              <span className="taglist-tag">{tag.fieldValue}（{tag.totalCount}）</span>
            </Link>
          )
        })}        
      </div>
    )
  }
}

export default Taglist