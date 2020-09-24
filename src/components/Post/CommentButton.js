import React from 'react';

const CommentButton = (props) => {
  const class_ = props.isActive
    ? 'comment-button-active'
    : 'comment-button-inActive';
  return (
    <span className={class_} onClick={props.onClick}>
      Comment
    </span>
  );
};

export default CommentButton;
