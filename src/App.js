import { useState, useEffect } from "react";
import './App.css';

import WordContainer from './words/WordContainer';

function App() {
  const [videos, setVideos] = useState(null);
  // const [randomWord, setRandomWord] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = () => {
    fetch("http://localhost:3000/api/v1/youtube_videos", {
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setVideos(data))
  }

  // componentDidUpdate(prevProps, prevState) {
    // console.log('hey');
  // }

  // let randomWord

  // const getRhymingWords = () => {
    // fetch(`https://rhymebrain.com/talk?function=getRhymes&word=${thing}`)
  // }

  return (
    <div className="App">
      { videos && <iframe id="player" width="640" height="390"
      src={`https://www.youtube.com/embed/${videos[Math.floor(Math.random() * videos.length)].video_id}?autoplay=1&loop=1`}></iframe>}
      <WordContainer></WordContainer>
    </div>
  );
}

export default App;
