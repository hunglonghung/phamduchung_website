"use client"
// Để dùng Framer Motion trong page

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

// Card con (sub-card) dùng chung để hiển thị ảnh + overlay text
function SubCard({ imgSrc, label }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-32">
        <img src={imgSrc} alt={label} className="object-cover w-full h-full" />
        {/* Overlay nếu bạn muốn hiển thị text trên ảnh */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <p className="text-white text-sm font-semibold">{label}</p>
        </div>
      </div>
    </Card>
  )
}

export default function AboutMe() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Phần AboutMe chính, có animation fade-up */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-12 p-6"
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <div className="grid gap-6">
          {/* Card: ABOUT ME */}
          <Card className="overflow-hidden">
            {/* Ảnh background + tiêu đề */}
            <div className="relative h-60">
              <img
                src="/images/about-bg.jpg"
                alt="About background"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">About Me</h3>
              </div>
            </div>

            {/* Nội dung + ảnh con (sub-cards) */}
            <CardContent>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac dapibus lorem. 
                Nullam non tellus at metus gravida ultrices vitae eget felis.
              </p>

              {/* Các card con (mỗi ảnh là 1 sub-card) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <SubCard imgSrc="/images/about1.jpg" label="About Image 1" />
                <SubCard imgSrc="/images/about2.jpg" label="About Image 2" />
                <SubCard imgSrc="/images/about3.jpg" label="About Image 3" />
              </div>
            </CardContent>
          </Card>

          {/* Card: SPORTS */}
          <Card className="overflow-hidden">
            <div className="relative h-60">
              <img
                src="/images/sports-bg.jpg"
                alt="Sports background"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Sports</h3>
              </div>
            </div>
            <CardContent>
              <p className="text-gray-700">
                Tôi thích bóng đá và cầu lông. Hâm mộ Messi, Chelsea và Lin Dan.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <SubCard imgSrc="/images/football.jpg" label="Football" />
                <SubCard imgSrc="/images/badminton.jpg" label="Badminton" />
              </div>
            </CardContent>
          </Card>

          {/* Card: FAVOURITE ANIME */}
          <Card className="overflow-hidden">
            <div className="relative h-60">
              <img
                src="/images/anime-bg.jpg"
                alt="Anime background"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Favourite Anime</h3>
              </div>
            </div>
            <CardContent>
              <p className="text-gray-700">Naruto, One Piece</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <SubCard imgSrc="/images/naruto.jpg" label="Naruto" />
                <SubCard imgSrc="/images/onepiece.jpg" label="One Piece" />
              </div>
            </CardContent>
          </Card>

          {/* Card: FAVOURITE GAME */}
          <Card className="overflow-hidden">
            <div className="relative h-60">
              <img
                src="/images/game-bg.jpg"
                alt="Game background"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Favourite Game</h3>
              </div>
            </div>
            <CardContent>
              <p className="text-gray-700">Lorem ipsum game placeholder...</p>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <SubCard imgSrc="/images/game1.jpg" label="Game 1" />
                <SubCard imgSrc="/images/game2.jpg" label="Game 2" />
                <SubCard imgSrc="/images/game3.jpg" label="Game 3" />
              </div>
            </CardContent>
          </Card>

          {/* Card: GITHUB */}
          <Card className="overflow-hidden">
            <div className="relative h-60">
              <img
                src="/images/github-bg.jpg"
                alt="GitHub background"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">GitHub</h3>
              </div>
            </div>
            <CardContent>
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
            </CardContent>
          </Card>

          {/* Card: DEVOPS */}
          <Card className="overflow-hidden">
            <div className="relative h-60">
              <img
                src="/images/devops-bg.jpg"
                alt="DevOps background"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">DevOps</h3>
              </div>
            </div>
            <CardContent>
              <p className="text-gray-700">Lorem ipsum DevOps experiences or tools...</p>
            </CardContent>
          </Card>
        </div>

        {/* Link quay về trang chủ */}
        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </motion.section>
    </main>
  )
}
