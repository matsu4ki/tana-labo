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
            <span>Engineering</span>
          </Link>
          <Link to={`/category/テクノロジー/`} style={{ boxShadow: `none`, color: `black` }}>
            <span>Technology</span>
          </Link>
          <Link to={`/category/ビジネス/`} style={{ boxShadow: `none`, color: `black` }}>
            <span>Business</span>
          </Link>
          <Link to={`/category/リベラルアーツ/`} style={{ boxShadow: `none`, color: `black` }}>
            <span>LiberalArts</span>
          </Link>
      </div>
    )
  }
}

export default Category