import React, {
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import logo from "../assets/GDSC_logo.png";
import {NavLink} from 'react-router-dom';
import "./NavBar.css";
import Moon from "../assets/Moon.png";
import Sun from "../assets/Sun.svg";
import Marquee from "react-fast-marquee";
import SunMoon from "../assets/SunMoon.svg";
import { ThemeContext } from "../context/theme-context";
import FilledButton from "../components/FilledButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Team from "../pages/team/Team";
import Home from "../pages/home/Home";

function NavBar() {
    gsap.registerPlugin(ScrollTrigger);
    const { theme, setTheme } = useContext(ThemeContext);
    const [hidden, setHidden] = useState<boolean>(false);

    const navRef = useRef<HTMLDivElement | undefined>(undefined);
    const sunmoonRef = useRef(null);
    const ctx = gsap.context(() => { }, navRef?.current);

    useEffect(() => {
      return () => {
        ctx.revert()
      }
    }, [])
    

    useEffect(() => {
            ctx.add(() => {
                ctx.revert();
                gsap.set(sunmoonRef.current, {left: "50%", translateX: "-50%"})
                gsap.fromTo(sunmoonRef.current, {y: -70 }, { y: -200, scrollTrigger: {
                    trigger: ".home_landing",
                    start: "top top",
                    end: "bottom 90px",
                    scrub: 0.5,
                    onLeave: () => {
                        console.log("Left");
                        setHidden(true);
                    },
                    onEnter: () => {
                        console.log("Enterred");
                        setHidden(false);
                    },
                    onEnterBack: () => {
                        console.log("Enterred");
                        setHidden(false);
                    }
                }})
                if (theme == "dark") {
                    gsap.to(sunmoonRef.current, {
                        delay: 1,
                        duration: 1,
                        rotation: "180_cw",
                    });
                } else {
                    gsap.to(sunmoonRef.current, {
                        delay: 1,
                        duration: 1,
                        rotation: "0_cw",
                    });
                }
            });
        return () => ctx.revert();
    }, [])
    

    // useLayoutEffect(() => {
    //     setTimeout(() => {
    //         ctx.add(() => {
    //             if (theme == "dark") {
    //                 gsap.to(sunmoonRef.current, {
    //                     duration: 1,
    //                     rotation: "180_cw",
    //                 });
    //             } else {
    //                 gsap.to(sunmoonRef.current, {
    //                     duration: 1,
    //                     rotation: "0_cw",
    //                 });
    //             }
    //         });
    //     }, 200);
    //     return () => ctx.revert();
    // }, []);

    const handleThemeChange = () => {
        const isCurrentDark = theme === "dark";
        setTheme(isCurrentDark ? "light" : "dark");
        ctx.add(() => {
            if (hidden) {
                gsap.to(sunmoonRef.current, { y: -70, duration: 1});
                gsap.to(sunmoonRef.current, { y: -200, delay: 2, duration:1});
            }
            else {
                gsap.to(sunmoonRef.current, { y: -70, duration:1, repeat: 1, yoyo: true});
            }
            if (!isCurrentDark) {
                gsap.to(sunmoonRef.current, {
                    delay: hidden ? 0.5 : 0,
                    duration: 1,
                    rotation: "180_cw",
                });
            } else {
                gsap.to(sunmoonRef.current, { delay: hidden ? 0.5 : 0, duration: 1, rotation: "0_cw" });
            }
        });
    };

    return (
        <div className="nav">
            <div className="navBar">
                <img className="noselect" src={logo} />
                <div
                    onClick={handleThemeChange}
                    className="navBar_toggle"
                    style={
                        theme === "dark"
                            ? {
                                backgroundColor: "var(--dark-sky)",
                                borderColor: "var(--light-sky)",
                            }
                            : { backgroundColor: "var(--light-sky)" }
                    }
                >
                    <div
                        className="navBar_toggleButton"
                        style={
                            theme === "dark"
                                ? {
                                    left: "calc(100% - 23px)",
                                    borderColor: "var(--light-sky)",
                                }
                                : { left: 3, borderColor: "var(--dark-sky)" }
                        }
                    />
                    <img
                        className="noselect"
                        src={Moon}
                        width={15}
                        height={15}
                        alt=""
                    />
                    <img
                        className="noselect"
                        src={Sun}
                        width={15}
                        height={15}
                        alt=""
                    />
                </div>
                <div className="navBar_links">
                    <a href="">Who are we</a>
                    <a href="">Events</a>
                    <a href="">Resources</a>
                    <a href="">Team</a>
                    <a href="">Magazine</a>
                    <FilledButton text="Join Us" textColor="var(--eerie-black)" bgColor="var(--light-sky)" border={false} />
                </div>
                <img
                    className="navBar_SunMoon"
                    ref={sunmoonRef}
                    src={SunMoon}
                    alt=""
                />
            </div>
            <Marquee className="navBar_marquee" gradient={false} speed={60}>
                UXTopia <div className="navBar_circle" /> Not just a regular
                design event <div className="navBar_circle" /> Nov 15-21 UXTopia{" "}
                <div className="navBar_circle" /> Not just a regular design
                event <div className="navBar_circle" /> Nov 15-21 UXTopia{" "}
                <div className="navBar_circle" /> Not just a regular design
                event <div className="navBar_circle" /> Nov 15-21 UXTopia{" "}
                <div className="navBar_circle" /> Not just a regular design
                event <div className="navBar_circle" /> Nov 15-21
            </Marquee>
        </div>
    );
}

export default NavBar;
