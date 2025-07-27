import React, { useEffect } from "react";
import monitor from "../assets/monitor.png";
import dash1 from "../assets/dash1.png";
import dash2 from "../assets/dash2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const pcSections = [
  {
    id: 1,
    text: "Мощный аналитический дешборд.",
    image: dash1,
  },
  {
    id: 2,
    text: "Гибкие настройки дешбордов.",
    image: dash2,
  },
];

const PCMonitorGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div 
      id="analytics"
      className="relative mt-20 border-b border-neutral-800 px-4 pb-20 max-w-4xl mx-auto flex flex-col items-center">
      <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
        Анализ
      </span>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 tracking-wide text-center">
        Анализируйте{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          данные о продажах
        </span>
      </h2>

      <div className="flex flex-col items-center justify-center gap-10 mt-10">
        {pcSections.map((section) => (
          <div
            key={section.id}
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
          >
            <img
              src={section.image}
              alt={`Monitor ${section.id}`}
              className="w-[25rem] sm:w-[40rem] lg:w-[60rem] h-auto object-contain [mask-image:_linear-gradient(to_right,transparent_0,_black_15px,_black_calc(100%-15px),transparent_100%)]"
            />
            <p className="mt-6 text-base sm:text-lg lg:text-xl max-w-md text-neutral-400">
              {section.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PCMonitorGrid;
