// app/projects/page.js

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography"

export default function ProjectsPage() {
  return (
    // Sử dụng nền màu be tương tự trang Resume
    <main className="min-h-screen bg-[#EFE7DE] p-6">
      {/* Tiêu đề Projects */}
      <div className="mb-8 text-center">
        <TypographyH1 className="text-4xl font-bold text-black">Projects</TypographyH1>
        <p className="text-gray-700 mt-2">Những dự án đã và đang được triển khai</p>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Dự án 1: Procastint */}
        <Card className="shadow-md rounded-md">
          <CardHeader>
            <CardTitle className="text-black">Procastint</CardTitle>
            <CardDescription className="text-gray-600">Project Manager</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-800">
            <TypographyP>
              <strong>Link:</strong>{" "}
              <a
                href="https://procastint.com/api-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://procastint.com/api-docs
              </a>
            </TypographyP>
            <TypographyP>
              An app that is currently in development that helps people manage tasks, with new interesting features.
              Project is hosted by me, with a team of 3 members: Backend, Frontend, Security Testing.
            </TypographyP>
            <TypographyP>
              <strong>Responsibilities:</strong> Backend development and managing the whole infrastructure on Azure,
              Azure DevOps, and Cloudflare.
            </TypographyP>
            <TypographyP>
              <strong>Technologies:</strong> Node.js, FastAPI (Python), Azure VM, PostgreSQL, Docker, Swagger, Nginx, Flutter.
            </TypographyP>
          </CardContent>
        </Card>

        {/* Dự án 2: Usee-lite */}
        <Card className="shadow-md rounded-md">
          <CardHeader>
            <CardTitle className="text-black">Usee-lite</CardTitle>
            <CardDescription className="text-gray-600">Backend Developer</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-800">
            <TypographyP>
              <strong>Link:</strong>{" "}
              <a
                href="https://lite.dev2.usee.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://lite.dev2.usee.ai/
              </a>
            </TypographyP>
            <TypographyP>
              Project from FPT Japan. This project is to demo LLM and CV models, especially Chatbot and Object Detection.
            </TypographyP>
            <TypographyP>
              <strong>Technologies:</strong> Python (FastAPI), Java (Spring Boot), PostgreSQL, Azure DevOps.
            </TypographyP>
          </CardContent>
        </Card>

        {/* Dự án 3: Personal-Website */}
        <Card className="shadow-md rounded-md">
          <CardHeader>
            <CardTitle className="text-black">Personal-Website</CardTitle>
            <CardDescription className="text-gray-600">Frontend Developer</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-800">
            <TypographyP>
              <strong>Link:</strong>{" "}
              <a
                href="https://www.phamduchung.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.phamduchung.com
              </a>
            </TypographyP>
            <TypographyP>
              A portfolio website to describe myself, featuring blogs, heroes, skills, projects, education, experience,
              contact, and footer.
            </TypographyP>
            <TypographyP>
              <strong>Technologies:</strong> React.js (Next.js), Azure DevOps, Cloudflare.
            </TypographyP>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
