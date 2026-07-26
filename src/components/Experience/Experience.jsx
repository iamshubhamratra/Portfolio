import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-4 sm:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line — hidden on mobile, centered on md+ */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-500/40 -translate-x-1/2"></div>

        {/* Experience Entries */}
        <div className="flex flex-col gap-10 md:gap-16">
          {experiences.map((experience, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={experience.id} className="relative">
                {/* Timeline Circle — hidden on mobile, visible on md+ */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 w-14 h-14 rounded-full border-4 border-[#8245ec] bg-gray-800 overflow-hidden shadow-lg shadow-purple-500/20">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Card container — full width on mobile, half width on md+ */}
                <div
                  className={`md:w-[calc(50%-2.5rem)] ${
                    isEven ? "md:ml-auto md:pl-0" : "md:mr-auto md:pr-0"
                  }`}
                >
                  <div className="p-5 sm:p-6 rounded-2xl shadow-2xl border border-white/20 bg-gray-900/90 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.15)] transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_1px_rgba(130,69,236,0.3)]">
                    {/* Header: logo + role info */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                        <img
                          src={experience.img}
                          alt={experience.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-white leading-tight truncate">
                          {experience.role}
                        </h3>
                        <h4 className="text-sm text-gray-300 truncate">
                          {experience.company}
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {experience.date}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
                      {experience.desc}
                    </p>

                    {/* Skills */}
                    <div className="mt-4">
                      <h5 className="font-medium text-white text-sm mb-2">
                        Skills:
                      </h5>
                      <ul className="flex flex-wrap gap-1.5">
                        {experience.skills.map((skill, skillIndex) => (
                          <li
                            key={skillIndex}
                            className="bg-[#8245ec]/80 text-gray-200 px-3 py-1 text-xs rounded-full border border-purple-400/30"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Experience;
