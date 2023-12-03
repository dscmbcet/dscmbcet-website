import {
  useContext,
  useRef,
  useLayoutEffect,
  useState,
  useEffect,
} from "react";
import "./Home.css";
import llamaImg from "../../assets/llama body.png";
import landingImg from "../../assets/landingImg.png";
import { ThemeContext } from "../../context/theme-context";
import GEarth from "./components/GEarth";
import Carousel from "./components/Carousel";
import FilledButton from "../../components/FilledButton";
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LandingClouds from "./components/LandingClouds";
import AboutClouds from "./components/AboutClouds";
import EarthClouds from "./components/EarthClouds";
import StoryClouds from "./components/StoryClouds";
import { useNavigate } from "react-router-dom";
import {
  query,
  orderBy,
  limit,
  DocumentData,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import { WindowSizeContext } from "../../context/window-size";

function Home() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { windowSize } = useContext(WindowSizeContext);
  const navigate = useNavigate();
  const parentRef = useRef(null);
  const llamaref = useRef(null);
  const roperef = useRef(null);
  const [latest3Events, setLatest3Events] = useState<DocumentData[] | null>(
    null
  );
  const [content, setcontent] = useState("more");
  const [width, setWindowWidth] = useState<number>(0);
  var llamatl = gsap.timeline({ paused: true });
  let cards = [
    { title: "1" },
    { title: "2" },
    { title: "3" },
    { title: "1" },
    { title: "2" },
    { title: "3" },
  ];

  useEffect(() => {
    const q = query(
      collection(db, "events"),
      orderBy("date", "desc"),
      limit(3)
    );
    const unsub = onSnapshot(q, (snapshot) => {
      setLatest3Events(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    const stars = document.querySelectorAll(".star") as NodeListOf<HTMLElement>;
    const landing_text = document.getElementById("home_landing_content");
    const earth_text = document.getElementById("home_earth_content");

    const landingTextRect = landing_text?.getBoundingClientRect();
    const earthTextRect = earth_text?.getBoundingClientRect();

    stars.forEach((star) => {
      const divRect = star?.getBoundingClientRect();
      if (
        (landingTextRect &&
          divRect.right > landingTextRect.left &&
          divRect.left < landingTextRect.right &&
          divRect.bottom > landingTextRect.top &&
          divRect.top < landingTextRect.bottom) ||
        (earthTextRect &&
          divRect.right > earthTextRect.left &&
          divRect.left < earthTextRect.right &&
          divRect.bottom > earthTextRect.top &&
          divRect.top < earthTextRect.bottom)
      ) {
        star.remove();
      } 
    });
  }, [theme, windowSize]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {});
    ctx.add(() => {
      ScrollTrigger.create({
        trigger: llamaref.current,
        start: "top bottom",
        onEnter: () => llamatl.play(),
        onLeave: () => llamatl.pause(),
        onEnterBack: () => llamatl.play(),
        onLeaveBack: () => llamatl.pause(),
      });
      llamatl.to(llamaref.current, { rotation: 3, duration: 1 });
      llamatl.to(roperef.current, { rotation: 4, duration: 1 }, "-=1");
      llamatl.to(llamaref.current, {
        rotation: -6,
        yoyoEase: true,
        duration: 1,
        repeat: -1,
        yoyo: true,
      });
      llamatl.to(
        roperef.current,
        {
          translateY: -10,
          rotation: -13,
          yoyoEase: true,
          duration: 1,
          repeat: -1,
          yoyo: true,
        },
        "-=1"
      );
    }, parentRef);
    return () => ctx.revert();
  }, []);

  const handleReadMore = () => {
    if (content === "more") {
      setcontent("less");
    } else {
      setcontent("more");
    }
  };

  return (
    <div className="home">
      <div className="home_landing">
        {Array.from({ length: 16 }, (_, index) => {
          return (
            <div
              key={index}
              className="star-container"
              style={{
                position: "absolute",
                animation: `twinkle ${Math.random() * 5 + 5}s linear ${
                  Math.random() * 5 + 5
                }s infinite`,
                transform: `rotate(${Math.random() * 360}deg)`,
                top: `${Math.random() * window.innerHeight}px`,
                left: `${Math.random() * window.innerWidth}px`,
              }}
            >
              <svg
                className="star"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <path
                  d="M8.00904 1.99874C8.00904 1.99874 13.8995 8.20181 18.899 9.45341C23.8986 10.705 32.0169 8.00897 32.0169 8.00897C32.0169 8.00897 25.8138 13.8995 24.5622 18.899C23.3106 23.8985 26.0067 32.0168 26.0067 32.0168C26.0067 32.0168 20.1162 25.8138 15.1167 24.5622C10.1171 23.3106 1.99882 26.0066 1.99882 26.0066C1.99882 26.0066 8.20189 20.1161 9.45348 15.1166C10.7051 10.1171 8.00904 1.99874 8.00904 1.99874Z"
                  fill="white"
                />
              </svg>
            </div>
          );
        })}
        <div className="home_landing_head">
          <h1>
            beyond just{" "}
            <img
              src={landingImg}
              alt=""
              style={{
                border: "2px solid",
                borderRadius: "100px",
                borderColor: theme == "dark" ? "#FFF8E1" : "#000000",
              }}
            />
          </h1>
          <h1>the technicality</h1>
        </div>
        <p id="home_landing_content">
          We are an initiative to grow their knowledge on developer technologies
          and more through peer to peer workshops and events, and gain relevant
          industry experience.
        </p>
        <div className="home_landing_buttons">
          <FilledButton
            text={"Join us"}
            textColor={theme === "dark" ? "black" : "white"}
            bgColor={theme === "dark" ? "var(--cream)" : "black"}
            border={false}
            fontSize="20px"
            id="joinUs"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://gdsc.community.dev/mar-baselios-college-of-engineering-and-technology-thiruvananthapuram/";
            }}
          />
          <FilledButton
            text={"View Events"}
            textColor={theme === "dark" ? "var(--cream)" : "black"}
            bgColor={theme === "dark" ? "var(--cream)" : "black"}
            border={true}
            fontSize="20px"
            onClick={() => {
              navigate("/events");
            }}
          />
        </div>
        <LandingClouds theme={theme} />
      </div>
      <div className="home_about">
        <AboutClouds theme={theme} />
        <Marquee className="home_marquee" gradient={false} speed={60}>
          <h1
            style={
              theme === "dark"
                ? { WebkitTextStrokeColor: "white" }
                : { WebkitTextStrokeColor: "black" }
            }
          >
            ho <span className="marquee_span">we</span> are who{" "}
            <span className="marquee_span">we</span> are who{" "}
            <span className="marquee_span">we</span> are who{" "}
            <span className="marquee_span">we</span> are w
          </h1>
        </Marquee>
        <div className="home_about_inner">
          <div className="home_about_content">
            <p>A community that <b>grows and builds</b> together! From the tech domain to the social domain, we do <b>the cool things that matter</b>.
              <br></br><br></br>
              This ain't your regular club, so are you ready to <b>take on the challenge to level up</b>?</p>
          </div>
          <div className="home_about_image" ref={parentRef}>
            <svg
              className="llama_cloud"
              width="235"
              height="278"
              viewBox="0 0 235 278"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="llama_body"
                ref={roperef}
                d="M92.1595 277.137L115.556 130.16"
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="3"
              />
              <mask id="path-2-inside-1_202_11834" fill="white">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M181.036 130.162C180.534 127.994 179.551 126.038 178.193 124.343C182.546 121.849 186.365 118.808 189.52 115.387C193.611 117.637 198.962 118.408 204.423 117.142C214.642 114.774 221.378 106.171 219.467 97.9268C218.056 91.8367 212.32 87.6464 205.3 86.8276C208.183 81.8949 209.83 76.5147 209.959 71.0444C210.55 70.9389 211.143 70.8175 211.737 70.6798C226.907 67.1639 236.905 54.3938 234.068 42.1569C231.232 29.9201 216.636 22.8504 201.466 26.3663C193.083 28.3093 186.279 33.0788 182.348 39.0227C179.255 38.2503 176.006 37.7745 172.658 37.6226C173.175 34.0382 173.053 30.38 172.212 26.7516C167.764 7.55909 144.871 -3.5292 121.079 1.98522C105.083 5.69254 92.7541 15.9602 87.7428 28.1235C80.9397 26.3615 73.3634 26.0409 65.6246 27.4573C62.4764 20.0933 52.917 16.0886 43.0166 18.3833C32.1585 20.8999 25.002 30.0406 27.0321 38.7996C27.8728 42.4267 30.1569 45.4195 33.3159 47.5027C28.3853 54.7956 26.2236 63.2457 27.816 71.5945C24.3965 70.7265 20.5547 70.6544 16.6601 71.5571C5.802 74.0737 -1.35449 83.2144 0.675634 91.9734C2.38195 99.3353 10.0349 104.084 18.8799 103.918C18.9341 104.186 18.9922 104.453 19.0542 104.721C23.5025 123.913 46.3959 135.001 70.1879 129.487C70.9923 129.301 71.7874 129.098 72.5727 128.879C81.3841 141.579 99.9934 147.936 119.188 143.487C119.592 143.394 119.994 143.296 120.393 143.194C124.746 149.331 133.803 152.388 143.142 150.224C144.062 150.01 144.958 149.753 145.826 149.454C150.604 152.495 157.167 153.635 163.877 152.08C175.533 149.378 183.216 139.565 181.036 130.162Z"
                />
              </mask>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M181.036 130.162C180.534 127.994 179.551 126.038 178.193 124.343C182.546 121.849 186.365 118.808 189.52 115.387C193.611 117.637 198.962 118.408 204.423 117.142C214.642 114.774 221.378 106.171 219.467 97.9268C218.056 91.8367 212.32 87.6464 205.3 86.8276C208.183 81.8949 209.83 76.5147 209.959 71.0444C210.55 70.9389 211.143 70.8175 211.737 70.6798C226.907 67.1639 236.905 54.3938 234.068 42.1569C231.232 29.9201 216.636 22.8504 201.466 26.3663C193.083 28.3093 186.279 33.0788 182.348 39.0227C179.255 38.2503 176.006 37.7745 172.658 37.6226C173.175 34.0382 173.053 30.38 172.212 26.7516C167.764 7.55909 144.871 -3.5292 121.079 1.98522C105.083 5.69254 92.7541 15.9602 87.7428 28.1235C80.9397 26.3615 73.3634 26.0409 65.6246 27.4573C62.4764 20.0933 52.917 16.0886 43.0166 18.3833C32.1585 20.8999 25.002 30.0406 27.0321 38.7996C27.8728 42.4267 30.1569 45.4195 33.3159 47.5027C28.3853 54.7956 26.2236 63.2457 27.816 71.5945C24.3965 70.7265 20.5547 70.6544 16.6601 71.5571C5.802 74.0737 -1.35449 83.2144 0.675634 91.9734C2.38195 99.3353 10.0349 104.084 18.8799 103.918C18.9341 104.186 18.9922 104.453 19.0542 104.721C23.5025 123.913 46.3959 135.001 70.1879 129.487C70.9923 129.301 71.7874 129.098 72.5727 128.879C81.3841 141.579 99.9934 147.936 119.188 143.487C119.592 143.394 119.994 143.296 120.393 143.194C124.746 149.331 133.803 152.388 143.142 150.224C144.062 150.01 144.958 149.753 145.826 149.454C150.604 152.495 157.167 153.635 163.877 152.08C175.533 149.378 183.216 139.565 181.036 130.162Z"
                style={{ fill: `${theme === "dark" ? "#333333" : "white"}` }}
              />
              <path
                d="M178.193 124.343L176.632 125.593L175.171 123.769L177.199 122.607L178.193 124.343ZM189.52 115.387L188.05 114.031L189.112 112.88L190.484 113.635L189.52 115.387ZM205.3 86.8276L205.068 88.8141L202.029 88.4597L203.573 85.8182L205.3 86.8276ZM209.959 71.0444L207.959 70.9972L207.998 69.3627L209.607 69.0755L209.959 71.0444ZM182.348 39.0227L184.016 40.1259L183.236 41.3058L181.864 40.9631L182.348 39.0227ZM172.658 37.6226L172.568 39.6206L170.364 39.5206L170.679 37.3373L172.658 37.6226ZM87.7428 28.1235L89.592 28.8854L88.9282 30.4965L87.2414 30.0596L87.7428 28.1235ZM65.6246 27.4573L65.9847 29.4247L64.4135 29.7122L63.7856 28.2435L65.6246 27.4573ZM33.3159 47.5027L34.4169 45.8331L36.1059 46.9469L34.9727 48.6229L33.3159 47.5027ZM27.816 71.5945L29.7806 71.2198L30.3692 74.306L27.324 73.533L27.816 71.5945ZM18.8799 103.918L18.8422 101.918L20.5093 101.887L20.8401 103.521L18.8799 103.918ZM72.5727 128.879L72.0355 126.952L73.4053 126.57L74.216 127.739L72.5727 128.879ZM120.393 143.194L119.899 141.256L121.23 140.916L122.025 142.037L120.393 143.194ZM145.826 149.454L145.175 147.563L146.087 147.25L146.899 147.767L145.826 149.454ZM179.754 123.092C181.29 125.009 182.411 127.236 182.985 129.711L179.088 130.614C178.657 128.753 177.813 127.066 176.632 125.593L179.754 123.092ZM190.991 116.743C187.692 120.32 183.71 123.488 179.187 126.078L177.199 122.607C181.382 120.211 185.039 117.296 188.05 114.031L190.991 116.743ZM204.875 119.091C198.972 120.459 193.112 119.645 188.556 117.139L190.484 113.635C194.11 115.629 198.952 116.357 203.971 115.194L204.875 119.091ZM221.415 97.4753C223.661 107.165 215.758 116.568 204.875 119.091L203.971 115.194C213.526 112.979 219.094 105.176 217.519 98.3784L221.415 97.4753ZM205.531 84.8411C213.137 85.7281 219.761 90.3383 221.415 97.4753L217.519 98.3784C216.35 93.3351 211.504 89.5647 205.068 88.8141L205.531 84.8411ZM211.958 71.0916C211.82 76.9361 210.062 82.6442 207.026 87.837L203.573 85.8182C206.305 81.1456 207.839 76.0933 207.959 70.9972L211.958 71.0916ZM212.189 72.6282C211.562 72.7735 210.935 72.9018 210.31 73.0133L209.607 69.0755C210.165 68.976 210.725 68.8614 211.286 68.7314L212.189 72.6282ZM236.017 41.7054C239.188 55.3883 228.022 68.9583 212.189 72.6282L211.286 68.7314C225.791 65.3695 234.621 53.3993 232.12 42.6085L236.017 41.7054ZM201.015 24.4179C216.848 20.7481 232.845 28.0225 236.017 41.7054L232.12 42.6085C229.619 31.8178 216.423 24.9527 201.918 28.3147L201.015 24.4179ZM180.68 37.9194C184.917 31.5127 192.176 26.4665 201.015 24.4179L201.918 28.3147C193.99 30.1522 187.641 34.645 184.016 40.1259L180.68 37.9194ZM172.749 35.6247C176.227 35.7825 179.608 36.277 182.833 37.0822L181.864 40.9631C178.902 40.2237 175.786 39.7666 172.568 39.6206L172.749 35.6247ZM174.161 26.3C175.06 30.1785 175.189 34.087 174.638 37.908L170.679 37.3373C171.161 33.9895 171.047 30.5814 170.264 27.2032L174.161 26.3ZM120.627 0.0368662C145.083 -5.63152 169.377 5.66144 174.161 26.3L170.264 27.2032C166.151 9.45674 144.658 -1.42687 121.53 3.93357L120.627 0.0368662ZM85.8936 27.3616C91.1856 14.5171 104.094 3.8688 120.627 0.0368662L121.53 3.93357C106.073 7.51628 94.3226 17.4033 89.592 28.8854L85.8936 27.3616ZM65.2645 25.49C73.2813 24.0227 81.1518 24.3504 88.2443 26.1874L87.2414 30.0596C80.7275 28.3726 73.4456 28.0591 65.9847 29.4247L65.2645 25.49ZM42.565 16.4349C53.1135 13.99 63.8262 18.1628 67.4636 26.6712L63.7856 28.2435C61.1266 22.0238 52.7205 18.1872 43.4682 20.3316L42.565 16.4349ZM25.0838 39.2512C22.7185 29.0461 31.0426 19.1055 42.565 16.4349L43.4682 20.3316C33.2744 22.6943 27.2855 31.0351 28.9805 38.348L25.0838 39.2512ZM32.2148 49.1724C28.6881 46.8466 26.0556 43.4442 25.0838 39.2512L28.9805 38.348C29.69 41.4091 31.6257 43.9924 34.4169 45.8331L32.2148 49.1724ZM25.8514 71.9692C24.1452 63.0238 26.4794 54.0438 31.659 46.3826L34.9727 48.6229C30.2911 55.5475 28.302 63.4675 29.7806 71.2198L25.8514 71.9692ZM16.2085 69.6087C20.4056 68.636 24.5711 68.7074 28.3081 69.656L27.324 73.533C24.2219 72.7457 20.7038 72.6729 17.1117 73.5054L16.2085 69.6087ZM-1.27272 92.425C-3.63801 82.2199 4.68611 72.2793 16.2085 69.6087L17.1117 73.5054C6.91789 75.8681 0.929027 84.2089 2.62399 91.5219L-1.27272 92.425ZM18.9176 105.918C9.44913 106.096 0.711872 100.988 -1.27272 92.425L2.62399 91.5219C4.05202 97.6831 10.6207 102.073 18.8422 101.918L18.9176 105.918ZM17.1058 105.172C17.0396 104.887 16.9776 104.601 16.9197 104.315L20.8401 103.521C20.8906 103.77 20.9448 104.02 21.0025 104.269L17.1058 105.172ZM70.6395 131.435C46.1831 137.104 21.8893 125.811 17.1058 105.172L21.0025 104.269C25.1157 122.016 46.6086 132.899 69.7363 127.539L70.6395 131.435ZM73.11 130.805C72.2962 131.032 71.4726 131.242 70.6395 131.435L69.7363 127.539C70.512 127.359 71.2785 127.163 72.0355 126.952L73.11 130.805ZM119.639 145.436C99.8343 150.026 80.3084 143.537 70.9295 130.019L74.216 127.739C82.4598 139.621 100.153 145.846 118.736 141.539L119.639 145.436ZM120.888 145.132C120.474 145.237 120.058 145.339 119.639 145.436L118.736 141.539C119.126 141.449 119.513 141.354 119.899 141.256L120.888 145.132ZM143.593 152.172C133.646 154.478 123.684 151.29 118.762 144.351L122.025 142.037C125.808 147.372 133.959 150.299 142.69 148.275L143.593 152.172ZM146.476 151.346C145.543 151.666 144.581 151.943 143.593 152.172L142.69 148.275C143.544 148.077 144.373 147.839 145.175 147.563L146.476 151.346ZM164.328 154.028C157.147 155.693 150.025 154.497 144.752 151.142L146.899 147.767C151.182 150.493 157.188 151.577 163.425 150.131L164.328 154.028ZM182.985 129.711C185.499 140.56 176.649 151.172 164.328 154.028L163.425 150.131C174.417 147.584 180.932 138.571 179.088 130.614L182.985 129.711Z"
                fill={theme === "dark" ? "#5c5c5c" : "black"}
                mask="url(#path-2-inside-1_202_11834)"
              />
            </svg>
            <img ref={llamaref} className="llama_body" src={llamaImg} alt="" />
          </div>
        </div>
      </div>
      <div className="home_events">
        <div className="home_events_head">
          <h1>events</h1>
          <a href="/events">view more</a>
        </div>

        {latest3Events && (
          <div className="home_events_list">
            <div className="home_events_list_left">
              <svg
                className="home_events_cloud_left"
                width="248"
                height="394"
                viewBox="35 35 248 394"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="path-1-inside-1_202_12104"
                  style={{ fill: `${theme === "dark" ? "#333333" : "white"}` }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M57.0267 190.777C50.5985 189.891 44.1644 188.333 37.8121 186.06C-11.8217 168.302 -37.662 113.67 -19.904 64.0362C-2.14598 14.4024 52.4859 -11.4379 102.12 6.32008C143.748 21.2139 168.639 62.0461 165.109 104.113C171.537 104.999 177.971 106.558 184.323 108.83C233.957 126.588 259.798 181.22 242.04 230.854C231.36 260.705 207.342 281.949 179.096 290.279C191.064 307.168 194.876 329.435 187.373 350.404C175.159 384.543 137.582 402.316 103.443 390.102C69.3047 377.888 51.5313 340.311 63.7455 306.172C69.0031 291.477 78.9599 279.815 91.3191 272.271C67.4285 252.508 54.4079 221.982 57.0267 190.777Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M57.0267 190.777C50.5985 189.891 44.1644 188.333 37.8121 186.06C-11.8217 168.302 -37.662 113.67 -19.904 64.0362C-2.14598 14.4024 52.4859 -11.4379 102.12 6.32008C143.748 21.2139 168.639 62.0461 165.109 104.113C171.537 104.999 177.971 106.558 184.323 108.83C233.957 126.588 259.798 181.22 242.04 230.854C231.36 260.705 207.342 281.949 179.096 290.279C191.064 307.168 194.876 329.435 187.373 350.404C175.159 384.543 137.582 402.316 103.443 390.102C69.3047 377.888 51.5313 340.311 63.7455 306.172C69.0031 291.477 78.9599 279.815 91.3191 272.271C67.4285 252.508 54.4079 221.982 57.0267 190.777Z"
                  style={{ fill: `${theme === "dark" ? "#333333" : "white"}` }}
                />
                <path
                  d="M57.0267 190.777L59.0197 190.944L59.1783 189.055L57.2998 188.796L57.0267 190.777ZM37.8121 186.06L38.4858 184.177L37.8121 186.06ZM-19.904 64.0362L-21.7871 63.3625L-19.904 64.0362ZM102.12 6.32008L101.446 8.20319L102.12 6.32008ZM165.109 104.113L163.116 103.946L162.957 105.835L164.836 106.094L165.109 104.113ZM184.323 108.83L184.997 106.947L184.323 108.83ZM242.04 230.854L243.923 231.528L242.04 230.854ZM179.096 290.279L178.53 288.361L175.846 289.153L177.464 291.436L179.096 290.279ZM187.373 350.404L185.49 349.73L187.373 350.404ZM103.443 390.102L104.117 388.219L103.443 390.102ZM63.7455 306.172L61.8624 305.499L63.7455 306.172ZM91.3191 272.271L92.3611 273.978L94.7544 272.517L92.5939 270.73L91.3191 272.271ZM57.2998 188.796C51.0074 187.929 44.7075 186.403 38.4858 184.177L37.1384 187.943C43.6212 190.262 50.1897 191.854 56.7537 192.758L57.2998 188.796ZM38.4858 184.177C-10.1079 166.791 -35.4068 113.304 -18.0209 64.7099L-21.7871 63.3625C-39.9172 114.036 -13.5354 169.813 37.1384 187.943L38.4858 184.177ZM-18.0209 64.7099C-0.63497 16.1162 52.8521 -9.18275 101.446 8.20319L102.793 4.43698C52.1196 -13.6931 -3.65698 12.6887 -21.7871 63.3625L-18.0209 64.7099ZM101.446 8.20319C142.199 22.784 166.572 62.7596 163.116 103.946L167.102 104.28C170.706 61.3326 145.297 19.6438 102.793 4.43698L101.446 8.20319ZM184.997 106.947C178.514 104.628 171.946 103.037 165.382 102.132L164.836 106.094C171.128 106.962 177.428 108.488 183.65 110.714L184.997 106.947ZM243.923 231.528C262.053 180.854 235.671 125.077 184.997 106.947L183.65 110.714C232.243 128.099 257.542 181.587 240.156 230.18L243.923 231.528ZM179.661 292.198C208.494 283.695 233.018 262.005 243.923 231.528L240.156 230.18C229.701 259.404 206.19 280.204 178.53 288.361L179.661 292.198ZM189.256 351.078C196.988 329.468 193.057 306.522 180.727 289.123L177.464 291.436C189.071 307.815 192.763 329.401 185.49 349.73L189.256 351.078ZM102.77 391.985C137.949 404.571 176.67 386.257 189.256 351.078L185.49 349.73C173.648 382.829 137.216 400.061 104.117 388.219L102.77 391.985ZM61.8624 305.499C49.2761 340.677 67.5909 379.399 102.77 391.985L104.117 388.219C71.0184 376.377 53.7865 339.945 65.6286 306.846L61.8624 305.499ZM90.277 270.564C77.5419 278.337 67.2795 290.358 61.8624 305.499L65.6286 306.846C70.7267 292.597 80.378 281.292 92.3611 273.978L90.277 270.564ZM55.0338 190.61C52.3597 222.473 65.6529 253.635 90.0443 273.812L92.5939 270.73C69.2041 251.381 56.4561 221.492 59.0197 190.944L55.0338 190.61Z"
                  style={{ fill: `${theme === "dark" ? "white" : "black"}` }}
                  mask="url(#path-1-inside-1_202_12104)"
                />
              </svg>
              <div className="home_events_list1 home_events_list_item">
                <img
                  style={{ objectFit: "cover" }}
                  src={latest3Events[0]?.imgSrc}
                />
                <h3>{latest3Events[0]?.name}</h3>
              </div>
            </div>
            <div className="home_events_list2 home_events_list_item">
              <img
                style={{ objectFit: "cover" }}
                src={latest3Events[1]?.imgSrc}
              />
              <h3>{latest3Events[1]?.name}</h3>
              {latest3Events[1]?.desc.length > 80 ? (
                <>
                  <p>
                    {latest3Events[1]?.desc.slice(0, 80)}
                    {content === "less" ? (
                      <span>
                        {latest3Events[1]?.desc.slice(
                          81,
                          latest3Events[1]?.desc.length - 1
                        )}
                      </span>
                    ) : (
                      <span>...</span>
                    )}
                  </p>
                  <button
                    className="home_events_readmore"
                    onClick={handleReadMore}
                  >
                    <u>read {content}</u>
                  </button>
                </>
              ) : (
                <p>{latest3Events[1]?.desc}</p>
              )}
            </div>
            <div className="home_events_list_right">
              <div className="home_events_list3 home_events_list_item">
                <img
                  style={{ objectFit: "cover" }}
                  src={latest3Events[2]?.imgSrc}
                />
                <h3>{latest3Events[2]?.name}</h3>
              </div>
              <svg
                className="home_events_cloud_right"
                width="234"
                height="419"
                viewBox="-20 50 234 419"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="path-1-inside-1_202_12098"
                  style={{ fill: `${theme === "dark" ? "#333333" : "white"}` }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M160.206 3.07821C214.564 15.3767 248.66 69.4125 236.361 123.771C230.578 149.332 215.565 170.413 195.63 184.296C202.859 202.539 204.855 223.078 200.198 243.662C197.343 256.281 192.239 267.807 185.403 277.915C211.703 294.703 225.974 326.737 218.693 358.92C209.413 399.937 168.64 425.664 127.623 416.384C86.6071 407.104 60.8798 366.331 70.1597 325.315C70.7333 322.78 71.4271 320.303 72.2339 317.889C22.1489 302.615 -8.39043 251.017 3.35008 199.125C9.13345 173.563 24.1463 152.482 44.082 138.599C36.8524 120.356 34.8566 99.8179 39.5139 79.2335C51.8124 24.8756 105.848 -9.22032 160.206 3.07821Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M160.206 3.07821C214.564 15.3767 248.66 69.4125 236.361 123.771C230.578 149.332 215.565 170.413 195.63 184.296C202.859 202.539 204.855 223.078 200.198 243.662C197.343 256.281 192.239 267.807 185.403 277.915C211.703 294.703 225.974 326.737 218.693 358.92C209.413 399.937 168.64 425.664 127.623 416.384C86.6071 407.104 60.8798 366.331 70.1597 325.315C70.7333 322.78 71.4271 320.303 72.2339 317.889C22.1489 302.615 -8.39043 251.017 3.35008 199.125C9.13345 173.563 24.1463 152.482 44.082 138.599C36.8524 120.356 34.8566 99.8179 39.5139 79.2335C51.8124 24.8756 105.848 -9.22032 160.206 3.07821Z"
                  style={{ fill: `${theme === "dark" ? "#333333" : "white"}` }}
                />
                <path
                  d="M236.361 123.771L234.411 123.329L236.361 123.771ZM160.206 3.07821L159.765 5.02891L160.206 3.07821ZM195.63 184.296L194.487 182.655L193.187 183.56L193.77 185.033L195.63 184.296ZM200.198 243.662L202.148 244.103L200.198 243.662ZM185.403 277.915L183.747 276.795L182.596 278.496L184.327 279.601L185.403 277.915ZM218.693 358.92L220.644 359.362L218.693 358.92ZM127.623 416.384L128.065 414.433L127.623 416.384ZM70.1597 325.315L72.1104 325.756L70.1597 325.315ZM72.2339 317.889L74.1308 318.523L74.7819 316.576L72.8173 315.976L72.2339 317.889ZM3.35008 199.125L1.39939 198.684L3.35008 199.125ZM44.082 138.599L45.225 140.24L46.525 139.335L45.9413 137.862L44.082 138.599ZM39.5139 79.2335L41.4646 79.6749L39.5139 79.2335ZM238.312 124.212C250.854 68.7765 216.083 13.6698 160.648 1.12751L159.765 5.02891C213.045 17.0837 246.466 70.0485 234.411 123.329L238.312 124.212ZM196.773 185.938C217.102 171.781 232.414 150.279 238.312 124.212L234.411 123.329C228.742 148.385 214.029 169.046 194.487 182.655L196.773 185.938ZM202.148 244.103C206.897 223.114 204.862 202.165 197.489 183.56L193.77 185.033C200.856 202.914 202.813 223.042 198.247 243.221L202.148 244.103ZM187.06 279.036C194.032 268.725 199.238 256.969 202.148 244.103L198.247 243.221C195.448 255.593 190.445 266.89 183.747 276.795L187.06 279.036ZM184.327 279.601C209.938 295.949 223.832 327.144 216.742 358.479L220.644 359.362C228.117 326.33 213.467 293.456 186.479 276.23L184.327 279.601ZM216.742 358.479C207.706 398.418 168.004 423.47 128.065 414.433L127.182 418.335C169.276 427.858 211.12 401.455 220.644 359.362L216.742 358.479ZM128.065 414.433C88.1258 405.397 63.0742 365.695 72.1104 325.756L68.209 324.873C58.6853 366.967 85.0885 408.811 127.182 418.335L128.065 414.433ZM72.1104 325.756C72.6692 323.286 73.3451 320.874 74.1308 318.523L70.3371 317.255C69.5092 319.732 68.7973 322.273 68.209 324.873L72.1104 325.756ZM1.39939 198.684C-10.574 251.605 20.5709 304.224 71.6505 319.802L72.8173 315.976C23.7269 301.005 -6.20685 250.429 5.30078 199.566L1.39939 198.684ZM42.9391 136.958C22.6099 151.115 7.29712 172.616 1.39939 198.684L5.30078 199.566C10.9698 174.51 25.6827 153.849 45.225 140.24L42.9391 136.958ZM37.5632 78.7922C32.8143 99.7819 34.8493 120.73 42.2227 139.336L45.9413 137.862C38.8554 119.982 36.899 99.854 41.4646 79.6749L37.5632 78.7922ZM160.648 1.12751C105.212 -11.4148 50.1055 23.3569 37.5632 78.7922L41.4646 79.6749C53.5194 26.3943 106.484 -7.02587 159.765 5.02891L160.648 1.12751Z"
                  style={{ fill: `${theme === "dark" ? "white" : "black"}` }}
                  mask="url(#path-1-inside-1_202_12098)"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      <div className="home_story">
        <div className="home_story_clouds">
          <StoryClouds theme={theme} />
        </div>
        <div className="home_story_container">
          <Marquee
            style={{ marginTop: "100px" }}
            className="home_marquee"
            gradient={false}
            speed={60}
          >
            <h1
              style={
                theme === "dark"
                  ? { WebkitTextStrokeColor: "white" }
                  : { WebkitTextStrokeColor: "black" }
              }
            >
              tory <span className="marquee_span">our</span> story our story{" "}
              <span className="marquee_span">our</span> story our s
            </h1>
          </Marquee>
          <Carousel cards={cards} theme={theme} />
        </div>
      </div>

      <div className="home_earth">
        {Array.from({ length: 16 }, (_, index) => {
          return (
            <div
              key={index}
              className="star-container"
              style={{
                position: "absolute",
                animation: `twinkle ${Math.random() * 5 + 5}s linear ${
                  Math.random() * 5 + 5
                }s infinite`,
                transform: `rotate(${Math.random() * 360}deg)`,
                top: `${Math.random() * window.innerHeight}px`,
                left: `${Math.random() * window.innerWidth}px`,
              }}
            >
              <svg
                className="star"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <path
                  d="M8.00904 1.99874C8.00904 1.99874 13.8995 8.20181 18.899 9.45341C23.8986 10.705 32.0169 8.00897 32.0169 8.00897C32.0169 8.00897 25.8138 13.8995 24.5622 18.899C23.3106 23.8985 26.0067 32.0168 26.0067 32.0168C26.0067 32.0168 20.1162 25.8138 15.1167 24.5622C10.1171 23.3106 1.99882 26.0066 1.99882 26.0066C1.99882 26.0066 8.20189 20.1161 9.45348 15.1166C10.7051 10.1171 8.00904 1.99874 8.00904 1.99874Z"
                  fill="white"
                />
              </svg>
            </div>
          );
        })}
        <EarthClouds theme={theme} id="home_earth_clouds" />
        <div className="home_earth_container">
          <GEarth />
          <div className="home_earth_container_header">
            <h1>the gears</h1>
            <h1>behind it all</h1>
          </div>
          <p id="home_earth_content">
            We are a committed and eclectic team of scientists, engineers and
            plant lovers coming from all over the world to bring our mission to
            life.
          </p>
          <div className="home_earth_buttons_container">
            <FilledButton
              fontSize="18px"
              text="Meet The Core Team"
              bgColor={theme === "dark" ? "var(--cream)" : "black"}
              textColor={theme === "dark" ? "black" : "white"}
              border={false}
              onClick={() => {
                navigate("/team");
              }}
            />
            <FilledButton
              fontSize="18px"
              text="Meet The Website Creators"
              bgColor={theme === "dark" ? "var(--cream)" : "black"}
              textColor={theme === "dark" ? "black" : "white"}
              border={false}
              onClick={() => {
                navigate("/creators");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
