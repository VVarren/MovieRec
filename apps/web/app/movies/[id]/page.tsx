"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MoviesPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#242730] text-white px-8 py-6">
      {/* Back button */}
      <Link href="/movies">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg cursor-pointer hover:underline">
            ← Return to Movies/Shows Page
          </span>
        </div>
      </Link>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Section: Poster + Info */}
        <div className="w-full lg:w-2/3">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src='/images/arcane.jpg'
              alt="Arcane Season 2 Poster"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold">Arcane Season 2</h1>
              <p className="text-gray-400 font-semibold mt-0">12 episodes</p>
            </div>

            <div className="flex items-center gap-3 text-gray-400 font-semibold mt-1">
              <span>2025</span>
              <span>•</span>
              <span>Directed by Riot</span>
            </div>

            <div className="flex items-start gap-4 mt-2">
              <p className="w-4/5 text-gray-300 font-medium leading-relaxed">
                Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>

              <div className="w-1/5 flex items-start">
                <span className="text-5xl font-bold text-[#58b8ff]">4.7</span>              
              </div>
            </div>


            <div className="flex items-center gap-6 mt-6">
              <button className="px-4 py-2 bg-[#7f7f7f] rounded-full text-sm font-semibold hover:bg-[#9f9f9f]">
                + Save to Lists
              </button>
              <button className="px-4 py-2 bg-[#7f7f7f] rounded-full text-sm font-semibold hover:bg-[#9f9f9f]">
                + Add to Watchlist
              </button>
              <button className="px-4 py-2 bg-[#7f7f7f] rounded-full text-sm font-semibold hover:bg-[#9f9f9f]"
              onClick={() => window.location.href = "/reviews"}>
                + Rate or Review
              </button>
            </div>

          </div>
        </div>

        <aside className="w-full lg:w-1/3 border-l border-gray-600 pl-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Details</h2>
          </div>

          <p className="text-gray-300 text-sm mb-6">
            Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h3 className="text-lg font-bold mb-3">Casts</h3>
          <div className="flex gap-4 mb-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-16 h-16 bg-gray-400 rounded-full"
              ></div>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-3">All Reviews</h3>
          <div className="flex flex-col gap-4">
            <div className="w-full h-28 bg-gray-400 rounded-2xl"></div>
            <div className="w-full h-28 bg-gray-400 rounded-2xl"></div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default MoviesPage;
