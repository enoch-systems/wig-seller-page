'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/banner-images/banner1.jpg',
      title: 'Elegant Wigs & Accessories',
      subtitle: 'Discover your perfect style',
    },
    {
      image: '/banner-images/banner2.jpg',
      title: 'Beautiful Hair, Beautiful You',
      subtitle: 'Embrace your natural beauty',
    },
    {
      image: '/banner-images/banner3.jpg',
      title: 'Premium Quality Wigs',
      subtitle: 'Crafted with love and care',
    },
    {
      image: '/banner-images/banner4.jpg',
      title: 'Latest Fashion Trends',
      subtitle: 'Stay ahead of the curve',
    },
    {
      image: '/banner-images/banner5.jpg',
      title: 'Exclusive Collections',
      subtitle: 'Unique styles for you',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[25vh] sm:h-[35vh] mt-20 sm:mt-24">
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-rose-900/20" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight font-playfair tracking-wide">
                {slides[currentSlide].title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/95 mt-4 font-light tracking-wide">
                {slides[currentSlide].subtitle}
              </p>
              <Link href="/shop" className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base font-semibold hover:from-pink-500 hover:to-rose-500 hover:scale-105 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl mt-6 cursor-pointer inline-block">
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
