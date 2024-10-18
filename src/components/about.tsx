/* eslint-disable react/no-unescaped-entities */
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BoxReveal from "./ui/box-reveal";
import ShimmerButton from "./ui/shimmer-button";
import { LinkPreview } from "./ui/link-preview";

export function AboutMe() {
  return (
    <section id="about" className="py-16">
      <div className="flex flex-col gap-4 items-start">
        {/* Header aligned at the top-left */}
        <h2 className="text-3xl font-bold text-primary px-4">About Me</h2>

        {/* Bordered card content */}
        <Card className="bg-black/20 border border-white rounded-lg shadow-md w-full">
          <CardContent className="flex flex-col md:flex-row items-center gap-8 px-4 py-8">
            {/* Avatar on the left */}
            <Avatar className="w-24 h-24 sm:w-32 sm:h-32 md:w-60 md:h-60">
              <AvatarImage
                src="/img/hasib_mufg.JPG"
                alt="Hasib Shaif"
                className="object-cover"
              />
              <AvatarFallback>H.S</AvatarFallback>
            </Avatar>

            {/* Text block and button layout */}
            <div className="flex-1 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between w-full">
              {/* Text content */}
              <BoxReveal width="100%" boxColor="#7c92f7" duration={1.1}>
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Hey, I'm Hasib!
                  </h3>
                  <p>
                    I am an undergraduate at Baruch College, where I am pursuing
                    a Bachelor's degree in Computer Science. Driven by a passion
                    for technology, I am dedicated to carving out a future
                    career in the tech world.
                  </p>
                  <p>
                    Currently, I am actively exploring various avenues within
                    the field, including software engineering, web development,
                    app development, data science, and cybersecurity. My
                    diverse interests reflect my enthusiasm for innovation and
                    my commitment to continuous learning and growth in this
                    dynamic and ever-evolving industry.
                  </p>
                </div>
              </BoxReveal>

              {/* Resume button with link preview */}
              <div className="self-start md:self-center">
                <LinkPreview
                  url="/documents/Hasib Shaif - Resume.pdf"
                  isStatic={true}
                  imageSrc="/img/link-previews/about/resume-preview.PNG"
                  className="flex flex-col items-center"
                >
                  <ShimmerButton
                    className="relative overflow-hidden text-white px-6 py-3 rounded-lg bg-gradient-to-br from-black to-gray-800 hover:gradient-to-bl hover:from-gray-800 hover:to-black"
                    shimmerColor="#00aaff"
                    shimmerSize="0.2em"
                    shimmerDuration="5s"
                    onClick={() =>
                      window.open(
                        "/documents/Hasib Shaif - Resume.pdf",
                        "_blank"
                      )
                    }
                  >
                    Resume
                  </ShimmerButton>
                </LinkPreview>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
