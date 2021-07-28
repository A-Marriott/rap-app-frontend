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

  let randomVideo = '5bDxoiUTn4w'

  if (videos !== null) {
    randomVideo = videos[Math.floor(Math.random() * videos.length)]
  }
  // if (videos === null) {
  // } else {
  //   let
  // }

  return (
    <div className="App">
      <iframe id="player" width="640" height="390"
      src={`https://www.youtube.com/embed/${randomVideo}?autoplay=1&loop=1`}>
      </iframe>
      {videos?.map((video, i) => (
        <p>{video.genre}</p>
      ))}
    </div>
  );
}

export default App;
