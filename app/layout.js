"use client"

import "./globals.css"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <header className="relative flex justify-between items-center px-8 py-4 shadow-sm bg-black/80">
          <div className="font-bold text-xl text-white">
            <span>Duc Hung Pham / Full-stack Developer</span>
          </div>
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:underline text-white cursor-pointer">Home</Link>
            <Link href="/about" className="hover:underline text-white cursor-pointer">About me</Link>
            <Link href="/resume" className="hover:underline text-white cursor-pointer">Resume</Link>
            <Link href="/projects" className="hover:underline text-white cursor-pointer">Projects</Link>
            <Link href="/contact" className="hover:underline text-white cursor-pointer">Contact</Link>
          </nav>
          {/* Mobile toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Mobile menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 w-full bg-black/90 md:hidden"
              >
                <div className="flex flex-col space-y-4 p-4">
                  <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline text-white cursor-pointer">Home</Link>
                  <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:underline text-white cursor-pointer">About me</Link>
                  <Link href="/resume" onClick={() => setMenuOpen(false)} className="hover:underline text-white cursor-pointer">Resume</Link>
                  <Link href="/projects" onClick={() => setMenuOpen(false)} className="hover:underline text-white cursor-pointer">Projects</Link>
                  <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:underline text-white cursor-pointer">Contact</Link>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Page transition */}
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            {children}
          </motion.main>
        </AnimatePresence>

        <footer className="bg-gray-900 py-4 text-center text-sm text-white">
          <p>
            © 2025 Duc Hung Pham. This website is built using{" "}
            <a
              href="https://next.js.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline cursor-pointer"
            >
              next.js
            </a>
          </p>
        </footer>
      </body>
    </html>
  )
}
