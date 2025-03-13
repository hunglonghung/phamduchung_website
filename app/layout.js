"use client"
// Bắt buộc để dùng Framer Motion + AnimatePresence trong file layout

import "./globals.css"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function RootLayout({ children }) {
  // Lấy pathname để Framer Motion nhận diện khi route thay đổi
  const pathname = usePathname()

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        {/* Header chung với nền tối và chữ trắng */}
        <header className="flex justify-between items-center px-8 py-4 shadow-sm bg-black/80">
          <div className="font-bold text-xl text-white">
            <span>Duc Hung Pham / Full-stack Developer</span>
          </div>
          <nav className="space-x-6">
            <Link href="/" className="hover:underline text-white">Home</Link>
            <Link href="/about" className="hover:underline text-white">About me</Link>
            <Link href="/resume" className="hover:underline text-white">Resume</Link>
            <Link href="/projects" className="hover:underline text-white">Projects</Link>
            <Link href="/contact" className="hover:underline text-white">Contact</Link>
          </nav>
        </header>

        {/* AnimatePresence bọc phần main để tạo transition khi đổi route */}
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

        {/* Footer chung với nền tối và chữ trắng */}
        <footer className="bg-gray-900 py-4 text-center text-sm text-white">
          <p>
            © 2025 Duc Hung Pham. This website is built using{" "}
            <a
              href="https://next.js.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              next.js
            </a>
          </p>
        </footer>
      </body>
    </html>
  )
}
