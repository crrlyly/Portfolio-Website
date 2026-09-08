const Contact = () => {
  return (
    <section className="w-full h-auto bg-[#120817] py-40 px-5 md:py-50 flex justify-center items-center">
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
          <div className="absolute h-57.5 w-57.5 rounded-full border-2 border-pink-500 animate-pulse-ring"></div>

          <div className="absolute h-75 w-75 rounded-full border-2 border-pink-500/30 animate-pulse-ring [animation-delay:0.6s]"></div>

          <div className="absolute h-92.5 w-92.5 rounded-full border-2 border-pink-500/50 animate-pulse-ring [animation-delay:1.2s]"></div>

          <div className="w-50 h-50 bg-pink-500 rounded-full text-[#120817] flex items-center justify-center text-2xl font-bold [box-shadow:0px_0px_60px_#f6339a]">
            Say Hi
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
