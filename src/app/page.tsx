import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
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
      
      <HeroCarousel />

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
