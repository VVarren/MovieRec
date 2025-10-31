// import Image from "next/image";

// async function getData() {
//   const res = await fetch("http://localhost:8000/", { cache: 'no-store' });
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.text();
// }

// export default async function Home() {
//   const data = await getData();

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <div>
//             <h1>Frontend + FastAPI</h1>
//             <pre>{data}</pre>
//           </div>

//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }


'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const movies = [
  { id: 'batman', title: 'The Batman', year: 2022, image: '/images/thebatman.jpg' },
  { id: 'spiderman', title: 'Spider-Man Homecoming', year: 2017, image: '/images/spiderman_homecoming.jpg' },
  { id: 'aquaman', title: 'Aquaman and the Lost Kingdom', year: 2023, image: '/images/aquaman_lost_kingdom.jpg' },
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#242730] text-white px-10 py-8 font-sans">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Hello, <span className="text-[#58b8ff]">Guest!</span>
        </h1>
        <p className="text-zinc-400 mt-2 text-lg">
          Review and get recommendations for what you like...
        </p>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <Section title="Popular Films/Shows This Month" />
          <Section title="Popular Books This Month" />
        </div>

        {/* Middle Section */}
        <div className="border-x border-gray-600 px-6">
          <CarouselSection title="Have you already watched these?" items={movies} />
          <CarouselSection
            title="Because you liked Superman..."
            highlight="Superman"
            items={movies}
          />
        </div>

        {/* Right Section */}
        <div>
          <Section title="Our Weekly Recommendations" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

type CarouselItem = {
  id: string;
  title: string;
  year: number;
  image: string;
};

const CarouselSection: React.FC<{
  title: string;
  items: CarouselItem[];
  highlight?: string;
}> = ({ title, items, highlight }) => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-3">
        {title.split(highlight || '').map((part, i, arr) =>
          i < arr.length - 1 ? (
            <React.Fragment key={i}>
              {part}
              <span className="text-[#58b8ff]">{highlight}</span>
            </React.Fragment>
          ) : (
            part
          )
        )}
      </h2>

      <div className="relative">
        {/* Scrollable row */}
        <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide">
          {items.map((movie) => (
            <Link
              key={movie.id}
              href={`/movies/${movie.id}`}
              className="flex-none w-40 hover:scale-105 transition-transform"
            >
              <div className="relative w-40 h-56 rounded-lg overflow-hidden bg-gray-700">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-semibold mt-2 leading-tight">
                {movie.title}
              </p>
              <p className="text-xs text-gray-400">{movie.year}</p>
            </Link>
          ))}
        </div>

        {/* Right gradient fade */}
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#242730] to-transparent pointer-events-none" />
      </div>
    </section>
  );
};


const Section: React.FC<{ title: string }> = ({ title }) => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex-none w-40 h-56 bg-gray-400 rounded-lg opacity-40"
          ></div>
        ))}
      </div>
    </section>
  );
};
