import React, { Component } from 'react';
import styled from "styled-components";

class VideoContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {prompts: [], randomPrompt: ''}
  };

  componentDidMount() {
    this.getPrompts();
  }

  getPrompts = () => {
    fetch("https://rap-app-backend.herokuapp.com/api/v1/creative_prompts")
    .then((response) => response.json())
    .then((data) => {
      this.setState({prompts: data}, () => {
        this.randomisePrompt();
      });
    });
  }

  randomisePrompt = () => {
    this.setState({randomPrompt: this.state.prompts[Math.floor(Math.random() * this.state.prompts.length)].prompt})
  }


  render() {
    return <PromptText>{this.state.randomPrompt}</PromptText>
  };
};

const PromptText = styled.p`
  font-size: 24px;
`;

export default VideoContainer;
