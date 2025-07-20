import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    emoji: "🧠",
    title: "Object Oriented Programming",
    description: "Advanced programming paradigms and software design patterns",
    progress: 100,
    icon: Brain
  },
  {
    emoji: "🔐",
    title: "Secure Software Development",
    description: "Security principles and secure coding practices",
    progress: 82,
    icon: Code
  }
];

const skills = [
  "Python", "JavaScript", "TypeScript", "HTML", "CSS", "SCSS", 
  "React", "NodeJS", "Git", "MongoDB", "AWS", "PostgreSQL", "Docker", "NextJS", "Django", 
  "Flask", "Jupyter Notebook", "GitFlow"
];

export default function Home() {
  return (
    <div className="">
      <div className="inset-0 -z-10 w-5/6 bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-gray-950 dark:[background:radial-gradient(#1f2937_1px,transparent_1px)]" />

      <div className="relative space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-[#ecc9ff3b] dark:to-[#2f5b6f57] rounded-lg -z-10" />
          <div className="relative backdrop-blur-sm border rounded-lg p-8 bg-white/50 dark:bg-[#596ea1]/10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="text-4xl">👋</span>
                <h1 className="text-4xl font-bold">Hi, I'm Imraan</h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A Software Engineer from Cape Town, South Africa, passionate about building secure and scalable software solutions. Currently focusing on object-oriented programming and secure development practices.
              </p>
              <div className="flex gap-4 mt-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:imraan.meyer97@gmail.com">
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/ImraanMeyer/" target="_blank">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://www.linkedin.com/in/imraan-meyer-536476175/" target="_blank">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Make responsive */}
        <div className="grid gap-6 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Courses Cards - Span 2 columns */}
          {courses.map((course, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{course.emoji}</span>
                  <CardTitle>{course.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm mb-auto">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="h-2 bg-primary/10 dark:bg-primary/10 rounded-full">
                    <div
                      className="h-full rounded-full bg-primary/10 dark:bg-primary/10 transition-all duration-300 ease-in-out"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Code className="h-6 w-6" />
                <CardTitle>Technical Skills</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1 overflow-x-auto w-full justify-center">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm bg-[#a6c3bb]/20 dark:bg-[#84a59d]/20 dark:text-primary/80"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}