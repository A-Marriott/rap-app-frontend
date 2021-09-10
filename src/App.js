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
    <div style={{textAlign: 'center'}}>
      <Container>
        <VideoContainer></VideoContainer>
        <div style={{display: 'flex', marginTop: '30px', borderBottom: '2px solid #888888'}}>
          <Button style={{borderRadius: '8px 0 0 0', background: activeTab === 'word' ? '#4FB0C6' : 'rgba(79, 176, 198, 0.5)'}} onClick={() => setActiveTab('word')}>Word</Button>
          <Button style={{borderRadius: '0 8px 0 0', background: activeTab === 'creative' ? '#4FB0C6' : 'rgba(79, 176, 198, 0.5)'}} onClick={() => setActiveTab('creative')}>Creative prompt</Button>
        </div>
        {tabRender}
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 80%;
  margin-top: 18px;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  margin: auto;
  width: 80px;
  padding: 8px;
  color: white;
  border: none;
  transition: background 0.3s ease;
  &:hover {
    cursor: pointer;
  }
  font-size: 20px;
  width: 100%;
`;

export default App;
