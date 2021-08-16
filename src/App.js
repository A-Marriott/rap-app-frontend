import styled from "styled-components";
import './App.css';

import WordContainer from './words/WordContainer';
import VideoContainer from './videos/VideoContainer';

function App() {
  return (
    <div className="App">
      <Container>
      <VideoContainer></VideoContainer>
      <WordContainer></WordContainer>
      </Container>
    </div>
  );
}

const Container = styled.div`
  margin: 18px;
  display: flex;
`;

export default App;
