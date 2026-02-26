'use client';

import Image from 'next/image';
import SectionHeading from './SectionHeading';

export default function CommunitySupport() {
  const supportCards = [
    {
      icon: '❓',
      title: 'Frequently Asked Questions',
      subtitle: '',
      description: 'Get answers to common questions about Islam from those seeking to learn more',
      buttonText: 'Explore FAQ',
      borderColor: 'border-t-islamic-yellow',
      iconBg: 'bg-gradient-to-br from-islamic-yellow to-islamic-gold',
      buttonBg: 'bg-islamic-yellow/10 hover:bg-islamic-yellow/20 text-gray-900',
      iconShadow: 'shadow-lg shadow-islamic-yellow/30',
    },
    {
      icon: '🤝',
      title: 'New Muslim Resources',
      subtitle: 'Guidance & Support',
      description: 'Essential tools and resources for new Muslims on their spiritual journey',
      buttonText: 'Get Started',
      borderColor: 'border-t-green-600',
      iconBg: 'bg-gradient-to-br from-green-600 to-green-700',
      buttonBg: 'bg-green-50 hover:bg-green-100 text-green-700',
      iconShadow: 'shadow-lg shadow-green-200/50',
    },
    {
      icon: '📄',
      title: 'Research Articles',
      subtitle: 'Islamic Studies',
      description: 'In-depth articles and research on various aspects of Islamic knowledge',
      buttonText: 'Read Articles',
      borderColor: 'border-t-islamic-yellow',
      iconBg: 'bg-gradient-to-br from-islamic-yellow to-islamic-gold',
      buttonBg: 'bg-islamic-yellow/10 hover:bg-islamic-yellow/20 text-gray-900',
      iconShadow: 'shadow-lg shadow-islamic-yellow/30',
    },
    {
      icon: '🧸',
      title: 'Kids\' Corner',
      subtitle: 'Fun & Learning',
      description: 'Interactive Islamic education and activities designed for children',
      buttonText: 'Discover',
      borderColor: 'border-t-green-600',
      iconBg: 'bg-gradient-to-br from-green-600 to-green-700',
      buttonBg: 'bg-green-50 hover:bg-green-100 text-green-700',
      iconShadow: 'shadow-lg shadow-green-200/50',
    },
    {
      icon: '👥',
      title: 'Youth Issues',
      subtitle: 'Guidance & Mentorship',
      description: 'Support and guidance for challenges faced by Muslim youth in today\'s world',
      buttonText: 'Learn More',
      borderColor: 'border-t-islamic-yellow',
      iconBg: 'bg-gradient-to-br from-islamic-yellow to-islamic-gold',
      buttonBg: 'bg-islamic-yellow/10 hover:bg-islamic-yellow/20 text-gray-900',
      iconShadow: 'shadow-lg shadow-islamic-yellow/30',
    },
    {
      icon: '🌙',
      title: 'Women\'s Section',
      subtitle: 'Support & Empowerment',
      description: 'Resources and support for Muslim women on various life matters',
      buttonText: 'Explore',
      borderColor: 'border-t-green-600',
      iconBg: 'bg-gradient-to-br from-green-600 to-green-700',
      buttonBg: 'bg-green-50 hover:bg-green-100 text-green-700',
      iconShadow: 'shadow-lg shadow-green-200/50',
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/whitebg4.jpg"
          alt="Background"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      {/* Light Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/40 via-gray-50/40 to-white/40 z-[1]"></div>

      {/* Subtle Islamic Mosque Silhouettes Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-[2]">
        <svg className="absolute left-10 top-20 w-32 h-32" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10 L55 30 L75 30 L60 42 L65 62 L50 50 L35 62 L40 42 L25 30 L45 30 Z" />
        </svg>
        <svg className="absolute right-20 bottom-32 w-40 h-40" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10 L55 30 L75 30 L60 42 L65 62 L50 50 L35 62 L40 42 L25 30 L45 30 Z" />
        </svg>
      </div>

      {/* Green Abstract Wave - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-20 pointer-events-none z-[2]">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 300 Q100 250 200 300 T400 300 L400 400 L0 400 Z" fill="url(#greenGradient1)" />
          <defs>
            <linearGradient id="greenGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Green Abstract Wave - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-20 pointer-events-none z-[2]">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M400 320 Q300 280 200 320 T0 320 L0 400 L400 400 Z" fill="url(#greenGradient2)" />
          <defs>
            <linearGradient id="greenGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Title */}
        <div className="mb-12 sm:mb-16">
          <SectionHeading
            firstWord="Community Support &"
            highlightedWord="Education"
            subtitle="Comprehensive Resources & Support for Every Member of Our Community"
          />
        </div>

        {/* Cards Grid - 3x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {supportCards.map((card, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-visible cursor-pointer transition-all duration-300 hover:-translate-y-2 border-t-[3px] ${card.borderColor} h-[280px] sm:h-[300px] lg:h-[320px] flex flex-col pt-8`}
            >
              {/* Floating Icon Badge - Fully Rounded on All Sides */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10">
                <div className={`${card.iconBg} ${card.iconShadow} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-300`}>
                  {card.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1 px-5 sm:px-6 pb-6 flex flex-col justify-center text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight tracking-tight">
                  {card.title}
                </h3>
                {card.subtitle && (
                  <p className="text-xs sm:text-sm font-semibold text-green-600 mb-3 tracking-wide">
                    {card.subtitle}
                  </p>
                )}
                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                  {card.description}
                </p>
                
                {/* CTA Button - Professional Styling */}
                <button className={`${card.buttonBg} font-semibold px-6 py-3 rounded-full transition-all duration-300 text-sm flex items-center justify-center gap-2 group shadow-sm hover:shadow-md tracking-wide`}>
                  <span>{card.buttonText}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
