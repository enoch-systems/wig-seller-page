'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function BlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const blogPosts = [
    {
      id: 1,
      title: 'Spring Fashion Trends 2024',
      excerpt: 'Discover the latest trends that are taking the fashion world by storm this season.',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop',
      date: 'March 15, 2024',
      category: 'Fashion',
    },
    {
      id: 2,
      title: 'Sustainable Fashion Guide',
      excerpt: 'Learn how to build a wardrobe that\'s both stylish and environmentally conscious.',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop',
      date: 'March 10, 2024',
      category: 'Sustainability',
    },
    {
      id: 3,
      title: 'Accessorizing 101',
      excerpt: 'Master the art of accessorizing to elevate any outfit from basic to brilliant.',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&h=600&fit=crop',
      date: 'March 5, 2024',
      category: 'Style Tips',
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600">Fashion tips, trends, and inspiration</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm group-hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-medium text-gray-500">{post.category}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
