import { useEffect, useRef, Children, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { useSpring, animated, config, useTrail } from "@react-spring/web";

import "./App.css";

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

window.VANTA = window.VANTA || {};
window.THREE = window.THREE || {};

function App() {
  const myRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const props = useSpring({
    to: { translateY: 0, opacity: 1 },
    from: { translateY: 40, opacity: 0 },
    config: config.slow,
    delay: 400,
  });

  const bar = useSpring({
    from: { width: "0%", opacity: 1 },
    to: { width: "100%", opacity: 1 },
    config: config.slow,
    delay: 100,
  });

  const panel = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    delay: 2000,
    config: { duration: 3000 },
  });

  const [styles, api] = useSpring(() => ({
    xy: [0, 0],
  }));

  const trans = (x: number, y: number) =>
    `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

  useEffect(() => {
    if (window.VANTA)
      window.VANTA.HALO({
        el: myRef.current,
        mouseControls: true,
        touchControls: false,
        gyroControls: false,
        minHeight: 100.0,
        minWidth: 100.0,
        xOffset: 0,
        size: 1.0,
        backgroundColor: 0x0,
      });

    document.addEventListener("mousemove", (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      api.start({ xy: [e.clientX + 80, e.clientY - 30] });
    });
  }, []);

  return (
    <div className="App" ref={myRef}>
      <div className="content">
        <div className="mask">
          <animated.h1 style={props}>RENOISER</animated.h1>
        </div>
        <animated.div style={bar} className="bar"></animated.div>

        <Trail delay={600}>
          <span>renato longobardi</span>
          <span>senior frontend & interactive developer</span>
        </Trail>

        <Trail delay={800}>
          <p>based in berlin (52° 31' 12.0288'' N / 13° 24' 17.8344'' E)</p>
        </Trail>

        <div className="icons">
          <Trail delay={1000}>
            <a href="https://github.com/renoiser/">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/renatolongobardi/">
              <AiFillLinkedin />
            </a>
            <a href="mailto:renato.longobardi@gmail.com">
              <MdAlternateEmail />
            </a>
          </Trail>
        </div>
      </div>

      {/* <animated.div style={panel} className="panel"></animated.div>
      <animated.div
        style={{ transform: styles.xy.to(trans) }}
        className="mouse"
      >
        {mouse.x}:x {mouse.y}:y
      </animated.div> */}
    </div>
  );
}

const Trail: React.FC<{ delay: number; children: any }> = ({
  delay,
  children,
}) => {
  const items = Children.toArray(children);
  const trail = useTrail(items.length, {
    to: { translateY: 0, opacity: 1 },
    from: { translateY: 40, opacity: 0 },
    config: { tension: 100, friction: 25 },
    delay,
  });

  return (
    <div>
      {trail.map((styles, index) => (
        <span className="mask">
          <animated.div style={styles}>{items[index]}</animated.div>
        </span>
      ))}
    </div>
  );
};

export default App;
