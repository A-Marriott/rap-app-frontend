import React, { useState } from 'react';
import styled from "styled-components";
import './App.css';

import WordContainer from './words/WordContainer';
import VideoContainer from './videos/VideoContainer';
import CreativePromptContainer from './creative_prompts/CreativePromptContainer';

function App() {
  const [promptDisplay, setPromptDisplay] = useState('word')

  // const thing = () => {
  //   return <h1>hey</h1>
  // }

  let displayRender

  if (promptDisplay === 'word') {
    displayRender = <WordContainer></WordContainer>
  } else if (promptDisplay === 'creative') {
    displayRender = <CreativePromptContainer></CreativePromptContainer>
  }

  return (
    <div className="App">
      <Container>
        <VideoContainer></VideoContainer>
        <div style={{display: 'flex', marginTop: '30px', borderBottom: '2px solid #888888'}}>
          <Button active={true} style={{borderRadius: '8px 0 0 0'}} onClick={() => setPromptDisplay('word')}>Word</Button>
          <ButtonInactive style={{borderRadius: '0 8px 0 0'}} onClick={() => setPromptDisplay('creative')}>Creative prompt</ButtonInactive>
        </div>
        {displayRender}
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
  background: #4FB0C6;
  transition: background 0.3s ease;
  &:hover {
    cursor: pointer;
  }
  font-size: 20px;
  width: 100%;
  ${({ inactive }) => inactive && `
    background: red;
  `}
`;

const ButtonInactive = styled(Button)`
  background: rgba(79, 176, 198, 0.5);
`;


export default App;
