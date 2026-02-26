'use client';

import Image from 'next/image';

export default function IslamicBanner() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 xl:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/homeimg.jpg"
          alt="Islamic Banner Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-islamic-yellow rounded-full flex items-center justify-center shadow-2xl">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
              </svg>
            </div>
          </div>

          {/* Main Content */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 lg:mb-6 leading-tight px-4">
            Join Our Growing <span className="text-islamic-yellow">Islamic Community</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 lg:mb-10 leading-relaxed px-4">
            Be part of a vibrant community dedicated to faith, knowledge, and service. 
            Together we grow stronger in our deen and support one another.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button className="w-full sm:w-auto bg-islamic-yellow hover:bg-islamic-gold text-black font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-lg transition-all transform hover:scale-105 shadow-xl text-sm sm:text-base">
              Become a Member
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-lg transition-all transform hover:scale-105 text-sm sm:text-base">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16 pt-8 sm:pt-10 lg:pt-12 border-t border-white/20 px-4">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-islamic-yellow mb-2">5000+</p>
              <p className="text-white/80 text-xs sm:text-sm uppercase tracking-wide">Community Members</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-islamic-yellow mb-2">50+</p>
              <p className="text-white/80 text-xs sm:text-sm uppercase tracking-wide">Weekly Programs</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-islamic-yellow mb-2">1200+</p>
              <p className="text-white/80 text-xs sm:text-sm uppercase tracking-wide">Students Enrolled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
