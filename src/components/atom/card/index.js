import React, { Component } from 'react'
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons"
import Image from "../image"
import Tags from "../tags"
import kebabCase from 'lodash/kebabCase';

import "./card.css"

class Card extends Component {
  render() {
    const node = this.props.node
    const title = node.frontmatter.title || node.fields.slug
    library.add(fas)
    return (
      <Link to={node.fields.slug} style={{ 
        boxShadow: `none`, 
        color: `black`
      }}>
        <div className="card">
          <article key={node.fields.slug}>
            <section>
              <Image filename={node.frontmatter.thumbnail.base} />
              <div style={{ padding: `0 10px 0 10px` }}>
                <Link to={`/category/${kebabCase(node.frontmatter.categoryname)}/`} style={{ boxShadow: `none`, color: `black` }} className="card_category">
                  {node.frontmatter.categoryname}
                </Link>
                <p className="title">{title}</p>
                <div className="tag">
                  <Tags tags={node.frontmatter.tags} />
                </div>
                <div className="calender" style={{ marginBottom: `5px` }}>
                  <FontAwesomeIcon icon='calendar' />
                  <small style={{ marginLeft: `5px` }}>{node.frontmatter.date}</small>
                </div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                  className={"description"} 
                />
              </div>
            </section>
          </article>
        </div>
      </Link>
    )
  }
}

export default Card