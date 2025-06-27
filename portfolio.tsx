"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Moon, Sun, Mail, Github, Twitter, Phone, ExternalLink, CheckCircle, Linkedin } from "lucide-react"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)

  const skills = [
    // Languages
    "JavaScript", "TypeScript", "Java", "Python", "SQL",
    // Frontend
    "React.js", "Tailwind CSS", 
    // Backend
    "Node.js", "Express", "Spring Boot",
    // Database
    "MongoDB", "PostgreSQL",
  
    // Cloud/DevOps
    "AWS",
    // Tools
    "Git", "Docker", "Postman", "CI/CD", "WebSocket (ws)", "WebRTC", 
  ]

  const experience = [
    {
      role: "Freelance Full Stack Developer",
      company: "BGM Sons – Product Listing Platform",
      location: "Delhi, India",
      duration: "2024 – Present",
      description: (
        <>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Built a automotive,industrial product listing site with user/admin panels, deployed on AWS EC2 with S3 for media storage.</li>
            <li>Implemented admin auth, SMTP-based email notifications, and product enquiry features.</li>
          </ul>
        </>
      ),
      tech: ["React.js", "Spring Boot", "MongoDB", "AWS", "Docker", "Git"],
      liveDemo: "https://bgmsons.com/",
    },
  ]

  const projects = [
    {
      name: "Academix",
      description:
        "Developed a modern educational platform with real-time video classes using WebRTC. Built an admin panel to create and manage courses; users access enrolled courses via a personalized dashboard. Implemented a responsive UI using Tailwind CSS and connected frontend to backend via REST APIs. Deployed frontend on Vercel and backend on Render for seamless access and scalability.",
      tech: ["React", "Express.js", "Node.js", "WebRTC", "WebSockets", "Tailwind CSS"],
      year: "2025",
      liveDemo: "https://academix-oz6b.vercel.app/",
      github: "https://github.com/abhinavpathak343/Academix",
    },
    {
      name: "TMovies",
      description:
        "A movie and TV series app built with React, TypeScript, and Tailwind CSS. Features: search for movies/TV series, watch trailers, view detailed information.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      year: "2025",
      liveDemo: "https://tmovies-zeta.vercel.app/",
      github: "https://github.com/abhinavpathak343/tmovies",
    },
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-black via-gray-900 to-purple-900"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50"
      }`}
    >
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            {/* Replace the existing avatar div with this */}
            <div className="relative">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="/profile.jpeg" alt="Abhinav Pathak" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Abhinav Pathak</h1>
                <CheckCircle className="w-5 h-5 text-blue-500" />
              </div>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>@abhinavpathak</p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className={`rounded-full ${
              isDark
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>

        {/* About Section */}
        <section className="mb-12">
          <h2 className={`text-3xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>About</h2>

          <div className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            <p className="text-lg font-mono mb-2">{"[ learn → code → innovate ]"}</p>
          </div>

          <div className={`space-y-4 ${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
            <p>
              I'm a passionate full stack developer who loves creating innovative solutions with clean, efficient code.
              I specialize in modern web technologies and enjoy building applications that solve real-world problems. My
              interests span across web development, mobile apps, cloud technologies, and emerging tech trends.
            </p>

            <p>
              I'm a Computer Science student with a strong foundation in software development, algorithms, and system
              design. I'm always eager to learn new technologies and contribute to meaningful projects that make a
              difference.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className={`text-3xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>Skills</h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  isDark
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 border-gray-300"
                }`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className={`text-3xl font-bold mb-8 ${isDark ? "text-white" : "text-gray-900"}`}>Experience</h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-300 hover:translate-x-2 ${
                  isDark ? "hover:bg-gray-800/20" : "hover:bg-gray-100/50"
                } p-4 -mx-4 rounded-lg`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3
                        className={`text-xl font-semibold transition-colors ${isDark ? "text-white" : "text-gray-900"}`}
                      >
                        {exp.role}
                      </h3>
                      <span className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>{exp.duration}</span>
                    </div>
                    <p className={`text-lg font-medium mb-2 ${isDark ? "text-purple-300" : "text-purple-600"}`}>
                      <span className={isDark ? "text-purple-300" : "text-gray-900"}>
                        {exp.company}{exp.location ? `, ${exp.location}` : ""}
                      </span>
                    </p>
                    <div className={`${isDark ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>{exp.description}</div>
                    {exp.tech && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {exp.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className={`text-xs ${
                              isDark
                                ? "border-gray-600 text-gray-400 bg-gray-800/50"
                                : "border-gray-300 text-gray-600 bg-gray-50"
                            }`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2 ml-6">
                    {exp.liveDemo && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`w-8 h-8 rounded-full ${
                          isDark
                            ? "text-gray-400 hover:text-purple-400 hover:bg-gray-800/50"
                            : "text-gray-500 hover:text-purple-600 hover:bg-gray-100"
                        } transition-all duration-200`}
                        title="View Live Demo"
                        asChild
                      >
                        <a href={exp.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className={`text-3xl font-bold mb-8 ${isDark ? "text-white" : "text-gray-900"}`}>Projects</h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-300 hover:translate-x-2 ${
                  isDark ? "hover:bg-gray-800/20" : "hover:bg-gray-100/50"
                } p-4 -mx-4 rounded-lg`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-semibold mb-2 transition-colors ${
                        isDark ? "group-hover:text-purple-400 text-white" : "text-gray-900"
                      }`}
                    >
                      {project.name}
                    </h3>
                    <p className={`${isDark ? "text-gray-400" : "text-gray-600"} leading-relaxed mb-3`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className={`text-xs ${
                            isDark
                              ? "border-gray-600 text-gray-400 bg-gray-800/50"
                              : "border-gray-300 text-gray-600 bg-gray-50"
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-6">
                    {project.liveDemo && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`w-8 h-8 rounded-full ${
                          isDark
                            ? "text-gray-400 hover:text-purple-400 hover:bg-gray-800/50"
                            : "text-gray-500 hover:text-purple-600 hover:bg-gray-100"
                        } transition-all duration-200`}
                        title="View Live Demo"
                        asChild
                      >
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`w-8 h-8 rounded-full ${
                          isDark
                            ? "text-gray-400 hover:text-purple-400 hover:bg-gray-800/50"
                            : "text-gray-500 hover:text-purple-600 hover:bg-gray-100"
                        } transition-all duration-200`}
                        title="View Source Code"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resume */}
        <section className="mb-12 text-center">
          <Button
            variant="outline"
            className={`px-6 py-2 cursor-pointer transition-colors duration-300 ${
              isDark
                ? "border-purple-700 text-white bg-purple-700 hover:bg-purple-700 hover:text-white hover:border-purple-700"
                : "border-gray-300 text-gray-900 bg-white hover:bg-gray-100 hover:text-gray-900 hover:border-gray-400"
            }`}
            onClick={() => window.open("https://drive.google.com/file/d/1BfPmgDYAbSYms9dNTFrdSNji8AjPNozX/view?usp=sharing", "_blank")}
          >
            📄 View Resume
          </Button>
        </section>

        {/* Social Links */}
        <section className="flex justify-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className={`w-12 h-12 rounded-full ${
              isDark
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
            asChild
          >
            <a href="mailto:abhinavpathak343@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`w-12 h-12 rounded-full ${
              isDark
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
            asChild
          >
            <a href="https://github.com/AbhinavPathak343" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`w-12 h-12 rounded-full ${
              isDark
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
            asChild
          >
            <a href="https://www.linkedin.com/in/abhinav-pathak-71384b232/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`w-12 h-12 rounded-full ${
              isDark
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
            asChild
          >
            <a href="https://x.com/Abhinav___07" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`w-12 h-12 rounded-full ${
              isDark
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
            asChild
          >
            <a href="https://wa.me/9548625856" target="_blank" rel="noopener noreferrer">
              <Phone className="w-5 h-5" />
            </a>
          </Button>
        </section>
      </div>
    </div>
  )
}
