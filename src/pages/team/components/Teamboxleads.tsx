import React from 'react';
import './teamboxleads.css';

interface PersonProps {
    name?: string;
    position?: string;
   
    height?:string;
    border?:string;
    padding?:string;
    backgroundColor?:string;
    img?:string;
    class?:string;
  }

function Teamboxleads(props: PersonProps){
  return (
    <div className={`teamboxlead ${props.class}`} style={{border:props.border,backgroundColor:props.backgroundColor,padding:props.padding,borderRadius:'20px',lineHeight:'2em'}}>
     <img src={props.img}/>
     <div>
      <div>{props.position}</div>
      <h1>{props.name}</h1>
      </div>
    </div>
  )
}

export default Teamboxleads
