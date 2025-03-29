import React, { useState } from 'react';
import FileUpload from './FileUpload';

export default function Form({onTextureFileUpload, onDepthMapFileUpload, onBoxColourChange}) {
  const [boxColour, setBoxColour] = useState('')

  const handleBoxColourChange = (event) => {
    setBoxColour(event.target.value)
  };

  const handleSetColour = () => {
    if (boxColour) {
      onBoxColourChange(boxColour);
    }
  }

  return (
    <div style={{
      backgroundColor: 'black',
      padding: '15px',
      borderRadius: '8px',
      position: 'absolute',
      margin: '20px',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    }}>
      <div>
        Texture
        <FileUpload onFileUpload={onTextureFileUpload} />
      </div>
      <div>
        Depth Map
        <FileUpload onFileUpload={onDepthMapFileUpload} />
      </div>    
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        Box Colour
        <input type="text" value={boxColour} onChange={handleBoxColourChange} placeholder="e.g. #47a5c1" />
        <button onClick={handleSetColour}> Set colour </button>
      </div>    
    </div>
  );
}