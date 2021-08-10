import React, { Component } from 'react';

class wordContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {words: [], randomWord: 'before'}
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
          this.setState({randomWord: this.state.words[Math.floor(Math.random() * this.state.words.length)].name})
        })
      })
      // .then(getRhymingWords())
  }

  render() {
    // return this.state.words.map((word, i) => {
    //   return <p>{word.name}</p>
    // })
    return <h1>{this.state.randomWord}</h1>
    // return <h1>Hello, {this.state[1]?.words.name}</h1>;
  }
}

export default wordContainer;
