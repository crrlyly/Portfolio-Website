import { useEffect, useMemo, useState } from "react";

const Particles = () => {
  const [scrollY, setScrollY] = useState(0);

  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 5 + 4,
        delay: Math.random() * 5,
        depth: Math.random() * 0.12 + 0.03,
      })),
    [],
  );

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
    <div className="pointer-events-none inset-0 overflow-hidden z-40 fixed top-0 ">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            transform: `translateY(${-scrollY * particle.depth}px)`,
          }}
        >
          <span
            className="particle block rounded-full bg-pink-200"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Particles;
