'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionHeading from './SectionHeading';

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Imam Ahmed',
      role: 'Religious Guide',
      rating: 4.6,
      text: 'I had a wonderful experience with their services. The team was responsive, and all arrangements were smooth. JazakAllah Khair.',
      avatar: '/assets/test.jpg',
    },
    {
      name: 'Sister Fatima',
      role: 'Community Member',
      rating: 4.8,
      text: 'The Islamic programs and classes have been incredibly beneficial for my family. May Allah reward everyone involved.',
      avatar: '/assets/test.jpg',
    },
    {
      name: 'Brother Yusuf',
      role: 'Youth Coordinator',
      rating: 4.7,
      text: 'Outstanding community support and guidance. The youth programs are engaging and educational. Highly recommended!',
      avatar: '/assets/test.jpg',
    },
  ];

  // Auto-rotate testimonials every 3 seconds with slide animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/homeimg.jpg"
          alt="Background"
          fill
          className="object-cover brightness-50"
        />
      </div>

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-800/70 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6 lg:p-8">
            <p className="text-green-700 text-xs sm:text-sm uppercase tracking-wide mb-2 font-semibold">
              PRAYERS AND ISLAMIC REVIEWS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Question & Enquiries
            </h2>

            <form className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Complete Name"
                  className="px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 text-sm sm:text-base"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 text-sm sm:text-base"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone No"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 text-sm sm:text-base"
              />
              <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 text-sm sm:text-base">
                <option>Select Option</option>
                <option>General Inquiry</option>
                <option>Prayer Times</option>
                <option>Events</option>
                <option>Donations</option>
              </select>
              <textarea
                placeholder="Write your comment"
                rows={4}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 text-sm sm:text-base"
              ></textarea>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="contact" className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <label htmlFor="contact" className="text-xs sm:text-sm text-gray-600">
                  Would You Like Us To Add Your Information To Our Contact List?
                </label>
              </div>
              <button className="w-full sm:w-auto bg-islamic-yellow hover:bg-islamic-gold text-black font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all transform hover:scale-105 text-sm sm:text-base">
                Submit Now
              </button>
            </form>
          </div>

          {/* Right Side - Testimonials */}
          <div className="text-white">
            <p className="text-islamic-yellow text-xs sm:text-sm uppercase tracking-wide mb-2 font-semibold">
              PRAYERS AND ISLAMIC REVIEWS
            </p>
            <div className="mb-6 sm:mb-8">
              <SectionHeading
                firstWord="Satisfied"
                highlightedWord="Customers"
                align="left"
                className="text-left"
              />
            </div>

            {/* Rating Section */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl sm:text-6xl font-bold text-white">
                  {testimonials[activeTestimonial].rating}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">Highly Recommended Travel Agents</p>
                  <div className="flex gap-1 text-islamic-yellow text-lg">
                    {'★★★★☆'}
                  </div>
                </div>
              </div>

              {/* Yellow Progress Bar */}
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-islamic-yellow rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>

            {/* Testimonial Content - Animated Slide */}
            <div className="relative overflow-hidden min-h-[200px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === activeTestimonial
                      ? 'translate-x-0 opacity-100'
                      : index < activeTestimonial
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                  }`}
                >
                  <p className="text-white text-sm sm:text-base lg:text-lg italic mb-6">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-islamic-yellow flex-shrink-0 relative">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative">
                      {/* Quote Icon */}
                      <div className="absolute -left-12 -top-2 w-10 h-10 bg-islamic-yellow rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-900">"</span>
                      </div>
                      <p className="text-white font-bold text-lg sm:text-xl">{testimonial.name}</p>
                      <p className="text-white/80 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 sm:gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-3 rounded-full transition-all ${
                    activeTestimonial === index ? 'bg-white w-8' : 'bg-white/50 w-3'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
