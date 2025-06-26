import AvatarList from "./animata/list/avatar-list";
import { CardContent } from "@/components/ui/card";
import ShineBorder from "./ui/shine-border";
import SplitText from "./animata/text/split-text";

//DOWNLOAD ICONS FROM https://simpleicons.org/

const programmingLanguages = [
  { name: "Python", image: "/icons/skills-icons/python-color.svg" },
  { name: "JavaScript", image: "/icons/skills-icons/javascript-color.svg" },
  { name: "TypeScript", image: "/icons/skills-icons/typescript-color.svg" },
  { name: "C++", image: "/icons/skills-icons/cplusplus-color.svg" },
  { name: "SQL", image: "/icons/skills-icons/sql.svg" },
  { name: "HTML", image: "/icons/skills-icons/html5-color.svg" },
  { name: "CSS", image: "/icons/skills-icons/css3-color.svg" },
];

const frameworks = [
  // Frontend
  { name: "React", image: "/icons/skills-icons/react-color.svg" },
  { name: "Next.js", image: "/icons/skills-icons/nextdotjs-color.svg" },
  // Backend
  { name: "Node.js", image: "/icons/skills-icons/nodedotjs-color.svg" },
  { name: "Nest.js", image: "/icons/skills-icons/nestjs-color.svg" },
  // Styling / UI frameworks
  { name: "Tailwind CSS", image: "/icons/skills-icons/tailwindcss-color.svg" },
  { name: "Bootstrap", image: "/icons/skills-icons/bootstrap-color.svg" },
  { name: "Material UI", image: "/icons/skills-icons/mui-color.svg" },
  // Data Analysis
  { name: "Pandas", image: "/icons/skills-icons/pandas-color.svg" },
  { name: "NumPy", image: "/icons/skills-icons/numpy-color.svg" },
  // Data Visualization
  { name: "Matplotlib", image: "/icons/skills-icons/matplotlib-color.svg" },
  { name: "Seaborn", image: "/icons/skills-icons/seaborn-color.svg" },
  { name: "D3.js", image: "/icons/skills-icons/d3-color.svg" },
  // Automation / Testing
  { name: "Selenium", image: "/icons/skills-icons/selenium-color.svg" },
];

const toolsPlatforms = [
  // DevOps & Cloud
  { name: "AWS", image: "/icons/skills-icons/aws-color.svg" },
  { name: "Docker", image: "/icons/skills-icons/docker-color.svg" },
  // Version Control
  { name: "Git", image: "/icons/skills-icons/git-color.svg" },
  { name: "GitHub", image: "/icons/skills-icons/github-color.svg" },
  // Databases
  { name: "PostgreSQL", image: "/icons/skills-icons/postgre-color.svg" },
  { name: "MongoDB", image: "/icons/skills-icons/mongodb-color.svg" },
  // Backend Services & Auth
  { name: "Firebase", image: "/icons/skills-icons/firebase-color.svg" },
  { name: "Clerk", image: "/icons/skills-icons/clerk-color.svg" },
  // API Testing
  { name: "Postman", image: "/icons/skills-icons/postman-color.svg" },
  // AI / LLMs
  { name: "Langchain", image: "/icons/skills-icons/langchain-color.svg" },
  { name: "OpenAI", image: "/icons/skills-icons/openai-color.svg" },
  // Deployment
  { name: "Vercel", image: "/icons/skills-icons/vercel-color.svg" },
  // Editors / IDEs
  { name: "VS Code", image: "/icons/skills-icons/vs-code.svg" },
  { name: "Cursor", image: "/icons/skills-icons/cursor-color.svg" },
  { name: "PyCharm", image: "/icons/skills-icons/pycharm-color.svg" },
  { name: "Jupyter Notebook", image: "/icons/skills-icons/jupyter-color.svg" },
  // OS
  { name: "macOS", image: "/icons/skills-icons/macos-color.svg" },
  { name: "Windows OS", image: "/icons/skills-icons/windows-logo.svg" },
  { name: "Linux", image: "/icons/skills-icons/linux-color.svg" },
  // Productivity
  { name: "Google Workspace Apps", image: "/icons/skills-icons/googledrive-color.svg" },
  { name: "Microsoft Office 365 Apps", image: "/icons/skills-icons/microsoft-office.svg" },
  // BI & Visualization
  { name: "PowerBI", image: "/icons/skills-icons/powerbi-color.svg" },
  { name: "Tableau", image: "/icons/skills-icons/tableau-color.svg" },
];

const design = [
  { name: "Figma", image: "/icons/skills-icons/figma-color.svg" },
  { name: "Canva", image: "/icons/skills-icons/canva-color.svg" },
  { name: "Adobe Photoshop", image: "/icons/skills-icons/adobephotoshop-color.svg" },
  { name: "Adobe Premiere Pro", image: "/icons/skills-icons/adobepremierepro-color.svg" },
  { name: "DaVinci Resolve", image: "/icons/skills-icons/davinciresolve-color.svg" },
];

export function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="flex flex-col gap-4 items-start">
        {/* Section Header */}
        <SplitText text="Skills" />
        {/* Bordered card content to match About section */}
        <ShineBorder
          borderRadius={16}
          borderWidth={2}
          duration={14}
          color={["#45006a", "white", "#0275d4"]}
          className="w-full overflow-hidden"
        >
          <div className="bg-black/20 rounded-[16px] w-full">
            <CardContent className="flex flex-col gap-12 p-0">
              {/* Avatar List: Programming Languages */}
              <div className="flex flex-col gap-4 items-start">
                <AvatarList
                  data={programmingLanguages}
                  heading="Programming Languages"
                  size="md"
                />
              </div>

              {/* Avatar List: Frameworks */}
              <div className="flex flex-col items-center">
                <AvatarList
                  data={frameworks}
                  heading="Frameworks & Libraries"
                  size="md"
                />
              </div>

              {/* Avatar List: Tools & Platforms */}
              <div className="flex flex-col items-center">
                <AvatarList
                  data={toolsPlatforms}
                  heading="Tools & Platforms"
                  size="md"
                />
              </div>

              {/* Avatar List: Design */}
              <div className="flex flex-col items-center">
                <AvatarList data={design} heading="Design" size="md" />
              </div>
            </CardContent>
          </div>
        </ShineBorder>
      </div>
    </section>
  );
}
