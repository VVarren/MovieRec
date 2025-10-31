"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getMovies } from '../../lib/fetcher';


const MoviesPage: React.FC = () => {
   const [movies, setMovies] = useState([
    {
      id: "arcane",
      title: "Arcane Season 2",
      year: 2025,
      image: "/images/arcane.jpg",
      rating: 4.7,
      director: "Riot",
    },
  ]);
  useEffect(() => {
    async function loadMovies() {
      try {
        const fetchedMovies = await getMovies();
        console.log(fetchedMovies);
        //console.log(fetchedMovies[0]);
        setMovies((prev) => [...prev, ...fetchedMovies]);
      } catch (error) {
        console.error("Failed to load movies:", error);
      }
    }

    loadMovies();
  }, []); 
  console.log(getMovies());

  return (
    
    <div className="flex min-h-screen bg-[#242730] flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center p-8 w-full bg-[#242730]">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-6">Movies & Shows</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10">
          Browse through our collection of movies and shows. Click to view details.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              href={`/movies/${movie.id}`}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={movie.image || "/images/arcane.jpg"}
                  alt={movie.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 flex flex-col">
                <h2 className="text-xl font-semibold text-black dark:text-white group-hover:text-blue-400">
                  {movie.title}
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{movie.year}</p>
                <p className="text-blue-500 font-semibold mt-1">⭐ {movie.rating.toFixed(1)}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MoviesPage;