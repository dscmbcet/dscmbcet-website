import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import './Carousel.css'
import storyImg from "../../../assets/storyImg.png"
import JoystickButton from './JoystickButton';

type CardProps = { cards: { title: string; }[], theme: string, onClick?: () => void; }


export default function Carousel({cards , theme}:CardProps) {
  const [cardList, setCardList] = useState(cards);
  const [loop, setLoop] = useState<any>(null)
  const [boxes, setBoxes] = useState<HTMLDivElement[] | null>(null)

  const cardsRef = useRef<any>(null);
  let cardRefs: any = [];
  let ctx = gsap.context(() => { }, cardsRef?.current);

  useLayoutEffect(()=> {
    return ctx.revert();
}, [ctx])

  useEffect(() => {
    cardRefs = cardsRef?.current?.children;
    if (!boxes) {
      return setBoxes(gsap.utils.toArray(cardRefs))
    }
    if (!loop) {
      return setLoop(horizontalLoop(boxes, {paused: true}));
    }
    gsap.to(boxes, {scale:1, translateY: "-3%", duration: 0.2});
    if (boxes != null) gsap.to(boxes[(loop.current() + 1)% boxes.length ], {scale:1.1, translateY: "1%", duration: 0.5})
  }, [loop, boxes])

  function nextClick() {
    ctx.add(()=> {
      ctx.revert()
      gsap.to(boxes, {rotate: 3, duration: .4, ease: "elastic" , yoyo: true, yoyoEase: true, repeat: 1 });
      ctx.ignore(() =>{
        loop.next({duration: 0.5, ease: "power1.inOut"});
        gsap.to(boxes, {scale:1, translateY: "-3%", duration: 0.5});
        if (boxes != null) gsap.to(boxes[(loop.current() + 1)% boxes.length ], {scale:1.1, translateY: "1%", duration: 0.5})
      })
    })
  }

  function prevClick() {
    ctx.add(() => {
      ctx.revert()
      gsap.to(boxes, {rotate: -3, duration: .4, ease: "elastic" , yoyo: true, yoyoEase: true, repeat: 1 });
    })
    loop.previous({duration: 0.5, ease: "power1.inOut"});
    gsap.to(boxes, {scale:1, translateY: "-3%", duration: 0.5});
    if (boxes != null) gsap.to(boxes[(loop.current() + 1)% boxes.length ], {scale:1.1, translateY: "1%", duration: 0.5})
  }

  return (
    <div className="carousel">
      <svg className="story_rod" preserveAspectRatio="none" width="1280" height="15" viewBox="0 0 1280 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="-36.5" y="1" width="1346" height="13" fill={theme === "dark" ? "#333333" : "white"} stroke={theme === "dark" ? "white" : "black"} strokeWidth="2"/>
      </svg>
      <div className="wrapper" ref={cardsRef}>
        {cardList.map((card: { title: string }, index: number) => (
          <div className="box" key={index} onClick={() => {}}>
                <svg preserveAspectRatio='none' width="200" height="378" viewBox="0 0 322 578" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path d="M170.054 111.202C159.198 58.406 123.318 18.0743 106.735 4.50807C92.9992 3.40502 85.6315 20.5547 83.6646 29.2674C118.067 57.4117 133.21 98.889 136.481 116.11L170.054 111.202Z" fill={theme === "dark" ? "var(--dark-cloud)" : "white"} stroke={theme === "dark" ? "white" : "black"} strokeWidth="1.11203" />
                <path d="M170.976 197.532L168.095 178.19C197.57 169.724 184.377 137.484 163.132 137.356L165.163 119.12C208.082 120.543 221.944 181.948 170.976 197.532Z" fill={theme === "dark" ? "var(--dark-cloud)" : "white"} stroke={theme === "dark" ? "white" : "black"} strokeWidth="1.11203" />
                <path d="M90.5638 34.682C92.6217 26.9028 100.421 11.4524 115.154 11.8847" stroke={theme === "dark" ? "white" : "black"} strokeWidth="1.11203" />
                <path d="M114.97 64.5062C117.028 56.727 124.827 41.2766 139.56 41.7088" stroke={theme === "dark" ? "white" : "black"} strokeWidth="1.11203" />
                <path d="M98.465 43.4749C100.523 35.6957 108.322 20.2453 123.055 20.6776" stroke={theme === "dark" ? "white" : "black"} strokeWidth="1.11203" />
                <path d="M107.335 53.5052C109.393 45.726 117.192 30.2756 131.925 30.7078" stroke={theme === "dark" ? "white" : "black"} strokeWidth="1.11203" />
                <path d="M121.368 76.4788C123.856 68.4546 132.591 52.6787 147.627 53.7682" stroke={theme === "dark" ? "white" : "black"} strokeWidth="1.11203" />
                <path d="M126.676 88.1936C129.648 80.336 139.329 65.1219 154.271 67.126" stroke={theme === "dark" ? "white" : "black"} strokeWidth="1.11203" />
                <path d="M131.064 98.2463C134.985 90.8166 146.473 76.9162 161.052 80.7523" stroke={theme === "dark" ? "white" : "black"} strokeWidth="1.11203" />
                <path d="M135.825 114.501C139.811 106.891 151.428 92.6202 166.007 96.4217" stroke={theme === "dark" ? "white" : "black"} strokeWidth="1.11203" />
                <rect x="83.7689" y="0.556017" width="46.7054" height="6.6722" rx="2.78008" fill={theme === "dark" ? "var(--dark-cloud)" : "white"} stroke={theme === "dark" ? "white" : "black"} strokeWidth="1.11203" />
                <rect x="79.3207" y="26.1322" width="56.7137" height="6.6722" rx="2.78008" fill={theme === "dark" ? "var(--dark-cloud)" : "white"} stroke={theme === "dark" ? "white" : "black"} strokeWidth="1.11203" />
                <rect x="77.097" y="6.11656" width="62.2739" height="22.2407" rx="2.78008" fill={theme === "dark" ? "var(--dark-cloud)" : "white"} stroke={theme === "dark" ? "white" : "black"} strokeWidth="1.11203" />
                <rect className='photoframe' x="1.5" y="160.5" width="319" height="416" rx="19" fill="url(#pattern0)" stroke={theme === "dark" ? "white" : "black"} strokeWidth="2" />
                <path d="M159.313 197.744L160.591 178.23C130.519 172.22 141.013 139.004 162.175 137.126L158.649 119.12C115.992 124.073 107.236 186.411 159.313 197.744Z" fill={theme === "dark" ? "var(--dark-cloud)" : "white"} stroke={theme === "dark" ? "white" : "black"} strokeWidth="1.11203" />
                <circle cx="155.72" cy="130.442" r="23.411" transform="rotate(39.2864 155.72 130.442)" fill="#81C784" stroke="#1A1A1A" strokeWidth="1.11203" />
                <circle cx="155.721" cy="130.441" r="10.3381" transform="rotate(39.2864 155.721 130.441)" fill="white" stroke="#1A1A1A" strokeWidth="1.11203" />
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_202_12122" transform="matrix(0.00223714 0 0 0.00171799 0 -0.000794772)" />
                    </pattern>
                    <image className='story-img' id="image0_202_12122" width="447" height="583" xlinkHref={storyImg} />
                </defs>
            </svg>
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
      <div className="buttonsWrapper">
            <JoystickButton onClick={prevClick} />
            <JoystickButton onClick={nextClick} location="right"/>
      </div>
    </div>
  );
};


/*
This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

Features:
 - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
 - When each item animates to the left or right enough, it will loop back to the other side
 - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
 - The returned timeline will have the following methods added to it:
   - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
   - current() - returns the current index (if an animation is in-progress, it reflects the final index)
   - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
 */
   function horizontalLoop(items: any[], config: { paused?: any; repeat?: any; speed?: any; snap?: any; paddingRight?: any; reversed?: any; }) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => {tl.totalTime(tl.rawTime() + tl.duration() * 100)}}),
      length = items.length,
      startX = items[0].offsetLeft,
      times: any[] = [],
      widths: number[] = [],
      xPercents: any[] = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? (v: any) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
      totalWidth, curX, distanceToStart, distanceToLoop, item, i;
    gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
      xPercent: (i, el) => {
        let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px").toString());
        xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px").toString()) / w * 100 + parseFloat(gsap.getProperty(el, "xPercent").toString()));
        return xPercents[i];
      }
    });
    gsap.set(items, {x: 0});
    totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * parseFloat(gsap.getProperty(items[length-1], "scaleX").toString()) + (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = xPercents[i] / 100 * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop = distanceToStart + widths[i] * parseFloat(gsap.getProperty(item, "scaleX").toString());
      tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
        .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index: number, vars: gsap.TweenVars | undefined) {
      vars = vars || {};
      (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
        vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }
    tl.next = (vars: any) => toIndex(curIndex+1, vars);
    tl.previous = (vars: any) => toIndex(curIndex-1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index: any, vars: any) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
      if (tl.vars.onReverseComplete) {
        tl.vars.onReverseComplete();
      }
      tl.reverse();
    }
    return tl;
  }