import React, { Component } from 'react'
import { Link } from "gatsby"

import "./category.css"

class Category extends Component {
  render() {
    return (
      <div id="category">
          <Link to={`/`} style={{ boxShadow: `none`, color: `black` }}>
            <div>All</div>
          </Link>
          <Link to={`/category/エンジニアリング/`} style={{ boxShadow: `none`, color: `black` }}>
            <div>エンジニアリング</div>
          </Link>
          <Link to={`/category/テクノロジー/`} style={{ boxShadow: `none`, color: `black` }}>
            <div>テクノロジー</div>
          </Link>
          <Link to={`/category/ビジネス/`} style={{ boxShadow: `none`, color: `black` }}>
            <div>ビジネス</div>
          </Link>
          <Link to={`/category/リベラルアーツ/`} style={{ boxShadow: `none`, color: `black` }}>
            <div>リベラルアーツ</div>
          </Link>
      </div>
    )
  }
}

export default Category