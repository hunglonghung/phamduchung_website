"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

// SubCard with overlay text top-left
function SubCard({ imgSrc, label, description }) {
  return (
    <Card className="overflow-hidden w-full h-full p-0">
      <div className="relative w-full h-full">
        <img src={imgSrc} alt={label} className="object-cover w-full h-full" />
        {(label || description) && (
          <div className="absolute top-0 left-0 p-3 max-w-[90%] bg-transparent">
            {label && (
              <p className="text-white text-xl font-extrabold drop-shadow">
                {label}
              </p>
            )}
            {description && (
              <p className="text-white text-base font-extrabold mt-1 drop-shadow">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}

export default function AboutMe() {
  return (
    <main className="flex flex-col min-h-screen bg-[#EFE7DE]">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-12 p-6"
      >
        <h2 className="text-5xl font-extrabold text-center mb-10">ABOUT ME</h2>

        <div className="grid gap-6">
          {/* ABOUT ME */}
          <Card className="relative overflow-hidden">
            <img
              src="/images/aboutMe/aboutMePictures/aboutMeBackground.jpg"
              alt="About background"
              className="absolute inset-0 object-cover w-full h-full z-0"
            />
            <div className="absolute inset-0 bg-black/40 z-10 flex items-start justify-start pl-6 pt-6">
              <h3 className="text-white text-4xl font-bold">About Me</h3>
            </div>
            <CardContent className="relative z-20 mt-60">
              <p className="text-white font-bold mb-4">
                Hey! I'm currently studying at the University of Wollongong, majoring in Full Stack Development...
              </p>
              <p className="text-white font-bold mb-4">
                One of my biggest strengths is adaptability...
              </p>
              <p className="text-white font-bold mb-4">
                Well… I guess that’s me. Of course, life’s not always chill...
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <SubCard imgSrc="/images/aboutMe/aboutMePictures/about1.webp" />
                <SubCard imgSrc="/images/aboutMe/aboutMePictures/about2.jpg" />
                <SubCard imgSrc="/images/aboutMe/aboutMePictures/about3.jpg" />
              </div>
            </CardContent>
          </Card>

          {/* SPORTS */}
          <Card className="relative overflow-hidden">
            <img
              src="/images/aboutMe/sportPictures/sportBackground.jpg"
              alt="Sports background"
              className="absolute inset-0 object-cover w-full h-full z-0"
            />
            <div className="absolute inset-0 bg-black/40 z-10 flex items-start justify-start pl-6 pt-6">
              <h3 className="text-white text-4xl font-bold">Sports</h3>
            </div>
            <CardContent className="relative z-20 mt-60">
              <p className="text-white font-bold mb-4">
                I’m into football and badminton – though lately I’ve been playing badminton more...
              </p>
              <p className="text-white font-bold mb-4">
                But honestly, I still enjoy football more...
              </p>
              <p className="text-white font-bold mb-4">
                My favourite player is Messi and Lin Dan...
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SubCard imgSrc="/images/aboutMe/sportPictures/football.jpeg" description="FOOTBALL" />
                <SubCard imgSrc="/images/aboutMe/sportPictures/badminton.jpg" description="BADMINTON" />
              </div>
            </CardContent>
          </Card>

          {/* FAVOURITE ANIME */}
          <Card className="relative overflow-hidden">
            <img
              src="images/aboutMe/animePictures/animeBackground.jpg"
              alt="Anime background"
              className="absolute inset-0 object-cover w-full h-full z-0"
            />
            <div className="absolute inset-0 bg-black/40 z-10 flex items-start justify-start pl-6 pt-6">
              <h3 className="text-white text-4xl font-bold">Favourite Anime</h3>
            </div>
            <CardContent className="relative z-20 mt-60">
              <p className="text-white font-bold mb-4">
                I’m seriously addicted to anime...
              </p>
              <p className="text-white font-bold mb-4">
                That said… anime these days kinda feels like it’s going downhill...
              </p>
              <div className="grid grid-cols-2 gap-4">
                <SubCard imgSrc="images/aboutMe/animePictures/naruto.jpeg" description="NARUTO" />
                <SubCard imgSrc="images/aboutMe/animePictures/onePiece.jpg" description="ONE PIECE" />
              </div>
            </CardContent>
          </Card>

          {/* FAVOURITE GAME */}
          <Card className="relative overflow-hidden">
            <img
              src="images/aboutMe/gamePictures/HI3_elysia.jpg"
              alt="Game background"
              className="absolute inset-0 object-cover w-full h-full z-0"
            />
            <div className="absolute inset-0 bg-black/40 z-10 flex items-start justify-start pl-6 pt-6">
              <h3 className="text-white text-4xl font-bold">Favourite Game</h3>
            </div>
            <CardContent className="relative z-20 mt-60">
              <p className="text-white font-bold mb-4">
                I’m also a big fan of games from Hoyoverse and Kuro...
              </p>
              <p className="text-white font-bold mb-4">
                Waifu? No doubt – it’s Elysia for me...
              </p>
              <div className="grid grid-cols-3 gap-4">
                <SubCard imgSrc="images/aboutMe/gamePictures/HI3_elysia.jpg" description="HONKAI IMPACT 3" />
                <SubCard imgSrc="images/aboutMe/gamePictures/hsr.avif" description="HONKAI STAR RAIL" />
                <SubCard imgSrc="images/aboutMe/gamePictures/WutheringWaves.png" description="WUTHERING WAVES" />
              </div>
            </CardContent>
          </Card>

          {/* GITHUB */}
          <Card className="relative overflow-hidden min-h-[600px]">
            <img
              src="images/aboutMe/github/github.webp"
              alt="GitHub background"
              className="absolute inset-0 object-cover w-full h-full z-0"
            />
            <div className="absolute inset-0 bg-black/40 z-10 flex items-start justify-start pl-6 pt-6">
              <h3 className="text-white text-4xl font-bold">GitHub</h3>
            </div>
            <CardContent className="relative z-20 mt-60 h-full flex flex-col justify-between">
              <div />
              <div className="flex justify-end">
                <a
                  href="https://github.com/hunglonghung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold text-xl hover:underline"
                >
                  CLICK HERE FOR MY GITHUB
                </a>
              </div>
            </CardContent>
          </Card>

          {/* DEVOPS */}
          <Card className="relative overflow-hidden min-h-[600px]">
            <img
              src="images/aboutMe/devOps/azureDevops.webp"
              alt="DevOps background"
              className="absolute inset-0 object-cover w-full h-full z-0"
            />
            <div className="absolute inset-0 bg-black/40 z-10 flex items-start justify-start pl-6 pt-6">
              <h3 className="text-white text-4xl font-bold">DevOps</h3>
            </div>
            <CardContent className="relative z-20 mt-60 h-full flex flex-col justify-between">
              <div />
              <div className="flex justify-end">
                <a
                  href="https://azure.microsoft.com/en-us/get-started/azure-portal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold text-xl hover:underline"
                >
                  DEVOPS PORTAL
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>
    </main>
  )
}
