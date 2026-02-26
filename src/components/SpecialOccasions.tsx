'use client';

import Image from 'next/image';
import SectionHeading from './SectionHeading';

export default function SpecialOccasions() {
  const occasions = [
    {
      icon: '☪️',
      title: 'Ramadan',
      subtitle: 'The Blessed Month',
      description: 'Experience the spiritual journey of fasting, prayer, and reflection during the holiest month',
      features: ['Daily Iftar', 'Taraweeh Prayers', 'Quran Recitation'],
      color: 'from-purple-600 to-purple-800',
      image: '/assets/ramdan.jpg',
    },
    {
      icon: '🕌',
      title: 'Eid Celebrations',
      subtitle: 'Festivals of Joy',
      description: 'Join our community for Eid al-Fitr and Eid al-Adha prayers and celebrations',
      features: ['Special Prayers', 'Community Feast', 'Kids Activities'],
      color: 'from-green-600 to-green-800',
      image: '/assets/Eid.jpg',
    },
    {
      icon: '📿',
      title: 'Fasting',
      subtitle: 'Spiritual Growth',
      description: 'Learn about and practice voluntary fasts throughout the year for spiritual rewards',
      features: ['Monday & Thursday', 'White Days', 'Day of Arafah'],
      color: 'from-blue-600 to-blue-800',
      image: '/assets/fasting.jpg',
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-islamic-yellow/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-green-700/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <p className="text-green-700 text-xs sm:text-sm uppercase tracking-widest font-semibold mb-4 text-center">
            ISLAMIC CALENDAR
          </p>
          <SectionHeading
            firstWord="Special"
            highlightedWord="Occasions"
            subtitle="Celebrate and observe important Islamic events with our community"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {occasions.map((occasion, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-2 border-gray-100"
            >
              {/* Background Image Header */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={occasion.image}
                  alt={occasion.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                
                {/* Title on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {occasion.title}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm font-medium uppercase tracking-wide">
                    {occasion.subtitle}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-8">
                <p className="text-gray-600 text-sm leading-relaxed mb-4 sm:mb-6">
                  {occasion.description}
                </p>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {occasion.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
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
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-600 rounded-3xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
