import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import "./tags.css"

const Tag = ({ tag }) => (
  <Link to={`/tags/${kebabCase(tag)}/`} style={{ boxShadow: `none`, color: `black` }} >
    <div class="tags-tag">{tag}</div>
  </Link>
);

const Tags = ({ tags }) => (
  <div style={{ marginBottom: `10px` }}>
    {(tags || []).map(tag => (
      <Tag key={tag} tag={tag} />
    ))}
  </div>
);

export default Tags;