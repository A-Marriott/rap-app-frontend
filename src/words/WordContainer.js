import React, { Component } from 'react';

class wordContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {words: [], randomWord: 'before', rhymingWords: []}
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
        this.setState({randomWord: this.state.words[Math.floor(Math.random() * this.state.words.length)].name}, () => {
          this.getRhymingWords();
        })
      })
    })
  }

  getRhymingWords = () => {
    fetch(`https://rhymebrain.com/talk?function=getRhymes&word=${this.state.randomWord}`)
    .then((response) => response.json())
    .then((data) => this.setState({rhymingWords: data}))
  }

  render() {
    // return (
    //   <div>
    //     <h1>{this.state.randomWord}</h1>
    //     <ul>
    //       {this.state.rhymingWords.map((word, i))}
    //     </ul>
    //   </div>
    // )
    return this.state.rhymingWords.map((word, i) => {
      return <p>{word["word"]}</p>
    })
  }
}

export default wordContainer;
