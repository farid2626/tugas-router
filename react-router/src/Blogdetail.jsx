import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <h2>Blog Detail</h2>
      <p>Displaying details for blog post ID: {id}</p>
    </div>
  );
};

export default BlogDetail;
