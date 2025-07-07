/* eslint-disable react/no-unescaped-entities */
"use client";
import { LinkPreview } from "./ui/link-preview";
import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <section id="about" className="py-5">
      <div className="flex flex-col gap-4 items-start">
        {/* Section Header */}
        <motion.h2 
          className="text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        {/* Bordered content */}
        <div className="w-full rounded-2xl border-2 border-gradient-to-r from-[#45006a] via-white to-[#0275d4] bg-gradient-to-r from-[#45006a]/20 via-white/10 to-[#0275d4]/20 p-1">
          <div className="bg-black/20 rounded-2xl w-full p-6">
            <motion.div 
              className="space-y-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.p 
                className="text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Hello! I'm <span className="text-blue-400 font-semibold">Hasib Shaif</span>, a passionate Software Engineer and Data Scientist currently pursuing my Bachelor's degree in Computer Science at {" "}
                <LinkPreview url="https://www.baruch.cuny.edu/" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium underline decoration-cyan-400/30 hover:decoration-cyan-300/50">
                  Baruch College
                </LinkPreview>. I love turning complex problems into simple, beautiful, and intuitive solutions.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                My journey in technology began with a curiosity about how things work, which led me to explore programming, data analysis, and machine learning. I've had the privilege of working with amazing teams at companies like {" "}
                <LinkPreview url="https://www.addinextech.com/" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium underline decoration-cyan-400/30 hover:decoration-cyan-300/50">
                  Addinex Technologies
                </LinkPreview>, {" "}
                <LinkPreview url="https://www.pulp.chat/" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium underline decoration-cyan-400/30 hover:decoration-cyan-300/50">
                  Pulp Internet Corporation
                </LinkPreview>, and the {" "}
                <LinkPreview url="https://new.mta.info/" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium underline decoration-cyan-400/30 hover:decoration-cyan-300/50">
                  Metropolitan Transportation Authority (MTA)
                </LinkPreview>, where I've contributed to various projects ranging from web applications to data science initiatives.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                I'm particularly interested in full-stack development, data science, and artificial intelligence. I enjoy creating applications that are not only functional but also provide an excellent user experience. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or working on personal projects that challenge me to learn and grow.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                I'm always open to new opportunities and collaborations. If you'd like to connect or discuss potential projects, feel free to reach out! You can find my resume {" "}
                <LinkPreview url="/documents/Hasib Shaif - Resume.pdf" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium underline decoration-cyan-400/30 hover:decoration-cyan-300/50">
                  here
                </LinkPreview>.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
