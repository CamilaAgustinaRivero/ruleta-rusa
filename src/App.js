import React, { useState } from 'react';
import ruleta from './imgs/ruleta.png';
import ruleta_full from './imgs/ruleta_full.png';
import pin from './imgs/pin.png';
import './css/App.css';

function App() {
  const [rotation, setRotation] = useState(0);

  const handleRotateClick = () => {
    const randomRotation = rotation + Math.floor(Math.random() * 360) + 90;
    setRotation(randomRotation);
  };

  return (
    <div className="container">
      <h1>La ruleta rusa del Home Office</h1>
      <div className="ruletaContainer">
        <img
          src={pin}
          className="pin"
          alt="pin"
        />
        <div className="imgsContainer">
          <img
            src={ruleta_full}
            className="ruleta_full"
            alt="ruleta_full"
          />
          <img
            src={ruleta}
            className="ruleta"
            alt="ruleta"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </div>
      </div>
      <button
        className="btn"
        onClick={handleRotateClick}
      >
        Girar
      </button>
    </div>
  );
}

export default App;
