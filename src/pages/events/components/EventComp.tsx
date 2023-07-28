import { useState, useRef } from 'react'
import './EventComp.css'
import gsap from 'gsap'
import { Event } from '../Event';
import { eventData } from '../eventData';

type EventCompProps = {
    theme: string;
    eventData: Event;
}

export default function EventComp( {theme, eventData}: EventCompProps) {
  const [content, setcontent] = useState("more")
  let ctx = gsap.context(() => { })
  const mainRef = useRef(null);
  const descRef = useRef(null)
  const gradRef = useRef(null)
  const {name, desc, date, imgSrc, status, registerURL} = eventData;

  const handleMouseEnter = () => {
    ctx.add(() => {
      gsap.to(gradRef.current,
        {
          background: "linear-gradient(to bottom, rgba(30, 28, 28,.2) , rgba(30, 28, 28, .9))",
        })
      gsap.to(mainRef.current, {translateY: "-75%", duration: 1})
      gsap.to(descRef.current, {translateY: "-100%", duration: 1})
    })
  }

  const handleMouseLeave = () => {
    ctx.add(() => {
      gsap.to(gradRef.current,
        {
          background: "linear-gradient(to bottom, rgba(30, 28, 28,.2) 80%, rgba(30, 28, 28, .9))"
        })
      gsap.to(mainRef.current, {translateY: "0%", duration: 1})
      gsap.to(descRef.current, {translateY: "0%", duration: 1})
    })
  }

  const handleReadMore = () => {
    if(content === "more") {
      setcontent("less")
    }
    else {
      setcontent("more")
    }
  }

  return (
    <div className='container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>\
      <img src={imgSrc} alt=""  className='container_bg'/>
      <div className='container_gradient' ref={gradRef}/>
      <div className='component_main' ref={mainRef}>
        <div className='component_main_content'>
          <h2 className='component_main_header'>{name}</h2>
          <div className='component_main_info'>
            <p>{date}</p>
            <div className='component_main_statusBar'>
              <span className="dot"></span>
              <p>{status}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='component_desc' ref={descRef}>
        <div>
          <h2 className='component_main_header' style={{marginBottom: "1%"}}>Event name</h2>
          {desc.length > 80 ?
            <>
              <p>{desc.slice(0, 80)}{ content === "less"? <span>{desc.slice(81, desc.length - 1)}</span> : <span>...</span> }</p>
              <button className='component_desc_readmore' onClick={handleReadMore}><u>read {content}</u></button>
            </>
            : <p>{desc}</p>
          }

        </div>
        {registerURL && <button className='component_desc_btn'><a href={registerURL}>Register Now</a></button>}
      </div>
    </div>
  )
}
