'use client';

import { useState } from 'react';

export default function Doctors() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const doctors = [
    {
      name: "Dr. Rajesh Kumar",
      specialization: "General Surgeon",
      experience: "15+ years",
      image: "👨‍⚕️"
    },
    {
      name: "Dr. Priya Sharma",
      specialization: "Urologist",
      experience: "12+ years",
      image: "👩‍⚕️"
    },
    {
      name: "Dr. Amit Patel",
      specialization: "Gastroenterologist",
      experience: "18+ years",
      image: "👨‍⚕️"
    },
    {
      name: "Dr. Sunita Gupta",
      specialization: "Laparoscopic Surgeon",
      experience: "10+ years",
      image: "👩‍⚕️"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % doctors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Doctors
        </h2>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {doctors.map((doctor, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="h-64 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                      <span className="text-8xl">{doctor.image}</span>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-teal-600 font-medium mb-1">
                        {doctor.specialization}
                      </p>
                      <p className="text-gray-500 mb-4">
                        {doctor.experience}
                      </p>
                      <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors">
                        View Profile
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
            {doctors.map((_, index) => (
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
