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
    fetch("http://localhost:3000/api/v1/creative_prompts", {
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
    })
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
    return (
      <Container>
        <PromptText>{this.state.randomPrompt}</PromptText>
      </Container>
    )
  };
};

const Container = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;

const PromptText = styled.p`
  max-width: 300px;
`;

export default VideoContainer;
