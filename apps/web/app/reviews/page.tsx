"use client";

import React, { useState } from 'react';

interface Movie {
  title: string;
  rating: number;
}

const ReviewsPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState<number | ''>('');

  const handleAddMovie = () => {
    if (title && rating !== '') {
      const newMovie: Movie = { title, rating: Number(rating) };
      setMovies([...movies, newMovie]);
      setTitle('');
      setRating('');
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/recs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          movies: movies,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error submitting reviews:", error);
    }
   };

  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 font-sans dark:bg-black pt-16">
      <main className="flex flex-col items-center justify-center p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-8">Rate Movies</h1>
        
        <div className="w-full mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Movie Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-grow h-12 rounded-md px-4 bg-white dark:bg-zinc-800 text-black dark:text-white border border-solid border-black/[.08] dark:border-white/[.145] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Rating (1-10)"
              value={rating}
              onChange={(e) => {
                const val = e.target.value;
                if (val === '' || (Number(val) >= 1 && Number(val) <= 10)) {
                  setRating(val === '' ? '' : Number(val));
                }
              }}
              min="1"
              max="10"
              className="h-12 w-full sm:w-32 rounded-md px-4 bg-white dark:bg-zinc-800 text-black dark:text-white border border-solid border-black/[.08] dark:border-white/[.145] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddMovie}
              className="h-12 w-full sm:w-auto px-6 rounded-md bg-blue-600 text-white font-medium transition-colors hover:bg-blue-700"
            >
              Add Movie
            </button>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Your Movies</h2>
          {movies.length > 0 ? (
            <ul className="space-y-4">
              {movies.map((movie, index) => (
                <li key={index} className="flex justify-between items-center p-4 rounded-md bg-white dark:bg-zinc-800 border border-solid border-black/[.08] dark:border-white/[.145]">
                  <span className="text-lg text-black dark:text-white">{movie.title}</span>
                  <span className="text-lg font-bold text-blue-600">{movie.rating} / 10</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-zinc-600 dark:text-zinc-400">You haven't added any movies yet.</p>
          )}
        </div>

        {movies.length > 0 && (
          <div className="w-full mt-8">
            <button
              onClick={handleSubmit}
              className="h-12 w-full px-6 rounded-md bg-green-600 text-white font-medium transition-colors hover:bg-green-700"
            >
              Submit Reviews
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ReviewsPage;