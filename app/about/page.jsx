import AnimatedSection from "../../components/AnimatedSection";
import { FaGraduationCap, FaLanguage, FaLightbulb } from "react-icons/fa";

const AboutPage = () => {
  const professionalSummary = {
    title: "Professional Summary",
    description:
      "Self-taught Front-End Developer with over one year of practical experience since June 2024, specializing in building responsive and user-friendly web applications using React.js and Next.js. Proficient in JavaScript, Redux Toolkit, and UI/UX design, with hands-on expertise in API integration and performance optimization. Delivered scalable projects including e-commerce and streaming platforms deployed on Vercel. Leverages 13 years of hospitality experience to enhance client communication, teamwork, and customer-centric design. Passionate about collaborating with design teams and solving problems in fast-paced environments.",
  };

  const workExperience = [
    {
      title: "Freelance - Frontend Developer",
      location: "Cairo, Egypt",
      duration: "June 2024 - Present",
      responsibilities: [
        "Developed 'Protein Pro' (https://protein-pro.vercel.app/), a responsive e-commerce platform using React.js, hosted data on Glitch, and deployed on Vercel.",
        "Designed and implemented React.js components with mobile-first and responsive design principles.",
        "Integrated RESTful APIs for dynamic content and optimized web performance.",
        "Managed version control with Git and collaborated on GitHub for project tracking.",
        "Built 'Movie Show' (https://movie-show-blond.vercel.app/), a streaming platform using React.js, Redux Toolkit, and TMDB API.",
        "Collaborated with a two-person team, leading GitHub project management, resolving merge conflicts, and ensuring clean version control.",
        "Translated UI/UX designs into responsive interfaces using Tailwind CSS and applied SEO best practices.",
        "Managed state with Redux Toolkit and deployed on Vercel with a focus on performance optimization.",
      ],
    },
  ];

  const education = {
    title: "Education",
    degree: "Bachelor's Degree",
    institution: "Future Academy",
    graduated: "2017",
    grade: "Good",
  };

  const languages = [
    { name: "Arabic", level: "Native" },
    {
      name: "English",
      level:
        "Intermediate (Proficient in technical communication and translation)",
    },
  ];

  const softSkills = [
    "Effective Client Communication",
    "Team Collaboration and Conflict Resolution",
    "Problem-Solving and Initiative",
    "Time Management",
    "Customer-Centric Design (from 13 years in hospitality)",
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[var(--background-gradient)] text-[var(--foreground)] p-4 sm:p-6 md:p-8">
      <AnimatedSection direction="left">
        <div className="flex flex-col items-center text-center max-w-screen-lg mx-auto gap-4 mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold">About Me</h1>
          <p className="text-base sm:text-lg">
            A glimpse into my journey as a Front-End Developer.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="right">
        <div className="flex flex-col max-w-screen-lg mx-auto gap-8">
          {/* Professional Summary */}
          <div className="bg-gradient-to-r from-[#7bdff2] to-[#b2f7ef] dark:from-[#4da8c7] dark:to-[#80c9c0] p-6 rounded-lg shadow-md">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {professionalSummary.title}
            </h2>
            <p className="text-sm sm:text-base">
              {professionalSummary.description}
            </p>
          </div>

          {/* Work Experience */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              Work Experience
            </h2>
            {workExperience.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#7bdff2] to-[#b2f7ef] dark:from-[#4da8c7] dark:to-[#80c9c0] p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-sm text-[var(--foreground)]/80">
                  {exp.location} | {exp.duration}
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-sm sm:text-base">
                  {exp.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-[#7bdff2] to-[#b2f7ef] dark:from-[#4da8c7] dark:to-[#80c9c0] p-6 rounded-lg shadow-md">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <FaGraduationCap /> {education.title}
              </h2>
              <p className="text-sm sm:text-base">{education.degree}</p>
              <p className="text-sm text-[var(--foreground)]/80">
                {education.institution}
              </p>
              <p className="text-sm text-[var(--foreground)]/80">
                Graduated: {education.graduated}
              </p>
              <p className="text-sm text-[var(--foreground)]/80">
                Grade: {education.grade}
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#7bdff2] to-[#b2f7ef] dark:from-[#4da8c7] dark:to-[#80c9c0] p-6 rounded-lg shadow-md">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <FaLanguage /> Languages
              </h2>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                {languages.map((lang, index) => (
                  <li key={index}>
                    {lang.name}: {lang.level}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-gradient-to-r from-[#7bdff2] to-[#b2f7ef] dark:from-[#4da8c7] dark:to-[#80c9c0] p-6 rounded-lg shadow-md">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
              <FaLightbulb /> Soft Skills
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
              {softSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
};

export default AboutPage;
