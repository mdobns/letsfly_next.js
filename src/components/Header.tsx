'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-teal-600 via-teal-500 to-green-600 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition duration-300">
            <Image 
              src="/images/logo.png" 
              alt="Lets Fly Logo" 
              width={50} 
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-lg">
            <li>
              <Link href="/" className="hover:text-yellow-300 transition duration-300 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-300 transition duration-300 font-medium">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-300 transition duration-300 font-medium">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-300 transition duration-300 font-medium">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-yellow-300 transition duration-300 font-medium">
                Reviews
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 pb-4">
            <li>
              <Link
                href="/"
                className="block py-2 px-4 hover:bg-teal-700 rounded transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-4 hover:bg-teal-700 rounded transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2 px-4 hover:bg-teal-700 rounded transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-4 hover:bg-teal-700 rounded transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className="block py-2 px-4 hover:bg-teal-700 rounded transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}
