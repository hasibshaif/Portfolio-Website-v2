"use client";

import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar"; // Adjust the import path accordingly
import { IconUser, IconCalendar, IconTools, IconBriefcase } from "@tabler/icons-react";

const links = [
    { label: "About", href: "#about", icon: <IconUser size={24} /> },
    { label: "Timeline", href: "#timeline", icon: <IconCalendar size={24} /> },
    { label: "Skills", href: "#skills", icon: <IconTools size={24} /> },
    { label: "Projects", href: "#projects", icon: <IconBriefcase size={24} /> },
  ];
  
  export default function Navbar() {
    return (
      <Sidebar>
        <SidebarBody className="sidebar-container">
          {links.map((link) => (
            <SidebarLink key={link.label} link={link} />
          ))}
        </SidebarBody>
      </Sidebar>
    );
  }