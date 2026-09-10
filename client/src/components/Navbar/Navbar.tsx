import CircleGlow from "../Shared/CircleGlow";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css"


const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.nav} fixed top-0 left-0 w-full h-auto flex justify-between items-center p-5 z-9999 bg-transparent
    ${scrollY > 0 ? "transition-colors duration-1000 ease-in-out bg-[#120817]/30 backdrop-blur-2xl border-b border-pink-200/30" : ""}`}
    >
      <a href="#home" className="w-auto h-full flex items-center">
        <CircleGlow></CircleGlow>
        <h1 className="font-bold text-white text-[1.2rem] [text-shadow:0_0_1px_#fccee8] lg:text-[.9rem]">
          carly<span className="text-pink-300">.</span>chick
        </h1>
      </a>
      <div className="w-auto h-full hidden md:flex text-pink-200/60  items-center font-bold text-[1.2rem] lg:text-[.9rem] lg:font-semibold">
        <a
          className="hover:text-white half-border-bottom duration-300 mr-7 "
          href="#work"
        >
          Work
        </a>
        <a
          className="hover:text-white half-border-bottom duration-300 mr-7"
          href="#about"
        >
          About
        </a>
        <a
          className="hover:text-white half-border-bottom duration-300 mr-7"
          href="#skills"
        >
          Skills
        </a>
        <a
          className="hover:text-white half-border-bottom duration-300 "
          href="#contact"
        >
          Contact
        </a>
      </div>
      <a
        href="#resume"
        className="hover:bg-pink-300 hover:text-[#120817] duration-400 px-5 py-1 border border-pink-300/40 rounded-3xl uppercase font-light text-pink-200 tracking-widest 
      md:text-[.9rem]"
      >
        resume
      </a>
    </div>
  );
};

export default Navbar;
