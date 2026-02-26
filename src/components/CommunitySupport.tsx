'use client';

export default function CommunitySupport() {
  const supportCards = [
    {
      icon: '❓',
      title: 'Frequently Asked Questions',
      subtitle: 'by Non-Muslims',
      description: 'Find answers to common questions about Islam from those seeking to learn more',
    },
    {
      icon: '🤝',
      title: 'Content for New Muslims',
      subtitle: 'Guidance & Support',
      description: 'Essential resources and support for those new to Islam on their journey',
    },
    {
      icon: '📄',
      title: 'Research Articles',
      subtitle: 'Islamic Studies',
      description: 'In-depth articles and research on various aspects of Islamic knowledge',
    },
    {
      icon: '🧸',
      title: 'Kids\' Corner',
      subtitle: 'Fun & Learning',
      description: 'Interactive Islamic education and activities designed for children',
    },
    {
      icon: '👥',
      title: 'Youth Issues',
      subtitle: 'Guidance & Mentorship',
      description: 'Addressing challenges faced by Muslim youth in today\'s world',
    },
    {
      icon: '🌙',
      title: 'Women\'s Issues',
      subtitle: 'Support & Empowerment',
      description: 'Resources and support for Muslim women on various life matters',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Layer - Calligraphy with reduced opacity */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="absolute inset-0 w-full h-full opacity-[0.08]"
          style={{
            backgroundImage: 'url(/assets/whitebg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* Soft gradient fade at top for seamless transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-[1]"></div>

      {/* Soft gradient fade at bottom for seamless transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white z-[1]"></div>

      {/* Content Layer */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Community Support & <span className="text-green-700">Education</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Comprehensive resources and support for every member of our community
          </p>
        </div>

        {/* Cards Grid - 3 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {supportCards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-2 border-gray-200"
            >
              {/* Card Content */}
              <div className="relative z-10 p-5 sm:p-6 lg:p-8">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">{card.icon}</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors duration-500">
                  {card.title}
                </h3>
                <p className="text-green-700 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 group-hover:text-white transition-colors duration-500">
                  {card.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-500">
                  {card.description}
                </p>
              </div>

              {/* Yellow overlay - animates from bottom to top on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-islamic-yellow via-islamic-gold to-islamic-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
