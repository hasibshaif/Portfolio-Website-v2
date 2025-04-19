/* eslint-disable react/no-unescaped-entities */
"use client";
import { CardContent } from "@/components/ui/card";
import BoxReveal from "./ui/box-reveal";
import { LinkPreview } from "./ui/link-preview";
import ShineBorder from "./ui/shine-border";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import SplitText from "./animata/text/split-text";

export function AboutMe() {
  return (
    <section id="about" className="py-5">
      <div className="flex flex-col gap-4 items-start">
        {/* Header aligned at the top-left */}
        <SplitText text="About Me" />
        {/* Bordered card content */}
        <ShineBorder
          borderRadius={16}
          borderWidth={2}
          duration={14}
          color={["#45006a", "white", "#0275d4"]}
          className="w-full"
        >
          <div className="bg-black/20 rounded-[16px] w-full">
            <CardContent className="flex flex-col md:flex-row items-center gap-8 px-4 py-8">
              {/* Direction-aware Avatar on the left */}
              <DirectionAwareHover
                imageUrl="/img/hasib_mufg.JPG"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48"
                imageClassName="object-cover"
              />
              {/* Text block and button layout */}
              <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center justify-between w-full">
                {/* Text content */}
                <BoxReveal width="100%" boxColor="#7c92f7" duration={1.1}>
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      Hey, I'm Hasib!
                    </h3>
                    <p>
                      I am an undergraduate at Baruch College, where I am
                      pursuing a Bachelor's degree in Computer Science. Driven
                      by a passion for technology, I am dedicated to carving out
                      a future career in the tech world.
                    </p>
                    <p>
                      Currently, I am actively exploring various avenues within
                      the field, with particular interests in software engineering, full-stack
                      development, data science, and IT. My diverse interests reflect my enthusiasm
                      for innovation and my commitment to continuous learning
                      and growth in this dynamic and ever-evolving industry.
                    </p>
                  </div>
                </BoxReveal>

                {/* Resume button with link preview */}
                <div className="self-start md:self-center mt-4 md:mt-0">
                  <LinkPreview
                    url="/documents/Hasib Shaif - Resume.pdf"
                    isStatic={true}
                    imageSrc="/img/link-previews/about/resume-preview.PNG"
                    className="flex flex-col items-center"
                  >
                    <HoverBorderGradient
                      as="button"
                      containerClassName="relative overflow-hidden"
                      className="text-white"
                      onClick={() =>
                        window.open(
                          "/documents/Hasib Shaif - Resume.pdf",
                          "_blank"
                        )
                      }
                    >
                      Resume
                    </HoverBorderGradient>
                  </LinkPreview>
                </div>
              </div>
            </CardContent>
          </div>
        </ShineBorder>
      </div>
    </section>
  );
}
