const TitlePage = () => {
  return (
    <main
      style={{
        background: `
          radial-gradient(
            circle at 50% 50%,
            rgba(255, 80, 200, 0.35) 0%,
            rgba(170, 50, 150, 0.25) 25%,
            transparent 55%
          ),
          radial-gradient(
            circle at 20% 20%,
            rgba(200, 60, 170, 0.2) 0%,
            transparent 45%
          ),
          radial-gradient(
            circle at 80% 80%,
            rgba(180, 50, 160, 0.2) 0%,
            transparent 45%
          ),
          #120817
        `,
      }}
      className="flex h-dvh w-full flex-col items-center justify-around relative"
    >
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 text-[16vw] font-bold uppercase text-transparent [-webkit-text-stroke:2px_pink] opacity-10 scale-y-130 scale-x-105">
        portfolio
      </div>

      <div></div>

      <h2 className="text-center text-3xl md:text-5xl font-bold uppercase text-green-200 lg:text-8xl">
        Architecting{" "}
        <span className="block text-pink-300 [text-shadow:0_0_20px_#b8476f]">Digital Emotion</span>
      </h2>

      <p className="font-light uppercase tracking-widest text-pink-200 md:tracking-[.3em]">
        Creative Developer &middot; UI/UX Designer
      </p>
    </main>
  );
};

export default TitlePage;
