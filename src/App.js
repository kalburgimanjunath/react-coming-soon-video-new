import React from 'react';
import './style.css';
import Video from './Video';
import About from './About';
export default function App() {
  return (
    <div className="app">
      <div className="video">
        <video
          width="100%"
          height="auto"
          autoplay=""
          loop=""
          playsinline=""
          disablepictureinpicture=""
          disableremoteplayback=""
        >
          <source
            src="https://07e7a8517dd6fcab.demo.carrd.co/assets/videos/bg.mp4?v=b5552ce0"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container">
        <About />
      </div>
    </div>
  );
}
