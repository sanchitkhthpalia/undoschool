import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#3b0a6f] via-[#4b0082] to-[#5b0f9c] min-h-[520px] flex items-center overflow-hidden font-sans py-12 md:py-0">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10 flex flex-col md:flex-row items-center justify-between relative gap-10 md:gap-0">

        {/* LEFT IMAGE */}
        <div className="relative w-full md:w-1/4 flex justify-center order-2 md:order-1">

          {/* 500+ badge */}
          <div className="absolute -top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-4 text-white text-center z-10">
            <p className="text-lg md:text-xl font-bold">500+</p>
            <p className="text-[10px] md:text-xs opacity-80">Courses</p>
          </div>

          <img
            src="/boy.png"
            alt="Boy"
            className="h-[250px] md:h-[380px] object-contain"
          />

          {/* rating badge */}
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/10 backdrop-blur-md 
                          border border-white/20 rounded-2xl px-3 py-1 md:px-4 md:py-2 
                          text-white flex items-center gap-2 z-10">

            {/* animated star */}
            <span className="text-yellow-400 text-lg animate-starThrow">★</span>

            <div>
              <p className="font-bold leading-none">4.9</p>
              <p className="text-[10px] opacity-80">Rating</p>
            </div>
          </div>
        </div>

        {/* CENTER CONTENT */}
        <div className="w-full md:w-2/4 text-center text-white px-4 md:px-6 order-1 md:order-2">
          <h1 className="text-3xl md:text-5xl font-medium mb-3">
            Learn a New Skill
          </h1>
          <p className="text-2xl md:text-4xl font-bold text-[#d9ff3f] mb-8 md:mb-14">
            Everyday, Anytime, and Anywhere.
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto w-full">
            <div className="flex items-center bg-white rounded-full p-1.5 md:p-2 shadow-xl">
              <div className="pl-3 md:pl-4 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                type="text"
                placeholder="Search your course..."
                className="flex-1 px-3 md:px-4 py-2 md:py-3 outline-none text-gray-700 text-sm md:text-lg w-full bg-transparent"
              />

              <button className="bg-gradient-to-r from-[#6a11cb] to-[#ff0099] text-white px-5 md:px-10 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base whitespace-nowrap">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full md:w-1/4 flex justify-center order-3">

          {/* happy kids badge */}
          <div className="absolute -top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-4 text-white text-center z-10">
            <p className="text-lg md:text-xl font-bold">10k+</p>
            <p className="text-[10px] md:text-xs opacity-80">Happy kids</p>
          </div>

          <img
            src="/girl2.png"
            alt="Girl"
            className="h-[250px] md:h-[380px] object-contain"
          />
        </div>
      </div>

      {/* STAR ANIMATION (hand → throw feel) */}
      <style>{`
        @keyframes starThrow {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          35% {
            transform: translateY(-6px) rotate(-10deg) scale(1.15);
          }
          65% {
            transform: translateY(-12px) rotate(12deg) scale(1.25);
            filter: drop-shadow(0 0 6px gold);
          }
          100% {
            transform: translateY(0) rotate(0deg) scale(1);
            filter: none;
          }
        }

        .animate-starThrow {
          animation: starThrow 1.6s ease-in-out 3;
        }
      `}</style>
    </section>
  );
};

export default Hero;


