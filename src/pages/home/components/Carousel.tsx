import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import "./Carousel.css";
import storyImg from "../../../assets/storyImg.png";
import JoystickButton from "./JoystickButton";
import horizontalLoop from "../../../utils/horizontalLoop";

type CardProps = {
  cards: { title: string }[];
  theme: string;
  onClick?: () => void;
};

export default function Carousel({ cards, theme }: CardProps) {
  const [cardList, setCardList] = useState(cards);
  const [loop, setLoop] = useState<any>(null);
  const [boxes, setBoxes] = useState<HTMLDivElement[] | null>(null);

  const cardsRef = useRef<any>(null);
  let cardRefs: any = [];
  let ctx = gsap.context(() => {}, cardsRef?.current);

  useLayoutEffect(() => {
    return ctx.revert();
  }, [ctx]);

  useEffect(() => {
    cardRefs = cardsRef?.current?.children;
    if (!boxes) {
      return setBoxes(gsap.utils.toArray(cardRefs));
    }
    if (!loop) {
      return setLoop(horizontalLoop(boxes, { paused: true }));
    }
    gsap.to(boxes, { scale: 1, translateY: "-3%", duration: 0.2 });
    if (boxes != null)
      gsap.to(boxes[(loop.current() + 1) % boxes.length], {
        scale: 1.1,
        translateY: "1%",
        duration: 0.5,
      });
  }, [loop, boxes]);

  function nextClick() {
    ctx.add(() => {
      ctx.revert();
      gsap.to(boxes, {
        rotate: 3,
        duration: 0.4,
        ease: "elastic",
        yoyo: true,
        yoyoEase: true,
        repeat: 1,
      });
      ctx.ignore(() => {
        loop.next({ duration: 0.5, ease: "power1.inOut" });
        gsap.to(boxes, { scale: 1, translateY: "-3%", duration: 0.5 });
        if (boxes != null)
          gsap.to(boxes[(loop.current() + 1) % boxes.length], {
            scale: 1.1,
            translateY: "1%",
            duration: 0.5,
          });
      });
    });
  }

  function prevClick() {
    ctx.add(() => {
      ctx.revert();
      gsap.to(boxes, {
        rotate: -3,
        duration: 0.4,
        ease: "elastic",
        yoyo: true,
        yoyoEase: true,
        repeat: 1,
      });
    });
    loop.previous({ duration: 0.5, ease: "power1.inOut" });
    gsap.to(boxes, { scale: 1, translateY: "-3%", duration: 0.5 });
    if (boxes != null)
      gsap.to(boxes[(loop.current() + 1) % boxes.length], {
        scale: 1.1,
        translateY: "1%",
        duration: 0.5,
      });
  }

  return (
    <div className="carousel">
      <svg
        className="story_rod"
        preserveAspectRatio="none"
        width="1280"
        height="15"
        viewBox="0 0 1280 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="-36.5"
          y="1"
          width="1346"
          height="13"
          fill={theme === "dark" ? "#333333" : "white"}
          stroke={theme === "dark" ? "white" : "black"}
          strokeWidth="2"
        />
      </svg>
      <div className="wrapper" ref={cardsRef}>
        {cardList.map((card: { title: string }, index: number) => (
          <div className="box" key={index} onClick={() => {}}>
            <svg
              preserveAspectRatio="none"
              width="200"
              height="378"
              viewBox="0 0 322 578"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M170.054 111.202C159.198 58.406 123.318 18.0743 106.735 4.50807C92.9992 3.40502 85.6315 20.5547 83.6646 29.2674C118.067 57.4117 133.21 98.889 136.481 116.11L170.054 111.202Z"
                fill={theme === "dark" ? "var(--dark-cloud)" : "white"}
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="1.11203"
              />
              <path
                d="M170.976 197.532L168.095 178.19C197.57 169.724 184.377 137.484 163.132 137.356L165.163 119.12C208.082 120.543 221.944 181.948 170.976 197.532Z"
                fill={theme === "dark" ? "var(--dark-cloud)" : "white"}
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="1.11203"
              />
              <path
                d="M90.5638 34.682C92.6217 26.9028 100.421 11.4524 115.154 11.8847"
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="1.11203"
              />
              <path
                d="M114.97 64.5062C117.028 56.727 124.827 41.2766 139.56 41.7088"
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="1.11203"
              />
              <path
                d="M98.465 43.4749C100.523 35.6957 108.322 20.2453 123.055 20.6776"
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="1.11203"
              />
              <path
                d="M107.335 53.5052C109.393 45.726 117.192 30.2756 131.925 30.7078"
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="1.11203"
              />
              <path
                d="M121.368 76.4788C123.856 68.4546 132.591 52.6787 147.627 53.7682"
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="1.11203"
              />
              <path
                d="M126.676 88.1936C129.648 80.336 139.329 65.1219 154.271 67.126"
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="1.11203"
              />
              <path
                d="M131.064 98.2463C134.985 90.8166 146.473 76.9162 161.052 80.7523"
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="1.11203"
              />
              <path
                d="M135.825 114.501C139.811 106.891 151.428 92.6202 166.007 96.4217"
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="1.11203"
              />
              <rect
                x="83.7689"
                y="0.556017"
                width="46.7054"
                height="6.6722"
                rx="2.78008"
                fill={theme === "dark" ? "var(--dark-cloud)" : "white"}
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="1.11203"
              />
              <rect
                x="79.3207"
                y="26.1322"
                width="56.7137"
                height="6.6722"
                rx="2.78008"
                fill={theme === "dark" ? "var(--dark-cloud)" : "white"}
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="1.11203"
              />
              <rect
                x="77.097"
                y="6.11656"
                width="62.2739"
                height="22.2407"
                rx="2.78008"
                fill={theme === "dark" ? "var(--dark-cloud)" : "white"}
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="1.11203"
              />
              <rect
                className="photoframe"
                x="1.5"
                y="160.5"
                width="319"
                height="416"
                rx="19"
                fill="url(#pattern0)"
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="2"
              />
              <path
                d="M159.313 197.744L160.591 178.23C130.519 172.22 141.013 139.004 162.175 137.126L158.649 119.12C115.992 124.073 107.236 186.411 159.313 197.744Z"
                fill={theme === "dark" ? "var(--dark-cloud)" : "white"}
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="1.11203"
              />
              <circle
                cx="155.72"
                cy="130.442"
                r="23.411"
                transform="rotate(39.2864 155.72 130.442)"
                fill="#81C784"
                stroke="#1A1A1A"
                strokeWidth="1.11203"
              />
              <circle
                cx="155.721"
                cy="130.441"
                r="10.3381"
                transform="rotate(39.2864 155.721 130.441)"
                fill="white"
                stroke="#1A1A1A"
                strokeWidth="1.11203"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_202_12122"
                    transform="matrix(0.00223714 0 0 0.00171799 0 -0.000794772)"
                  />
                </pattern>
                <image
                  className="story-img"
                  id="image0_202_12122"
                  width="447"
                  height="583"
                  xlinkHref={storyImg}
                />
              </defs>
            </svg>
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
      <div className="buttonsWrapper">
        <JoystickButton onClick={prevClick} />
        <JoystickButton onClick={nextClick} location="right" />
      </div>
    </div>
  );
}
