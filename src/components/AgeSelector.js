import React from 'react';

const ages = [
  "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11",
  "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20"
];

const colors = [
  "border-yellow-400 text-yellow-600", "border-yellow-400 text-yellow-600", "border-yellow-400 text-yellow-600",
  "border-orange-400 text-orange-600", "border-orange-500 text-orange-600", "border-orange-500 text-orange-600",
  "border-pink-500 text-pink-600", "border-pink-500 text-pink-600", "border-pink-500 text-pink-600",
  "border-pink-500 text-pink-600", "border-pink-500 text-pink-600", "border-green-500 text-green-600",
  "border-green-500 text-green-600", "border-green-500 text-green-600", "border-green-500 text-green-600",
  "border-cyan-500 text-cyan-600", "border-cyan-500 text-cyan-600", "border-cyan-500 text-cyan-600",
  "border-cyan-500 text-cyan-600",
];

export default function AgeSelector() {
  return (
    <section className="py-16 bg-white animate-section">
      <div className="max-w-[1400px] mx-auto px-2 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800 animate-fadeUp">
          How Old Are You? 🎯
        </h2>

        <p className="text-gray-500 mb-10 text-sm md:text-base animate-fadeUp delay-200">
          Pick your age and find the perfect courses just for you! ✨
        </p>

        {/* RESPONSIVE WRAP LAYOUT */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 max-w-4xl mx-auto px-4">
          {ages.map((age, i) => (
            <button
              key={age}
              style={{ animationDelay: `${i * 40}ms` }}
              className={`flex flex-col items-center justify-center border-2 
              ${colors[i]} rounded-xl md:rounded-2xl py-2 px-3 md:px-5 min-w-[60px] md:min-w-[80px]
              transition-all duration-300
              hover:bg-gray-50 hover:-translate-y-1 hover:shadow-md
              active:scale-95
              animate-ageBox`}
            >
              <span className="text-xs sm:text-sm md:text-base font-bold leading-tight">
                {age}
              </span>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-medium uppercase tracking-wider">
                Years
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        .animate-section {
          animation: sectionFade 0.8s ease forwards;
        }

        @keyframes sectionFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.8s ease forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-ageBox {
          opacity: 0;
          animation: agePop 0.5s ease forwards;
        }

        @keyframes agePop {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}


