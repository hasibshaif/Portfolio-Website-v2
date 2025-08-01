import React from "react";
import { LinkPreview } from "./ui/link-preview";
import {
  BriefcaseBusiness,
  Car,
  BotMessageSquare,
  Croissant,
  HandCoins,
  Calculator,
  Grid3X3,
  Search,
  Gamepad,
  Calendar,
  Database,
  TrendingUp,
  Globe,
  Github,
} from "lucide-react";
import { IoIosBowtie } from "react-icons/io";
import { IoSparklesSharp } from "react-icons/io5";

export function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      icon: <BriefcaseBusiness size={20} />,
      description:
        "My personal hub to showcase my experience, education, skills, projects, and contact information. Created a sleek and modern design using Next.js, shadcn/ui, and Framer Motion.",
      deployedLink: "#top",
      repoLink: "https://github.com/hasibshaif/Portfolio-Website",
      gradient: "from-purple-600 via-pink-600 to-red-600",
    },
    {
      title: "NEBDHub Transportation Data Science Project",
      icon: (
        <div className="flex gap-1">
          <Database size={20} />
          <TrendingUp size={20} />
        </div>
      ),
      description:
        "Cleaned and processed 2.3M+ NYC traffic records with Python and Pandas to develop road safety recommendations. Conducted exploratory analysis, enforced data ethics, and made 17 data visualizations with Matplotlib and PowerBI. Identified 50+ citywide accident hotspots through time series and geospatial analysis to support targeted intervention.",
      repoLink: "https://github.com/hasibshaif/NEBDHub-Transportation-Data-Science-Project",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
    },
    {
      title: "tAIlor - AI Resume Tailor",
      icon: (
        <div className="flex gap-1">
          <IoIosBowtie size={20} />
          <IoSparklesSharp size={20}/>
        </div>
      ),
      description:
        "Full-stack AI-powered resume tailoring platform leveraging Python, Flask, and OpenAI's API for GPT LLM, allowing for resume customization based on job descriptions. Feature-rich, user-friendly, and responsive frontend built with Next.js, TypeScript, Tailwind CSS, and Motion. Implemented file storage with AWS S3 and IAM.",
      deployedLink: "https://ai-resume-tailorer.vercel.app/",
      repoLink: "https://github.com/hasibshaif/tAIlor-AI_Resume_Tailor",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      imageSrc: "/img/link-previews/projects/tAIlor-preview.PNG",
    },
    {
      title: "Kronicle",
      icon: <Calendar size={20} />,
      description:
        "Responsive, user-friendly, Calendly-inspired scheduling platform built using Next.js. Integrated Nylas API for calendar synchronization and auth flow, and MongoDB for data storage. Created modern user interface with Tailwind CSS and Framer Motion.",
      deployedLink: "https://kronicle-eight.vercel.app",
      repoLink: "https://github.com/hasibshaif/Kronicle",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      imageSrc: "/img/link-previews/projects/kronicle-preview.PNG",
    },
    {
      title: "Supercar AI Chatbot",
      icon: (
        <div className="flex gap-1">
          <Car size={20} />
          <BotMessageSquare size={20} />
        </div>
      ),
      description:
        "Next.js RAG web app for learning about maintaining various exotic cars straight from the user manual. Uses Langchain, Pinecone, OpenAI, and Clerk.",
      deployedLink: "https://supercar-ai-chatbot.vercel.app",
      repoLink: "https://github.com/hasibshaif/Supercar-AI-Chatbot",
      gradient: "from-red-600 via-orange-600 to-yellow-600",
      imageSrc: "/img/link-previews/projects/supercar-ai-chatbot-preview.PNG",
    },
    {
      title: "Carbs Tracker",
      icon: <Croissant size={20} />,
      description:
        "Track your daily carbs intake with Firebase Auth, Firestore, and MUI Core. Deployed on Vercel.",
      deployedLink: "https://carb-tracker.vercel.app/sign-in",
      repoLink: "https://github.com/hasibshaif/Carb-Tracker",
      gradient: "from-purple-600 via-violet-600 to-fuchsia-600",
      imageSrc: "/img/link-previews/projects/carb-tracker-preview.PNG",
    },
    {
      title: "Cri$$ Cro$$ Currency Converter",
      icon: <HandCoins size={20} />,
      description:
        "Currency converter web app using Open Exchange Rates API for real-time exchange rates.",
      deployedLink: "https://criss-cross-currency-converter.vercel.app",
      repoLink: "https://github.com/hasibshaif/Criss-Cross-Currency-Converter",
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      imageSrc:
        "/img/link-previews/projects/criss-cross-currency-converter-preview.PNG",
    },
    {
      title: "iOS Calculator App Replica",
      icon: <Calculator size={20} />,
      description:
        "A basic iOS Calculator replica built with HTML, CSS, and JavaScript.",
      deployedLink: "https://hasibshaif.github.io/calculator-app/",
      repoLink: "https://github.com/hasibshaif/calculator-app",
      gradient: "from-gray-600 via-slate-600 to-zinc-600",
      imageSrc:
        "/img/link-previews/projects/iOS-calculator-app-replica-preview.PNG",
    },
    {
      title: "2048 Automator w/ Selenium WebDriver",
      icon: <Grid3X3 size={20} />,
      description:
        "Python script that automates gameplay for 2048 using Selenium WebDriver.",
      repoLink: "https://github.com/hasibshaif/2048_automator",
      gradient: "from-yellow-600 via-amber-600 to-orange-600",
    },
    {
      title: "Google Searcher w/ Custom Search API",
      icon: <Search size={20} />,
      description:
        "Command-line scraper that uses Google's Custom Search API to open top search results.",
      repoLink: "https://github.com/hasibshaif/Google-Searcher",
      gradient: "from-pink-600 via-rose-600 to-red-600",
    },
    {
      title: "Hangman Game in Python",
      icon: <Gamepad size={20} />,
      description:
        "My first ever project 🥹. Simple implementation of the Hangman game with ASCII art and word lists.",
      repoLink: "https://github.com/hasibshaif/hangman",
      gradient: "from-slate-600 via-gray-600 to-zinc-600",
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="flex flex-col gap-4 items-start">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
          Projects
        </h2>
        
        <div className="w-full rounded-xl sm:rounded-2xl border-2 border-gradient-to-r from-[#45006a] via-white to-[#0275d4] bg-gradient-to-r from-[#45006a]/20 via-white/10 to-[#0275d4]/20 p-0.5 sm:p-1">
          <div className="bg-black/20 rounded-xl sm:rounded-2xl w-full p-3 sm:p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  {/* Gradient background with reduced opacity for better performance */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300`} />
                  
                  <div className="relative p-4 sm:p-5 lg:p-6">
                    {/* Project header */}
                    <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <div className="flex-shrink-0">
                          {project.icon}
                        </div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200 leading-tight break-words">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Project description */}
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-5">
                      {project.description}
                    </p>

                    {/* Project links */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.deployedLink && (
                        project.title === "Portfolio Website" ? (
                          <a
                            href={project.deployedLink}
                            className="inline-flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors duration-200"
                          >
                            <Globe size={14} />
                            Live Demo
                          </a>
                        ) : (
                          <LinkPreview
                            url={project.deployedLink}
                            imageSrc={project.imageSrc}
                            className="inline-flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors duration-200"
                          >
                            <Globe size={14} />
                            Live Demo
                          </LinkPreview>
                        )
                      )}
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-700 hover:bg-gray-600 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors duration-200"
                      >
                        <Github size={14} />
                        GitHub Repo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
