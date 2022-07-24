import React from 'react';
import './App.css';
import Image from "./images/image-qr-code.png"

function App() {
  return (
      <div id="main">
          <div className="box">
              <img src={Image} alt="QR-code"/>
              <p id="p1">Improve your front-end skills by building projects</p>
              <p id="p2">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
      </div>
  );
}

export default App;
