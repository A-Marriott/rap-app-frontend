import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [videos, setVideos] = useState([
    { title: 'Car insurance', price: 267.13},
    { title: 'MOT', price: 132.16},
    { title: 'Exhaust', price: 50.31}
  ]);

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
      {videos?.map((video, i) => (
        <p>{video.genre}</p>
      ))}
    </div>
  );
}

export default App;
