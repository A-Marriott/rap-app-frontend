import React, { Component } from 'react';

class VideoContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {videos: [], filteredVideos: [], randomVideo: {}}
  };

  componentDidMount() {
    this.getVideos();
  }

  getVideos = () => {
    fetch("http://localhost:3000/api/v1/youtube_videos", {
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => {
      this.setState({videos: data, filteredVideos: data}, () => {
        this.randomiseVideo(this.state.filteredVideos);
      })
    });
  }

  randomiseVideo = (videoArray) => {
    const randomvideoObject = videoArray[Math.floor(Math.random() * videoArray.length)]
    this.setState({randomVideo: randomvideoObject})
    this.setState((prevState) => ({
      videos: [...prevState.videos.filter(video => video !== randomvideoObject)],
      filteredVideos: [...prevState.filteredVideos.filter(video => video !== randomvideoObject)]
    }));
  };

  chooseGenre = (event) => {
    if (event.target.id === 'random') {
      this.setState({filteredVideos: this.state.videos}, () => {
        this.randomiseVideo(this.state.filteredVideos)
      })
    } else {
      this.setState({filteredVideos: this.state.videos.filter(video => video.genre === event.target.id)}, () => {
        this.randomiseVideo(this.state.filteredVideos)
      })
    }
  };

  skipSong = () => {
    this.randomiseVideo(this.state.filteredVideos)
  };

  render() {
    return (
      <div>
        <iframe id="player" title="Rap instrumental" width="640" height="390"
      src={`https://www.youtube.com/embed/${this.state.randomVideo.video_id}?autoplay=1&loop=1`}></iframe>
        <button onClick={this.skipSong}>Skip song</button>
        <button id="trap" onClick={this.chooseGenre}>Trap</button>
        <button id="boombap" onClick={this.chooseGenre}>Boombap</button>
        <button id="drill" onClick={this.chooseGenre}>Drill</button>
        <button id="lofi" onClick={this.chooseGenre}>Lofi</button>
        <button id="grime" onClick={this.chooseGenre}>Grime</button>
        <button id="jazz_rap" onClick={this.chooseGenre}>Jazz rap</button>
        <button id="random" onClick={this.chooseGenre}>Random</button>
      </div>
    )
  };
};

export default VideoContainer;
