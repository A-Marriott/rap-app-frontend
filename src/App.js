import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = () =>
    fetch("http://localhost:3000/api/v1/youtube_videos", {
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setVideos(data))

  return (
    <div className="App">
      { videos && <iframe id="player" width="640" height="390"
      src={`https://www.youtube.com/embed/${videos[Math.floor(Math.random() * videos.length)].video_id}?autoplay=1&loop=1`}></iframe>}
    </div>
  );
}

export default App;
