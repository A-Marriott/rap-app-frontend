import { useState, useEffect } from "react";
import './App.css';

import WordContainer from './words/WordContainer';

function App() {
  const [videos, setVideos] = useState(null);
  const [filteredVideos, setFilteredVideos] = useState(null)

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
    .then((data) => {
      setVideos(data)
      setFilteredVideos(data)
    })
  }

  const chooseGenre = (event) => {
    if (event.target.id === 'random') {
      setFilteredVideos(videos)
    } else {
    setFilteredVideos(videos.filter(video => video.genre === event.target.id))
    }
  };

  return (
    <div className="App">
      { filteredVideos && <iframe id="player" width="640" height="390"
      src={`https://www.youtube.com/embed/${filteredVideos[Math.floor(Math.random() * filteredVideos.length)].video_id}?autoplay=1&loop=1`}></iframe>}
      <button id="trap" onClick={chooseGenre}>Trap</button>
      <button id="boombap" onClick={chooseGenre}>Boombap</button>
      <button id="drill" onClick={chooseGenre}>Drill</button>
      <button id="lofi" onClick={chooseGenre}>Lofi</button>
      <button id="grime" onClick={chooseGenre}>Grime</button>
      <button id="jazz_rap" onClick={chooseGenre}>Jazz rap</button>
      <button id="random" onClick={chooseGenre}>Random</button>

      <WordContainer></WordContainer>
    </div>
  );
}

export default App;
