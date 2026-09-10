const Contact = () => {
  return (
    <section id="contact" className="w-full h-auto bg-[#120817] md:py-40 py-10 px-5 flex justify-center items-center">
      <div className=" w-full h-auto flex flex-col items-center max-w-300 ">
        <h1
          className=" text-pink-300 uppercase tracking-[.4em] mb-10 
        md:text-[.8rem]"
        >
          // 05 - Command Center
        </h1>
        <span className="text-5xl font-bold text-white text-center md:text-7xl ">
          Let's build something{" "}
          <span className="text-pink-500 [text-shadow:0px_0px_10px_#f6339a]">
            worth remembering.
          </span>
        </span>
        <div className="relative flex w-full h-100 items-center justify-center">
          <div className="z-10 absolute h-57.5 w-57.5 rounded-full border-2 border-pink-500 animate-pulse-ring"></div>

          <div className="z-10 absolute h-75 w-75 rounded-full border-2 border-pink-500/30 animate-pulse-ring [animation-delay:0.6s]"></div>

          <div className="z-10 absolute h-92.5 w-92.5 rounded-full border-2 border-pink-500/50 animate-pulse-ring [animation-delay:1.2s]"></div>

          <a
            href="mailto:carlyfchick@gmail.com"
            className="z-20 cursor-pointer w-40 h-40 bg-pink-500 rounded-full text-[#120817] flex items-center justify-center text-2xl font-bold [box-shadow:0px_0px_60px_#f6339a]"
          >
            Say Hi
          </a>
        </div>
        <div id="resume" className="animate-jump text-[1.2rem] mb-15 mt-10 text-purple-300 text-center flex items-center md:text-2xl font-bold">
          Download Resume Here:
          <a
            href="/Carly-Resume.pdf"
            download="Carly-Resume.pdf"
            className="w-10 h-10 border-2 ml-3 rounded-full flex justify-center items-center"
          >
            <span className="material-symbols-outlined text-purple-400 text-2xl">
              download
            </span>
          </a>
        </div>
        <div className="text-pink-200/70 text-center text-[.9rem]">
          © 2026 Carly Chick — Architecting Digital Emotion
        </div>
      </div>
    </section>
  );
};

export default Contact;
