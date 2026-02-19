import React from 'react';

const ProgramCardSmall = ({ sellingFast }) => {
  return (
    <div className="relative bg-white border border-gray-100 rounded-[30px] p-4 flex flex-col md:flex-row gap-5 hover:shadow-lg transition-all group">
      {/* "Selling Fast" Badge positioned on top of the image container */}
      {sellingFast && (
        <div className="absolute top-2 left-2 z-20">
          <span className="bg-[#FF8A00] text-white text-[10px] font-bold px-2 py-1 rounded-lg">
            Selling Fast
          </span>
        </div>
      )}

      {/* Left side: Image */}
      <div className="w-full md:w-[200px] h-[140px] flex-shrink-0 overflow-hidden rounded-[20px]">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350"
          alt="Program"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Right side: Content */}
      <div className="flex-grow flex flex-col justify-center">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="bg-yellow-50 text-yellow-600 text-[10px] font-bold px-2 py-0.5 rounded-full">English</span>
          <span className="bg-rose-50 text-rose-600 text-[10px] font-bold px-2 py-0.5 rounded-full">Intermediate</span>
          <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full">Morning class</span>
        </div>

        <h3 className="text-[14px] font-bold text-gray-900 leading-snug mb-2 group-hover:text-purple-600 transition-colors">
          Summer robotics camp: fun projects with auto arduino, Tinker cad coding...
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" alt="Instructor" className="w-5 h-5 rounded-full" />
          <span className="text-[11px] text-gray-500 font-medium">By: Alex Carter</span>
          <span className="text-[11px] text-yellow-500 font-bold ml-1">★ 4.9 | 200+ learners</span>
        </div>

        {/* Price & Cart Footer */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-4 text-[11px] font-bold text-gray-600">
            <span>👤 7-10 yrs</span>
            <span>🕒 45m</span>
            <span className="text-gray-900 text-[13px]">₹ 299</span>
          </div>
          <button className="p-2 border border-gray-100 rounded-full hover:bg-purple-50 hover:text-purple-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCardSmall;