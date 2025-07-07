import { motion } from "framer-motion";
import Image from "next/image";

//DOWNLOAD ICONS FROM https://simpleicons.org/

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", icon: "/icons/skills-icons/python-color.svg" },
      { name: "JavaScript", icon: "/icons/skills-icons/javascript-color.svg" },
      { name: "TypeScript", icon: "/icons/skills-icons/typescript-color.svg" },
      { name: "C++", icon: "/icons/skills-icons/cplusplus-color.svg" },
      { name: "HTML5", icon: "/icons/skills-icons/html5-color.svg" },
      { name: "CSS3", icon: "/icons/skills-icons/css3-color.svg" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "/icons/skills-icons/react-color.svg" },
      { name: "Next.js", icon: "/icons/skills-icons/nextdotjs-color.svg" },
      { name: "Node.js", icon: "/icons/skills-icons/nodedotjs-color.svg" },
      { name: "NestJS", icon: "/icons/skills-icons/nestjs-color.svg" },
      { name: "Tailwind CSS", icon: "/icons/skills-icons/tailwindcss-color.svg" },
      { name: "Material-UI", icon: "/icons/skills-icons/mui-color.svg" },
      { name: "Bootstrap", icon: "/icons/skills-icons/bootstrap-color.svg" },
    ],
  },
  {
    name: "Data Science & Analytics",
    skills: [
      { name: "Pandas", icon: "/icons/skills-icons/pandas-color.svg" },
      { name: "NumPy", icon: "/icons/skills-icons/numpy-color.svg" },
      { name: "Matplotlib", icon: "/icons/skills-icons/matplotlib-color.svg" },
      { name: "Seaborn", icon: "/icons/skills-icons/seaborn-color.svg" },
      { name: "D3.js", icon: "/icons/skills-icons/d3-color.svg" },
      { name: "Jupyter", icon: "/icons/skills-icons/jupyter-color.svg" },
      { name: "Power BI", icon: "/icons/skills-icons/powerbi-color.svg" },
      { name: "Tableau", icon: "/icons/skills-icons/tableau-color.svg" },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "/icons/skills-icons/aws-color.svg" },
      { name: "Firebase", icon: "/icons/skills-icons/firebase-color.svg" },
      { name: "Docker", icon: "/icons/skills-icons/docker-color.svg" },
      { name: "Vercel", icon: "/icons/skills-icons/vercel-color.svg" },
      { name: "S3", icon: "/icons/skills-icons/s3-color.svg" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB", icon: "/icons/skills-icons/mongodb-color.svg" },
      { name: "PostgreSQL", icon: "/icons/skills-icons/postgre-color.svg" },
      { name: "SQL", icon: "/icons/skills-icons/sql.svg" },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "/icons/skills-icons/git-color.svg" },
      { name: "GitHub", icon: "/icons/skills-icons/github-color.svg" },
      { name: "VS Code", icon: "/icons/skills-icons/vs-code.svg" },
      { name: "PyCharm", icon: "/icons/skills-icons/pycharm-color.svg" },
      { name: "Postman", icon: "/icons/skills-icons/postman-color.svg" },
      { name: "Figma", icon: "/icons/skills-icons/figma-color.svg" },
      { name: "Canva", icon: "/icons/skills-icons/canva-color.svg" },
      { name: "Adobe Photoshop", icon: "/icons/skills-icons/adobephotoshop-color.svg" },
      { name: "Adobe Premiere Pro", icon: "/icons/skills-icons/adobepremierepro-color.svg" },
      { name: "DaVinci Resolve", icon: "/icons/skills-icons/davinciresolve-color.svg" },
      { name: "Microsoft Office", icon: "/icons/skills-icons/microsoft-office.svg" },
      { name: "Google Drive", icon: "/icons/skills-icons/googledrive-color.svg" },
    ],
  },
  {
    name: "AI & Machine Learning",
    skills: [
      { name: "OpenAI", icon: "/icons/skills-icons/openai-color.svg" },
      { name: "LangChain", icon: "/icons/skills-icons/langchain-color.svg" },
      { name: "Pinecone", icon: "/icons/skills-icons/pinecone.svg" },
      { name: "Selenium", icon: "/icons/skills-icons/selenium-color.svg" },
    ],
  },
  {
    name: "Operating Systems",
    skills: [
      { name: "Windows", icon: "/icons/skills-icons/windows-logo.svg" },
      { name: "macOS", icon: "/icons/skills-icons/macos-color.svg" },
      { name: "Linux", icon: "/icons/skills-icons/linux-color.svg" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="flex flex-col gap-4 items-start">
        {/* Section Header */}
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        
        {/* Skills Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: categoryIndex * 0.05
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.h3 
                  className="text-sm sm:text-base lg:text-xl font-semibold text-blue-400 mb-2 sm:mb-3 lg:mb-4 leading-tight"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.05 + 0.1 }}
                  viewport={{ once: true }}
                >
                  {category.name}
                </motion.h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200 group"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.05 + skillIndex * 0.02
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 relative flex-shrink-0">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-200"
                        />
                      </div>
                      <span className="text-[10px] sm:text-xs text-gray-300 text-center group-hover:text-white transition-colors duration-200 leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
