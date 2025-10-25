"use client";

import React, { useState } from "react";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navbarColor = "#000033"; // navbar color
  const hoverColor = "#00004d"; // slightly lighter navy for hover

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black font-sans">
      <main className="flex flex-col items-center justify-center p-8 bg-white dark:bg-black rounded-lg shadow-lg w-96">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>

        <form className="flex flex-col gap-4 w-full">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded border border-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded border border-gray-300"
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-3 rounded border border-gray-300"
            />
          )}
          <button
            type="submit"
            className="p-3 rounded font-bold text-white transition-colors duration-200"
            style={{ backgroundColor: navbarColor }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = hoverColor)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = navbarColor)
            }
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4">
          {isLogin ? (
            <>
              Don&apos;t have an account?{" "}
              <span
                className="cursor-pointer font-bold underline transition-colors duration-200"
                style={{ color: navbarColor }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = hoverColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = navbarColor)
                }
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="cursor-pointer font-bold underline transition-colors duration-200"
                style={{ color: navbarColor }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = hoverColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = navbarColor)
                }
                onClick={() => setIsLogin(true)}
              >
                Sign In
              </span>
            </>
          )}
        </p>
      </main>
    </div>
  );
};

export default AuthPage;
