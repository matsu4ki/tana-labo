import React, { Component } from 'react'
import { Link } from "gatsby"
import { rhythm } from "../../../utils/typography"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons"
import Image from "../image"
import Tags from "../tags"

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
        <div style={{
          border: `solid 1px`, 
          borderColor: `darkgray`, 
          boxShadow: `0 0 8px gray`, 
          margin: `20px`, 
          width: `335px`,
          height: `410px`,
          position: `relative`
        }}>
          <article key={node.fields.slug}>
            <section>
              <Image filename={node.frontmatter.thumbnail.base} />
              <div style={{ padding: `0 10px 0 10px` }}>
                <span style={{
                  position: `absolute`,
                  top: `0`,
                  left: `0`,
                  padding: `3px 0`,
                  width: `110px`,
                  backgroundColor: `gold`, 
                  fontSize: `12px`,
                  fontWeight: `bold`,
                  textAlign: `center`
                }}>
                  {node.frontmatter.categoryname}
                </span>
                <p style={{ marginTop: `10px`, marginBottom: rhythm(1 / 4), }}>{title}</p>
                <div>
                  <Tags tags={node.frontmatter.tags} />
                </div>
                <div style={{ marginBottom: `5px` }}>
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