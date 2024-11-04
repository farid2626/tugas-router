
import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  return (
    <div className="container">
      <h2>Blog List</h2>
      <ul>
        <li>
          <Link to="/blogs/1">Adding LaTeX Equations in AstroPaper blog posts</Link>
        </li>
        <li>
          <Link to="/blogs/2">How to use Git Hooks to set Created and Modified Dates</Link>
        </li>
        <li>
          <Link to="/blogs/3">How to add a new Social Icon to AstroPaper</Link>
        </li>
        <li>
          <Link to="/blogs/4">Predefined color schemes</Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogList;
