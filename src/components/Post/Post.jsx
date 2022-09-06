import React from 'react';
import './post.css';

const Post = (props) => {
  return (
    <>
    <div className="post">
      <div className="post__wrapper">
        <span>{ props.title }</span>
      </div>
    </div>
    </>
  );
};

export default Post;
