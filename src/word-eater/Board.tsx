import React, { Component } from 'react';
import { Position, LetterPixel, getWord } from './Word';
import { WordPixel } from './WorkPixel';
import { Eater } from './Eater';

export const PixelSize = 30;
export const LetterSize = 5;
export const NumberOfLetters = 6;
export const Padding = 1;

export type BoardState = {
  word?: LetterPixel[],
  eater?: Position
}

class Board extends Component<{}, BoardState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      word: getWord({x: (Padding * PixelSize), y: (Padding * PixelSize)})
    };
  }

  componentDidMount() {
    setInterval(() => this.turn(), 1000);
  }

  getBoardStyle() {
    const height = PixelSize * LetterSize + (Padding * 2 * PixelSize);
    const width = PixelSize * LetterSize * NumberOfLetters + (Padding * PixelSize);
    return {
      height: `${height}px`,
      backgroundColor: '#BEBEBE',
      width: `${width}px`,
    };
  }

  render() {
    const { word, eater } = this.state;
    return (
      <div style={this.getBoardStyle()}>
        {word && word.map(pixel => <WordPixel x={pixel.x} y={pixel.y} active={pixel.active} key={`${pixel.x},${pixel.y}`}/>)}
        {eater && <Eater x={eater.x} y={eater.y} />}
      </div>
    );
  }

  private turn() {
    if (this.state.word) {
      const randomX = Math.floor(Math.random() * (LetterSize * NumberOfLetters + (Padding)));
      const randomY = Math.floor(Math.random() * (LetterSize + (Padding * 2)));
      this.setState({
        eater: {x: (randomX * PixelSize), y: (randomY * PixelSize)}
      });
      let found = false;
      const newWord = this.state.word.slice();
      newWord.forEach(pixel => {
        if (!found && pixel.active && pixel.x === (randomX * PixelSize) && pixel.y === (randomY * PixelSize)) {
          pixel.active = false;
          found = true;
        }
      });
      if (found) {
        this.setState({
          word: newWord
        });
      }
    }
  }
}

export default Board;
