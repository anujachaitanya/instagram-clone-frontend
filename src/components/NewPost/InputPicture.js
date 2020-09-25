import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/NewPost.css';

const InputPicture = () => {
  const [file, setFile] = useState(null);
  const history = useHistory();

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
    fetch('/api/user/post', {
      method: 'POST',
      body: data,
    }).then(() => history.push('/'));
  };

  return (
    <form onSubmit={handleSubmit} className="new-post">
      <div className="preview-content">
        <label
          className="preview-image"
          style={{ content: file }}
          htmlFor="file"
        >
          <i className="fa fa-picture-o" aria-hidden="true"></i>

          <div> Click here to add image</div>
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
          <button className="post-button">Post</button>
        </div>
      </div>
    </form>
  );
};

export default InputPicture;
