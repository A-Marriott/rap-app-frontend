import React, { useState } from 'react';

const SubmitVideo = () => {
  const [videoURL, setVideoURL] = useState('')
  const [videoGenre, setVideoGenre] = useState('')

  const extractID = () => {
    console.log(videoURL)
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
          onChange={(e) => {
            setVideoURL(e.target.value)
            console.log(videoURL)
          }}
          />
      </div>
      <div>
        <label>Genre</label>
        <select name="genre">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <input
          type='text'
          name='genre'
          value={null}
          onChange={null}
          />
      </div>
      <button onClick={null}>Submit</button>
    </div>
  )
}

export default SubmitVideo
