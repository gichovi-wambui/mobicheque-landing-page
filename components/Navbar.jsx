"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-mobicheque-green shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* Top Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >

            <img
              src="/logo/logo.png"
              alt="MobiCheque Logo"
              className="h-8 w-auto"
            />

            <span className="text-lg font-semibold text-white">
              MobiCheque
            </span>

          </a>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-white">

            <a
              href="#about"
              className="hover:text-gray-200 transition"
            >
              About
            </a>

            <a
              href="#how-it-works"
              className="hover:text-gray-200 transition"
            >
              How It Works
            </a>

            <a
              href="#features"
              className="hover:text-gray-200 transition"
            >
              Features
            </a>

            <a
              href="#solutions"
              className="hover:text-gray-200 transition"
            >
              Solutions
            </a>

            <a
              href="#security"
              className="hover:text-gray-200 transition"
            >
              Security
            </a>

          </div>


          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >

            {isMenuOpen ? (
              /* Close Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}

          </button>

        </div>


        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t border-white/20 pt-4">

            <div className="flex flex-col gap-2">

              <a
                href="#about"
                onClick={closeMenu}
                className="text-white px-4 py-3 rounded-lg hover:bg-white/10 transition"
              >
                About
              </a>

              <a
                href="#how-it-works"
                onClick={closeMenu}
                className="text-white px-4 py-3 rounded-lg hover:bg-white/10 transition"
              >
                How It Works
              </a>

              <a
                href="#features"
                onClick={closeMenu}
                className="text-white px-4 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Features
              </a>

              <a
                href="#solutions"
                onClick={closeMenu}
                className="text-white px-4 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Solutions
              </a>

              <a
                href="#security"
                onClick={closeMenu}
                className="text-white px-4 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Security
              </a>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
}