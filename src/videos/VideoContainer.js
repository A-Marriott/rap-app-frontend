import React, { Component } from 'react';
import styled from "styled-components";

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

  deleteVideo = () => {
    // need to actually display whether video was deleted or not
    fetch(`http://localhost:3000/api/v1/youtube_videos/${this.state.randomVideo.id}`, { method: 'delete' })
    .then((response) => {
        this.skipSong();
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
      <Container>
        <ButtonGrid>
          <Button id="trap" onClick={this.chooseGenre}>Trap</Button>
          <Button id="boombap" onClick={this.chooseGenre}>Boombap</Button>
          <Button id="drill" onClick={this.chooseGenre}>Drill</Button>
          <Button id="lofi" onClick={this.chooseGenre}>Lofi</Button>
          <Button id="grime" onClick={this.chooseGenre}>Grime</Button>
          <Button id="jazz_rap" onClick={this.chooseGenre}>Jazz rap</Button>
          <Button id="random" onClick={this.chooseGenre}>Random</Button>
        </ButtonGrid>
        <YoutubePlayer id="player" title="Rap instrumental" src={`https://www.youtube.com/embed/${this.state.randomVideo.video_id}?autoplay=1`}></YoutubePlayer>
        <Button onClick={this.skipSong}>Skip song</Button>
        {/*<Button onClick={this.deleteVideo}>Delete video</Button>*/}
      </Container>
    )
  };
};

const Container = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 15px;
`;

const YoutubePlayer = styled.iframe`
  width:90%;
  height:390px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  margin: auto;
  width: 80px;
  height: 24px;
  color: white;
  border-radius: 4px;
  border: none;
  background: #4FB0C6;
  transition: background 0.3s ease;
  &:hover {
    background: #3B889B;
    cursor: pointer;
  }
`;

export default VideoContainer;
