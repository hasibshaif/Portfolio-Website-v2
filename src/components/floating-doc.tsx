// FloatingDock.js (Modified to include email logic)

import { useState } from "react";
import AnimatedDock from "./animata/container/animated-dock";
import { Mail, Linkedin, Github } from "lucide-react";
import EmailCard from "./animata/card/email-feature-card";

export default function FloatingDock() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openEmailModal = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const dockItems = [
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/hasib-shaif/",
    },
    {
      title: "GitHub",
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/hasibshaif",
    },
    {
      title: "Email",
      icon: <Mail className="h-6 w-6" />,
      href: "#",
      onClick: openEmailModal,
    },
  ];

  return (
    <>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <AnimatedDock items={dockItems} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative">
            <EmailCard onClose={closeModal} />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white hover:text-red-500 p-2 rounded-full transition-colors duration-300 ease-in-out"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
