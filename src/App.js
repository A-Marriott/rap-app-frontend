import styled from "styled-components";
import './App.css';

import WordContainer from './words/WordContainer';
import VideoContainer from './videos/VideoContainer';
import CreativePromptContainer from './creative_prompts/CreativePromptContainer';

function App() {
  return (
    <div className="App">
      <Container>
        <VideoContainer></VideoContainer>
        <CreativePromptContainer></CreativePromptContainer>
        <WordContainer></WordContainer>
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

export default App;
