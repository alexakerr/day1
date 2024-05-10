import React from 'react';
import ImageOne from './ImageOne';
import ImageTwo from './ImageTwo';
import ImageThree from './ImageThree';

const App = () => {
  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="gallery">
        <ImageOne />
        <ImageTwo />
        <ImageThree />
      </div>
    </div>
  );
};

export default App;