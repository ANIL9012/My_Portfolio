import React, { useEffect, useRef } from "react";
import pdf from "../pdf/anil-kumar-4.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Please hire me.",
        "Welcome to my profile",
        "My name is Anil kumar.",
        "I am a Frontend Developer.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home  text-center">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <a
            href={pdf}
            download="anil-kumar-4.pdf"
            className="btn btn-outline-warning"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
