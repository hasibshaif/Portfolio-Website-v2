/* eslint-disable react/no-unescaped-entities */
// projects.tsx
import { ReactNode } from "react";
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
} from "lucide-react";
import { IoIosBowtie } from "react-icons/io";
import { IoSparklesSharp } from "react-icons/io5";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { LinkPreview } from "./ui/link-preview";
import ExternalLinkButton from "./animata/button/external-link-button";
import { cn } from "@/lib/utils";
import ShineBorder from "./ui/shine-border";
import SplitText from "./animata/text/split-text";

function BentoCard({
  title,
  icon,
  description,
  deployedLink,
  repoLink,
  gradient,
  className,
  imageSrc,
}: {
  title: ReactNode;
  icon: ReactNode;
  description: ReactNode;
  deployedLink?: string;
  repoLink: string;
  gradient?: string;
  className?: string;
  imageSrc?: string;
}) {
  return (
    <TooltipProvider>
      <div
        className={cn(
          "relative rounded-md overflow-hidden p-2 md:p-4",
          className
        )}
      >
        {/* Gradient Background */}
        <div
          className={cn("absolute inset-0", gradient)}
          style={{ opacity: 0.9 }}
        ></div>

        {/* Content Layer */}
        <section className="relative z-10 flex h-full flex-col gap-4 p-4">
          <header>
            <div className="flex items-center gap-2 text-white">
              {icon}
              <p className="text-lg font-bold text-white">{title}</p>
            </div>
          </header>
          <p className="flex-1 text-sm text-gray-200">{description}</p>
          <div className="flex flex-col gap-2">
            {deployedLink &&
              (deployedLink === "#top" ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      className="flex items-center gap-1 cursor-pointer"
                    >
                      <ExternalLinkButton text="View Deployed Site" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center" asChild>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.1 }}
                      className="bg-gray-800 text-white text-sm px-3 py-2 rounded-md shadow-lg"
                    >
                      You're already here
                    </motion.div>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <LinkPreview
                  url={deployedLink}
                  className="project-link flex items-center gap-1 font-semibold"
                  isStatic={Boolean(imageSrc)}
                  imageSrc={imageSrc ?? ""}
                >
                  <ExternalLinkButton text="View Deployed Site" />
                </LinkPreview>
              ))}
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link flex items-center gap-1 font-semibold"
            >
              <ExternalLinkButton text="View GitHub Repo" />
            </a>
          </div>
        </section>
      </div>
    </TooltipProvider>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      icon: <BriefcaseBusiness size={24} />,
      description:
        "My personal hub to showcase my experience, education, skills, projects, and contact information. Created a sleek and modern design using Next.js, shadcn/ui, and Framer Motion.",
      deployedLink: "#top",
      repoLink: "https://github.com/hasibshaif/Portfolio-Website",
      gradient: "bg-gradient-to-br from-[#000000] via-[#2c003e] to-[#45006a]",
      imageSrc: "",
    },
    {
      title: "tAIlor - AI Resume Tailor",
      icon: (
        <div className="flex gap-2">
          <IoIosBowtie size={24} />
          <IoSparklesSharp size={24}/>
        </div>
      ),
      description:
        "Full-stack AI-powered resume tailoring platform leveraging Python, Flask, and OpenAI's API for GPT LLM, allowing for resume customization based on job descriptions. Feature-rich, user-friendly, and responsive frontend built with Next.js, TypeScript, Tailwind CSS, and Motion. Implemented file storage with AWS S3 and IAM.",
      deployedLink: "https://ai-resume-tailorer.vercel.app/",
      repoLink: "https://github.com/hasibshaif/tAIlor-AI_Resume_Tailor",
      gradient: "bg-gradient-to-br from-[#0084ff] via-[#213d6b] to-[#062047]",
      imageSrc: "/img/link-previews/projects/tAIlor-preview.PNG",
    },
    {
      title: "Kronicle",
      icon: (
        <div className="flex gap-2">
          <Calendar size={24} />
        </div>
      ),
      description:
        "Responsive, user-friendly, Calendly-inspired scheduling platform built using Next.js. Integrated Nylas API for calendar synchronization and auth flow, and MongoDB for data storage. Created modern user interface with Tailwind CSS and Framer Motion.",
      deployedLink: "https://kronicle-eight.vercel.app",
      repoLink: "https://github.com/hasibshaif/Kronicle",
      gradient: "bg-gradient-to-br from-[#eb6613] to-[#dbc858]",
      imageSrc: "/img/link-previews/projects/kronicle-preview.PNG",
    },
    {
      title: "Supercar AI Chatbot",
      icon: (
        <div className="flex gap-2">
          <Car size={24} />
          <BotMessageSquare size={24} />
        </div>
      ),
      description:
        "Next.js RAG web app for learning about maintaining various exotic cars straight from the user manual. Uses Langchain, Pinecone, OpenAI, and Clerk.",
      deployedLink: "https://supercar-ai-chatbot.vercel.app",
      repoLink: "https://github.com/hasibshaif/Supercar-AI-Chatbot",
      gradient: "bg-gradient-to-br from-[#c20202] to-[#b0a102]",
      imageSrc: "/img/link-previews/projects/supercar-ai-chatbot-preview.PNG",
    },
    {
      title: "Carbs Tracker",
      icon: <Croissant size={24} />,
      description:
        "Track your daily carbs intake with Firebase Auth, Firestore, and MUI Core. Deployed on Vercel.",
      deployedLink: "https://carb-tracker.vercel.app/sign-in",
      repoLink: "https://github.com/hasibshaif/Carb-Tracker",
      gradient: "bg-gradient-to-br from-purple-900 via-purple-600 to-gray-500",
      imageSrc: "/img/link-previews/projects/carb-tracker-preview.PNG",
    },
    {
      title: "Cri$$ Cro$$ Currency Converter",
      icon: <HandCoins size={24} />,
      description:
        "Currency converter web app using Open Exchange Rates API for real-time exchange rates.",
      deployedLink: "https://criss-cross-currency-converter.vercel.app",
      repoLink: "https://github.com/hasibshaif/Criss-Cross-Currency-Converter",
      gradient: "bg-gradient-to-br from-green-900 via-green-600 to-yellow-700",
      imageSrc:
        "/img/link-previews/projects/criss-cross-currency-converter-preview.PNG",
    },
    {
      title: "iOS Calculator App Replica",
      icon: <Calculator size={24} />,
      description:
        "A basic iOS Calculator replica built with HTML, CSS, and JavaScript.",
      deployedLink: "https://hasibshaif.github.io/calculator-app/",
      repoLink: "https://github.com/hasibshaif/calculator-app",
      gradient: "bg-gradient-to-br from-orange-600 via-orange-500 to-gray-900",
      imageSrc:
        "/img/link-previews/projects/iOS-calculator-app-replica-preview.PNG",
    },
    {
      title: "2048 Automator w/ Selenium WebDriver",
      icon: <Grid3X3 size={24} />,
      description:
        "Python script that automates gameplay for 2048 using Selenium WebDriver.",
      repoLink: "https://github.com/hasibshaif/2048_automator", // Add the link here
      gradient: "bg-gradient-to-br from-yellow-600 via-yellow-700 to-green-700",
    },
    {
      title: "Google Searcher w/ Custom Search API",
      icon: <Search size={24} />,
      description:
        "Command-line scraper that uses Google's Custom Search API to open top search results.",
      repoLink: "https://github.com/hasibshaif/Google-Searcher", // Add the link here
      gradient: "bg-gradient-to-br from-pink-900 via-pink-800 to-red-700",
    },
    {
      title: "Hangman Game in Python",
      icon: <Gamepad size={24} />,
      description:
        "My first ever project 🥹. Simple implementation of the Hangman game with ASCII art and word lists.",
      repoLink: "https://github.com/hasibshaif/hangman", // Add the link here
      gradient: "bg-gradient-to-br from-gray-800 via-gray-700 to-green-600",
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="flex flex-col gap-4 items-start">
        {/* Section Header */}
        <SplitText text="Projects" />

        {/* Bordered project content */}
        <ShineBorder
          borderRadius={16}
          borderWidth={2}
          duration={14}
          color={["#45006a", "white", "#0275d4"]}
          className="w-full p-4 md:p-6"
        >
          <div className="bg-black/20 rounded-[16px] w-full p-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <BentoCard
                  key={index}
                  title={project.title}
                  icon={project.icon}
                  description={project.description}
                  deployedLink={project.deployedLink}
                  repoLink={project.repoLink}
                  gradient={project.gradient}
                  imageSrc={project.imageSrc}
                />
              ))}
            </div>
          </div>
        </ShineBorder>
      </div>
    </section>
  );
}
