import React, { Component } from 'react'
import { Link } from "gatsby"
import { rhythm } from "../../../utils/typography"
import Image from "../image"

class Card extends Component {
  render() {
    const node = this.props.node
    const title = node.frontmatter.title || node.fields.slug
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
          height: `370px`,
          position: `relative`
        }}>
          <article key={node.fields.slug}>
            <section>
              <Image filename={node.frontmatter.thumbnail.base} />
              <div style={{ padding: `10px 10px 0 10px` }}>
                <span style={{
                  position: `absolute`,
                  top: `0`,
                  left: `0`,
                  padding: `3px 0`,
                  width: `110px`,
                  backgroundColor: `gold`, 
                  fontSize: `14px`,
                  textAlign: `center`
                }}>
                  {node.frontmatter.category}
                </span>
                <p style={{ marginTop: `10px`, marginBottom: rhythm(1 / 4), }}>{title}</p>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }} 
                  style={{ 
                    overflow: `hidden`,
                    textOverflow: `ellipsis`,
                    whiteSpace: `nowrap`,
                    margin: `0`
                  }}
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