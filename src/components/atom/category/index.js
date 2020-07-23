import React, { Component } from 'react'
import Image from "../image"
import { Link } from "gatsby"

import "./category.css"

class Category extends Component {
  render() {
    return (
      <div id="category">
        <div className="category-col">
          <Link to={`/`} style={{ boxShadow: `none`, color: `black` }}>
            <Image filename={`home.png`} />
          </Link>
          <p>All</p>
        </div>
        <div className="category-col">
          <Link to={`/category/web/`} style={{ boxShadow: `none`, color: `black` }}>
          <Image filename={`web.png`} />
          </Link>
          <p>WEB</p>
        </div>
        <div className="category-col">
          <Link to={`/category/テクノロジー/`} style={{ boxShadow: `none`, color: `black` }}>
          <Image filename={`technology.png`} />
          </Link>
          <p>テクノロジー</p>
        </div>
        <div className="category-col">
          <Link to={`/category/ビジネス/`} style={{ boxShadow: `none`, color: `black` }}>
          <Image filename={`business.png`} />
          </Link>
          <p>ビジネス</p>
        </div>
        <div className="category-col">
          <Link to={`/category/リベラルアーツ/`} style={{ boxShadow: `none`, color: `black` }}>
          <Image filename={`liberalarts.png`} />
          </Link>
          <p>リベラルアーツ</p>
        </div>
      </div>
    )
  }
}

export default Category