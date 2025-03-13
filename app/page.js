"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Server, Linkedin, Twitter, Facebook, Instagram, MessageSquare, Globe2 } from "lucide-react"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { TypographyP } from "@/components/ui/typography"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#EFE7DE]">
      <section className="flex flex-1 items-stretch justify-center p-6">
        <Card className="w-full max-w-6xl max-h-[800px] overflow-y-auto mx-auto">
          <CardContent className="flex flex-col md:flex-row gap-8 p-6 items-stretch">
            <Card className="flex-1 text-center">
              <CardHeader className="flex flex-col items-center">
                <Avatar className="w-40 h-60 mb-4">
                  <AvatarImage src="/images/profilePictures/avatar.jpg" alt="Duc Hung" />
                  <AvatarFallback>DH</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">Duc Hung Pham</CardTitle>
                <CardDescription>Full-stack Developer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mt-2">
                  Tech otakus save the word.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Love to play around with GCP, AWS and Azure.
                  I enjoy turning ideas into real applications.
                </p>
                <div className="flex justify-center space-x-3 mt-4">
                  <Link href="https://www.linkedin.com/in/hungpham18042004/" target="_blank" className="flex items-center gap-1">
                    <Button variant="outline" className="flex items-center gap-1 text-sm cursor-pointer">
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </Button>
                  </Link>
                  <Link href="https://x.com/hungphams1804" target="_blank" className="flex items-center gap-1">
                    <Button variant="outline" className="flex items-center gap-1 text-sm cursor-pointer">
                      <Twitter className="w-4 h-4" /> Twitter
                    </Button>
                  </Link>
                  <Link href="https://github.https://github.com/hunglonghung" target="_blank" className="flex items-center gap-1">
                    <Button variant="outline" className="flex items-center gap-1 text-sm cursor-pointer">
                      <Github className="w-4 h-4" /> GitHub
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className="hidden md:block self-stretch border-l border-gray-300"></div>

            <Card className="flex-1">
              <CardHeader className="p-2 pl-6 pr-10">
                <CardTitle className="text-3xl md:text-4xl">Hello guys</CardTitle>
                <CardDescription className="text-gray-600">
                  Welcome to my website, please take a quick look hehehe
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <TypographyP className="text-sm md:text-base text-gray-600">
                  Hi there! I'm a full-stack developer, and this website is both a little introduction about me 
                  and a way to flex my front-end skills — just in case anyone still thinks backend devs can't design. 😄
                  I'm a friendly, easygoing person who enjoys working in a team, understanding others, 
                  and staying active through sports. I believe good teamwork and positive energy always make projects better.
                </TypographyP>
                <div className="flex flex-col md:flex-row gap-3">
                  <Button id="resume" className="px-6 cursor-pointer">Resume</Button>
                  <Button id="projects" variant="outline" className="px-6 cursor-pointer">Projects</Button>
                </div>
              </CardContent>
            </Card>
          </CardContent>

          <CardContent className="p-15">
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-sm font-semibold text-gray-700 mb-2">Follow me on:</p>
              <div className="flex items-center justify-center gap-3">
                <Link href="https://www.instagram.com/phamhung18042004/" target="_blank" className="text-gray-600 hover:text-gray-800">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="https://www.facebook.com/PhamHung18042004" target="_blank" className="text-gray-600 hover:text-gray-800">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="https://x.com/hungphams1804" target="_blank" className="text-gray-600 hover:text-gray-800">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="https://weibo.com" target="_blank" className="text-gray-600 hover:text-gray-800">
                  <Globe2 className="w-5 h-5" />
                </Link>
                <Link href="https://wa.me" target="_blank" className="text-gray-600 hover:text-gray-800">
                  <MessageSquare className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </CardContent>

        </Card>
      </section>
    </main>
  )
}
