"use client";

import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { NavigationLink } from "./types";

interface DesktopNavProps {
  links: NavigationLink[];
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function DesktopNav({ links, sidebarOpen, setSidebarOpen }: DesktopNavProps) {
  return (
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
  );
} 