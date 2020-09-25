import React from 'react';

const CommentButton = (props) => {
  const class_ = props.isActive ? 'button-active' : 'button-inActive';
  return (
    <button className={class_} onClick={props.onClick}>
      Comment
    </button>
  );
};

export default CommentButton;
