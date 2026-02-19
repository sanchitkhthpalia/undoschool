import React, { useState } from 'react';
import ProgramCardSmall from "./ProgramCardSmall";

const timeFilters = [
  {
    id: "morning",
    title: "Morning classes",
    time: "8am - 12pm",
    icon: "mrn.png",
    activeBg: "bg-[#EAF4FF]",
    activeBorder: "border-[#3B82F6]",
  },
  {
    id: "afternoon",
    title: "Afternoon classes",
    time: "12pm - 4pm",
    icon: "aft.png",
    activeBg: "bg-[#FFF7ED]",
    activeBorder: "border-[#FB923C]",
  },
  {
    id: "evening",
    title: "Evening classes",
    time: "4pm - 8pm",
    icon: "eve.png",
    activeBg: "bg-[#F3E8FF]",
    activeBorder: "border-[#8B5CF6]",
  },
  {
    id: "night",
    title: "Late evening classes",
    time: "8pm - 11pm",
    icon: "sun1.png",
    activeBg: "bg-[#EEF2FF]",
    activeBorder: "border-[#6366F1]",
  },
];

const FilterWithTime = () => {
  const [hoveredTime, setHoveredTime] = useState(null);

  return (
    <section className="bg-[#F2FBF9] py-12 md:py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-[42px] font-bold text-gray-900 tracking-tight leading-tight">
            Filter with Time
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-[16px]">
            Choose the perfect time that fits your child's schedule
          </p>
        </div>

        {/* TIME FILTER CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-16">
          {timeFilters.map((item) => {
            const isActive = hoveredTime === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredTime(item.id)}
                onMouseLeave={() => setHoveredTime(null)}
                className={`relative h-[90px] md:h-[100px] p-4 md:p-6 rounded-[20px] cursor-pointer border
                  transition-all duration-300 ease-out
                  ${isActive
                    ? `${item.activeBg} ${item.activeBorder} shadow-md`
                    : "bg-white border-gray-100"
                  }`}
              >
                {/* TEXT */}
                <div className="relative z-10">
                  <h4 className="font-bold text-[#1A1A1A] text-sm md:text-[16px]">
                    {item.title}
                  </h4>
                  <p className="text-[11px] md:text-[13px] text-gray-400 font-medium">
                    {item.time}
                  </p>
                </div>

                {/* SMOOTH ICON FLOAT */}
                <div
                  className={`absolute right-4 bottom-2
                    transition-transform duration-700 ease-in-out
                    ${isActive
                      ? "-translate-y-2 md:-translate-y-4 scale-110 opacity-100"
                      : "translate-y-0 scale-100 opacity-70"
                    }`}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 md:w-12 md:h-12 object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* PROGRAMS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {[1, 2].map((_, i) => (
            <ProgramCardSmall key={i} sellingFast={i === 0} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FilterWithTime;


