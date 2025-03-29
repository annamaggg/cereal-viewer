import React from 'react';
import FileUpload from './FileUpload';

export default function Form({onTextureFileUpload, onDepthMapFileUpload}) {
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
    </div>
  );
}