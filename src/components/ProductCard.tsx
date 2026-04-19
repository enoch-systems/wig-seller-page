'use client';

import { useState, useRef } from 'react';
import { Product } from '@/lib/data';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  isMenuOpen?: boolean;
}

export default function ProductCard({ product, isMenuOpen = false }: ProductCardProps) {
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFlying, setIsFlying] = useState(false);
  const [flyPosition, setFlyPosition] = useState({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [isZoomed, setIsZoomed] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleAddToCart = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const cartIcon = document.querySelector('[href="/checkout"] svg');
      const cartRect = cartIcon?.getBoundingClientRect();
      
      if (cartRect) {
        const startX = buttonRect.left + buttonRect.width / 2;
        const startY = buttonRect.top + buttonRect.height / 2;
        const endX = cartRect.left + cartRect.width / 2;
        const endY = cartRect.top + cartRect.height / 2;
        
        setFlyPosition({
          x: startX,
          y: startY,
          targetX: endX,
          targetY: endY
        });
        setIsFlying(true);
        setIsAdded(true);
        
        setTimeout(() => {
          setIsFlying(false);
          addToCart({ id: product.id, name: product.name, price: product.price, image: product.images[0] });
        }, 600);
        
        setTimeout(() => {
          setIsAdded(false);
        }, 2000);
      }
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 fill-gray-200" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <>
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-white/95 flex items-center justify-center cursor-pointer"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-200/80 hover:bg-gray-300 p-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 hover:text-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-200/80 hover:bg-gray-300 p-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 hover:text-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
      {isFlying && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: flyPosition.x,
            top: flyPosition.y,
            transform: 'translate(-50%, -50%)',
            animation: `flyToCart 0.6s ease-in-out forwards`,
            '--target-x': `${flyPosition.targetX - flyPosition.x}px`,
            '--target-y': `${flyPosition.targetY - flyPosition.y}px`
          } as React.CSSProperties}
        >
          <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
        </div>
      )}
      <div className={`group cursor-pointer transition-all duration-300 hover:scale-[1.02] border border-pink-100 border-t-4 border-t-pink-500 rounded-3xl bg-white shadow-sm hover:shadow-lg pb-4 mt-3 ${isMenuOpen ? 'blur-sm pointer-events-none' : ''}`}>
        <div className="relative overflow-hidden mb-4 sm:mb-6 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-[250px] sm:h-[350px] object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
          onClick={() => setIsZoomed(true)}
        />
        {product.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-pink-200/80 hover:bg-pink-300 p-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-pink-700 hover:text-pink-800"
            >
              <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-pink-200/80 hover:bg-pink-300 p-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-pink-700 hover:text-pink-800"
            >
              <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
        </div>
        <div className="space-y-2 sm:space-y-3 px-3 sm:px-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors text-xs sm:text-sm font-playfair">
          {product.name}
        </h3>
        <div className="flex items-center space-x-1">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-[10px] sm:text-xs text-gray-500">({product.rating})</span>
        </div>
        <p className="font-bold text-gray-900 text-sm sm:text-base font-playfair">₦{product.price.toLocaleString()}</p>
        <button 
          ref={buttonRef}
          onClick={handleAddToCart}
          disabled={isFlying || isAdded}
          className={`w-full py-2 sm:py-3 px-4 text-[11px] sm:text-sm font-medium rounded-full shadow-md hover:shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ${
            isAdded 
              ? 'bg-orange-500 text-white' 
              : 'bg-gradient-to-r from-pink-400 to-rose-400 text-white hover:from-pink-500 hover:to-rose-500 hover:scale-105'
          }`}
        >
          {isAdded ? (
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Added
            </div>
          ) : (
            'Add to Whatsapp order'
          )}
        </button>
        <p className="text-xs sm:text-sm text-gray-600 font-medium text-center mt-3">You chat / call vendor before you buy</p>
      </div>
    </div>
    </>
  );
}
