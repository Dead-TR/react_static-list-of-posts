import React from 'react';
import './Post.css';
import PropTypes from 'prop-types';
import { User } from './User/User';
import { CommentList } from './CommentList/CommentList';

export const Post = ({ post }) => {
  const tittle = (post.title)[0].toUpperCase() + (post.title).slice(1);
  const message = (post.body)[0].toUpperCase() + (post.body).slice(1);

  return (
    <>
      <h3 className="Post__tittle">{tittle}</h3>
      <p>{message}</p>
      <User userId={post.userId} />
      <CommentList postId={post.id} />
    </>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
