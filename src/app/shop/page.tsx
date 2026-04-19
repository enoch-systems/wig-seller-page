'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

export default function ShopPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col pt-28">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex-grow">
        <div className="py-10 pt-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl text-gray-900 font-normal font-playfair tracking-wide">Shop</h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mt-4"></div>
          </div>
          <ProductGrid showViewAllButton={false} isMenuOpen={isMenuOpen} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
