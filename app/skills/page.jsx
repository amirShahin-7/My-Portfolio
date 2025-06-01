import SkillItem from "./../../components/SkillItem";
import AnimatedSection from "./../../components/AnimatedSection";

const SkillsPage = () => {
  const technicalSkills = [
    { name: "HTML5", icon: "FaHtml5" },
    { name: "CSS3", icon: "FaCss3Alt" },
    { name: "JavaScript", icon: "FaJs" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "React.js", icon: "FaReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "Redux Toolkit", icon: "SiRedux" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "Bootstrap", icon: "FaBootstrap" },
    { name: "Material UI", icon: "SiMaterialui" },
    { name: "Git", icon: "FaGitAlt" },
    { name: "GitHub", icon: "FaGithub" },
    { name: "Postman", icon: "SiPostman" },
    { name: "Figma", icon: "SiFigma" },
  ];

  const softSkills = [
    { name: "Client Communication", icon: "FaComments" },
    { name: "Team Collaboration", icon: "FaUsers" },
    { name: "Problem-Solving", icon: "FaLightbulb" },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[var(--background-gradient)] text-[var(--foreground)] p-4 sm:p-6 md:p-8">
      <AnimatedSection direction="left">
        <div className="flex flex-col items-center text-center max-w-screen-lg mx-auto gap-4 mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold">My Skills</h1>
          <p className="text-base sm:text-lg">
            Technical and soft skills as a Front-End Developer.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="right">
        <div className="flex flex-col items-center max-w-screen-lg mx-auto gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-screen-lg mx-auto">
            {technicalSkills.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="left">
        <div className="flex flex-col items-center max-w-screen-lg mx-auto gap-6 mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Soft Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-screen-lg mx-auto">
            {softSkills.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
};

export default SkillsPage;
