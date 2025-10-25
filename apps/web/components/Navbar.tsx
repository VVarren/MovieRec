"use client";

import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const links = [
    { name: "Sign In / Sign Up", href: "/auth" },
    { name: "Profile", href: "/profile" },
    { name: "Movies Page", href: "/movies" },
    { name: "Review Page", href: "/reviews" },
    { name: "Books Page", href: "/books" },
  ];

  return (
    <nav className="fixed top-0 left-0 h-full w-64 bg-[#000033] shadow-lg flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-8 text-white">MovieRec</h1>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block py-2 px-4 rounded hover:bg-[#000055] transition text-white"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

