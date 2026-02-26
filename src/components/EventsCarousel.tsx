'use client';

import Image from 'next/image';

export default function EventsCarousel() {
  const events = [
    {
      title: 'Selected Verses from the Quran',
      subtitle: 'Easy Tafsir',
      date: 'Daily Lessons',
      days: '365',
      hours: '00',
      mins: '00',
      image: '/assets/4.jpg',
      description: 'Explore beautiful verses from the Holy Quran with easy-to-understand explanations and reflections.',
    },
    {
      title: 'Life of Prophet Muhammad ﷺ',
      subtitle: 'Seerah Studies',
      date: 'Weekly Sessions',
      days: '52',
      hours: '10',
      mins: '00',
      image: '/assets/5.png',
      description: 'Learn about the blessed life, character, and teachings of Prophet Muhammad (Peace be upon him).',
    },
    {
      title: 'How to Pray',
      subtitle: 'Salah Guide',
      date: 'Beginner Course',
      days: '30',
      hours: '00',
      mins: '00',
      image: '/assets/6.jpg',
      description: 'Complete step-by-step guide to performing the five daily prayers correctly with proper recitations.',
    },
    {
      title: 'Adhkar',
      subtitle: 'Daily Remembrance',
      date: 'Morning & Evening',
      days: '365',
      hours: '06',
      mins: '00',
      image: '/assets/9.jpg',
      description: 'Learn and practice the daily supplications and remembrance of Allah for spiritual growth.',
    },
    {
      title: 'Du\'ās',
      subtitle: 'Powerful Prayers',
      date: 'Essential Collection',
      days: '90',
      hours: '00',
      mins: '00',
      image: '/assets/3.jpg',
      description: 'Master the most important and powerful supplications from the Quran and Sunnah.',
    },
    {
      title: 'Earn Easy Rewards',
      subtitle: 'Good Deeds',
      date: 'Daily Practice',
      days: '365',
      hours: '00',
      mins: '00',
      image: '/assets/2.jpg',
      description: 'Discover simple daily actions that earn immense rewards and bring you closer to Allah.',
    },
    {
      title: 'Islamic Manners',
      subtitle: 'Akhlaq & Adab',
      date: 'Character Building',
      days: '60',
      hours: '00',
      mins: '00',
      image: '/assets/5.png',
      description: 'Learn the beautiful manners and etiquette taught by Islam for a better life and character.',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Layer - Calligraphy with reduced opacity */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/assets/whitebg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      {/* Soft gradient fade at bottom for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white z-[1]"></div>

      {/* Content Layer */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            <span className="text-green-700">Core Islamic Teachings</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Learn the fundamentals of Islam through our comprehensive programs
          </p>
        </div>

        {/* 3x2 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-7xl mx-auto">
          {events.slice(0, 6).map((event, index) => (
            <div
              key={index}
              className="group relative w-full h-[280px] sm:h-[300px] lg:h-[320px] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-all duration-500"
              />
              
              {/* Countdown Badge */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-amber-100 rounded-lg p-1.5 sm:p-2 text-center shadow-md z-10">
                <div className="text-lg sm:text-xl font-bold text-gray-800">{event.days}</div>
                <div className="text-[9px] sm:text-[10px] text-gray-600 mb-0.5">Days</div>
                <div className="text-sm sm:text-base font-semibold text-gray-800">{event.hours}</div>
                <div className="text-[9px] sm:text-[10px] text-gray-600 mb-0.5">Hours</div>
                <div className="text-sm sm:text-base font-semibold text-gray-800">{event.mins}</div>
                <div className="text-[9px] sm:text-[10px] text-gray-600">Min</div>
              </div>

              {/* Title Overlay - Always Visible */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 z-10">
                <p className="text-islamic-yellow text-[10px] sm:text-xs mb-0.5 font-medium">{event.subtitle}</p>
                <h3 className="text-white text-base sm:text-lg lg:text-xl font-bold line-clamp-2">{event.title}</h3>
                <p className="text-white/80 text-[10px] sm:text-xs mt-0.5 sm:mt-1">{event.date}</p>
              </div>

              {/* Hover Content Overlay - Green animated from bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-700/70 via-green-600/60 to-green-800/50 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out flex flex-col justify-center items-center p-4 sm:p-5 lg:p-6 z-20">
                <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100">{event.title}</h3>
                <div className="w-12 sm:w-16 h-0.5 bg-islamic-yellow mb-3 sm:mb-4 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-200"></div>
                <p className="text-white text-center text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 line-clamp-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-300">{event.description}</p>
                <button className="bg-islamic-yellow hover:bg-islamic-gold text-black font-semibold px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg transition-all transform translate-y-8 group-hover:translate-y-0 duration-700 delay-400 hover:scale-105 text-xs sm:text-sm">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
