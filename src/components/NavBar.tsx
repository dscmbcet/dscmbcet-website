import React, {
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import logo from "../assets/GDSC_logo.png";
import "./NavBar.css";
import Moon from "../assets/Moon.png";
import Sun from "../assets/Sun.svg";
import Marquee from "react-fast-marquee";
import SunMoon from "../assets/SunMoon.svg";
import { ThemeContext } from "../context/theme-context";
import FilledButton from "../components/FilledButton";
import { gsap } from "gsap";

function NavBar() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [tl, setTl] = useState<any>(null);

    const navRef = useRef<HTMLDivElement | undefined>(undefined);
    const sunmoonRef = useRef(null);
    const ctx = gsap.context(() => { }, navRef?.current);

    useEffect(() => {
      return () => {
        ctx.revert()
      }
    }, [])
    

    useEffect(() => {
        setTimeout(() => {
            ctx.add(() => {
                if (theme == "dark") {
                    gsap.to(sunmoonRef.current, {
                        duration: 1,
                        rotation: "180_cw",
                    });
                } else {
                    gsap.to(sunmoonRef.current, {
                        duration: 1,
                        rotation: "0_cw",
                    });
                }
            });
        }, 200);
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
            if (!isCurrentDark) {
                gsap.to(sunmoonRef.current, {
                    duration: 1,
                    rotation: "180_cw",
                });
            } else {
                gsap.to(sunmoonRef.current, { duration: 1, rotation: "0_cw" });
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
