import React from 'react'
import './FilledButton.css'

type Bprops = {
    text: string;
    textColor: string;
    bgColor: string;
    border: boolean;
    class?: string;
    fontSize?: string;
}

export default function FilledButton(props: Bprops) {
  return (
    <div className={`FilledButton ${props.class}`}>
      <button style={{background: props.border ? "none" : props.bgColor, color: props.textColor,border:`3px Solid ${props.bgColor}`, fontSize: props.fontSize}}>{props.text}</button>
    </div>
  )
}
