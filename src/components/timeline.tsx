/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";
import { CardSpotlight } from "./ui/card-spotlight";
import { Timeline } from "./ui/timeline";
import ShineBorder from "./ui/shine-border";

export function MyTimeline() {
  const timelineItems = [
    {
      title: "September, 2024",
      content: (
        <CardSpotlight className="mb-8">
          <div className="flex flex-row items-start gap-4">
            <a
              href="https://www.pulp.chat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/timeline-icons/pulp-logo.svg"
                alt="Pulp"
                width={100}
                height={100}
                className="object-contain"
              />
            </a>
            <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
              Began my internship as a Web Development Intern at{" "}
              <LinkPreview url="https://www.pulp.chat">
                Pulp Internet Corporation
              </LinkPreview>
            </p>
          </div>
        </CardSpotlight>
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
              <Image
                src="/icons/timeline-icons/headstarter-logo.png"
                alt="Headstarter"
                width={100}
                height={100}
                className="object-contain"
              />
            </a>
            <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
              Became a Software Engineering Fellow at{" "}
              <LinkPreview url="https://headstarter.co">
                Headstarter AI
              </LinkPreview>
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
                <Image
                  src="/icons/timeline-icons/codepath-logo.svg"
                  alt="CodePath"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Became a Tech Fellow at{" "}
                <LinkPreview url="https://www.codepath.org">
                  CodePath
                </LinkPreview>
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
                <Image
                  src="/icons/timeline-icons/webacy-logo.png"
                  alt="Webacy"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Completed Externship with{" "}
                <LinkPreview url="https://www.webacy.com">Webacy</LinkPreview>
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
                <Image
                  src="/icons/timeline-icons/webacy-logo.png"
                  alt="Webacy"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </a>
              <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
                Became a Web3 Security Data Analytics Extern at{" "}
                <LinkPreview url="https://www.webacy.com">Webacy</LinkPreview>
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
                <Image
                  src="/icons/timeline-icons/baruch_starr_logo.svg"
                  alt="Baruch STARR Career Development Center"
                  width={200}
                  height={100}
                  className="object-contain"
                />
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
      title: "May, 2023",
      content: (
        <CardSpotlight className="mb-8">
          <div className="flex flex-row items-center gap-4">
            <a
              href="https://www.cuny.edu/projects/administration/offices/evaluation/areas-of-focus_1/college_readiness/the-college-and-career-bridge-for-all-ccb4a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/timeline-icons/ccb4a-logo.webp"
                alt="CCB4A"
                width={100}
                height={100}
                className="object-contain"
              />
            </a>
            <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
              Started working as a Database Administrator and Career Launch
              Coach at{" "}
              <LinkPreview url="https://www.cuny.edu/projects/administration/offices/evaluation/areas-of-focus_1/college_readiness/the-college-and-career-bridge-for-all-ccb4a/">
                CCB4A
              </LinkPreview>
            </p>
          </div>
        </CardSpotlight>
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
              <Image
                src="/icons/timeline-icons/baruch_logo.png"
                alt="Baruch"
                width={100}
                height={100}
                className="object-contain transition-opacity duration-300 group-hover:opacity-75"
              />
            </a>
            <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
              Began college journey as an undergraduate at{" "}
              <LinkPreview url="https://www.baruch.cuny.edu">
                Baruch College.
              </LinkPreview>
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
              <Image
                src="/icons/timeline-icons/brooklyn_latin_logo.png"
                alt="TBLS"
                width={100}
                height={100}
                className="object-contain shadow-md shadow-black/30 rounded-full"
              />
            </a>
            <p className="text-white dark:text-white text-xl md:text-xl font-normal leading-tight">
              Graduated from{" "}
              <LinkPreview url="https://www.brooklynlatin.org">
                The Brooklyn Latin School
              </LinkPreview>{" "}
              with an IB Diploma.
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
        <h2 className="text-3xl font-bold text-primary px-4">
          Timeline of Experiences & Education
        </h2>

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
