'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'backdrop-blur bg-black/75 shadow-xl py-1' : 'bg-transparent py-2'
      }`}
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/assets/headerbg.jpg"
          alt="Header background"
          fill
          className={`object-cover object-center transition-transform duration-700 ${
            isScrolled ? 'scale-105' : 'scale-100'
          }`}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'h-12' : 'h-14 sm:h-16'
          }`}
        >
          <div className="flex items-center">
            <Image
              src="/assets/logo.webp"
              alt="Islamic Society Logo"
              width={160}
              height={48}
              className="object-contain w-[140px] sm:w-[160px] md:w-[200px] h-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"
              priority
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-10">
            <Link href="/islamic-school" className="text-white hover:text-islamic-yellow transition-colors duration-300 font-normal text-[15px]">
              Islamic School
            </Link>
            <Link href="/donate" className="text-white hover:text-islamic-yellow transition-colors duration-300 font-normal text-[15px]">
              Donate
            </Link>
            <Link href="/membership" className="text-white hover:text-islamic-yellow transition-colors duration-300 font-normal text-[15px]">
              Membership
            </Link>
            <Link href="/about" className="text-white hover:text-islamic-yellow transition-colors duration-300 font-normal text-[15px]">
              About Us
            </Link>
            <Link href="/contact" className="text-white hover:text-islamic-yellow transition-colors duration-300 font-normal text-[15px]">
              Contact Us
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-5">
            <button className="text-white hover:text-islamic-yellow transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-white hover:text-islamic-yellow transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>

          <button
            className="lg:hidden text-white hover:text-islamic-yellow transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <Link href="/islamic-school" className="text-white hover:text-islamic-yellow transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Islamic School
              </Link>
              <Link href="/donate" className="text-white hover:text-islamic-yellow transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Donate
              </Link>
              <Link href="/membership" className="text-white hover:text-islamic-yellow transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Membership
              </Link>
              <Link href="/about" className="text-white hover:text-islamic-yellow transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <Link href="/contact" className="text-white hover:text-islamic-yellow transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
