/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { Timeline } from "./ui/timeline";
import Image from "next/image";
// import Image from "next/image";

export function MyTimeline() {
  const timelineItems = [
      {
        title: "September, 2024",
        content: (
          <div>
            <div className="flex flex-row items-center gap-4 mb-8">
              <a href="https://www.pulp.chat" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/icons/timeline-icons/pulp-logo.svg"
                  alt="CCB4A"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Began my internship as a Web Development Intern at <a href="https://www.pulp.chat">Pulp Internet Corporation</a>
              </p>
            </div>
            <div className="flex flex-row items-center gap-4 mb-8">
              <a href="https://headstarter.co" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/icons/timeline-icons/headstarter-logo.png"
                  alt="CCB4A"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Completed fellowship with <a href="https://headstarter.co">Headstarter AI</a>, developing 5 projects harnassing AI and industry-standard software and skills
              </p>
            </div>
            <div className="flex flex-row items-center gap-4 mb-8">
              <a href="https://www.cuny.edu/projects/administration/offices/evaluation/areas-of-focus_1/college_readiness/the-college-and-career-bridge-for-all-ccb4a/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/icons/timeline-icons/ccb4a-logo.webp"
                  alt="CCB4A"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Wrapped up role as a Database Administrator and Career Launch Coach with <a href="https://www.cuny.edu/projects/administration/offices/evaluation/areas-of-focus_1/college_readiness/the-college-and-career-bridge-for-all-ccb4a/">CCB4A</a>
              </p>
            </div>
            {/* <div className="grid grid-cols-2 gap-4">
              <Image
                src=""
                alt=""
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div> */}
          </div>
        ),
      },
      {
        title: "July, 2024",
        content: (
          <div className="flex flex-row items-center gap-4 mb-8">
            <a href="https://headstarter.co" target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/timeline-icons/headstarter-logo.png"
                alt="CCB4A"
                width={50}
                height={50}
                className="object-contain"
              />
            </a>
            <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
              Became a Software Engineering Fellow at <a href="https://headstarter.co">Headstarter AI</a>
            </p>
          </div>
        )
      }, 
      {
        title: "May, 2024",
        content: (
          <div>
            <div className="flex flex-row items-center gap-4 mb-8">
              <a href="https://www.codepath.org" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/icons/timeline-icons/codepath-logo.png"
                  alt="CCB4A"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Became a Tech Fellow at <a href="https://www.codepath.org">CodePath</a>
              </p>
            </div>
            <div className="flex flex-row items-center gap-4 mb-8">
              <a href="https://www.webacy.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/icons/timeline-icons/webacy-logo.png"
                  alt="CCB4A"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Completed Externship with <a href="https://www.webacy.com">Webacy</a>
              </p>
            </div>
          </div>
        )
      }, 
      {
        title: "April, 2024",
        content: (
          <div>
            <div className="flex flex-row items-center gap-4 mb-8">
              <a
                href="https://www.webacy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/timeline-icons/webacy-logo.png"
                  alt="Webacy"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Became a Web3 Security Data Analytics Extern at{" "}
                <a href="https://www.webacy.com">Webacy</a>
              </p>
            </div>
      
            <div className="flex flex-row items-center gap-4 mb-8">
              <a
                href="https://studentaffairs.baruch.cuny.edu/starr-career-development-center/leadership-programs/technology-leadership-development/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/timeline-icons/baruch_starr_logo.png"
                  alt="Baruch STARR Career Development Center"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Selected as 1 of 35 students to participate in Baruch College's Starr 
                Career Development Center's{" "}
                <a href="https://studentaffairs.baruch.cuny.edu/starr-career-development-center/leadership-programs/technology-leadership-development/">
                  Technology Leadership Development Program (TLDP)
                </a>, a highly selective career development program designed to hone 
                hard and soft skills weekly with peers and professionals.
              </p>
            </div>
          </div>
        ),
      },
      {
        title: "May, 2023",
        content: (
          <div className="flex flex-row items-center gap-4 mb-8">
            <Image
              src="/icons/timeline-icons/ccb4a-logo.webp"
              alt="CCB4A"
              width={50}
              height={50}
              className="object-contain"
            />
            <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
              Started working as a Database Administrator and Career Launch Coach at <a href="https://www.cuny.edu/projects/administration/offices/evaluation/areas-of-focus_1/college_readiness/the-college-and-career-bridge-for-all-ccb4a/">CCB4A</a>
            </p>
          </div>
        )
      },
      {
        title: "August, 2022",
        content: (
          <div className="flex flex-row items-center gap-4 mb-8">
            <Image
              src="/icons/timeline-icons/baruch_logo.png"
              alt="Baruch"
              width={50}
              height={50}
              className="object-contain transition-opacity duration-300 group-hover:opacity-75"
            />
            <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
              Began college journey as an undergraduate at <a href="https://www.baruch.cuny.edu">Baruch College.</a>
            </p>
          </div>
        )
      },
      {
        title: "June, 2022",
        content: (
          <div className="flex flex-row items-center gap-4 mb-8">
            <div className="relative group">
              <Image
                src="/icons/timeline-icons/brooklyn_latin_logo.png"
                alt="TBLS"
                width={50}
                height={50}
                className="object-contain shadow-md shadow-black/30 rounded-full"/>
            </div>
            <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
              Graduated from{" "}
              <a href="https://www.brooklynlatin.org">
                The Brooklyn Latin School
              </a>{" "}
              with an IB Diploma.
            </p>
          </div>
        ),
      }
      
  ];

  return (
    <section id="timeline">
      <div className="flex flex-col gap-4 items-start">
        {/* Header aligned at the top-left */}
        <h2 className="text-3xl font-bold text-primary px-4">
          Timeline of Experiences & Education
        </h2>

        {/* Bordered timeline content */}
        <div className="bg-black/30 border border-white rounded-lg shadow-md w-full">
          <Timeline data={timelineItems} />
        </div>
      </div>
    </section>
  );
}