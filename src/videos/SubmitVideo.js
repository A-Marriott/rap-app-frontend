import React, { useState } from 'react';

const SubmitVideo = () => {
  const [videoURL, setVideoURL] = useState('')
  const [videoGenre, setVideoGenre] = useState('trap')

  const extractID = () => {
    const startingIndex = videoURL.indexOf('v=') + 2
    const endingIndex = videoURL.indexOf('&') ? videoURL.indexOf('&') : 1000
    return videoURL.substring(startingIndex, endingIndex)
  }

  const checkValidID = () => {
    const videoID = extractID()
    fetch(`https://frozen-harbor-11206.herokuapp.com/https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v=${videoID}`, {
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        submit(videoID);
      }
    })
  }

  const submit = (videoID) => {
    fetch('https://rap-app-backend.herokuapp.com/api/v1/youtube_videos', {
      method: 'post',
      body: JSON.stringify({video_id: videoID, genre: videoGenre}),
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
    })
    .then((response) => console.log(response))
  }

  return (
    <div>
      <h3>New Post</h3>
      <div>
        <label>Video URL</label>
        <input
          type='text'
          name='videoURL'
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
          />
      </div>
      <div>
        <label>Genre</label>
        <select name="genre" value={videoGenre} onChange={(e) => setVideoGenre(e.target.value)}>
          <option id="trap">Trap</option>
          <option id="boombap">Boombap</option>
          <option id="drill">Drill</option>
          <option id="lofi">Lofi</option>
          <option id="grime">Grime</option>
          <option id="jazz_rap">Jazz Rap</option>
          <option id="freestyle">Freestyle</option>
        </select>
      </div>
      <button onClick={checkValidID}>Submit</button>
    </div>
  )
}

export default SubmitVideo
