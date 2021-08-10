import React, { Component } from 'react';

class wordContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {words: [], randomWord: 'before'}
  }
  // if (props.words) {
    // return <h3>{props.words[Math.floor(Math.random() * props.words.length)].name}</h3>
  // }

  componentDidMount() {
    this.getWords();
  }

  // componentDidUpdate() {
  //   // if (!this.props.randomWord) {
  //     // this.getRandomWord();
  //   // }
  //   console.log('hey');
  // }

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
          this.setState()
        })
      })
      // .then(setRandomWord(words[Math.floor(Math.random() * words.length)].name))
      // .then(getRhymingWords())
  }

  // getRandomWord = () => {
  //   this.setState({randomWord: 'after'})
  // }

  render() {
    // return this.state.words.map((word, i) => {
    //   return <p>{word.name}</p>
    // })
    return <h1>{this.state.randomWord}</h1>
    // return <h1>Hello, {this.state[1]?.words.name}</h1>;
  }
}

export default wordContainer;
