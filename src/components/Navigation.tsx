"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
            emilyh.me
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition">
              About
            </a>
            <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition">
              Experience
            </a>
            <a href="#education" className="text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition">
              Education
            </a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition">
              Skills
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#about" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#experience" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400" onClick={() => setIsOpen(false)}>
              Experience
            </a>
            <a href="#education" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400" onClick={() => setIsOpen(false)}>
              Education
            </a>
            <a href="#skills" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400" onClick={() => setIsOpen(false)}>
              Skills
            </a>
            <a href="#contact" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
