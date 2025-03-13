"use client"; // Enable Framer Motion in this page

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { TypographyH1, TypographyP } from "@/components/ui/typography"

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
        <Card className="p-6">
          <div className="space-y-4">
            <TypographyP className="text-gray-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:raidenshogun18042004@gmail.com"
                className="text-blue-600 hover:underline"
              >
                raidenshogun18042004@gmail.com
              </a>
            </TypographyP>
            <TypographyP className="text-gray-700">
              <strong>Phone (VN):</strong> +84815449988
            </TypographyP>
            <TypographyP className="text-gray-700">
              <strong>Phone (AU):</strong> +61401798233
            </TypographyP>
            <TypographyP className="text-gray-700">
              <strong>Address (VN):</strong> 2307A Green Park Tower, Yen Hoa, Cau Giay, Hanoi, Vietnam
            </TypographyP>
            <TypographyP className="text-gray-700">
              <strong>Address (AU):</strong> 10 Georgina Street, Keiraville, Wollongong NSW 2500, Australia
            </TypographyP>
            <TypographyP className="text-gray-700">
              <strong>Date of Birth:</strong> 18/04/2004
            </TypographyP>
          </div>
        </Card>
      </motion.section>
    </main>
  )
}
