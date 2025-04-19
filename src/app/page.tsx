"use client";

import { useState } from "react";
import FloatingDoc from "@/components/floating-doc";
import { AboutMe } from "@/components/about";
import { MyTimeline } from "@/components/timeline";
import { Skills } from "@/components/skills";
import Projects from "@/components/projects";
import { Footer } from "@/components/footer";
import Particles from "@/components/ui/particles";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconUser, IconCalendar, IconTools, IconBriefcase } from "@tabler/icons-react";

const links = [
  { label: "About", href: "#about", icon: <IconUser size={24} /> },
  { label: "Timeline", href: "#timeline", icon: <IconCalendar size={24} /> },
  { label: "Skills", href: "#skills", icon: <IconTools size={24} /> },
  { label: "Projects", href: "#projects", icon: <IconBriefcase size={24} /> },
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen h-full bg-gradient-to-br from-[#1d0129] to-black text-foreground dark flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}>
        <SidebarBody className="h-full fixed top-0 left-0 z-50 w-3/4 sm:w-2/4 md:w-1/4 lg:w-1/5">
          <div className="flex flex-col gap-10 overflow-y-auto h-full">
            <div className="mt-8 flex flex-col gap-5">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 relative min-h-screen h-full sm:ml-10 md:ml-20">
        <Particles
          className="absolute inset-0 z-0"
          quantity={200}
          staticity={100}
          ease={50}
          size={0.6}
          color="#c2f3ff"
        />
        <FloatingDoc />
        <main className="container z-10 mx-auto px-4 py-10 sm:py-12">
          <AboutMe />
          <MyTimeline />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}
