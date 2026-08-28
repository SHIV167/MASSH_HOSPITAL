'use client';

import { useState } from 'react';

export default function Facilities() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const facilities = [
    {
      image: "🏥",
      title: "Modern Operation Theatres",
      description: "State-of-the-art operation theatres with advanced laparoscopic equipment"
    },
    {
      image: "🛏️",
      title: "Private Patient Rooms",
      description: "Comfortable private rooms with modern amenities for patient recovery"
    },
    {
      image: "🔬",
      title: "Advanced Diagnostic Center",
      description: "Comprehensive diagnostic services with cutting-edge technology"
    },
    {
      image: "🚑",
      title: "24/7 Emergency Services",
      description: "Round-the-clock emergency care with rapid response team"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % facilities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          MASSH Facilities
        </h2>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {facilities.map((facility, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="h-64 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                      <span className="text-8xl">{facility.image}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {facility.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {facility.description}
                      </p>
                      <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                        View More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {facilities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-teal-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
