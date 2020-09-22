import React, { useState } from 'react';
import '../../styles/NewPost.css';

const InputPicture = () => {
  const [file, setFile] = useState(null);
  const onChange = (event) => {
    const [image] = event.target.files;
    const reader = new FileReader();
    reader.onload = () => {
      setFile(`url(${reader.result})`);
    };
    if (image) {
      reader.readAsDataURL(image);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('/api/post', {
      method: 'POST',
      body: data,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="new-post">
      <div className="preview-content">
        <label class="preview-image" style={{ content: file }} htmlFor="file">
          you can add file here
        </label>
        <div className="contents">
          <input
            type="file"
            name="file"
            id="file"
            onChange={onChange}
            required
          />
          <textarea
            className="caption"
            placeholder="Add your caption here"
            type="text"
            name="caption"
          />
          <button className="post-button">submit</button>
        </div>
      </div>
    </form>
  );
};

export default InputPicture;
