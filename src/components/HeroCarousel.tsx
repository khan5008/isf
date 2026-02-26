'use client';

import { useState, useEffect } from 'react';
import PrayerTimes from './PrayerTimes';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: 'image',
      src: '/assets/newbg.jpg',
      title: 'Welcome to Our',
      highlight: 'Islamic Community',
      description: 'Join us in prayer, learning, and building a stronger community together',
    },
    {
      type: 'image',
      src: '/assets/home3.jpg',
      title: 'The Importance of',
      highlight: 'Prayer',
      description: 'Prayer is the pillar of faith and the key to success in this life and the hereafter',
    },
    {
      type: 'video',
      src: '/assets/home3.mp4',
      title: 'Daily',
      highlight: 'Duas & Remembrance',
      description: 'Strengthen your connection with Allah through daily supplications and dhikr',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden snap-start">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.type === 'image' ? (
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={slide.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 pb-8">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-10">
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  currentSlide === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 absolute'
                }`}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  {slide.title}
                  <span className="block text-islamic-yellow mt-2">{slide.highlight}</span>
                </h1>
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <button className="bg-islamic-yellow hover:bg-islamic-gold text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <PrayerTimes />
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-islamic-yellow w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
