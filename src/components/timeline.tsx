/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";
import { CardSpotlight } from "./ui/card-spotlight";
import { Timeline } from "./ui/timeline";
import ShineBorder from "./ui/shine-border";
import SplitText from "./animata/text/split-text";

export function MyTimeline() {
  const timelineItems = [
    {
      title: "May, 2025",
      content: (
        <>
          <CardSpotlight className="mb-8">
            <div className="flex flex-row items-center gap-4">
              <a
                href="https://www.addinextech.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[100px] flex-shrink-0">
                  <Image
                    src="/icons/timeline-icons/addinex-logo.jpg"
                    alt="Addinex Technologies"
                    width={75}
                    height={75}
                    className="object-contain"
                  />
                </div>
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Began internship as a Software Engineer Intern at {" "}
                <LinkPreview url="https://www.addinextech.com/">
                  Addinex Technologies
                </LinkPreview>
              </p>
            </div>
          </CardSpotlight>
        </>
      ),
    },
    {
      title: "April, 2025",
      content: (
        <>
          <CardSpotlight className="mb-8">
            <div className="flex flex-row items-center gap-4">
              <a
                href="https://www.pulp.chat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[100px] flex-shrink-0">
                  <Image
                    src="/icons/timeline-icons/pulp-logo.svg"
                    alt="Pulp"
                    width={75}
                    height={75}
                    className="object-contain"
                  />
                </div>
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Concluded internship with {" "}
                <LinkPreview url="https://www.pulp.chat/">
                  Pulp Internet Corporation
                </LinkPreview>, contributing to core product development, infrastructure, and data visualization across web, mobile, and cloud platforms that enhanced product quality, accelerated development, and strengthened the company’s technical credibility.
              </p>
            </div>
          </CardSpotlight>
        </>
      ),
    },
    {
      title: "February, 2025",
      content: (
        <>
          <CardSpotlight className="mb-8">
            <div className="flex flex-row items-center gap-4">
              <a
                href="https://new.mta.info/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[100px] flex-shrink-0">
                  <Image
                    src="/icons/timeline-icons/mta-logo.svg"
                    alt="MTA"
                    width={75}
                    height={75}
                    className="object-contain"
                  />
                </div>
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Concluded winter internship with the {" "}
                <LinkPreview url="https://new.mta.info/">
                  Metropolitan Transportation Authority (MTA)
                </LinkPreview>, developing and integrating a digitalized payroll platform to automate a previously manual, paper-based timesheet system.
              </p>
            </div>
          </CardSpotlight>
        </>
      ),
    },
    {
      title: "January, 2025",
      content: (
        <>
          <CardSpotlight className="mb-8">
            <div className="flex flex-row items-center gap-4">
              <a
                href="https://linktr.ee/baruchfullstack"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[100px] flex-shrink-0">
                  <Image
                    src="/icons/timeline-icons/bfs_logo.svg"
                    alt="BFS"
                    width={75}
                    height={75}
                    className="object-contain"
                  />
                </div>
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Co-founded {" "}
                <LinkPreview url="https://linktr.ee/baruchfullstack">
                  Baruch Full Stack (BFS)
                </LinkPreview>, the college's premiere software engineering student organization.
              </p>
            </div>
          </CardSpotlight>
          <CardSpotlight className="mb-8">
            <div className="flex flex-row items-center gap-4">
              <a
                href="https://nebigdatahub.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[100px] flex-shrink-0">
                  <Image
                    src="/icons/timeline-icons/nebdhub-logo.png"
                    alt="NEBDHUB"
                    width={75}
                    height={75}
                    className="object-contain"
                  />
                </div>
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Concluded the {" "}
                <LinkPreview url="https://nebigdatahub.org/">
                  Northeast Big Data Innovation Hub's
                </LinkPreview> <LinkPreview url="https://nebigdatahub.org/nsdc/tdsp/">
                  Transporation Data Science Project (TDSP) 
                </LinkPreview>, processing 2M+ traffic records with Pandas, analyzing trends with time series and geospatial methods, and visualizing insights using Matplotlib and Seaborn.
              </p>
            </div>
          </CardSpotlight>
        </>
      ),
    },
    {
      title: "December, 2024",
      content: (
        <>
          <CardSpotlight className="mb-8">
            <div className="flex flex-row items-center gap-4">
              <a
                href="https://new.mta.info/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[100px] flex-shrink-0">
                  <Image
                    src="/icons/timeline-icons/mta-logo.svg"
                    alt="MTA"
                    width={75}
                    height={75}
                    className="object-contain"
                  />
                </div>
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Began seasonal internship as a Software Engineer Intern at {" "}
                <LinkPreview url="https://new.mta.info/">
                  Metropolitan Transportation Authority (MTA)
                </LinkPreview>, NYC's expansive public transit system.
              </p>
            </div>
          </CardSpotlight>
          <CardSpotlight className="mb-8">
            <div className="flex flex-row items-center gap-4">
              <a
                href="https://nebigdatahub.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[100px] flex-shrink-0">
                  <Image
                    src="/icons/timeline-icons/nebdhub-logo.png"
                    alt="NEBDHUB"
                    width={75}
                    height={75}
                    className="object-contain"
                  />
                </div>
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Took part in {" "}
                <LinkPreview url="https://nebigdatahub.org/">
                  Northeast Big Data Innovation Hub
                </LinkPreview>'s <LinkPreview url="https://nebigdatahub.org/nsdc/tdsp/">
                  Transporation Data Science Project (TDSP) 
                </LinkPreview> as a Data Science Researcher.
              </p>
            </div>
          </CardSpotlight>
        </>
      ),
    },
    {
      title: "September, 2024",
      content: (
        <>
          <CardSpotlight className="mb-8">
            <div className="flex flex-row items-center gap-4">
              <a
                href="https://www.pulp.chat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[100px] flex-shrink-0">
                  <Image
                    src="/icons/timeline-icons/pulp-logo.svg"
                    alt="Pulp"
                    width={75}
                    height={75}
                    className="object-contain"
                  />
                </div>
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Began my internship as a Software Engineer Intern at{" "}
                <LinkPreview url="https://www.pulp.chat/">
                  Pulp Internet Corporation
                </LinkPreview>, a subsidiary of <LinkPreview url="https://www.cobaltspeech.com/">
                  Cobalt Speech & Language
                </LinkPreview>, a leading provider of speech recognition and natural language processing solutions.
              </p>
            </div>
          </CardSpotlight>
          <CardSpotlight className="mb-8">
            <div className="flex flex-row items-center gap-4">
              <a
                href="https://headstarter.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[100px] flex-shrink-0">
                  <Image
                    src="/icons/timeline-icons/headstarter-logo.png"
                    alt="Headstarter"
                    width={75}
                    height={75}
                    className="object-contain"
                  />
                </div>
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Completed fellowship with {" "}
                <LinkPreview url="https://headstarter.co">
                  Headstarter AI
                </LinkPreview>, building 5 full-stack projects with modern tech stacks.
              </p>
            </div>
          </CardSpotlight>
        </>
      ),
    },
    {
      title: "July, 2024",
      content: (
        <CardSpotlight className="mb-8">
          <div className="flex flex-row items-center gap-4">
            <a
              href="https://headstarter.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-[100px] flex-shrink-0">
                <Image
                  src="/icons/timeline-icons/headstarter-logo.png"
                  alt="Headstarter"
                  width={75}
                  height={75}
                  className="object-contain"
                />
              </div>
            </a>
            <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
              Became a Software Engineering Fellow at{" "}
              <LinkPreview url="https://headstarter.co">
                Headstarter AI
              </LinkPreview>.
            </p>
          </div>
        </CardSpotlight>
      ),
    },
    {
      title: "May, 2024",
      content: (
        <>
          <CardSpotlight className="mb-8">
            <div className="flex flex-row items-center gap-4">
              <a
                href="https://www.codepath.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[100px] flex-shrink-0">
                  <Image
                    src="/icons/timeline-icons/codepath-logo.svg"
                    alt="CodePath"
                    width={75}
                    height={75}
                    className="object-contain"
                  />
                </div>
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Became a Tech Fellow at{" "}
                <LinkPreview url="https://www.codepath.org">
                  CodePath
                </LinkPreview>.
              </p>
            </div>
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <div className="flex flex-row items-center gap-4">
              <a
                href="https://www.webacy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[100px] flex-shrink-0">
                  <Image
                    src="/icons/timeline-icons/webacy-logo.png"
                    alt="Webacy"
                    width={75}
                    height={75}
                    className="object-contain"
                  />
                </div>
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Completed Externship with{" "}
                <LinkPreview url="https://www.webacy.com">Webacy</LinkPreview>, 
                analyzing 200+ smart contract vulnerabilities and conducting cluster analysis on 10,000+ data points, 
                leveraging SQL, scikit-learn, PowerBI, and Tableau to enhance risk assessment and business intelligence in crypto and Web3.
              </p>
            </div>
          </CardSpotlight>
        </>
      ),
    },
    {
      title: "April, 2024",
      content: (
        <>
          <CardSpotlight className="mb-8">
            <div className="flex flex-row items-center gap-4">
              <a
                href="https://www.webacy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[100px] flex-shrink-0">
                  <Image
                    src="/icons/timeline-icons/webacy-logo.png"
                    alt="Webacy"
                    width={75}
                    height={75}
                    className="object-contain"
                  />
                </div>
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Became a Web3 Security Data Analytics Extern at{" "}
                <LinkPreview url="https://www.webacy.com">Webacy</LinkPreview>.
              </p>
            </div>
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <div className="flex flex-row items-center gap-4">
              <a
                href="https://studentaffairs.baruch.cuny.edu/starr-career-development-center/leadership-programs/technology-leadership-development/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-[100px] flex-shrink-0">
                  <Image
                    src="/icons/timeline-icons/baruch_starr_logo.svg"
                    alt="Baruch STARR Career Development Center"
                    width={75}
                    height={75}
                    className="object-contain"
                  />
                </div>
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Selected as 1 of 35 students to participate in Baruch College's
                Starr Career Development Center's{" "}
                <LinkPreview url="https://studentaffairs.baruch.cuny.edu/starr-career-development-center/leadership-programs/technology-leadership-development/">
                  Technology Leadership Development Program (TLDP)
                </LinkPreview>
                , a highly selective career development program designed to hone
                hard and soft skills weekly with peers and professionals.
              </p>
            </div>
          </CardSpotlight>
        </>
      ),
    },
    {
      title: "August, 2022",
      content: (
        <CardSpotlight className="mb-8">
          <div className="flex flex-row items-center gap-4">
            <a
              href="https://www.baruch.cuny.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-[100px] flex-shrink-0">
                <Image
                  src="/icons/timeline-icons/baruch_logo.png"
                  alt="Baruch"
                  width={75}
                  height={75}
                  className="object-contain transition-opacity duration-300 group-hover:opacity-75"
                />
              </div>
            </a>
            <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
              Began undergraduate journey at{" "}
              <LinkPreview url="https://www.baruch.cuny.edu">
                Baruch College
              </LinkPreview>.
            </p>
          </div>
        </CardSpotlight>
      ),
    },
    {
      title: "June, 2022",
      content: (
        <CardSpotlight className="mb-8">
          <div className="flex flex-row items-center gap-4">
            <a
              href="https://www.brooklynlatin.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-[100px] flex-shrink-0">
                <Image
                  src="/icons/timeline-icons/brooklyn_latin_logo.png"
                  alt="TBLS"
                  width={75}
                  height={75}
                  className="object-contain shadow-md shadow-black/30 rounded-full"
                />
              </div>
            </a>
            <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
              Graduated from{" "}
              <LinkPreview url="https://www.brooklynlatin.org">
                The Brooklyn Latin School
              </LinkPreview>{" "}
              with an International Baccalaureate (IB) Diploma.
            </p>
          </div>
        </CardSpotlight>
      ),
    },
  ];

  return (
    <section id="timeline" className="my-timeline-links py-5">
      <div className="flex flex-col gap-4 items-start">
        {/* Header aligned at the top-left */}
        <SplitText text="Timeline of Experiences & Education" />

        {/* Bordered timeline content */}
        <ShineBorder
          borderRadius={16}
          borderWidth={2}
          duration={14}
          color={["#45006a", "white", "#0275d4"]}
          className="w-full"
        >
          <div className="bg-black/20 rounded-[16px] w-full">
            <Timeline data={timelineItems} />
          </div>
        </ShineBorder>
      </div>
    </section>
  );
}
