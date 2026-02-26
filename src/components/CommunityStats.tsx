'use client';

import Image from 'next/image';

export default function CommunityStats() {
  return (
    <section className="relative min-h-screen flex items-center py-24 overflow-hidden">
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
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <p className="text-gray-600 uppercase tracking-wide text-xs sm:text-sm mb-2 sm:mb-3 lg:mb-4">
            WE'D LOVE FOR YOU TO BE A PART OF OUR COMMUNITY
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 px-4">
            Aims to bring people together to provide
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">
            services and projects inspired by{' '}
            <span className="text-green-700">faith to local communities</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center mt-8 sm:mt-10 lg:mt-14 xl:mt-16">
          <div className="space-y-6 sm:space-y-8 animate-slide-up px-4">
            <div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Our Islamic Society is dedicated to serving the community through various programs 
                and initiatives. We strive to create a welcoming environment for all members to 
                learn, grow, and practice their faith together.
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Through education, charity, and community engagement, we work to strengthen the 
                bonds of brotherhood and sisterhood while serving those in need.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-700 mb-2">5000+</h3>
                <p className="text-gray-800 font-semibold text-sm sm:text-base">Community Members</p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Active members participating in our programs and services
                </p>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-700 mb-2">1200+</h3>
                <p className="text-gray-800 font-semibold text-sm sm:text-base">Students Enrolled</p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Children and adults learning Quran and Islamic studies annually
                </p>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-700 mb-2">50+</h3>
                <p className="text-gray-800 font-semibold text-sm sm:text-base">Weekly Programs</p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Educational classes, youth activities, and community events
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-right px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-4">
              {/* Left side - 3 small circles stacked vertically with connecting curves */}
              <div className="flex flex-row sm:flex-col gap-3 sm:gap-4 relative">
                {/* SVG curved connector line behind circles */}
                <svg 
                  className="hidden sm:block absolute top-[100px] left-[120px] w-[120px] h-[450px] z-0 pointer-events-none"
                  viewBox="0 0 120 450"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 60 40 Q 90 100, 40 180 Q 10 240, 50 320 Q 80 380, 60 410"
                    stroke="#FDB913"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>

                {/* Top circle */}
                <div className="relative sm:ml-8 group cursor-pointer">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden shadow-2xl border-4 border-white relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-3xl group-hover:border-islamic-yellow">
                    <Image
                      src="/assets/2.jpg"
                      alt="Community member"
                      fill
                      className="object-cover transition-all duration-500 group-hover:brightness-110"
                    />
                  </div>
                </div>

                {/* Middle circle - with Islamic symbol overlay */}
                <div className="relative sm:-ml-4 group cursor-pointer">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-2xl border-4 border-white relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-3xl group-hover:border-islamic-yellow">
                    <Image
                      src="/assets/3.jpg"
                      alt="Islamic symbol"
                      fill
                      className="object-cover brightness-50 transition-all duration-500 group-hover:brightness-60"
                    />
                    {/* Islamic symbol overlay */}
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                      <div className="text-islamic-yellow text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold" style={{ fontFamily: 'Arial' }}>
                        ﷲ
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom circle */}
                <div className="relative sm:ml-4 group cursor-pointer">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden shadow-2xl border-4 border-white relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-3xl group-hover:border-islamic-yellow">
                    <Image
                      src="/assets/4.jpg"
                      alt="Community member"
                      fill
                      className="object-cover transition-all duration-500 group-hover:brightness-110"
                    />
                  </div>
                </div>
              </div>

              {/* Right side - Large circle */}
              <div className="relative sm:-ml-8 group cursor-pointer">
                <div className="w-[70vw] h-[70vw] max-w-[300px] max-h-[300px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden shadow-2xl border-4 border-white relative transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl group-hover:border-islamic-yellow">
                  <Image
                    src="/assets/homeimg.jpg"
                    alt="Community gathering"
                    fill
                    className="object-cover transition-all duration-500 group-hover:brightness-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
