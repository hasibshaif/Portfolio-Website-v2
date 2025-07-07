/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";
import { useScroll, useTransform, motion } from "framer-motion";

export function MyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.scrollHeight;
        setContainerHeight(height);
      }
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const beamHeight = useTransform(scrollYProgress, [0, 1], [0, containerHeight]);

  const timelineItems = [
    {
      title: "May, 2025",
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10 flex-shrink-0"
          data-timeline-item
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <a
              href="https://www.addinextech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                <Image
                  src="/icons/timeline-icons/addinex-logo.jpg"
                  alt="Addinex Technologies"
                  width={80}
                  height={80}
                  className="object-contain rounded-lg"
                />
              </div>
            </a>
            <p className="text-white text-xs sm:text-sm lg:text-base leading-relaxed flex-1">
              Began internship as a Software Engineer Intern at {" "}
              <LinkPreview url="https://www.addinextech.com/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                Addinex Technologies
              </LinkPreview>.
            </p>
          </div>
        </motion.div>
      ),
    },
    {
      title: "April, 2025",
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10"
          data-timeline-item
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://www.pulp.chat/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/icons/timeline-icons/pulp-logo.svg"
                  alt="Pulp"
                  width={80}
                  height={80}
                  className="object-contain rounded-lg"
                />
              </div>
            </a>
            <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
              Concluded internship with {" "}
              <LinkPreview url="https://www.pulp.chat/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                Pulp Internet Corporation
              </LinkPreview>, contributing to core product development, infrastructure, and data visualization across web, mobile, and cloud platforms that enhanced product quality, accelerated development, and strengthened the company's technical credibility.
            </p>
          </div>
        </motion.div>
      ),
    },
    {
      title: "February, 2025",
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10"
          data-timeline-item
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://new.mta.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/icons/timeline-icons/mta-logo.svg"
                  alt="MTA"
                  width={80}
                  height={80}
                  className="object-contain rounded-lg"
                />
              </div>
            </a>
            <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
              Concluded winter internship with the {" "}
              <LinkPreview url="https://new.mta.info/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                Metropolitan Transportation Authority (MTA)
              </LinkPreview>, developing and integrating a digitalized payroll platform to automate a previously manual, paper-based timesheet system.
            </p>
          </div>
        </motion.div>
      ),
    },
    {
      title: "January, 2025",
      content: (
        <>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10"
            data-timeline-item
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://linktr.ee/baruchfullstack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <Image
                    src="/icons/timeline-icons/bfs_logo.svg"
                    alt="BFS"
                    width={80}
                    height={80}
                    className="object-contain rounded-lg"
                  />
                </div>
              </a>
              <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
                Co-founded {" "}
                <LinkPreview url="https://linktr.ee/baruchfullstack" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                  Baruch Full Stack (BFS)
                </LinkPreview>, the college's premiere software engineering student organization.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10"
            data-timeline-item
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://nebigdatahub.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <Image
                    src="/icons/timeline-icons/nebdhub-logo.png"
                    alt="NEBDHUB"
                    width={80}
                    height={80}
                    className="object-contain rounded-lg"
                  />
                </div>
              </a>
              <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
                Concluded the {" "}
                <LinkPreview url="https://nebigdatahub.org/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                  Northeast Big Data Innovation Hub's
                </LinkPreview> <LinkPreview url="https://nebigdatahub.org/nsdc/tdsp/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                  Transportation Data Science Project (TDSP)
                </LinkPreview>, a collaborative research initiative focused on analyzing transportation data to improve urban mobility.
              </p>
            </div>
          </motion.div>
        </>
      ),
    },
    {
      title: "December, 2024",
      content: (
        <>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10"
            data-timeline-item
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://www.pulp.chat/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <Image
                    src="/icons/timeline-icons/pulp-logo.svg"
                    alt="Pulp"
                    width={80}
                    height={80}
                    className="object-contain rounded-lg"
                  />
                </div>
              </a>
              <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
                Began seasonal internship as a Software Engineer Intern at {" "}
                <LinkPreview url="https://www.pulp.chat/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                  Pulp Internet Corporation
                </LinkPreview>, contributing to core product development, infrastructure, and data visualization across web, mobile, and cloud platforms.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10"
            data-timeline-item
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://new.mta.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <Image
                    src="/icons/timeline-icons/mta-logo.svg"
                    alt="MTA"
                    width={80}
                    height={80}
                    className="object-contain rounded-lg"
                  />
                </div>
              </a>
              <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
                Began winter internship with the {" "}
                <LinkPreview url="https://new.mta.info/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                  Metropolitan Transportation Authority (MTA)
                </LinkPreview>, NYC's expansive public transit system.
              </p>
            </div>
          </motion.div>
        </>
      ),
    },
    {
      title: "November, 2024",
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10"
          data-timeline-item
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://nebigdatahub.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/icons/timeline-icons/nebdhub-logo.png"
                  alt="NEBDHUB"
                  width={80}
                  height={80}
                  className="object-contain rounded-lg"
                />
              </div>
            </a>
            <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
              Began the {" "}
              <LinkPreview url="https://nebigdatahub.org/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                Northeast Big Data Innovation Hub's
              </LinkPreview> <LinkPreview url="https://nebigdatahub.org/nsdc/tdsp/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                Transportation Data Science Project (TDSP)
              </LinkPreview>, a collaborative research initiative focused on analyzing transportation data to improve urban mobility.
            </p>
          </div>
        </motion.div>
      ),
    },
    {
      title: "October, 2024",
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10"
          data-timeline-item
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://www.webacy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/icons/timeline-icons/webacy-logo.png"
                  alt="Webacy"
                  width={80}
                  height={80}
                  className="object-contain rounded-lg"
                />
              </div>
            </a>
            <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
              Concluded internship with {" "}
              <LinkPreview url="https://www.webacy.com/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                Webacy
              </LinkPreview> as a Software Engineer Intern, contributing to the development of a web3 security platform and implementing key features for user protection and asset management.
              </p>
          </div>
        </motion.div>
      ),
    },
    {
      title: "September, 2024",
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10"
          data-timeline-item
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://www.webacy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/icons/timeline-icons/webacy-logo.png"
                  alt="Webacy"
                  width={80}
                  height={80}
                  className="object-contain rounded-lg"
                />
              </div>
            </a>
            <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
              Began internship with {" "}
              <LinkPreview url="https://www.webacy.com/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                Webacy
              </LinkPreview> as a Software Engineer Intern, working on a web3 security platform to protect users' digital assets and provide comprehensive security solutions.
              </p>
          </div>
        </motion.div>
      ),
    },
    {
      title: "August, 2024",
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10"
          data-timeline-item
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://www.ccb4a.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/icons/timeline-icons/ccb4a-logo.webp"
                  alt="CCB4A"
                  width={80}
                  height={80}
                  className="object-contain rounded-lg"
                />
              </div>
            </a>
            <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
              Concluded internship with {" "}
              <LinkPreview url="https://www.ccb4a.com/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                CCB4A
              </LinkPreview> as a Software Engineer Intern, contributing to the development of innovative software solutions and gaining valuable experience in modern web technologies.
              </p>
          </div>
        </motion.div>
      ),
    },
    {
      title: "July, 2024",
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10"
          data-timeline-item
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://www.ccb4a.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/icons/timeline-icons/ccb4a-logo.webp"
                  alt="CCB4A"
                  width={80}
                  height={80}
                  className="object-contain rounded-lg"
                />
              </div>
            </a>
            <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
              Began internship with {" "}
              <LinkPreview url="https://www.ccb4a.com/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                CCB4A
              </LinkPreview> as a Software Engineer Intern, working on cutting-edge software development projects and learning modern web technologies.
              </p>
          </div>
        </motion.div>
      ),
    },
    {
      title: "June, 2024",
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10"
          data-timeline-item
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://headstarter.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/icons/timeline-icons/headstarter-logo.png"
                  alt="Headstarter"
                  width={80}
                  height={80}
                  className="object-contain rounded-lg"
                />
              </div>
            </a>
            <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
              Concluded internship as a Software Engineer Intern at {" "}
              <LinkPreview url="https://headstarter.org/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                Headstarter
              </LinkPreview>, contributing to the development of their platform and gaining valuable experience in full-stack development.
            </p>
          </div>
        </motion.div>
      ),
    },
    {
      title: "May, 2024",
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10"
          data-timeline-item
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://headstarter.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/icons/timeline-icons/headstarter-logo.png"
                  alt="Headstarter"
                  width={80}
                  height={80}
                  className="object-contain rounded-lg"
                />
              </div>
            </a>
            <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
              Began internship as a Software Engineer Intern at {" "}
              <LinkPreview url="https://headstarter.org/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                Headstarter
              </LinkPreview>, a platform connecting students with tech opportunities.
            </p>
          </div>
        </motion.div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10"
          data-timeline-item
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://www.codepath.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/icons/timeline-icons/codepath-logo.png"
                  alt="CodePath"
                  width={80}
                  height={80}
                  className="object-contain rounded-lg"
                />
              </div>
            </a>
            <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
              Completed {" "}
              <LinkPreview url="https://www.codepath.org/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                CodePath's
              </LinkPreview> Advanced Software Engineering course, gaining hands-on experience with modern web development technologies and best practices.
            </p>
          </div>
        </motion.div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10"
          data-timeline-item
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://www.codepath.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/icons/timeline-icons/codepath-logo.png"
                  alt="CodePath"
                  width={80}
                  height={80}
                  className="object-contain rounded-lg"
                />
              </div>
            </a>
            <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
              Completed {" "}
              <LinkPreview url="https://www.codepath.org/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                CodePath's
              </LinkPreview> Advanced Software Engineering course, focusing on full-stack development and modern web technologies.
            </p>
          </div>
        </motion.div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10"
          data-timeline-item
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://www.baruch.cuny.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/icons/timeline-icons/baruch_logo.png"
                  alt="Baruch College"
                  width={80}
                  height={80}
                  className="object-contain rounded-lg"
                />
              </div>
            </a>
            <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
              Enrolled at {" "}
              <LinkPreview url="https://www.baruch.cuny.edu/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                Baruch College
              </LinkPreview> to pursue a Bachelor's degree in Computer Science, focusing on software engineering and data science.
            </p>
          </div>
        </motion.div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10"
          data-timeline-item
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://www.bths.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/icons/timeline-icons/brooklyn_latin_logo.png"
                  alt="Brooklyn Latin School"
                  width={80}
                  height={80}
                  className="object-contain rounded-lg"
                />
              </div>
            </a>
            <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
              Graduated from {" "}
              <LinkPreview url="https://www.bths.edu/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                The Brooklyn Latin School
              </LinkPreview>, where I developed a strong foundation in critical thinking and academic excellence.
            </p>
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <section id="timeline" className="py-5">
      <div className="flex flex-col gap-4 items-start">
        {/* Section Header */}
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Timeline
        </motion.h2>
        
        {/* Timeline Container */}
        <div className="w-full relative">
          {/* Vertical Beam */}
          <motion.div
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
            style={{ height: beamHeight }}
          />
          
          {/* Timeline Items */}
          <div ref={containerRef} className="relative">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative mb-8">
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-6 top-6 w-3 h-3 bg-blue-500 rounded-full border-2 border-white transform -translate-x-1/2 z-10" />
                
                {/* Timeline Content */}
                <div className="ml-8 sm:ml-12">
                  {/* Date */}
                  <motion.div 
                    className="text-sm sm:text-base font-semibold text-blue-400 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {item.title}
                  </motion.div>
                  
                  {/* Content */}
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
