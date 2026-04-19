'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const pathname = usePathname();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Left Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-semibold font-playfair tracking-wide ${
                  isActive(link.href)
                    ? 'text-pink-600'
                    : 'text-gray-600 hover:text-pink-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link href="/" className="flex-shrink-0 flex flex-col items-center">
            <img src="/shoplogo.png" alt="ZinnyStore" className="h-12 sm:h-14 w-auto" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mt-1 font-playfair">
              ZinnyStore
            </span>
          </Link>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <Link href="/checkout" className="text-gray-600 hover:text-pink-500 transition-colors relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </Link>
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 pb-40 border-t border-pink-100">
            <div className="flex flex-col space-y-4 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors font-semibold font-playfair px-4 py-2 rounded-lg ${
                    isActive(link.href)
                      ? 'text-pink-600 bg-pink-50'
                      : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/checkout"
                className={`transition-colors font-semibold font-playfair px-4 py-2 rounded-lg flex items-center justify-center gap-2 ${
                  isActive('/checkout')
                    ? 'text-pink-600 bg-pink-50'
                    : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Checkout
                <span className="bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
