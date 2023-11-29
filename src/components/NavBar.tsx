import { useContext, useEffect, useRef, useState } from "react";
import bigLogo from "../assets/GDSC_logo.svg";
import smallLogo from "../assets/small_GDSC_Logo.svg";
import "./NavBar.css";
import Moon from "../assets/Moon.png";
import Sun from "../assets/Sun.svg";
import Marquee from "react-fast-marquee";
import SunMoon from "../assets/SunMoon.svg";
import { ThemeContext } from "../context/theme-context";
import FilledButton from "../components/FilledButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import menuIcon from "./menu.svg";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";
import { WindowSizeContext } from "../context/window-size";

function NavBar() {
  gsap.registerPlugin(ScrollTrigger);
  const { theme, setTheme } = useContext(ThemeContext);
  const { windowSize } = useContext(WindowSizeContext);
  const [hidden, setHidden] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [marquee, setMarquee] = useState<string[]>([]);
  const [showMarquee, setShowMarquee] = useState<boolean>(false);

  const navRef = useRef<HTMLDivElement | undefined>(undefined);
  const sunmoonRef = useRef(null);
  const ctx = gsap.context(() => {}, navRef?.current);

  const changeToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "marquee", "marqueeData"), (doc) => {
      if (doc.data()?.marquee) setMarquee(doc.data()?.marquee);
      if (doc.data()?.show) setShowMarquee(doc.data()?.show);
    });
    return () => {
      unsub();
    };
  }, []);


  useEffect(() => {
    ctx.add(() => {
      ctx.revert();
      gsap.set(sunmoonRef.current, { left: "50%", translateX: "-50%" });
      gsap.fromTo(
        sunmoonRef.current,
        { y: -70 },
        {
          y: -200,
          scrollTrigger: {
            trigger: ".home_landing",
            start: "top top",
            end: "bottom 90px",
            scrub: 0.5,
            onLeave: () => {
              setHidden(true);
            },
            onEnter: () => {
              setHidden(false);
            },
            onEnterBack: () => {
              setHidden(false);
            },
          },
        }
      );
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
  }, []);

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
    ctx.add(() => {
      if (hidden) {
        gsap.to(sunmoonRef.current, { y: -70, duration: 1 });
        gsap.to(sunmoonRef.current, { y: -200, delay: 2, duration: 1 });
      } else {
        gsap.to(sunmoonRef.current, {
          y: -70,
          duration: 1,
          repeat: 1,
          yoyo: true,
        });
      }
      if (!isCurrentDark) {
        gsap.to(sunmoonRef.current, {
          delay: hidden ? 0.5 : 0,
          duration: 1,
          rotation: "180_cw",
        });
      } else {
        gsap.to(sunmoonRef.current, {
          delay: hidden ? 0.5 : 0,
          duration: 1,
          rotation: "0_cw",
        });
      }
    });
  };

  return (
    <div className="nav">
      <div className="navBar" style={{height: !showMarquee ? '100px' : 'max-content'}}>
        <div className="navBar_logoContainer">
          {windowSize > 1024 ? (
            <img className="noselect logo" src={bigLogo} />
          ) : (
            <img className="noselect logo" src={smallLogo} />
          )}
        </div>
        <div className="navBar_toggleContainer">
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
            <img className="noselect" src={Sun} width={15} height={15} alt="" />
          </div>
        </div>
        <ul className={`${toggle ? "navLinks menu active" : "navLinks"}`}>
          <li>
            <a href="/">Who are we</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="/creators">Creators</a>
          </li>
          <FilledButton
            text="Join Us"
            textColor="var(--eerie-black)"
            bgColor="var(--light-sky)"
            border={false}
            id="navbar-joinus"
            onClick={(e) => {e.preventDefault();window.location.href='https://gdsc.community.dev/mar-baselios-college-of-engineering-and-technology-thiruvananthapuram/'}}
          />
        </ul>
        <div className="hamburger_container">
          <img
            className="hamburgerMenu"
            src={menuIcon}
            onClick={changeToggle}
            onKeyDown={changeToggle}
            alt=""
          />
        </div>


        <img className="navBar_SunMoon" ref={sunmoonRef} src={SunMoon} alt="" />
        <div
          role="none"
          className={
            toggle
              ? "backgroundOverlay"
              : "backgroundOverlay backgroundOverlayClosed"
          }
          onClick={() => {
            setToggle(false);
          }}
          onKeyDown={() => {
            setToggle(false);
          }}
        />
      </div>
      {showMarquee && marquee[0] && (
        <Marquee className="navBar_marquee" gradient={false} speed={60} loop={0}>
            {marquee.map((val, ind) => <div key={ind} className="marquee_val"><div className="navBar_circle"/>{val}</div>)}
            {marquee.map((val, ind) => <div key={ind} className="marquee_val"><div className="navBar_circle"/>{val}</div>)}
            {marquee.map((val, ind) => <div key={ind} className="marquee_val"><div className="navBar_circle"/>{val}</div>)}
            {marquee.map((val, ind) => <div key={ind} className="marquee_val"><div className="navBar_circle"/>{val}</div>)}
            {marquee.map((val, ind) => <div key={ind} className="marquee_val"><div className="navBar_circle"/>{val}</div>)}
            {marquee.map((val, ind) => <div key={ind} className="marquee_val"><div className="navBar_circle"/>{val}</div>)}
            {marquee.map((val, ind) => <div key={ind} className="marquee_val"><div className="navBar_circle"/>{val}</div>)}
            {marquee.map((val, ind) => <div key={ind} className="marquee_val"><div className="navBar_circle"/>{val}</div>)}
            {marquee.map((val, ind) => <div key={ind} className="marquee_val"><div className="navBar_circle"/>{val}</div>)}
        </Marquee>
      )}
    </div>
  );
}

export default NavBar;
