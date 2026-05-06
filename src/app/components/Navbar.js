"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false)
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
      <nav className="sticky top-0 z-40 flex items-center gap-3 justify-between py-4 h-[10vh] bg-white dark:bg-zinc-900 rounded-2xl mt-4 px-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
        <button
          className="md:hidden inline-flex py-2 px-2 border border-zinc-300 dark:border-zinc-700 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          onClick={() => setIsOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        <Link href="/" className="font-bold text-xl text-zinc-900 dark:text-white tracking-tight hover:opacity-70 transition-opacity">
          Muhammad Noviyanto
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item}`}
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium text-sm tracking-wide"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-[998] md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-80 h-full bg-white dark:bg-zinc-900 shadow-2xl text-zinc-900 dark:text-zinc-100 transform transition-transform duration-300 z-[999] md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-zinc-200 dark:border-zinc-800">
          <span className="font-bold text-base tracking-tight">MUHAMMAD NOVIYANTO</span>
          <button
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" /><path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-6">
          <ul className="space-y-1">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/About" },
              { name: "Projects", href: "/Projects" },
              { name: "Contact", href: "/Contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center justify-center gap-2 p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
            <div className="w-2 h-2 bg-zinc-900 dark:bg-white rounded-full animate-pulse"></div>
            <span className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">Belum Bekerja</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
