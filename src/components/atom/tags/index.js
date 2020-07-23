import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import "./tags.css"

const Tags = ({ tags }) => (
  <div style={{ marginBottom: `10px` }}>
    {(tags || []).map(tag => (
      <Link to={`/tags/${kebabCase(tag)}/`} style={{ boxShadow: `none`, color: `black` }} >
        <div className="tags-tag">{tag}</div>
      </Link>
    ))}
  </div>
);

export default Tags;