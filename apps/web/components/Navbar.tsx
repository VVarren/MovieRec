import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="text-xl font-bold">MovieRec</div>
            <ul className="flex space-x-6">
                <li>
                    <Link href="/auth">
                        Sign In / Sign Up
                    </Link>
                </li>
                <li>
                    <Link href="/profile">
                        Profile
                    </Link>
                </li>
                <li>
                    <Link href="/movies">
                        Movies
                    </Link>
                </li>
                <li>
                    <Link href="/reviews">
                        Reviews
                    </Link>
                </li>
                <li>
                    <Link href="/books">
                        Books
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;