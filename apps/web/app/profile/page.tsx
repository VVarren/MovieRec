"use client";

import React from "react";

const ProfilePage: React.FC = () => {
    // Placeholder data
    const user = {
        name: "Bob",
        email: "@bob_like_movies",
        profilePic: "https://via.placeholder.com/150",
        totalBooks: 8,
        totalMovies: 11,
        reviews: 5,
        favorites: [
            { id: 1, title: "Favorite Book 1" },
            { id: 2, title: "Favorite Movie 1" },
            { id: 3, title: "Favorite Book 2" },
        ],
        recentReviews: [
            { id: 1, title: "Movie A", review: "Great!" },
            { id: 2, title: "Book B", review: "Loved it!" },
        ],
        customLists: [
            { id: 1, title: "Watchlist" },
            { id: 2, title: "Books to Read" },
        ],
        inProgress: [
            { id: 1, title: "Movie C" },
            { id: 2, title: "Book D" },
        ],
        toReview: [
            { id: 1, title: "Movie E" },
            { id: 2, title: "Book F" },
        ],
    };

    const mainColor = "#000033";
    const hoverColor = "#000055";

    return (
        <div className="flex min-h-screen justify-center bg-zinc-50 dark:bg-black font-sans p-8">
            <main className="flex flex-col w-full max-w-7xl gap-6">
                <div className="flex w-full gap-6">
                    {/* Section 1: Recent Reviews + Custom Lists */}
                    <div className="flex-1 flex flex-col gap-6 p-4 rounded-lg">
                        <h2 className="text-xl font-bold mb-2">Your Most Recent Reviews</h2>
                        <div className="space-y-2">
                            {user.recentReviews.map((review) => (
                                <div key={review.id} className="p-2 rounded border border-gray-300 dark:border-gray-700">
                                    <p className="font-bold text-black dark:text-white">{review.title}</p>
                                    <p className="text-gray-600 dark:text-gray-400">{review.review}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-xl font-bold mt-4 mb-2">Custom Lists</h2>
                        <div className="flex flex-wrap gap-2">
                            {user.customLists.map((list) => (
                                <div
                                    key={list.id}
                                    className="px-3 py-1 rounded font-bold text-white"
                                    style={{ backgroundColor: mainColor }}
                                >
                                    {list.title}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="w-px bg-gray-300 dark:bg-gray-700"></div>

                    {/* Section 2: In Progress + Write Your Review */}
                    <div className="flex-1 flex flex-col gap-6 p-4 rounded-lg">
                        <h2 className="text-xl font-bold mb-2">In Progress</h2>
                        <div className="space-y-2">
                            {user.inProgress.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center p-2 border border-gray-300 dark:border-gray-700 rounded"
                                >
                                    <span className="font-bold text-black dark:text-white">{item.title}</span>
                                    <button
                                        className="px-2 py-1 text-white rounded"
                                        style={{ backgroundColor: mainColor }}
                                        onMouseEnter={(e) => ((e.currentTarget.style.backgroundColor = hoverColor))}
                                        onMouseLeave={(e) => ((e.currentTarget.style.backgroundColor = mainColor))}
                                    >
                                        Mark Completed
                                    </button>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-xl font-bold mt-4 mb-2">Write Your Review</h2>
                        <div className="space-y-2">
                            {user.toReview.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center p-2 border border-gray-300 dark:border-gray-700 rounded"
                                >
                                    <span className="font-bold text-black dark:text-white">{item.title}</span>
                                    <button
                                        className="px-2 py-1 text-white rounded"
                                        style={{ backgroundColor: mainColor }}
                                        onMouseEnter={(e) => ((e.currentTarget.style.backgroundColor = hoverColor))}
                                        onMouseLeave={(e) => ((e.currentTarget.style.backgroundColor = mainColor))}
                                    >
                                        + Create Review
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="w-px bg-gray-300 dark:bg-gray-700"></div>

                    {/* Section 3: Profile + Favorites */}
                    <div className="flex-1 flex flex-col gap-6 p-4 rounded-lg">
                        {/* Profile Header */}
                        <div className="flex flex-col items-center mb-4">
                            <img
                                src="/pink-star.png"
                                alt="Profile"
                                className="w-32 h-32 rounded-full border-4 border-gray-300 dark:border-gray-700 mb-4"
                            />

                            <h1 className="text-3xl font-bold text-black dark:text-white">{user.name}</h1>
                            <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                        </div>

                        {/* Stats */}
                        <div className="flex justify-around w-full mb-4 text-center">
                            <div>
                                <p className="text-2xl font-bold text-black dark:text-white">{user.totalBooks}</p>
                                <p className="text-gray-500 dark:text-gray-400">Books Read</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-black dark:text-white">{user.totalMovies}</p>
                                <p className="text-gray-500 dark:text-gray-400">Movies/Shows</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-black dark:text-white">{user.reviews}</p>
                                <p className="text-gray-500 dark:text-gray-400">Reviews</p>
                            </div>
                        </div>

                        {/* Favorites Section */}
                        <h2 className="text-xl font-bold mb-2">Your Favorites</h2>
                        <div className="grid grid-cols-1 gap-2">
                            {user.favorites.map((item) => (
                                <div
                                    key={item.id}
                                    className="p-2 rounded text-white text-center font-bold"
                                    style={{ backgroundColor: mainColor }}
                                    onMouseEnter={(e) => ((e.currentTarget.style.backgroundColor = hoverColor))}
                                    onMouseLeave={(e) => ((e.currentTarget.style.backgroundColor = mainColor))}
                                >
                                    {item.title}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;
