"use client"; // Enable useState in this client component file

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography"

export default function ProjectsPage() {
  const [openAccordion, setOpenAccordion] = useState(null)
  const [openImage, setOpenImage] = useState(null)

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const projects = [
    {
      title: "Procastint",
      description: "Project Manager",
      link: "https://procastint.com/api-docs",
      content: (
        <>
          <TypographyP>
            <strong>Link:</strong>{" "}
            <a
              href="https://procastint.com/api-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-blue-600 hover:underline"
            >
              https://procastint.com/api-docs
            </a>
          </TypographyP>
          <TypographyP>
            An app currently under development that helps manage tasks with new and exciting features.
            This project is managed by me with a team of 3 members: Backend, Frontend, and Security Testing.
          </TypographyP>
          <TypographyP>
            An app that is currently in development that helps people manage tasks, with new interesting features.
            Project is hosted by me, với team 3 thành viên: Backend, Frontend, Security Testing. Tôi phụ trách backend và quản lý hạ tầng (Azure, AzureDevops, Cloudflare).
          </TypographyP>
          <TypographyP>
            <strong>Responsibilities:</strong> Backend development và quản lý hạ tầng trên Azure, Azure DevOps và Cloudflare.
          </TypographyP>
          <TypographyP>
            <strong>Technologies:</strong> Node.js, FastAPI (Python), Azure VM, PostgreSQL, Docker, Swagger, Nginx, Flutter.
          </TypographyP>
        </>
      ),
      images: [
        "images/projects/procastint/procastint1.png",
        "images/projects/procastint/procastint2.png",
        "images/projects/procastint/procastint3.png"
      ]
    },
    {
      title: "Usee-lite",
      description: "Backend Developer",
      link: "https://lite.dev2.usee.ai/",
      content: (
        <>
          <TypographyP>
            <strong>Link:</strong>{" "}
            <a
              href="https://lite.dev2.usee.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-blue-600 hover:underline"
            >
              https://lite.dev2.usee.ai/
            </a>
          </TypographyP>
          <TypographyP>
            A project from FPT Japan demonstrating LLM và CV models, đặc biệt là Chatbot và Object Detection.
          </TypographyP>
          <TypographyP>
            <strong>Technologies:</strong> Python (FastAPI), Java (Spring Boot), PostgreSQL, Azure DevOps.
          </TypographyP>
        </>
      ),
      images: [
        "images/projects/usee-lite/website1.png",
        "images/projects/usee-lite/website2.png",
        "images/projects/usee-lite/website3.png"
      ]
    },
    {
      title: "Personal-Website",
      description: "Frontend Developer",
      link: "https://www.phamduchung.com",
      content: (
        <>
          <TypographyP>
            <strong>Link:</strong>{" "}
            <a
              href="https://www.phamduchung.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-blue-600 hover:underline"
            >
              https://www.phamduchung.com
            </a>
          </TypographyP>
          <TypographyP>
            A personal portfolio website show personal info, blog, hero section, skills, projects, education, experience, contact và footer.
          </TypographyP>
          <TypographyP>
            <strong>Technologies:</strong> React.js (Next.js), Azure DevOps, Cloudflare.
          </TypographyP>
        </>
      ),
      images: [
        "images/projects/my-website/pw1.png",
        "images/projects/my-website/pw2.png",
        "images/projects/my-website/pw3.png"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-[#EFE7DE] p-6">
      {/* CV Title */}
      <div className="mb-8 text-center">
        <TypographyH1 className="text-4xl font-bold text-black">
          PROJECTS
        </TypographyH1>
        <p className="text-gray-700 mt-2">Summary of Experience, Education, and Skills</p>
      </div>
      <div className="max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            {/* Accordion Header */}
            <button
              className="cursor-pointer w-full text-left bg-white p-4 rounded-md shadow-md flex justify-between items-center focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <div>
                <TypographyH2 className="text-xl font-bold text-black">{project.title}</TypographyH2>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <div>
                {openAccordion === index ? (
                  <span className="text-black">-</span>
                ) : (
                  <span className="text-black">+</span>
                )}
              </div>
            </button>

            {/* Accordion Content */}
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openAccordion === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              {openAccordion === index && (
                <Card className="shadow-md rounded-md mt-2">
                  <CardHeader>
                    <CardTitle className="text-black">{project.title}</CardTitle>
                    <CardDescription className="text-gray-600">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-gray-800">
                    {project.content}
                    {/* Image Grid */}
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {project.images.map((image, idx) => (
                        <Card
                          key={idx}
                          className="shadow-md rounded-md cursor-pointer overflow-hidden w-full h-72 flex items-center justify-center"
                        >
                          <button
                            type="button"
                            onClick={() => setOpenImage(image)}
                            className="w-full h-full cursor-pointer"
                          >
                            <img
                              src={image}
                              alt={`${project.title} Image ${idx + 1}`}
                              className="object-contain w-full h-full"
                            />
                          </button>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {openImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4"
          onClick={() => setOpenImage(null)}
        >
          <img src={openImage} alt="Full View" className="max-w-full max-h-full" />
        </div>
      )}
    </main>
  )
}
