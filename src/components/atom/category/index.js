import React, { Component } from 'react'
import Image from "../image"
import { Link } from "gatsby"

import "./category.css"

class Category extends Component {
  render() {
    return (
      <div id="category">
        <div class="category-col">
          <Link to={`/`} style={{ boxShadow: `none`, color: `black` }}>
            <Image filename={`github.jpg`} />
          </Link>
          <p>All</p>
        </div>
        <div class="category-col">
          <Link to={`/category/web/`} style={{ boxShadow: `none`, color: `black` }}>
          <Image filename={`github.jpg`} />
          </Link>
          <p>WEB</p>
        </div>
        <div class="category-col">
          <Link to={`/category/テクノロジー/`} style={{ boxShadow: `none`, color: `black` }}>
          <Image filename={`github.jpg`} />
          </Link>
          <p>テクノロジー</p>
        </div>
        <div class="category-col">
          <Link to={`/category/ビジネス/`} style={{ boxShadow: `none`, color: `black` }}>
          <Image filename={`github.jpg`} />
          </Link>
          <p>ビジネス</p>
        </div>
        <div class="category-col">
          <Link to={`/category/リベラルアーツ/`} style={{ boxShadow: `none`, color: `black` }}>
          <Image filename={`github.jpg`} />
          </Link>
          <p>リベラルアーツ</p>
        </div>
      </div>
    )
  }
}

export default Category