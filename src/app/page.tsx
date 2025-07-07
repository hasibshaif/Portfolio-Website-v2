"use client";

import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import FloatingDoc from "@/components/floating-doc";
import { MyTimeline } from "@/components/timeline";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";
import Particles from "@/components/ui/particles";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconUser, IconCalendar, IconTools, IconBriefcase } from "@tabler/icons-react";
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";

const links = [
  { label: "About", href: "#about", icon: <IconUser size={20} /> },
  { label: "Skills", href: "#skills", icon: <IconTools size={20} /> },
  { label: "Projects", href: "#projects", icon: <IconBriefcase size={20} /> },
  { label: "Timeline", href: "#timeline", icon: <IconCalendar size={20} /> },
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1d0129] to-black text-foreground dark flex flex-col lg:flex-row">
      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black/90 via-purple-900/50 to-black/90 backdrop-blur-md border-b border-white/20">
        <div className="flex items-center justify-center px-4 py-4">
          <div className="flex items-center gap-6">
            {links.map((link, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(link.href)}
                className="flex flex-col items-center gap-1 p-2 text-white/80 hover:text-white transition-all duration-200 hover:scale-110 group"
                title={link.label}
              >
                <div className="text-white/60 group-hover:text-white transition-colors">
                  {link.icon}
                </div>
                <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {link.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}>
          <SidebarBody className="h-full fixed top-0 left-0 z-50 w-64">
            <div className="flex flex-col gap-8 overflow-y-auto h-full">
              <div className="mt-8 flex flex-col gap-4">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
          </SidebarBody>
        </Sidebar>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative min-h-screen pt-16 lg:pt-0">
        {/* Animated background particles */}
        <Suspense fallback={null}>
          <Particles
            className="absolute inset-0 z-0"
            quantity={50}
            staticity={50}
            ease={30}
            size={0.4}
            color="#c2f3ff"
          />
        </Suspense>

        {/* Spotlight effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Floating background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Floating orbs */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
            animate={{
              x: [0, -25, 0],
              y: [0, 15, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl"
            animate={{
              x: [0, 20, 0],
              y: [0, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Hero Section with animations */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 min-h-screen flex flex-col justify-center items-center px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto flex-1 flex flex-col justify-center"
          >
            {/* Profile Picture with enhanced animations */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
              className="mb-8 flex justify-center"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <Image
                  src="/img/hasib_mufg.JPG"
                  alt="Hasib Shaif"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Glowing ring effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-400/50"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 40px rgba(59, 130, 246, 0.8)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            {/* Name with enhanced animation and gradient */}
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(45deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradientShift 3s ease-in-out infinite",
                }}
              >
                Hasib
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(45deg, #06b6d4, #8b5cf6, #3b82f6, #06b6d4)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradientShift 3s ease-in-out infinite 1.5s",
                }}
              >
                Shaif
              </motion.span>
            </motion.h1>
            
            {/* Title with typing effect and gradient */}
            <motion.p 
              className="text-xl sm:text-2xl lg:text-3xl mb-8 font-semibold"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(45deg, #a855f7, #14b8a6, #10b981, #a855f7)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradientShift 4s ease-in-out infinite 2s",
                }}
              >
                CS Undergrad at Baruch
              </motion.span>
            </motion.p>
            
            {/* Bio with staggered text animation */}
            <motion.div
              className="text-base sm:text-lg lg:text-xl flex flex-col gap-4 text-gray-300 mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="whitespace-normal"
              >
                Hi! I&apos;m Hasib, a CS Undergrad at Baruch College. I&apos;m passionate about building innovative solutions and turning data into actionable insights.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-2 whitespace-normal"
              >
                I love exploring the intersection of technology and business, with particular interests in software engineering, full-stack development, and risk management, but always open to new opportunities.
              </motion.p>
            </motion.div>

            {/* Resume Button with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center items-center"
            >
              <LinkPreview
                url="/documents/Hasib Shaif - Resume.pdf"
                isStatic={true}
                imageSrc="/img/link-previews/about/resume-preview.PNG"
                className="inline-block"
              >
                <motion.button 
                  className="relative inline-flex h-14 sm:h-16 lg:h-18 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open("/documents/Hasib Shaif - Resume.pdf", "_blank")}
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg font-medium text-white backdrop-blur-3xl">
                    View Resume
                  </span>
                </motion.button>
              </LinkPreview>
            </motion.div>
          </motion.div>


        </motion.section>

        {/* Content sections with staggered animations */}
        <div className="relative z-10 space-y-20 px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ margin: "-100px" }}
          >
            <Skills />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ margin: "-100px" }}
          >
            <Projects />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ margin: "-100px" }}
          >
            <MyTimeline />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ margin: "-100px" }}
          >
            <Footer />
          </motion.div>
        </div>

        {/* Floating dock */}
        <FloatingDoc />
      </div>
    </div>
  );
}
