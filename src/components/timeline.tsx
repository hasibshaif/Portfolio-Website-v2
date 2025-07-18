/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";
import { useScroll, useTransform, motion } from "framer-motion";

export function MyTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // Calculate height for beam animation
  useEffect(() => {
    const calculateHeight = () => {
      if (ref.current) {
        setContainerHeight(ref.current.scrollHeight);
      }
    };

    calculateHeight();
  
    const resizeObserver = new ResizeObserver(() => {
      calculateHeight();
    });
  
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
  
    return () => resizeObserver.disconnect();
  }, []);

  // Use scroll tracking for beam animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const beamHeight = useTransform(scrollYProgress, [0, 1], [0, containerHeight]);

  const timelineItems = [
    {
      title: "May, 2025",
      content: (
        <>
          <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://www.addinextech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <Image
                    src="/icons/timeline-icons/addinex-logo.jpg"
                    alt="Addinex Technologies"
                    width={80}
                    height={80}
                    className="object-contain rounded-lg"
                  />
                </div>
              </a>
              <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
                Began internship as a Software Engineer Intern at {" "}
                <LinkPreview url="https://www.addinextech.com/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                  Addinex Technologies
                </LinkPreview>.
              </p>
            </div>
          </div>
          <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
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
                Concluded role as Tech Fellow and Teaching Assistant at {" "}
                <LinkPreview url="https://www.codepath.org/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                  CodePath
                </LinkPreview>, mentoring students in technical interviewing prep {" "}
                <LinkPreview url="https://www.codepath.org/courses/tech-interview-prep" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                  (TIP 101)
                </LinkPreview> and web development fundamentals {" "}
                <LinkPreview url="https://www.codepath.org/courses/web-development" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                  (WEB 101)
                </LinkPreview>.
              </p>
            </div>
          </div>
          <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://studentaffairs.baruch.cuny.edu/starr-career-development-center/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <Image
                    src="/icons/timeline-icons/baruch_starr_logo.png"
                    alt="Baruch Starr Career Center"
                    width={80}
                    height={80}
                    className="object-contain rounded-lg"
                  />
                </div>
              </a>
              <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
                Concluded the {" "}
                <LinkPreview url="https://studentaffairs.baruch.cuny.edu/starr-career-development-center/leadership-programs/technology-leadership-development/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                  Technology Leadership Development Program (TLDP)
                </LinkPreview> at {" "}
                <LinkPreview url="https://studentaffairs.baruch.cuny.edu/starr-career-development-center/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                  Baruch College's Starr Career Center
                </LinkPreview>, building strong leadership, communication, and technical skills.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "April, 2025",
      content: (
        <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
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
              Concluded internship as a Software Engineer & Product Management Intern at {" "}
              <LinkPreview url="https://www.pulp.chat/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                Pulp Internet Corporation
              </LinkPreview>, contributing to core product development, leading Agile sprints, securing investments, visualizing data, and building infrastructure across web, mobile, and cloud platforms.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "February, 2025",
      content: (
        <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
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
              Concluded internship as a Technology Analyst Intern at the {" "}
              <LinkPreview url="https://new.mta.info/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                Metropolitan Transportation Authority (MTA)
              </LinkPreview>, developing and integrating a digitalized payroll platform to replace a previously manual, paper-based timesheet system.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "January, 2025",
      content: (
        <>
          <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
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
          </div>
          <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
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
                <LinkPreview url="https://nebigdatahub.org/nsdc/tdsp/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                  Technology Data Science Project (TDSP)
                </LinkPreview>, processing and analyzing 2M+ traffic records and creating data vizualizations to provide actionable insights.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "December, 2024",
      content: (
        <>
          <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
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
          </div>
          <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
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
                Began internship as a Technology Analyst Intern at the {" "}
                <LinkPreview url="https://new.mta.info/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                  Metropolitan Transportation Authority (MTA)
                </LinkPreview>, NYC's expansive public transit system.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "September, 2024",
      content: (
        <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
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
              Began internship as a Software Engineer Intern & Product Management Intern at {" "}
              <LinkPreview url="https://www.pulp.chat/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                Pulp Internet Corporation
              </LinkPreview>, a subsidiary of {" "}
              <LinkPreview url="https://cobaltspeech.com/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                Cobalt Speech & Language
              </LinkPreview>.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "August, 2024",
      content: (
        <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://studentaffairs.baruch.cuny.edu/starr-career-development-center/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/icons/timeline-icons/baruch_starr_logo.png"
                  alt="Baruch Starr Career Center"
                  width={80}
                  height={80}
                  className="object-contain rounded-lg"
                />
              </div>
            </a>
            <p className="text-white text-sm sm:text-base leading-relaxed flex-1">
              Selected as 1 of 35 students for the {" "}
              <LinkPreview url="https://studentaffairs.baruch.cuny.edu/starr-career-development-center/leadership-programs/technology-leadership-development/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                Technology Leadership Development Program (TLDP)
              </LinkPreview> at {" "}
              <LinkPreview url="https://studentaffairs.baruch.cuny.edu/starr-career-development-center/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                Baruch College's Starr Career Center
              </LinkPreview>, a selective program for developing leadership skills for aspiring technology professionals.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "May, 2024",
      content: (
        <>
          <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
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
                Concluded externship as a Data Analytics Extern at {" "}
                <LinkPreview url="https://www.webacy.com/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                  Webacy
                </LinkPreview>, contributing to analyzing and labeling smart-contract vulnerabilities to uncover patterns and risk profiles..
              </p>
            </div>
          </div>
          <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
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
                Began working as a Tech Fellow and Teaching Assistant at {" "}
                <LinkPreview url="https://www.codepath.org/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                  CodePath
                </LinkPreview>, mentoring students in CodePath curriculums.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "April, 2024",
      content: (
        <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
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
              Became a Data Analytics Extern at {" "}
              <LinkPreview url="https://www.webacy.com/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                Webacy
              </LinkPreview>.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "May, 2023",
      content: (
        <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://www.cuny.edu/academics/current-initiatives/k16/college-career-bridge-for-all/"
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
              Began working as a Database Administrator and Career Coach at {" "}
              <LinkPreview url="https://www.cuny.edu/academics/current-initiatives/k16/college-career-bridge-for-all/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                CCB4A
              </LinkPreview>.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "August, 2022",
      content: (
        <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
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
              Began undergraduate journey at {" "}
              <LinkPreview url="https://www.baruch.cuny.edu/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                Baruch College
              </LinkPreview> to pursue a Bachelor's degree in Computer Science.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "June, 2022",
      content: (
        <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://www.brooklynlatin.org/"
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
              <LinkPreview url="https://www.brooklynlatin.org/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50">
                The Brooklyn Latin School
              </LinkPreview> with an IB Diploma and Advanced Regents Diploma.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="timeline" className="py-5">
      <div className="flex flex-col gap-4 items-start">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
          Timeline
        </h2>
        
        {/* Bordered timeline content with beam animation */}
        <div className="w-full rounded-xl sm:rounded-2xl border-2 border-gradient-to-r from-[#45006a] via-white to-[#0275d4] bg-gradient-to-r from-[#45006a]/20 via-white/10 to-[#0275d4]/20 p-0.5 sm:p-1">
          <div className="bg-black/20 rounded-xl sm:rounded-2xl w-full p-3 sm:p-4">
            <div ref={containerRef} className="relative flex">
              {/* Timeline beam */}
              <div className="flex-shrink-0 flex flex-col items-center mr-4 sm:mr-6">
                <div
                  className="relative overflow-hidden w-3 sm:w-4"
                  style={{ height: `${containerHeight}px` }}
                >
                  <motion.div
                    className="absolute inset-x-0 top-0 w-3 sm:w-4 bg-gradient-to-b from-blue-500 via-blue-400 to-transparent rounded-full shadow-lg"
                    style={{ height: beamHeight }}
                  />
                </div>
              </div>
            
              {/* Timeline content */}
              <div ref={ref} className="flex-1 space-y-6 sm:space-y-8">
                {timelineItems.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-8 sm:-left-10 top-4 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full z-10 shadow-lg border-2 border-white/20"></div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-400 mb-2">{item.title}</h3>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
