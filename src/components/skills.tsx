import React from "react";
import Image from "next/image";

//DOWNLOAD ICONS FROM https://simpleicons.org/

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: "/icons/skills-icons/javascript-color.svg" },
        { name: "TypeScript", icon: "/icons/skills-icons/typescript-color.svg" },
        { name: "Python", icon: "/icons/skills-icons/python-color.svg" },
        { name: "C++", icon: "/icons/skills-icons/cplusplus-color.svg" },
        { name: "HTML5", icon: "/icons/skills-icons/html5-color.svg" },
        { name: "CSS3", icon: "/icons/skills-icons/css3-color.svg" },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: "/icons/skills-icons/react-color.svg" },
        { name: "Next.js", icon: "/icons/skills-icons/nextdotjs-color.svg" },
        { name: "React Native", icon: "/icons/skills-icons/react-native.svg" },
        { name: "Tailwind CSS", icon: "/icons/skills-icons/tailwindcss-color.svg" },
        { name: "Material-UI", icon: "/icons/skills-icons/mui-color.svg" },
        { name: "Bootstrap", icon: "/icons/skills-icons/bootstrap-color.svg" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "/icons/skills-icons/nodedotjs-color.svg" },
        { name: "NestJS", icon: "/icons/skills-icons/nestjs-color.svg" },
        { name: "PostgreSQL", icon: "/icons/skills-icons/postgre-color.svg" },
        { name: "MongoDB", icon: "/icons/skills-icons/mongodb-color.svg" },
        { name: "SQL", icon: "/icons/skills-icons/sql.svg" },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: "/icons/skills-icons/aws-color.svg" },
        { name: "Docker", icon: "/icons/skills-icons/docker-color.svg" },
        { name: "Firebase", icon: "/icons/skills-icons/firebase-color.svg" },
        { name: "Vercel", icon: "/icons/skills-icons/vercel-color.svg" },
        { name: "S3", icon: "/icons/skills-icons/s3-color.svg" },
      ],
    },
    {
      title: "Data Science & AI",
      skills: [
        { name: "Pandas", icon: "/icons/skills-icons/pandas-color.svg" },
        { name: "NumPy", icon: "/icons/skills-icons/numpy-color.svg" },
        { name: "Matplotlib", icon: "/icons/skills-icons/matplotlib-color.svg" },
        { name: "Seaborn", icon: "/icons/skills-icons/seaborn-color.svg" },
        { name: "D3.js", icon: "/icons/skills-icons/d3-color.svg" },
        { name: "Jupyter", icon: "/icons/skills-icons/jupyter-color.svg" },
        { name: "Selenium", icon: "/icons/skills-icons/selenium-color.svg" },
        { name: "OpenAI", icon: "/icons/skills-icons/openai-color.svg" },
        { name: "LangChain", icon: "/icons/skills-icons/langchain-color.svg" },
        { name: "Pinecone", icon: "/icons/skills-icons/pinecone.svg" },
      ],
    },
    {
      title: "Design & Creative",
      skills: [
        { name: "Figma", icon: "/icons/skills-icons/figma-color.svg" },
        { name: "Adobe Photoshop", icon: "/icons/skills-icons/adobephotoshop-color.svg" },
        { name: "Adobe Premiere Pro", icon: "/icons/skills-icons/adobepremierepro-color.svg" },
        { name: "DaVinci Resolve", icon: "/icons/skills-icons/davinciresolve-color.svg" },
        { name: "Canva", icon: "/icons/skills-icons/canva-color.svg" },
        { name: "Tableau", icon: "/icons/skills-icons/tableau-color.svg" },
        { name: "Power BI", icon: "/icons/skills-icons/powerbi-color.svg" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: "/icons/skills-icons/git-color.svg" },
        { name: "GitHub", icon: "/icons/skills-icons/github-color.svg" },
        { name: "VS Code", icon: "/icons/skills-icons/vs-code.svg" },
        { name: "PyCharm", icon: "/icons/skills-icons/pycharm-color.svg" },
        { name: "Postman", icon: "/icons/skills-icons/postman-color.svg" },
        { name: "Cursor", icon: "/icons/skills-icons/cursor-color.svg" },
        { name: "Microsoft Office", icon: "/icons/skills-icons/microsoft-office.svg" },
        { name: "Google Drive", icon: "/icons/skills-icons/googledrive-color.svg" },
        { name: "Clerk", icon: "/icons/skills-icons/clerk-color.svg" },
      ],
    },
    {
      title: "Operating Systems",
      skills: [
        { name: "Windows", icon: "/icons/skills-icons/windows-logo.svg" },
        { name: "macOS", icon: "/icons/skills-icons/macos-color.svg" },
        { name: "Linux", icon: "/icons/skills-icons/linux-color.svg" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-5">
      <div className="flex flex-col gap-4 items-start">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
          Skills
        </h2>
        
        <div className="w-full rounded-xl sm:rounded-2xl border-2 border-gradient-to-r from-[#45006a] via-white to-[#0275d4] bg-gradient-to-r from-[#45006a]/20 via-white/10 to-[#0275d4]/20 p-0.5 sm:p-1">
          <div className="bg-black/20 rounded-xl sm:rounded-2xl w-full p-3 sm:p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-3 sm:mb-4">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex flex-col items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors duration-200"
                      >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-xs sm:text-sm text-white text-center font-medium">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
