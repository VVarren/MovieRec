import React from 'react';

const BooksPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Books Page</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          This is a placeholder for the reusable components content like navbar, footer, header, etc...
        </p>
      </main>
    </div>
  );
};

export default BooksPage;
