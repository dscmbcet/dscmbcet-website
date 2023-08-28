import { useState, useRef } from 'react'
import './EventComp.css'
import gsap from 'gsap'
import { Event } from '../Event';
import { eventData } from '../eventData';
import { DocumentData, Timestamp } from 'firebase/firestore';

type EventCompProps = {
    theme: string;
    eventData: DocumentData;
}

export default function EventComp( {theme, eventData}: EventCompProps) {
  const [content, setcontent] = useState("more")
  let ctx = gsap.context(() => { })
  const mainRef = useRef(null);
  const descRef = useRef(null)
  const gradRef = useRef(null)

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

  const formatDate = (t: Timestamp): string[] => {
    const date = t.toDate();
    const day = date.getDate();
    let daySuffix = 'th';

    if (day === 1 || day === 21 || day === 31) {
        daySuffix = 'st';
    } else if (day === 2 || day === 22) {
        daySuffix = 'nd';
    } else if (day === 3 || day === 23) {
        daySuffix = 'rd';
    }
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.toLocaleString('default', { year: 'numeric' });

    return [`${day}${daySuffix}`, month, year];
};

  const handleReadMore = () => {
    if(content === "more") {
      setcontent("less")
    }
    else {
      setcontent("more")
    }
  }

  return (
    <div className='container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={eventData.imgSrc} alt="eventData.name"  className='container_bg'/>
      <div className='container_gradient' ref={gradRef}/>
      <div className='component_main' ref={mainRef}>
        <div className='component_main_content'>
          <h2 className='component_main_header'>{eventData.name}</h2>
          <div className='component_main_info'>
            <p>{formatDate(eventData.date)[0]} {formatDate(eventData.date)[1]}{' '}</p>
            <div className='component_main_statusBar'>
              <span className="dot"></span>
              <p>{eventData.status}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='component_desc' ref={descRef}>
        <div>
          <h2 className='component_main_header' style={{marginBottom: "1%"}}>{eventData.name}</h2>
          {eventData.desc.length > 80 ?
            <>
              <p>{eventData.desc.slice(0, 80)}{ content === "less"? <span>{eventData.desc.slice(81, eventData.desc.length - 1)}</span> : <span>...</span> }</p>
              <button className='component_desc_readmore' onClick={handleReadMore}><u>read {content}</u></button>
            </>
            : <p>{eventData.desc}</p>
          }

        </div>
        {eventData.registerURL && <button className='component_desc_btn'><a href={eventData.registerURL}>Register Now</a></button>}
      </div>
    </div>
  )
}
