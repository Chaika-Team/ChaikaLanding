import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { testimonials } from "../constants";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      id="team"
      className="mt-20 tracking-wide">
      <div className="text-center mb-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Наша{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            команда
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
        {testimonials.map((member, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-6"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 text-center flex flex-col items-center">
              <img
                src={member.image}
                alt={member.user}
                className="w-20 h-20 mb-4 rounded-full border border-neutral-300 object-cover"
              />
              <h5 className="text-xl font-semibold text-white">{member.user}</h5>
              <p className="text-sm text-orange-500 italic mt-1">
                {member.company}
              </p>
              <p className="mt-4 text-md text-neutral-400 font-light">
                {member.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;