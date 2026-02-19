import React, { useState } from 'react';
import FeaturedProgramCard from './FeaturedProgramCard';

const categories = [
  { id: 'coding', name: 'Coding', icon: '/computer.png' },
  { id: 'public-speaking', name: 'Public speaking', icon: '/microphone.png' },
  { id: 'chess', name: 'Chess', icon: '/chess.png' },
  { id: 'homework', name: 'Home work help', icon: '/book.png' },
  { id: 'app-building', name: 'App building', icon: '/smartphone.png' },
];

const ExploreCategories = () => {
  const [activeTab, setActiveTab] = useState('coding');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-[42px] font-bold text-[#1A1A1A] leading-tight">
            Popular Categories
          </h2>
          <p className="text-gray-500 mt-3 text-sm md:text-[16px]">
            Pick what you love most! These categories have everything you need to learn something awesome ✨
          </p>
        </div>

        {/* CATEGORY CARDS */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 md:mb-20">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative w-[160px] sm:w-[210px] h-[90px] md:h-[100px] rounded-[20px] md:rounded-[24px] cursor-pointer border-2 transition-all duration-300
                  ${isActive
                    ? 'bg-[#FF7A2F] border-transparent shadow-[0_15px_30px_rgba(255,122,47,0.35)]'
                    : 'bg-white border-gray-100 hover:border-gray-200'
                  }`}
              >
                {/* TEXT */}
                <div className="h-full flex items-center pl-4 md:pl-6 w-[55%]">
                  <span
                    className={`text-xs sm:text-[15px] font-bold leading-tight
                      ${isActive ? 'text-white' : 'text-gray-700'}`}
                  >
                    {cat.name}
                  </span>
                </div>

                {/* ICON – FIGMA STYLE */}
                <div
                  className={`absolute right-[-6px] top-[-20px] md:top-[-30px] transition-all duration-500 ease-out
                    ${isActive
                      ? 'scale-110 -translate-y-1'
                      : 'scale-100 translate-y-1'
                    }`}
                >
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    className="w-[80px] sm:w-[105px] h-auto object-contain drop-shadow-xl"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* PROGRAMS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[1, 2, 3, 4].map((_, i) => (
            <FeaturedProgramCard
              key={i}
              sellingFast={i === 0}
              category={activeTab}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExploreCategories;
