import React, { useState } from 'react';
import styled from "styled-components";

import WordContainer from './words/WordContainer';
import VideoContainer from './videos/VideoContainer';
import CreativePromptContainer from './creative_prompts/CreativePromptContainer';

function App() {
  const [activeTab, setActiveTab] = useState('word')

  let tabRender

  if (activeTab === 'word') {
    tabRender = <WordContainer></WordContainer>
  } else if (activeTab === 'creative') {
    tabRender = <CreativePromptContainer></CreativePromptContainer>
  }

  return (
    <Container>
      <VideoContainer></VideoContainer>
      <ButtonContainer>
        <Button position={'left'} active={activeTab === 'word'} onClick={() => setActiveTab('word')}>Word</Button>
        <Button position={'right'} active={activeTab === 'creative'} onClick={() => setActiveTab('creative')}>Creative prompt</Button>
      </ButtonContainer>
      {tabRender}
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  text-align: center;
  margin: 18px auto 0 auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 32px;
  border-bottom: 2px solid #888888;
`;

const Button = styled.button`
  margin: auto;
  width: 80px;
  padding: 8px;
  color: white;
  border: none;
  transition: background 0.3s ease;
  font-size: 20px;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
  background: ${props => (props.active ? '#4FB0C6' : 'rgba(79, 176, 198, 0.5)')};
  border-radius: ${props => (props.position === 'left' ? '8px 0 0 0' : '0 8px 0 0')};
`;

export default App;
