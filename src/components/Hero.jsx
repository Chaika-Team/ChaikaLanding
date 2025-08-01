import React, { useEffect, useRef } from "react";
import train from "../assets/train.png";

const Hero = () => {
  const trainArray = Array(5).fill(train);
  const totalLogos = trainArray.length;
  const stripRef = useRef(null);
  const speed = 200;

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const totalWidth = totalLogos * 300;
    let start;
    let rafId;

    const animate = (time) => {
      if (start === undefined) start = time;
      const elapsed = time - start;
      const dist = ((speed * elapsed) / 1000) % totalWidth;
      strip.style.transform = `translateX(${-dist}px)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [totalLogos, speed]);


  return (
    <div
      id="home"
      className="relative flex flex-col items-center justify-center border-b border-neutral-800"
      style={{ height: "calc(100vh - 9rem)" }}
    >
      <h1 className="animate-[slide-in-top_0.5s_ease-out_forwards] text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Чайка
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {' '}для проводников
        </span>
      </h1>
      <p className="opacity-0 animate-[slide-in-bottom_0.5s_ease-out_0.5s_forwards] pt-10 pb-24 text-lg text-center text-neutral-500 max-w-4xl">
        Управляйте продажами в пассажирских поездах с легкостью
      </p>
      <div className="opacity-0 animate-[fade-in_1s_ease-out_1s_forwards] flex justify-center mb-20">
        <a
          href="#app"
          className="bg-gradient-to-r from-orange-500 to-orange-800 text-center py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base mx-2 sm:mx-3 rounded-md transition duration-300 hover:shadow-[0_0_15px_5px_rgba(200,30,20,0.7)] hover:scale-105"
        >
          Подробнее
        </a>
        <a
          href="#footer"
          className="border py-2 px-3 text-center sm:py-3 sm:px-4 text-sm sm:text-base mx-2 sm:mx-3 rounded-md hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
        >
          Связаться с нами
        </a>
      </div>

      {/* Scrolling strip with JS-based animation for no-blink */}
      <div className="opacity-0 animate-[fade-in_1.5s_ease-out_1.5s_forwards] w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)] [mask-repeat:no-repeat]">
        <div
          ref={stripRef}
          className="flex shrink-0 [will-change:transform] [transform:translateZ(0)] [backface-visibility:hidden]"
          style={{ width: `${2 * totalLogos * 300}px` }}
        >
          {[...trainArray, ...trainArray].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="train"
              width={300}
              height={80}
              className="h-20 w-[300px] flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
