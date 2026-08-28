'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-teal-600">
      {/* Top Bar */}
      <div className="bg-teal-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:+917290975999" className="flex items-center hover:text-teal-200 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91-72909-75999
            </a>
            <a href="mailto:info@massh.in" className="flex items-center hover:text-teal-200 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@massh.in
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/about" className="hover:text-teal-200 transition-colors">About Us</Link>
            <Link href="/investor-relations" className="hover:text-teal-200 transition-colors">Investor Relations</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="text-4xl font-bold text-teal-600">MASSH</div>
              <div className="hidden md:block">
                <div className="text-sm font-semibold text-gray-800 leading-tight">Minimal Access</div>
                <div className="text-sm font-semibold text-gray-800 leading-tight">Surgery Hospital</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="/specialities" className="text-gray-700 hover:text-teal-600 hover:bg-teal-50 px-4 py-2 rounded-lg transition-all font-medium text-sm">
              Centres of Excellence
            </Link>
            <Link href="/international-patients" className="text-gray-700 hover:text-teal-600 hover:bg-teal-50 px-4 py-2 rounded-lg transition-all font-medium text-sm">
              International Patients
            </Link>
            <Link href="/home-healthcare" className="text-gray-700 hover:text-teal-600 hover:bg-teal-50 px-4 py-2 rounded-lg transition-all font-medium text-sm">
              Home Healthcare
            </Link>
            <Link href="/hospitals" className="text-gray-700 hover:text-teal-600 hover:bg-teal-50 px-4 py-2 rounded-lg transition-all font-medium text-sm">
              Hospitals
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/contact" className="text-teal-600 hover:text-teal-700 font-semibold text-sm px-4 py-2 border-2 border-teal-600 rounded-lg hover:bg-teal-50 transition-all">
              Quick Enquiry
            </Link>
            <button className="bg-teal-600 text-white px-6 py-2.5 rounded-lg hover:bg-teal-700 transition-all font-semibold text-sm shadow-md hover:shadow-lg">
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        />
      )}

      {/* Mobile Menu Slide-in */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-6">
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-white">MASSH</div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-teal-100 text-sm mt-2">Minimal Access Surgery Hospital</p>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-2">
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center p-4 rounded-xl text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all group"
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About Us
              </Link>
              <Link
                href="/specialities"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center p-4 rounded-xl text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all group"
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Centres of Excellence
              </Link>
              <Link
                href="/international-patients"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center p-4 rounded-xl text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all group"
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                International Patients
              </Link>
              <Link
                href="/home-healthcare"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center p-4 rounded-xl text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all group"
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home Healthcare
              </Link>
              <Link
                href="/hospitals"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center p-4 rounded-xl text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all group"
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Hospitals
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center p-4 rounded-xl text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all group"
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Quick Enquiry
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Contact Us</p>
              <a
                href="tel:+917290975999"
                className="flex items-center p-4 rounded-xl text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all group"
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91-72909-75999
              </a>
              <a
                href="mailto:info@massh.in"
                className="flex items-center p-4 rounded-xl text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all group"
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@massh.in
              </a>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="p-6 border-t border-gray-200">
            <button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-4 rounded-xl font-bold hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </header>
  );
}
