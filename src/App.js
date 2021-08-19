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
      <div>
        <CreativePromptContainer></CreativePromptContainer>
        <WordContainer></WordContainer>
      </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  margin: 18px;
  display: flex;
`;

export default App;
