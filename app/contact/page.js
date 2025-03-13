"use client"
// Để dùng Framer Motion trong page

import Link from "next/link"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TypographyH1, TypographyP } from "@/components/ui/typography"

// Giả sử bạn có các component Input và Textarea từ thư viện UI của bạn (ví dụ: shadcn/ui)
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
          Hãy liên hệ với tôi thông qua form dưới đây hoặc qua email.
        </TypographyP>

        <Card className="p-6">
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Họ và tên
              </label>
              <Input type="text" placeholder="Nhập tên của bạn" className="w-full" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <Input type="email" placeholder="Nhập email của bạn" className="w-full" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Tin nhắn
              </label>
              <Textarea placeholder="Nhập tin nhắn của bạn" className="w-full" rows={4} />
            </div>
            <Button type="submit" className="self-center mt-4">
              Gửi tin nhắn
            </Button>
          </form>
        </Card>

        <div className="mt-6 text-center">
          <TypographyP className="text-gray-600">
            Hoặc liên hệ qua email:{" "}
            <a
              href="mailto:your-email@example.com"
              className="text-blue-600 hover:underline"
            >
              your-email@example.com
            </a>
          </TypographyP>
        </div>

        {/* Link quay về trang chủ */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </motion.section>
    </main>
  )
}
