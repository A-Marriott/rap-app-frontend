import React, { Component } from 'react';
import styled from "styled-components";

import SubmitVideo from './SubmitVideo';

class VideoContainer extends Component {

  constructor(props) {
    super(props)
    this.genreList = ['trap', 'boombap', 'drill', 'lofi', 'grime', 'jazz_rap', 'random']
    this.state = {videos: [], filteredVideos: [], randomVideo: {}, displayNewVideoForm: false}
  };

  componentDidMount() {
    this.getVideos();
  };

  getVideos = () => {
    fetch("http://localhost:3000/api/v1/youtube_videos")
    .then((response) => response.json())
    .then((data) => {
      this.setState({videos: data, filteredVideos: data}, () => {
        this.randomiseVideo(this.state.filteredVideos);
      })
    });
  };

  randomiseVideo = (videoArray) => {
    const randomvideoObject = videoArray[Math.floor(Math.random() * videoArray.length)]
    this.setState({randomVideo: randomvideoObject})
    this.setState((prevState) => ({
      videos: [...prevState.videos.filter(video => video !== randomvideoObject)],
      filteredVideos: [...prevState.filteredVideos.filter(video => video !== randomvideoObject)]
    }));
  };

  chooseGenre = (event) => {
    this.setState({filteredVideos: this.state.videos.filter(video => (event.target.id === 'random' ? true : video.genre === event.target.id))}, () => {
      this.randomiseVideo(this.state.filteredVideos)
    })
  };

  capitalizeAndRemoveUnderscore = (string) => {
    let wordArray = []
    string.split('_').forEach(word => {
      wordArray.push(word[0]?.toUpperCase() + word.slice(1))
    })
    return wordArray.join(' ')
  };

  deleteVideo = () => {
    // need to actually display whether video was deleted or not
    fetch(`http://localhost:3000/api/v1/youtube_videos/${this.state.randomVideo.id}`, { method: 'delete' })
    .then((response) => {
        this.skipSong();
      });
  }

  toggleDisplayNewVideoForm = () => {
    this.setState({displayNewVideoForm: !this.state.displayNewVideoForm})
    console.log(this.state.displayNewVideoForm)
  };

  render() {
    return (
      <Container>
        <ButtonGrid>
          {this.genreList.map(genre => {
            return <Button id={genre} onClick={this.chooseGenre}>{this.capitalizeAndRemoveUnderscore(genre)}</Button>
          })}
        </ButtonGrid>
        <YoutubePlayer id="player" title="Rap instrumental" src={`https://www.youtube.com/embed/${this.state.randomVideo.video_id}?autoplay=1`}></YoutubePlayer>
        <div></div>
        <div>
          <LargeButton onClick={() => this.randomiseVideo(this.state.filteredVideos)}>Skip video</LargeButton>
          {/*<LargeButton onClick={this.toggleDisplayNewVideoForm}>Add video</LargeButton>*/}
          {/*<LargeButton onClick={this.deleteVideo}>Delete video</LargeButton>*/}
        </div>
        {this.state.displayNewVideoForm &&
          <SubmitVideo></SubmitVideo>
        }
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
  width:100%;
  height:390px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  margin: auto;
  width: 80px;
  padding: 4px;
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

const LargeButton = styled(Button)`
  font-size: 24px;
  width: 160px;
`

export default VideoContainer;
