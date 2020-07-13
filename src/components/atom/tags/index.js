import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

const Tag = ({ tag }) => (
  <Link to={`/tags/${kebabCase(tag)}/`} style={{ boxShadow: `none`, color: `black` }} >
    <div style={{
      display: `inline`,
      flexWrap: `wrap`, 
      marginRight: `10px`, 
      padding: `5px 7px`, 
      textDecoration: `none`, 
      fontSize: `12px`,
      color: `white`,
      backgroundColor: `lightpink`,
    }} className="tags-tag">{tag}</div>
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