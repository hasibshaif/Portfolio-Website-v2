// FloatingDock.js (Modified to include email logic)

import { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import EmailCard from "./animata/card/email-feature-card";
import { motion, AnimatePresence } from "framer-motion";

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
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/hasib-shaif/",
    },
    {
      title: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/hasibshaif",
    },
    {
      title: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "#",
      onClick: openEmailModal,
    },
  ];

  return (
    <>
      {/* Mobile-friendly floating dock with animations */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed bottom-4 left-0 right-0 z-50 px-4 flex justify-center"
      >
        <motion.div 
          className="flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {dockItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              onClick={item.onClick}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 text-white relative group"
              title={item.title}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.2,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              {item.icon}
              
              {/* Tooltip */}
              <motion.div
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 pointer-events-none whitespace-nowrap"
                initial={{ opacity: 0, y: 5 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {item.title}
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-md"
            >
              <EmailCard onClose={closeModal} />
              <motion.button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white hover:text-red-500 p-2 rounded-full transition-colors duration-300 ease-in-out"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
