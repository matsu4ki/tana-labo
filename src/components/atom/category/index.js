import React, { Component } from 'react'
import { Link } from "gatsby"

import "./category.css"

class Category extends Component {
  render() {
    return (
      <div id="category">
          <Link to={`/`} style={{ boxShadow: `none`, color: `black` }}>
            <span>All</span>
          </Link>
          <Link to={`/category/エンジニアリング/`} style={{ boxShadow: `none`, color: `black` }}>
            <span>エンジニアリング</span>
          </Link>
          <Link to={`/category/テクノロジー/`} style={{ boxShadow: `none`, color: `black` }}>
            <span>テクノロジー</span>
          </Link>
          <Link to={`/category/ビジネス/`} style={{ boxShadow: `none`, color: `black` }}>
            <span>ビジネス</span>
          </Link>
          <Link to={`/category/リベラルアーツ/`} style={{ boxShadow: `none`, color: `black` }}>
            <span>リベラルアーツ</span>
          </Link>
      </div>
    )
  }
}

export default Category