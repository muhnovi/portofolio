"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Close drawer when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <div className="wrapper">
      <nav className="sticky top-0 z-40 flex items-center gap-3 justify-between py-4 h-[10vh] bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-2xl mt-4 px-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
        <button
          className="md:hidden inline-flex py-2 px-2 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          onClick={() => setIsOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu w-4 h-4"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        <Link href="/" className="font-bold text-xl gradient-text hover:scale-105 transition-transform">
          Muhammad Noviyanto
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" className="hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
          </li>
          <li>
            <Link href="/Projects" className="hover:text-blue-600 transition-colors font-medium">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </li>
        </ul>

        <ThemeToggle />
      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-[998] md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-80 h-full bg-white dark:bg-slate-800 shadow-2xl text-gray-800 dark:text-gray-100 transform transition-transform duration-300 z-[999] md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600">
          <Link href="/" className="font-body font-bold text-lg gradient-text" onClick={() => setIsOpen(false)}>
            MUHAMMAD NOVIYANTO
          </Link>
          <button
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x w-5 h-5"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-6">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Projects"
                className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-xl">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">Available for work</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
