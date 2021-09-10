import React, { Component } from 'react';
import styled from "styled-components";

class WordContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {words: [], randomWord: '', rhymingWords: []}
  }

  componentDidMount() {
    this.getWords();
  }

  getWords = () => {
    fetch("https://rap-app-backend.herokuapp.com/api/v1/words", {
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => {
      this.setState({words: data}, () => {
        this.randomiseWord();
      })
    })
  }

  randomiseWord = () => {
    this.setState({randomWord: this.state.words[Math.floor(Math.random() * this.state.words.length)].name}, () => {
      this.getRhymingWords();
    })
  };

  getRhymingWords = () => {
    fetch(`https://rhymebrain.com/talk?function=getRhymes&word=${this.state.randomWord}&maxResults=50`)
    .then((response) => response.json())
    .then((data) => this.setState({rhymingWords: data}))
  };

  capitalize = (string) => {
    return string[0]?.toUpperCase() + string.slice(1)
  };

  render() {
    return (
      <Container>
        <Button onClick={this.randomiseWord}>Next word</Button>
        <h1>{this.capitalize(this.state.randomWord)}</h1>
        <WordGrid>
          {this.state.rhymingWords.map((word, i) => {
            return <p>{this.capitalize(word["word"])}</p>
          })}
        </WordGrid>
      </Container>
    )
  }
}

const Container = styled.div`
  flex-grow: 1;
  flex-basis: 0;
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

const WordGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border: 2px solid black;
  overflow: scroll;
  height: 500px;
  width: 90%;
  margin: 24px auto 0 auto;
`;


export default WordContainer;
