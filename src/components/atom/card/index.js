import React, { Component } from 'react'
import { Link } from "gatsby"
import { rhythm } from "../../../utils/typography"

class Card extends Component {
  render() {
    const node = this.props.node
    const title = node.frontmatter.title || node.fields.slug
    return (
      <div>
        <article key={node.fields.slug}>
          <header>
            <h3 style={{ marginBottom: rhythm(1 / 4), }}>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
          </header>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </section>
        </article>
      </div>
    )
  }
}

export default Card