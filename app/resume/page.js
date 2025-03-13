"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography"

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#EFE7DE] p-6">
      {/* CV Title */}
      <div className="mb-8 text-center">
        <TypographyH1 className="text-4xl font-bold text-black">
          RESUME
        </TypographyH1>
        <p className="text-gray-700 mt-2">Summary of Experience, Education, and Skills</p>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Personal Info */}
        <Card className="shadow-md rounded-md">
          <CardHeader>
            <CardTitle className="text-black">Personal Information</CardTitle>
            <CardDescription className="text-gray-600">
              Contact and basic introduction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-800">
            <TypographyP><strong>Full Name:</strong> Duc Hung Pham</TypographyP>
            <TypographyP><strong>Address:</strong> Gwynneville, Wollongong, NSW 2500</TypographyP>
            <TypographyP><strong>Phone:</strong> 0401798233</TypographyP>
            <TypographyP><strong>Email:</strong> emyeuanh18042004@gmail.com</TypographyP>
            <TypographyP>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/hungpham18042004/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                linkedin.com/in/hungpham18042004/
              </a>
            </TypographyP>
            <TypographyP>
              <strong>Website:</strong>{" "}
              <a href="https://www.phamduchung.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                www.phamduchung.com
              </a>
            </TypographyP>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <Card className="shadow-md rounded-md">
          <CardHeader>
            <CardTitle className="text-black">Work Experience</CardTitle>
            <CardDescription className="text-gray-600">
              Roles and responsibilities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-800">
            <div>
              <TypographyH2 className="text-xl font-semibold text-black">
                Backend Developer Intern - FPT JAPAN, Tokyo-Mita
              </TypographyH2>
              <p className="text-sm text-gray-500">Dec 2024 – Feb 2025</p>
              <TypographyP>
                - Developed REST APIs using FastAPI (Python) & Spring Boot (Java).<br />
                - Built and optimized Docker containers.<br />
                - Finetuned LLM and CV models; integrated pre-trained models.<br />
                - Worked on PostgreSQL CRUD operations.
              </TypographyP>
            </div>
            <hr className="border-gray-300" />
            <div>
              <TypographyH2 className="text-xl font-semibold text-black">
                Software Developer Intern - Viettel, Hanoi
              </TypographyH2>
              <p className="text-sm text-gray-500">Jan 2024 – Mar 2024</p>
              <TypographyP>
                - Developed a module for VAC software using C++ and OpenGL.
              </TypographyP>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="shadow-md rounded-md">
          <CardHeader>
            <CardTitle className="text-black">Education</CardTitle>
            <CardDescription className="text-gray-600">Degree and qualification</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-800">
            <TypographyH2 className="text-xl font-semibold text-black">
              Bachelor of Computer Science
            </TypographyH2>
            <p className="text-sm text-gray-500">2022 – 2025</p>
            <TypographyP>University of Wollongong, NSW, Australia</TypographyP>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="shadow-md rounded-md">
          <CardHeader>
            <CardTitle className="text-black">Skills</CardTitle>
            <CardDescription className="text-gray-600">Technical and soft skills</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-800">
            <TypographyP><strong>Programming Languages:</strong> JavaScript (Node.js), Python (FastAPI), Java (Spring Boot), React (Next.js with shadcn)</TypographyP>
            <TypographyP><strong>Development & Infrastructure:</strong> Docker, CI/CD Pipelines</TypographyP>
            <TypographyP><strong>Cloud Platforms:</strong> AWS (EC2, S3, RDS), Azure (VM, Blob Storage, SQL Database)</TypographyP>
            <TypographyP><strong>APIs:</strong> REST API, WebSocket</TypographyP>
            <TypographyP><strong>Version Control & Management:</strong> GitHub, Azure DevOps</TypographyP>
            <TypographyP><strong>Soft Skills:</strong> BE & FE Communication, ChatGPT, Claude, Stack Overflow, Planning and Task Division</TypographyP>
            <TypographyP><strong>Languages:</strong> English (IELTS 7.5, SAT 1400), Japanese (N3), Chinese (HSK2), Vietnamese (Native)</TypographyP>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="shadow-md rounded-md">
          <CardHeader>
            <CardTitle className="text-black">Projects</CardTitle>
            <CardDescription className="text-gray-600">Hands-on experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-800">
            <div>
              <TypographyH2 className="text-lg font-semibold text-black">Procastint - Task Management App</TypographyH2>
              <TypographyP>
                Link: <a href="https://procastint.com/api-docs" className="text-blue-600 hover:underline">https://procastint.com/api-docs</a><br />
                Role: Project Manager & Backend Developer.<br />
                Features: Task manager, chatbot microservice, deployed on Azure VM.<br />
                Tech Stack: Node.js, FastAPI, PostgreSQL, Nginx, Azure Blob, Docker, Swagger, Flutter, Azure DevOps, Cloudflare.
              </TypographyP>
            </div>
            <div>
              <TypographyH2 className="text-lg font-semibold text-black">Usee-lite - AI Demo Project</TypographyH2>
              <TypographyP>
                Link: <a href="https://lite.dev2.usee.ai/" className="text-blue-600 hover:underline">https://lite.dev2.usee.ai/</a><br />
                Role: Backend Developer.<br />
                Tech Stack: FastAPI, Spring Boot, PostgreSQL, Azure DevOps.<br />
                Purpose: Showcase CV & LLM AI models, Chatbot, Object Detection.
              </TypographyP>
            </div>
            <div>
              <TypographyH2 className="text-lg font-semibold text-black">Personal Portfolio Website</TypographyH2>
              <TypographyP>
                Link: <a href="https://www.phamduchung.com" className="text-blue-600 hover:underline">https://www.phamduchung.com</a><br />
                Role: Frontend Developer.<br />
                Built using Next.js (React), deployed via Azure DevOps and Cloudflare.
              </TypographyP>
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="shadow-md rounded-md">
          <CardHeader>
            <CardTitle className="text-black">Certifications</CardTitle>
            <CardDescription className="text-gray-600">Professional achievements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-800">
            <TypographyP><strong>AWS Certified Cloud Practitioner</strong> – Amazon Web Services (AWS)</TypographyP>
          </CardContent>
        </Card>

        {/* Referees */}
        <Card className="shadow-md rounded-md">
          <CardHeader>
            <CardTitle className="text-black">Referees</CardTitle>
            <CardDescription className="text-gray-600">References upon request</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-800">
            <TypographyP>
              <strong>Duy Vinh Nguyen</strong><br />
              General Manager at FPT Japan<br />
              <a href="https://www.linkedin.com/in/duy-vinh-nguyen-bb20621b4/" className="text-blue-600 hover:underline">LinkedIn Profile</a>
            </TypographyP>
          </CardContent>
        </Card>

        {/* Interests */}
        <Card className="shadow-md rounded-md">
          <CardHeader>
            <CardTitle className="text-black">Interests & Hobbies</CardTitle>
            <CardDescription className="text-gray-600">Personal interests</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-800">
            <TypographyP><strong>Sports:</strong> Football, Badminton</TypographyP>
            <TypographyP><strong>Hobbies:</strong> Reading Reddit/News, Tech videos, Exploring new technologies</TypographyP>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
