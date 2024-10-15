"use client";

import IconCloud from "./magicui/icon-cloud";

const slugs = [
  "python",
  "javascript",
  "typescript",
  "c++",
  "html",
  "css",
  "react",
  "node.js",
  "next.js",
  "tailwind css",
  "mui",
  "pandas",
  "selenium",
  "git",
  "github",
  "macOS",
  "linux",
  "google drive",
  "pycharm",
  "openai",
  "langchain",
  "firebase",
  "vercel",
  "clerk",
  "figma",
  "canva",
  "adobe photoshop",
  "adobe premiere pro",
  "davinci resolve"
]

const customIcons = [
  { src: "/svg/sql.svg", name: "sql" },
  { src: "/svg/react-native.svg", name: "react native" },
  { src: "/svg/windows-logo.svg", name: "windows" },
  { src: "/svg/microsoft-office.svg", name: "microsoft office" },
  { src: "/svg/vs-code.svg", name: "VS Code" },
  { src: "/svg/pinecone.svg", name: "Pinecone" },
];

export function Skills() {

  return (
    <div id="skills" className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-transparent px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} customIcons={customIcons}/>
    </div>
  )
}