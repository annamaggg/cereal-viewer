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
    <div className='form' >
      <div className='form--section'>
        <h3 className='form--section-header'>Texture</h3>
        <FileUpload onFileUpload={onTextureFileUpload} />
      </div>
      <div className='form--section'>
        <h3 className='form--section-header'>Depth Map</h3>
        <FileUpload onFileUpload={onDepthMapFileUpload} />
      </div>    
      <div className='form--section'>
        <h3 className='form--section-header'>Box Colour</h3>
        <input className='form--input' type="text" value={boxColour} onChange={handleBoxColourChange} placeholder="e.g. #47a5c1" />
        <button className='form--button' onClick={handleSetColour}> Set colour </button>
      </div>    
    </div>
  );
}