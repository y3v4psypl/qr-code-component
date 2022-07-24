import * as React from "react";
import "./App.css";
import Image from './images/image-qr-code.png';

function App() {
  return (
    <div id="main">
      <main>
        <div className="box">
          <div>
            <img src={Image} alt="QR-code" />
          </div>
          <div>
            <h1 id="h1">Improve your front-end skills by building projects</h1>
            <p id="p">
              Scan the QR code to visit Frontend Mentor and take your coding skills
              to the next level
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
