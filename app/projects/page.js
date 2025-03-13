"use client"; // Enable useState in this client component file

import { useState } from "react"
// Import UI components
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography"

export default function ProjectsPage() {
  // State to keep track of which accordion is open
  const [openAccordion, setOpenAccordion] = useState(null)

  // Toggle accordion open/close
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  // Array of project information
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
          An app that is currently in development that helps people manage tasks, with new interesting features. Project is hosted by me, with a team of 3 members: Backend, Frontend, Security Testing. I do the backend part plus manage the whole Infrastructure, including all cloud services on Azure, AzureDevops, Cloudfare. 
          We communicate through message or face to face, mainly discussing what features is coming and how do we implement it.
          </TypographyP>
          <TypographyP>
            <strong>Responsibilities:</strong> Backend development and managing all infrastructure on Azure,
            Azure DevOps, and Cloudflare.
          </TypographyP>
          <TypographyP>
            <strong>Technologies:</strong> Node.js, FastAPI (Python), Azure VM, PostgreSQL, Docker, Swagger, Nginx, Flutter.
          </TypographyP>
        </>
      )
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
            A project from FPT Japan demonstrating LLM and CV models, especially Chatbot and Object Detection.
          </TypographyP>
          <TypographyP>
            <strong>Technologies:</strong> Python (FastAPI), Java (Spring Boot), PostgreSQL, Azure DevOps.
          </TypographyP>
        </>
      )
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
            A personal portfolio website that showcases profile information including blog, hero section, skills, projects,
            education, experience, contact details, and footer.
          </TypographyP>
          <TypographyP>
            <strong>Technologies:</strong> React.js (Next.js), Azure DevOps, Cloudflare.
          </TypographyP>
        </>
      )
    }
  ]

  return (
    // Use beige background similar to Resume page
    <main className="min-h-screen bg-[#EFE7DE] p-6">
      {/* Accordion list of projects */}
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
                {/* Toggle icon based on open state */}
                {openAccordion === index ? (
                  <span className="text-black">-</span>
                ) : (
                  <span className="text-black">+</span>
                )}
              </div>
            </button>

            {/* Accordion Content with smooth transition */}
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
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
