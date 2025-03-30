import React, { useState } from "react";

export default function FileUpload({ onFileUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file); 

    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="file-upload">
      <h3>Click to upload</h3>
      <p>{ selectedFile ? selectedFile.name : '' }</p>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}