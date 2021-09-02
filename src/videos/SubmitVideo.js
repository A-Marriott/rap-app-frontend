import React, { useState } from 'react';

const SubmitVideo = () => {
  const [videoURL, setVideoURL] = useState('')
  const [videoGenre, setVideoGenre] = useState('')

  const extractID = () => {
    console.log(videoURL.indexOf('v='))
    console.log(videoGenre)
    // https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v=C6-OYCprn2Q
    // Use this link to check for valid id
  }

  const submit = () => {
    extractID()
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
      <button onClick={submit}>Submit</button>
    </div>
  )
}

export default SubmitVideo
