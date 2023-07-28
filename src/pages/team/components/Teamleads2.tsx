import React from 'react';
import './teamleads2.css';

interface PersonProps {
    name?: string;
    position?: string;
    width?:string;
    height?:string;
    border?:string;
    padding?:string;
    backgroundColor?:string;
    img?:string;
    class?:string;
  }

function Teamleads2(props: PersonProps){
  return (
    <div className={`teamlead2 ${props.class}`} style={{width:props.width,border:props.border,backgroundColor:props.backgroundColor,paddingLeft:'20px',borderRadius:'20px',lineHeight:'2em'}}>
     
     <div>
      <div>{props.position}</div>
      <h1>{props.name}</h1>
      </div>
      <img src={props.img}/>
    </div>
  )
}

export default Teamleads2
