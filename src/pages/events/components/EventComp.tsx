import { useState, useRef } from 'react'
import './EventComp.css'
import gsap from 'gsap'

type EventCompProps = {
    theme: string;
}

export default function EventComp( props: EventCompProps) {
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
      <div className='container_gradient' ref={gradRef}/>
      <div className='component_main' ref={mainRef}>
        <div className='component_main_content'>
          <h2 className='component_main_header'>Event name</h2>
          <div className='component_main_info'>
            <p>Dates</p>
            <div className='component_main_statusBar'>
              <span className="dot"></span>
              <p>completed</p>
            </div>
          </div>
        </div>
      </div>
      <div className='component_desc' ref={descRef}>
        <div>
          <h2 className='component_main_header' style={{marginBottom: "1%"}}>Event name</h2>
          <p>This is a sample description to test this. Half of this will be visible, half will be { content === "less"? <span>invisible. Let’s try some more here until it overflows.</span> : <span>...</span> }</p>
          <button className='component_desc_readmore' onClick={handleReadMore}><u>read {content}</u></button>
        </div>
        <button className='component_desc_btn'>Register Now</button>
      </div>
    </div>
  )
}
