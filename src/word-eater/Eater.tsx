import React from 'react';
import { Position } from './Word';
import { PixelSize } from './Board';

export interface EaterProps extends Position {}

export function Eater(props: EaterProps) {
  const style = {
    fontSize: `${PixelSize}px`,
    height: `${PixelSize}px`,
    left: `${props.x}px`,
    position: 'absolute' as 'absolute',
    top: `${props.y}px`,
    width: `${PixelSize}px`
  };
  return (<div style={style}>👾</div>);
}