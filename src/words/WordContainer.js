import React, { Component } from 'react';

class WordContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {words: [], randomWord: '', rhymingWords: []}
  }

  componentDidMount() {
    this.getWords();
  }

  getWords = () => {
    fetch("http://localhost:3000/api/v1/words", {
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => {
      this.setState({words: data}, () => {
        // this.randomiseWord
        this.setState({randomWord: this.state.words[Math.floor(Math.random() * this.state.words.length)].name}, () => {
          this.getRhymingWords();
        })
      })
    })
  }

  // randomiseWord = () => {
  //   this.setState({randomWord: this.state.words[Math.floor(Math.random() * this.state.words.length)].name})
  // };

  getRhymingWords = () => {
    fetch(`https://rhymebrain.com/talk?function=getRhymes&word=${this.state.randomWord}&maxResults=50`)
    .then((response) => response.json())
    .then((data) => this.setState({rhymingWords: data}))
  }

  skipWord = () => {
    this.setState({randomWord: this.state.words[Math.floor(Math.random() * this.state.words.length)].name});
    this.getRhymingWords();
  }

  render() {
    return (
      <div>
        <button onClick={this.skipWord}>Next word</button>
        <h1>{this.state.randomWord}</h1>
        <ul>
          {this.state.rhymingWords.map((word, i) => {
            return <li>{word["word"]}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default WordContainer;
