import React, { useContext, useRef } from 'react'
import "./JoystickButton.css"
import { ThemeContext } from '../../../context/theme-context'
import { gsap } from "gsap";

type JProps = {
    location?: string;
    onClick?: () => void;
}

export default function JoystickButton({ location, onClick }:JProps) {
    const { theme, setTheme } = useContext(ThemeContext)
    let ctx = gsap.context(() => { });
    const joyStickRef= useRef(null);

    const handleJoyMovement=(() => {
        ctx.add(() => {
            ctx.revert()
            gsap.fromTo(joyStickRef.current,{rotation: 0} , {rotation: 45, duration: .25, ease: "power4"})
            gsap.to(joyStickRef.current,{rotation: 0, duration: .25, delay: .25, ease: "power2"})
        })
    })
    return (
        <div className={`buttondiv ${location}`} style={location === 'right' ?{transform: "rotateY(180deg)"}:{}}>
            <button className='JButton' onClick={()=> {
                handleJoyMovement();
                if (onClick) onClick();
            }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 32L0 16L16 0L18.85 2.8L7.65 14H32V18H7.65L18.85 29.2L16 32Z" fill={theme === "dark" ? "white" : "black"} />
                </svg>
            </button>
            <div ref={joyStickRef} className="joystick">
            <svg width="100" height="103" viewBox="0 0 143 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_202_12186)">
                    <g clipPath="url(#clip1_202_12186)">
                        <rect x="0.34097" y="64.9167" width="122.86" height="21" rx="10.5" transform="rotate(-21.8142 8.34097 64.9167)" fill={theme === "dark" ? "#373737" : "white"} stroke={theme === "dark" ? "white" : "black"} strokeWidth="2" />
                        <circle cx="20.5" cy="10.5" r="10.5" transform="matrix(-0.928394 0.371597 0.371597 0.928394 27.8369 57.1129)" fill="#2C2C2C" fillOpacity="0.2" />
                    </g>
                    <circle cx="29" cy="29" r="28" transform="matrix(-0.928394 0.371597 0.371597 0.928394 120.022 0.827698)" fill="#82C685" stroke={theme === "dark" ? "white" : "black"} strokeWidth="2" />
                </g>
                <defs>
                    <clipPath id="clip0_202_12186">
                        <rect width="129" height="58" fill={theme === "dark" ? "#373737" : "white"} transform="translate(0.723598 48.5777) rotate(-21.8142)" />
                    </clipPath>
                    <clipPath id="clip1_202_12186">
                        <rect width="129" height="23" fill={theme === "dark" ? "#373737" : "white"} transform="translate(7.04098 64.3599) rotate(-21.8142)" />
                    </clipPath>
                </defs>
            </svg>
            </div>
        </div>
    )
}
