import React, { useState } from 'react';
import CommentButton from './CommentButton';

const Comment = (props) => {
  const [input, setInput] = useState('');
  const [isActive, setActive] = useState(false);

  const handleChange = function (input) {
    setInput(input);
    input.trim() ? setActive(true) : setActive(false);
  };
  return (
    <div>
      <input
        className="comment"
        placeholder="Add a comment"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <CommentButton isActive={isActive} />
    </div>
  );
};

export default Comment;
