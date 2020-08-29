import React, { Component } from 'react'
import { Link } from "gatsby"
import Img from "../image"

import "./category.css"

class Category extends Component {
  render() {
    return (
      <div id="category">
        <div className="category-col">
          <Link to={`/`}><Img filename={`home.png`} /></Link>
          <p>All</p>
        </div>
        <div className="category-col">
          <Link to={`/category/システム開発/`}><Img filename={`system.png`} /></Link>
          <p>システム開発</p>
        </div>
        <div className="category-col">
          <Link to={`/category/ビジネス/`}><Img filename={`business.png`} /></Link>
          <p>ビジネス</p>
        </div>
        <div className="category-col">
          <Link to={`/category/マーケティング/`}><Img filename={`marketing.png`} /></Link>
          <p>マーケティング</p>
        </div>
        <div className="category-col">
          <Link to={`/category/リベラルアーツ/`}><Img filename={`liberalarts.png`} /></Link>
          <p>リベラルアーツ</p>
        </div>
      </div>
    )
  }
}

export default Category