import { LetterSize, PixelSize } from './Board';

export interface Position {
  x: number,
  y: number
}

export interface LetterPixel extends Position {
  active: boolean
}


export function getWord(start: Position): LetterPixel[] {
  const { x: startX, y: startY } = start;
  const word: LetterPixel[] = [];
  word.push(...getA({x: startX + (0 * LetterSize * PixelSize), y: startY}, PixelSize));
  word.push(...getR({x: startX + (1 * LetterSize * PixelSize), y: startY}, PixelSize));
  word.push(...getC({x: startX + (2 * LetterSize * PixelSize), y: startY}, PixelSize));
  word.push(...getA({x: startX + (3 * LetterSize * PixelSize), y: startY}, PixelSize));
  word.push(...getD({x: startX + (4 * LetterSize * PixelSize), y: startY}, PixelSize));
  word.push(...getE({x: startX + (5 * LetterSize * PixelSize), y: startY}, PixelSize));
  return word;
}

function getA(start: Position, size: number): LetterPixel[] {
  const { x: startX, y: startY } = start;
  return [
    {x: startX + (0 * size), y: startY + (1 * size), active: true},
    {x: startX + (0 * size), y: startY + (2 * size), active: true},
    {x: startX + (0 * size), y: startY + (3 * size), active: true},
    {x: startX + (0 * size), y: startY + (4 * size), active: true},
    {x: startX + (1 * size), y: startY + (0 * size), active: true},
    {x: startX + (1 * size), y: startY + (3 * size), active: true},
    {x: startX + (2 * size), y: startY + (0 * size), active: true},
    {x: startX + (2 * size), y: startY + (3 * size), active: true},
    {x: startX + (3 * size), y: startY + (1 * size), active: true},
    {x: startX + (3 * size), y: startY + (2 * size), active: true},
    {x: startX + (3 * size), y: startY + (3 * size), active: true},
    {x: startX + (3 * size), y: startY + (4 * size), active: true}
  ];
};

function getR(start: Position, size: number): LetterPixel[] {
  const { x: startX, y: startY } = start;
  return [
    {x: startX + (0 * size), y: startY + (0 * size), active: true},
    {x: startX + (0 * size), y: startY + (1 * size), active: true},
    {x: startX + (0 * size), y: startY + (2 * size), active: true},
    {x: startX + (0 * size), y: startY + (3 * size), active: true},
    {x: startX + (0 * size), y: startY + (4 * size), active: true},
    {x: startX + (1 * size), y: startY + (0 * size), active: true},
    {x: startX + (1 * size), y: startY + (3 * size), active: true},
    {x: startX + (2 * size), y: startY + (0 * size), active: true},
    {x: startX + (2 * size), y: startY + (3 * size), active: true},
    {x: startX + (3 * size), y: startY + (1 * size), active: true},
    {x: startX + (3 * size), y: startY + (2 * size), active: true},
    {x: startX + (3 * size), y: startY + (4 * size), active: true}
  ];
};

function getC(start: Position, size: number): LetterPixel[] {
  const { x: startX, y: startY } = start;
  return [
    {x: startX + (0 * size), y: startY + (1 * size), active: true},
    {x: startX + (0 * size), y: startY + (2 * size), active: true},
    {x: startX + (0 * size), y: startY + (3 * size), active: true},
    {x: startX + (1 * size), y: startY + (0 * size), active: true},
    {x: startX + (1 * size), y: startY + (4 * size), active: true},
    {x: startX + (2 * size), y: startY + (0 * size), active: true},
    {x: startX + (2 * size), y: startY + (4 * size), active: true},
    {x: startX + (3 * size), y: startY + (1 * size), active: true},
    {x: startX + (3 * size), y: startY + (3 * size), active: true},
  ];
};

function getD(start: Position, size: number): LetterPixel[] {
  const { x: startX, y: startY } = start;
  return [
    {x: startX + (0 * size), y: startY + (0 * size), active: true},
    {x: startX + (0 * size), y: startY + (1 * size), active: true},
    {x: startX + (0 * size), y: startY + (2 * size), active: true},
    {x: startX + (0 * size), y: startY + (3 * size), active: true},
    {x: startX + (0 * size), y: startY + (4 * size), active: true},
    {x: startX + (1 * size), y: startY + (0 * size), active: true},
    {x: startX + (1 * size), y: startY + (4 * size), active: true},
    {x: startX + (2 * size), y: startY + (0 * size), active: true},
    {x: startX + (2 * size), y: startY + (4 * size), active: true},
    {x: startX + (3 * size), y: startY + (1 * size), active: true},
    {x: startX + (3 * size), y: startY + (2 * size), active: true},
    {x: startX + (3 * size), y: startY + (3 * size), active: true},
  ];
};

function getE(start: Position, size: number): LetterPixel[] {
  const { x: startX, y: startY } = start;
  return [
    {x: startX + (0 * size), y: startY + (0 * size), active: true},
    {x: startX + (0 * size), y: startY + (1 * size), active: true},
    {x: startX + (0 * size), y: startY + (2 * size), active: true},
    {x: startX + (0 * size), y: startY + (3 * size), active: true},
    {x: startX + (0 * size), y: startY + (4 * size), active: true},
    {x: startX + (1 * size), y: startY + (0 * size), active: true},
    {x: startX + (1 * size), y: startY + (2 * size), active: true},
    {x: startX + (1 * size), y: startY + (4 * size), active: true},
    {x: startX + (2 * size), y: startY + (0 * size), active: true},
    {x: startX + (2 * size), y: startY + (2 * size), active: true},
    {x: startX + (2 * size), y: startY + (4 * size), active: true},
    {x: startX + (3 * size), y: startY + (0 * size), active: true},
    {x: startX + (3 * size), y: startY + (4 * size), active: true}
  ];
};