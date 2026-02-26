'use client';

import Image from 'next/image';

export default function SpecialOccasions() {
  const occasions = [
    {
      icon: '☪️',
      title: 'Ramadan',
      subtitle: 'The Blessed Month',
      description: 'Experience the spiritual journey of fasting, prayer, and reflection during the holiest month',
      features: ['Daily Iftar', 'Taraweeh Prayers', 'Quran Recitation'],
      color: 'from-purple-600 to-purple-800',
    },
    {
      icon: '🕌',
      title: 'Eid Celebrations',
      subtitle: 'Festivals of Joy',
      description: 'Join our community for Eid al-Fitr and Eid al-Adha prayers and celebrations',
      features: ['Special Prayers', 'Community Feast', 'Kids Activities'],
      color: 'from-green-600 to-green-800',
    },
    {
      icon: '📿',
      title: 'Fasting',
      subtitle: 'Spiritual Growth',
      description: 'Learn about and practice voluntary fasts throughout the year for spiritual rewards',
      features: ['Monday & Thursday', 'White Days', 'Day of Arafah'],
      color: 'from-blue-600 to-blue-800',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Layer - Calligraphy with reduced opacity */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/assets/whitebg2.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-islamic-yellow/5 rounded-full blur-3xl z-[1]"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-green-700/5 rounded-full blur-3xl z-[1]"></div>

      {/* Soft gradient fade at bottom for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white z-[2]"></div>

      {/* Content Layer */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-green-700 text-xs sm:text-sm uppercase tracking-widest font-semibold mb-2 sm:mb-3">
            ISLAMIC CALENDAR
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Special <span className="text-green-700">Occasions</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Celebrate and observe important Islamic events with our community
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {occasions.map((occasion, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-2 border-gray-100"
            >
              {/* White Header */}
              <div className="relative bg-white p-5 sm:p-6 lg:p-8 pb-12 sm:pb-14 lg:pb-16 border-b-4 border-islamic-yellow">
                <div className="text-5xl sm:text-6xl lg:text-7xl mb-3 sm:mb-4 filter drop-shadow-lg">{occasion.icon}</div>
                <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {occasion.title}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm font-medium uppercase tracking-wide">
                  {occasion.subtitle}
                </p>
                
                {/* Decorative wave */}
                <div className="absolute bottom-0 left-0 right-0">
                  <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-6 sm:h-8">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="white"></path>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-8 pt-3 sm:pt-4">
                <p className="text-gray-600 text-sm leading-relaxed mb-4 sm:mb-6">
                  {occasion.description}
                </p>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {occasion.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-islamic-yellow rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-xs sm:text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button className="w-full bg-gradient-to-r from-islamic-yellow to-islamic-gold hover:from-islamic-gold hover:to-islamic-yellow text-gray-900 font-bold py-2.5 sm:py-3 rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-md text-sm sm:text-base">
                  Learn More
                </button>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-islamic-yellow rounded-3xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
