'use client';

import { promotionalBanners } from '@/lib/data';

export default function PromotionalBanners() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Large Banner - Spans 2 columns, 2 rows */}
        <div className="md:col-span-2 md:row-span-2 relative overflow-hidden group cursor-pointer rounded-2xl shadow-sm group-hover:shadow-lg transition-all duration-300">
          <img
            src={promotionalBanners[0].image}
            alt={promotionalBanners[0].title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {promotionalBanners[0].title}
            </h3>
            <p className="text-xl text-white/90 mb-6">{promotionalBanners[0].subtitle}</p>
            <button className="bg-white text-gray-900 px-8 py-3 font-semibold hover:bg-gray-100 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl">
              {promotionalBanners[0].cta}
            </button>
          </div>
        </div>

        {/* Small Banner 1 */}
        <div className="relative overflow-hidden group cursor-pointer rounded-2xl shadow-sm group-hover:shadow-lg transition-all duration-300">
          <img
            src={promotionalBanners[1].image}
            alt={promotionalBanners[1].title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{promotionalBanners[1].title}</h3>
            <p className="text-white/90 mb-4">{promotionalBanners[1].subtitle}</p>
            <button className="bg-white text-gray-900 px-6 py-2 font-semibold hover:bg-gray-100 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl text-sm">
              {promotionalBanners[1].cta}
            </button>
          </div>
        </div>

        {/* Small Banner 2 */}
        <div className="relative overflow-hidden group cursor-pointer rounded-2xl shadow-sm group-hover:shadow-lg transition-all duration-300">
          <img
            src={promotionalBanners[2].image}
            alt={promotionalBanners[2].title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{promotionalBanners[2].title}</h3>
            <p className="text-white/90 mb-4">{promotionalBanners[2].subtitle}</p>
            <button className="bg-white text-gray-900 px-6 py-2 font-semibold hover:bg-gray-100 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl text-sm">
              {promotionalBanners[2].cta}
            </button>
          </div>
        </div>

        {/* Wide Banner - Spans 2 columns */}
        <div className="md:col-span-2 relative overflow-hidden group cursor-pointer rounded-2xl shadow-sm group-hover:shadow-lg transition-all duration-300">
          <img
            src={promotionalBanners[3].image}
            alt={promotionalBanners[3].title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{promotionalBanners[3].title}</h3>
            <p className="text-white/90 mb-4">{promotionalBanners[3].subtitle}</p>
            <button className="bg-white text-gray-900 px-6 py-2 font-semibold hover:bg-gray-100 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl text-sm">
              {promotionalBanners[3].cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
