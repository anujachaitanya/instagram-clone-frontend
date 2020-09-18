import React, { useState } from 'react';

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
    console.log(data);
    fetch('/api/post', {
      method: 'POST',
      body: data,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>you can add file here </label>
      <div style={{ content: file, width: '400px', height: '400px' }}></div>
      <input type="file" name="file" onChange={onChange}></input>
      <input type="text" name="hey"></input>
      <button>submit</button>
    </form>
  );
};

export default InputPicture;
