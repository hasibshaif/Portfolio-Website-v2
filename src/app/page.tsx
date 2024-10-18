"use client";

import { useState } from "react";
import FloatingDoc  from "@/components/floating-doc";
import { AboutMe } from "@/components/about";
import { MyTimeline } from "@/components/timeline";
import { Skills } from "@/components/skills";
import Projects from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import Particles from "@/components/ui/particles";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconUser, IconCalendar, IconTools, IconBriefcase } from "@tabler/icons-react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about", icon: <IconUser size={24} /> },
  { label: "Timeline", href: "#timeline", icon: <IconCalendar size={24} /> },
  { label: "Skills", href: "#skills", icon: <IconTools size={24} /> },
  { label: "Projects", href: "#projects", icon: <IconBriefcase size={24} /> },
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#2c003e] to-[#45006a] text-foreground dark">
      {/* Sidebar with fixed position */}
      <div className="fixed top-0 left-0 h-screen">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}>
          <SidebarBody className="h-full">
            <div className="flex flex-col gap-10 overflow-y-auto">
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
          </SidebarBody>
        </Sidebar>
      </div>

      {/* Main Content */}
      <motion.div
        className="ml-[60px] flex-1 relative"
        animate={{ marginLeft: sidebarOpen ? 300 : 60 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <Particles
          className="absolute inset-0 z-0"
          quantity={500}
          staticity={100}
          ease={50}
          size={0.6}
          color="#c2f3ff"
        />
        <FloatingDoc />
        <main className="container relative z-10 mx-auto px-4">
          <AboutMe />
          <MyTimeline />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}
