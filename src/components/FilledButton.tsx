import React from 'react'
import './FilledButton.css'

type Bprops = {
    text: string;
    textColor: string;
    bgColor: string;
    border: boolean;
    padding?: string; 
    id?: string;
    fontSize?: string;
}

export default function FilledButton(props: Bprops) {
  return (
    <div className={'FilledButton'}>
      <button id={props.id} style={{background: props.border ? "none" : props.bgColor, color: props.textColor,border:`3px Solid ${props.bgColor}`, fontSize: props.fontSize}}>{props.text}</button>
    </div>
  )
}
