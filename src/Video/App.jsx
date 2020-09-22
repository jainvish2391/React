import React from "react";
import video from "../Video/waterfall.mp4";
import "./App.css";


const Video = () => {
  return (
    <div className="container">
      <video autoPlay playsInline muted src={video} />
    </div>
  );
};




function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Video />
      </div>
    </div>
  );
}
export default App;