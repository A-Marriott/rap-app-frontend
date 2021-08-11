import { useState, useEffect } from "react";
import './App.css';

import WordContainer from './words/WordContainer';
import VideoContainer from './videos/VideoContainer';

function App() {
  return (
    <div className="App">
    <VideoContainer></VideoContainer>
      <WordContainer></WordContainer>
    </div>
  );
}

export default App;
