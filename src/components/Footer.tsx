'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative pt-14 sm:pt-16 pb-8 overflow-hidden bg-white">
      {/* Soft footer background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/footerbg.jpg"
          alt="Footer background"
          fill
          className="object-cover object-bottom opacity-90"
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/assets/ISFM-dark-logo.webp"
                alt="Islamic Society Logo"
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Islamic Society of<br />Fargo-Moorhead
            </h3>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 mb-2"
              />
              <button className="w-full bg-islamic-yellow hover:bg-islamic-gold text-black font-semibold px-6 py-3 rounded-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/teachers" className="text-gray-600 hover:text-green-700 transition-colors">Teachers</Link></li>
              <li><Link href="/khutbah" className="text-gray-600 hover:text-green-700 transition-colors">Khutbah</Link></li>
              <li><Link href="/join-teachings" className="text-gray-600 hover:text-green-700 transition-colors">Join Teachings</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-green-700 transition-colors">Services</Link></li>
              <li><Link href="/scholars" className="text-gray-600 hover:text-green-700 transition-colors">Scholars</Link></li>
              <li><Link href="/islamic-times" className="text-gray-600 hover:text-green-700 transition-colors">Islamic Times</Link></li>
              <li><Link href="/visit-us" className="text-gray-600 hover:text-green-700 transition-colors">Visit Us</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/initiatives" className="text-gray-600 hover:text-green-700 transition-colors">Initiatives</Link></li>
              <li><Link href="/features" className="text-gray-600 hover:text-green-700 transition-colors">Features</Link></li>
              <li><Link href="/classes" className="text-gray-600 hover:text-green-700 transition-colors">Classes</Link></li>
              <li><Link href="/campaigns" className="text-gray-600 hover:text-green-700 transition-colors">Campaigns</Link></li>
              <li><Link href="/scholars" className="text-gray-600 hover:text-green-700 transition-colors">Scholars</Link></li>
              <li><Link href="/gatherings" className="text-gray-600 hover:text-green-700 transition-colors">Gatherings</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-green-700 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Contact Us</h4>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Address:</strong><br />
                601 25th St S, Fargo, ND<br />
                58103, United States
              </p>
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:admin@islamnd.com" className="text-green-700 hover:underline">
                  admin@islamnd.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:7013492556" className="text-green-700 hover:underline">
                  701 349 2556
                </a>
              </p>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="font-semibold text-gray-900 mb-3">Join in:</p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-200 hover:bg-islamic-yellow rounded-full flex items-center justify-center transition-colors">
                  <span className="text-gray-700">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-200 hover:bg-islamic-yellow rounded-full flex items-center justify-center transition-colors">
                  <span className="text-gray-700">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-200 hover:bg-islamic-yellow rounded-full flex items-center justify-center transition-colors">
                  <span className="text-gray-700">▶</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            ISFM © Copyright 2026 - All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/about" className="text-gray-600 hover:text-green-700 text-sm transition-colors">About Us</Link>
            <Link href="/events" className="text-gray-600 hover:text-green-700 text-sm transition-colors">Events</Link>
            <Link href="/classes" className="text-gray-600 hover:text-green-700 text-sm transition-colors">Classes</Link>
          </div>
          <button className="bg-islamic-yellow hover:bg-islamic-gold text-black font-semibold px-6 py-2 rounded-lg transition-all text-sm">
            Join Community
          </button>
        </div>
      </div>
    </footer>
  );
}
