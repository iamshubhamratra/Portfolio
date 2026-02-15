import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] bg-skills-gradient"
    >
      {/* Title */}
      <div className="text-center mb-24">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white -translate-x-1/2" />

        <div className="flex flex-col gap-32">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="grid grid-cols-[1fr_auto_1fr] items-start"
            >
              {/* LEFT CARD */}
              <div className="flex justify-end pr-16">
                {index % 2 === 0 && <Card edu={edu} />}
              </div>

              {/* DOT (IN FLOW — NO ABSOLUTE) */}
              <div className="flex justify-center">
                <div className="w-14 h-14 rounded-full bg-gray-400 border-4 border-[#8245ec] flex items-center justify-center z-10">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="flex justify-start pl-16">
                {index % 2 !== 0 && <Card edu={edu} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;


/* ---------------- CARD COMPONENT ---------------- */

const Card = ({ edu }) => {
  return (
    <div className="w-[420px] p-6 rounded-2xl border border-white bg-gray-900 shadow-[0_0_20px_rgba(130,69,236,0.3)] transition-transform hover:scale-105">
      <div className="flex gap-6 items-center">
        <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
          <img
            src={edu.img}
            alt={edu.school}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            {edu.degree}
          </h3>
          <p className="text-sm text-gray-300">{edu.school}</p>
          <p className="text-sm text-gray-500">{edu.date}</p>
        </div>
      </div>

      <p className="mt-4 text-gray-400 font-bold">{edu.grade}</p>
      <p className="mt-2 text-gray-400">{edu.desc}</p>
    </div>
  );
};
