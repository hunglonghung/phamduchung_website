// app/resume/page.tsx

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography"

export default function ResumePage() {
  return (
    // Sử dụng nền màu be phù hợp với CV
    <main className="min-h-screen bg-[#EFE7DE] p-6">
      {/* Tiêu đề CV */}
      <div className="mb-8 text-center">
        <TypographyH1 className="text-4xl font-bold text-black">
          CV: Duc Hung Pham
        </TypographyH1>
        <p className="text-gray-700 mt-2">
          Tổng hợp kinh nghiệm, học vấn và kỹ năng
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Thông tin cá nhân */}
        <Card className="shadow-md rounded-md">
          <CardHeader>
            <CardTitle className="text-black">Thông tin cá nhân</CardTitle>
            <CardDescription className="text-gray-600">
              Thông tin liên hệ và giới thiệu ngắn gọn
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-800">
            <TypographyP>
              <strong>Họ và tên:</strong> Duc Hung Pham
            </TypographyP>
            <TypographyP>
              <strong>Địa chỉ:</strong> Gwynneville, Wollongong, NSW 2500
            </TypographyP>
            <TypographyP>
              <strong>Điện thoại:</strong> 0401798233
            </TypographyP>
            <TypographyP>
              <strong>Email:</strong> emyeuanh18042004@gmail.com
            </TypographyP>
            <TypographyP>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/hungpham18042004/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.linkedin.com/in/hungpham18042004/
              </a>
            </TypographyP>
            <TypographyP>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.phamduchung.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.phamduchung.com
              </a>
            </TypographyP>
          </CardContent>
        </Card>

        {/* Kinh nghiệm làm việc */}
        <Card className="shadow-md rounded-md">
          <CardHeader>
            <CardTitle className="text-black">Kinh nghiệm làm việc</CardTitle>
            <CardDescription className="text-gray-600">
              Các vị trí công việc và nhiệm vụ chính
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-800">
            {/* Backend Developer Intern */}
            <div>
              <TypographyH2 className="text-xl font-semibold text-black">
                Backend Developer Intern - FPT JAPAN, Tokyo-Mita
              </TypographyH2>
              <p className="text-sm text-gray-500">Dec 2024 – Feb 2025</p>
              <TypographyP>
                Developed REST APIs using FastAPI (Python) &amp; Spring Boot (Java). Built and optimized Docker containers. Finetuned LLM and CV models; implemented existing models that the AI team created. PostgresSQL CRUD.
              </TypographyP>
            </div>
            <hr className="border-gray-300" />
            {/* Software Developer Intern */}
            <div>
              <TypographyH2 className="text-xl font-semibold text-black">
                Software Developer Intern - Viettel, Hanoi
              </TypographyH2>
              <p className="text-sm text-gray-500">Jan 2024 – March 2024</p>
              <TypographyP>
                Worked on VAC software, developing a new module using C++ with OpenGL.
              </TypographyP>
            </div>
          </CardContent>
        </Card>

        {/* Học vấn */}
        <Card className="shadow-md rounded-md">
          <CardHeader>
            <CardTitle className="text-black">Học vấn</CardTitle>
            <CardDescription className="text-gray-600">
              Bằng cấp và chứng chỉ
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-800">
            <div>
              <TypographyH2 className="text-xl font-semibold text-black">
                Bachelor of Computer Science
              </TypographyH2>
              <p className="text-sm text-gray-500">2022 - 2025</p>
              <TypographyP>
                University of Wollongong, NSW, Australia.
              </TypographyP>
            </div>
          </CardContent>
        </Card>

        {/* Kỹ năng */}
        <Card className="shadow-md rounded-md">
          <CardHeader>
            <CardTitle className="text-black">Kỹ năng</CardTitle>
            <CardDescription className="text-gray-600">
              Các công nghệ và kỹ năng mềm
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-800">
            <TypographyP>
              <strong>Programming Languages:</strong> Javascript (Node.js), Python (FastAPI, Uvicorn), Java (SpringBoot), React (Next.js with shadcn)
            </TypographyP>
            <TypographyP>
              <strong>Development &amp; Infrastructure:</strong> Docker, CI/CD Pipelines
            </TypographyP>
            <TypographyP>
              <strong>Cloud Computing:</strong> AWS (EC2, S3, RDS), Azure (VM, blob storage, SQL Database)
            </TypographyP>
            <TypographyP>
              <strong>API:</strong> REST API, WebSocket
            </TypographyP>
            <TypographyP>
              <strong>Version Control &amp; Project Management:</strong> GitHub, Azure DevOps
            </TypographyP>
            <TypographyP>
              <strong>Soft Skills:</strong> Communication between BE &amp; FE, ChatGPT, Stack Overflow for debugging, planning and task division
            </TypographyP>
            <TypographyP>
              <strong>Languages:</strong> English (IELTS 7.5, SAT 1400), Japanese (N3), Chinese (HSK2), Vietnamese (Native)
            </TypographyP>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
