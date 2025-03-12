"use client" 
// Để dùng Framer Motion trong page

import Link from "next/link"
import { motion } from "framer-motion"
// Import icon từ lucide-react
import { Github, Server, Linkedin, Twitter } from "lucide-react"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { TypographyP } from "@/components/ui/typography"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Khu vực chính */}
      <section className="flex flex-1 flex-col md:flex-row items-center justify-center p-6 bg-gray-50 gap-8">
        {/* Card bên trái: Thông tin cá nhân */}
        <Card className="w-full max-w-sm text-center">
          <CardHeader className="flex flex-col items-center">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src="/avatar.jpg" alt="Đức Hùng" />
              <AvatarFallback>DH</AvatarFallback>
            </Avatar>
            <CardTitle className="text-xl">Duc Hung Pham</CardTitle>
            <CardDescription>Project Manager</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit semper turpis.
            </p>
            {/* Social icons hoặc link */}
            <div className="flex justify-center space-x-3 mt-4">
              <Link href="https://linkedin.com" target="_blank" className="flex items-center gap-1">
                <Button variant="outline" className="flex items-center gap-1 text-sm">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" className="flex items-center gap-1">
                <Button variant="outline" className="flex items-center gap-1 text-sm">
                  <Twitter className="w-4 h-4" /> Twitter
                </Button>
              </Link>
              <Link href="https://github.com" target="_blank" className="flex items-center gap-1">
                <Button variant="outline" className="flex items-center gap-1 text-sm">
                  <Github className="w-4 h-4" /> GitHub
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Kẻ vạch đứng giữa 2 card (chỉ hiển thị khi màn hình md) */}
        <div className="hidden md:block h-80 border-l border-gray-300"></div>

        {/* Card bên phải: Phần "Hello" */}
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl">Hello</CardTitle>
            <CardDescription className="text-gray-600">
              Here's who I am &amp; what I do
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <TypographyP className="text-sm md:text-base text-gray-600">
              I’m a paragraph. Click here to add your own text and edit me. It’s easy. 
              Just click “Edit Text” or double click me to add your own content.
            </TypographyP>
            <div className="flex flex-col md:flex-row gap-3">
              <Button id="resume" className="px-6">Resume</Button>
              <Button id="projects" variant="outline" className="px-6">Projects</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section ABOUT ME với background gradient */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-12 p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-md shadow-md"
      >
        {/* Ảnh đại diện cho About Me */}
        <div className="flex gap-4 mb-6">
          <img src="/images/about1.jpg" alt="About image 1" className="w-32 h-32 object-cover rounded-md" />
          <img src="/images/about2.jpg" alt="About image 2" className="w-32 h-32 object-cover rounded-md" />
          <img src="/images/about3.jpg" alt="About image 3" className="w-32 h-32 object-cover rounded-md" />
        </div>

        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac dapibus lorem. Nullam non tellus at metus gravida ultrices vitae eget felis.
        </p>

        {/* SPORTS */}
        <hr className="my-4 border-gray-300" />
        <h3 className="text-xl font-semibold mb-2">Sports</h3>
        <p className="text-gray-700">
          Tôi thích bóng đá và cầu lông. Hâm mộ Messi, Chelsea và Lin Dan.
        </p>
        <div className="flex gap-4 mt-4">
          <img src="/images/football.jpg" alt="Football" className="w-32 h-32 object-cover rounded-md" />
          <img src="/images/badminton.jpg" alt="Badminton" className="w-32 h-32 object-cover rounded-md" />
        </div>

        {/* FAVOURITE ANIME */}
        <hr className="my-4 border-gray-300" />
        <h3 className="text-xl font-semibold mb-2">Favourite Anime</h3>
        <p className="text-gray-700">
          Naruto, One Piece
        </p>
        <div className="flex gap-4 mt-4">
          <img src="/images/naruto.jpg" alt="Naruto" className="w-32 h-32 object-cover rounded-md" />
          <img src="/images/onepiece.jpg" alt="One Piece" className="w-32 h-32 object-cover rounded-md" />
        </div>

        {/* FAVOURITE GAME */}
        <hr className="my-4 border-gray-300" />
        <h3 className="text-xl font-semibold mb-2">Favourite Game</h3>
        <p className="text-gray-700">
          Lorem ipsum game placeholder...
        </p>
        <div className="flex gap-4 mt-4">
          <img src="/images/game1.jpg" alt="Favourite Game 1" className="w-32 h-32 object-cover rounded-md" />
          <img src="/images/game2.jpg" alt="Favourite Game 2" className="w-32 h-32 object-cover rounded-md" />
          <img src="/images/game3.jpg" alt="Favourite Game 3" className="w-32 h-32 object-cover rounded-md" />
        </div>

        {/* GitHub */}
        <hr className="my-4 border-gray-300" />
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold flex items-center gap-1">
            GitHub <Github className="w-5 h-5" />
          </h3>
        </div>
        <p className="text-gray-700">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            github.com/your-profile
          </a>
        </p>

        {/* DevOps */}
        <hr className="my-4 border-gray-300" />
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold flex items-center gap-1">
            DevOps <Server className="w-5 h-5" />
          </h3>
        </div>
        <p className="text-gray-700">
          Lorem ipsum DevOps experiences or tools...
        </p>
      </motion.section>
    </main>
  )
}
