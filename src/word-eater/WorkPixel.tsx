import React from 'react';
import { LetterPixel } from './Word';
import { PixelSize } from './Board';

export interface WordPixelProps extends LetterPixel {}

export function WordPixel(props: WordPixelProps) {
  const style = {
    backgroundColor: props.active ? '#202020' : 'transparent',
    height: `${PixelSize}px`,
    left: `${props.x}px`,
    position: 'absolute' as 'absolute',
    top: `${props.y}px`,
    width: `${PixelSize}px`
  };
  return (<div style={style}></div>);
}