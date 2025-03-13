"use client" // Enable Framer Motion in this page

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TypographyH1, TypographyP } from "@/components/ui/typography"

// Assuming you have Input and Textarea components from your UI library (e.g., shadcn/ui)
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <main className="flex flex-col min-h-screen bg-[#EFE7DE] p-6">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto mt-12 p-6 bg-gradient-to-r from-green-50 via-green-100 to-green-50 rounded-md shadow-md"
      >
        <TypographyH1 className="text-3xl font-bold mb-4 text-center">
          Contact Me
        </TypographyH1>
        <TypographyP className="text-center text-gray-700 mb-8">
          Feel free to reach out through the form below or via email.
        </TypographyP>

        <Card className="p-6">
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Full Name
              </label>
              <Input type="text" placeholder="Enter your name" className="w-full" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <Input type="email" placeholder="Enter your email" className="w-full" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Message
              </label>
              <Textarea placeholder="Enter your message" className="w-full" rows={4} />
            </div>
            <Button type="submit" className="self-center mt-4">
              Send Message
            </Button>
          </form>
        </Card>

        <div className="mt-6 text-center">
          <TypographyP className="text-gray-600">
            Or contact me via email:{" "}
            <a
              href="mailto:raidenshogun18042004@gmail.com"
              className="text-blue-600 hover:underline"
            >
              raidenshogun18042004@gmail.com
            </a>
          </TypographyP>
        </div>
      </motion.section>
    </main>
  )
}
