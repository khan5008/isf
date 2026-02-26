import Header from '@/components/Header';
import PrayerTimes from '@/components/PrayerTimes';
import CommunityStats from '@/components/CommunityStats';
import EventsCarousel from '@/components/EventsCarousel';
import LearningEngagement from '@/components/LearningEngagement';
import CommunitySupport from '@/components/CommunitySupport';
import SpecialOccasions from '@/components/SpecialOccasions';
import TestimonialsSection from '@/components/TestimonialsSection';
import IslamicBanner from '@/components/IslamicBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="relative h-screen w-full overflow-hidden snap-start">
        <div className="absolute inset-0">
          <img
            src="/assets/newbg.jpg"
            alt="Islamic community background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-10 px-4 sm:px-8 md:px-16 lg:px-24 pt-20 pb-8">
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Welcome to Our
              <span className="block text-islamic-yellow mt-2">Islamic Community</span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
              Join us in prayer, learning, and building a stronger community together
            </p>
            <button className="bg-islamic-yellow hover:bg-islamic-gold text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base">
              Learn More
            </button>
          </div>
          
          <div className="hidden lg:block">
            <PrayerTimes />
          </div>
        </div>
      </section>

      <section className="lg:hidden bg-gray-50 py-8 px-4 snap-start">
        <div className="max-w-md mx-auto">
          <PrayerTimes />
        </div>
      </section>

      <EventsCarousel />

      <LearningEngagement />

      <CommunitySupport />

      <SpecialOccasions />

      <IslamicBanner />

      <CommunityStats />

      <TestimonialsSection />

      <Footer />
    </main>
  );
}
