'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionHeading from './SectionHeading';

export default function LearningEngagement() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      name: 'Friday Sermons',
      icon: '🕌',
      title: 'Weekly Friday Khutbah',
      subtitle: 'INSPIRING SPIRITUAL GUIDANCE',
      description: 'Join us every Friday for inspiring sermons that address contemporary issues through Islamic wisdom and guidance.',
      points: [
        { label: 'Live Streaming', text: 'Watch our Friday sermons live online from anywhere in the world' },
        { label: 'Archive Access', text: 'Access our complete library of past sermons and lectures' },
      ],
      image: '/assets/6.jpg',
    },
    {
      name: 'Weekly Newsletter',
      icon: '✉️',
      title: 'Stay Connected & Informed',
      subtitle: 'COMMUNITY UPDATES & REMINDERS',
      description: 'Receive our weekly newsletter with Islamic reminders, community updates, event announcements, and spiritual reflections.',
      points: [
        { label: 'Islamic Reminders', text: 'Weekly doses of faith-strengthening content and Quranic reflections' },
        { label: 'Event Updates', text: 'Stay informed about upcoming programs, classes, and community gatherings' },
      ],
      image: '/assets/2.jpg',
    },
    {
      name: 'Da\'wah / Islah',
      icon: '📢',
      title: 'Outreach & Community Reform',
      subtitle: 'SPREADING THE MESSAGE OF ISLAM',
      description: 'Engage in spreading the message of Islam and working towards positive change in our community through education and dialogue.',
      points: [
        { label: 'Outreach Programs', text: 'Participate in community outreach initiatives and interfaith dialogues' },
        { label: 'Educational Workshops', text: 'Learn effective methods of sharing Islamic teachings with wisdom' },
      ],
      image: '/assets/5.png',
    },
    {
      name: 'Youth Programs',
      icon: '👥',
      title: 'Empowering Muslim Youth',
      subtitle: 'BUILDING FUTURE LEADERS',
      description: 'Dynamic programs designed to engage, educate, and empower the next generation of Muslim leaders through Islamic values.',
      points: [
        { label: 'Youth Activities', text: 'Sports, games, and recreational activities in an Islamic environment' },
        { label: 'Leadership Training', text: 'Develop leadership skills grounded in Islamic ethics and values' },
      ],
      image: '/assets/3.jpg',
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center py-12 sm:py-14 lg:py-20 bg-white overflow-visible">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/assets/7.jpg"
          alt="Background pattern"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-white/35" />
      </div>

      {/* Decorative Dots - Left Side */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1/2 opacity-40 pointer-events-none">
        <svg className="absolute top-10 left-10 w-48 h-48" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 8" />
        </svg>
        <svg className="absolute top-40 left-1/3 w-32 h-32" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 8" />
        </svg>
        <svg className="absolute bottom-20 right-20 w-40 h-40" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 8" />
        </svg>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gray-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Background Person Image - Right Side */}
      <div className="hidden xl:block absolute right-0 -top-20 -bottom-20 w-[420px] opacity-60 pointer-events-none translate-x-16">
        <Image
          src="/assets/bg4.jpg"
          alt="Community member"
          fill
          className="object-cover object-right"
          priority
        />
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-l from-transparent to-white/90" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Section Title */}
        <div className="mb-8 sm:mb-10 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
            </svg>
            <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest font-semibold">
              SUPPORTING SOME OF THE WORLD'S
            </p>
          </div>
          <SectionHeading
            firstWord="Cultural"
            highlightedWord="Programmes"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Category Buttons */}
          <div className="lg:col-span-3 space-y-3 order-2 lg:order-1">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={() => setActiveCategory(index)}
                  className={`flex-1 text-right px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full font-semibold text-xs sm:text-sm lg:text-base transition-all duration-500 shadow-md ${
                    activeCategory === index
                      ? 'bg-gradient-to-r from-green-700 to-green-600 text-white shadow-xl scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-lg border border-gray-200'
                  }`}
                >
                  {category.name}
                </button>
                <div
                  onClick={() => setActiveCategory(index)}
                  className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl transition-all duration-500 shadow-lg flex-shrink-0 cursor-pointer ${
                    activeCategory === index
                      ? 'bg-gradient-to-br from-islamic-yellow to-islamic-gold shadow-xl scale-110 rotate-12'
                      : 'bg-gradient-to-br from-gray-100 to-gray-200 hover:scale-105'
                  }`}
                >
                  {category.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Middle - Circular Image */}
          <div
            key={`image-${activeCategory}`}
            className="lg:col-span-4 flex justify-center order-1 lg:order-2 py-4 animate-slide-up"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden shadow-2xl border-4 sm:border-6 border-white ring-2 sm:ring-3 ring-gray-100 bg-gray-200">
              <Image
                key={activeCategory}
                src={categories[activeCategory].image}
                alt={categories[activeCategory].title}
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 320px"
                className="object-cover"
                priority
                unoptimized
              />
              <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-1/2 -translate-x-1/2 bg-white px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full shadow-lg max-w-[85%]">
                <span className="block text-green-700 font-bold text-xs sm:text-sm text-center truncate">
                  {categories[activeCategory].name}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            key={`content-${activeCategory}`}
            className="lg:col-span-5 order-3 animate-slide-right"
          >
            <div className="bg-white/95 shadow-2xl rounded-xl lg:rounded-r-[30px] lg:rounded-l-none px-4 sm:px-5 lg:px-8 py-5 sm:py-6 lg:py-8 max-w-xl w-full lg:ml-4">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1.5 sm:mb-2 leading-tight">
                {categories[activeCategory].title}
              </h3>
              <p className="text-green-700 text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-2 sm:mb-3">
                {categories[activeCategory].subtitle}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base mb-4 sm:mb-5 leading-relaxed">
                {categories[activeCategory].description}
              </p>

              <div className="space-y-3 sm:space-y-4">
                {categories[activeCategory].points.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 sm:gap-3 border border-gray-100 rounded-lg p-2.5 sm:p-3 hover:bg-gray-50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mt-0.5 shadow-md">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base mb-0.5">
                        {point.label}
                      </h4>
                      <p className="text-gray-600 text-[10px] sm:text-xs leading-relaxed">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
