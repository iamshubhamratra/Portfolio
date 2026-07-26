import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line - centered on md+ */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-500/40 -translate-x-1/2" />

        <div className="flex flex-col gap-10 md:gap-16">
          {education.map((edu, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={edu.id} className="relative">
                {/* Timeline Circle / Logo Dot */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 w-14 h-14 rounded-full border-4 border-[#8245ec] bg-gray-800 overflow-hidden shadow-lg shadow-purple-500/20">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Card Container */}
                <div
                  className={`md:w-[calc(50%-2.5rem)] ${
                    isEven ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
                  }`}
                >
                  <div className="p-5 sm:p-6 rounded-2xl shadow-2xl border border-white/20 bg-gray-900/90 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.15)] transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_1px_rgba(130,69,236,0.3)]">
                    {/* Header: Logo + Degree Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                        <img
                          src={edu.img}
                          alt={edu.school}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                          {edu.degree}
                        </h3>
                        <h4 className="text-sm text-gray-300 mt-1">
                          {edu.school}
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">{edu.date}</p>
                      </div>
                    </div>

                    {/* Grade if present */}
                    {edu.grade && (
                      <p className="mt-3 text-sm text-purple-400 font-semibold">
                        Grade: {edu.grade}
                      </p>
                    )}

                    {/* Description */}
                    <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
