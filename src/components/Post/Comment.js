import React, { useState } from 'react';
import CommentButton from './CommentButton';

const Comment = (props) => {
  const [input, setInput] = useState('');
  const [isActive, setActive] = useState(false);

  const handleChange = function (input) {
    setInput(input);
    input.trim() ? setActive(true) : setActive(false);
  };

  const comment = function () {
    if (input.trim()) {
      setInput('');
      props.onClick(input);
    }
  };

  return (
    <div className="comment-box">
      <input
        className="comment"
        placeholder="Add a comment"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <CommentButton isActive={isActive} onClick={comment} />
    </div>
  );
};

export default Comment;
