import AnimatedSection from "../../components/AnimatedSection";
import Link from "next/link";
import { FaEye, FaGithub } from "react-icons/fa";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Protein Pro - E-commerce Platform",
      description:
        "A responsive e-commerce platform developed with React.js, featuring an admin panel, dynamic cart system, and API-driven data management, deployed on Vercel.",
      tech: ["React.js", "Context API", "Material Tailwind", "Axios", "Vercel"],
      liveDemo: "https://protein-pro.vercel.app/",
      github: "https://github.com/amirShahin-7/ProteinPRO",
      image: "/images/protein-pro.jpg",
    },
    {
      title: "Movie Show - Streaming Platform",
      description:
        "A streaming platform developed using React.js, Redux Toolkit, and TMDB API, deployed on Vercel.",
      tech: ["React.js", "Redux Toolkit", "TMDB API", "Vercel"],
      liveDemo: "https://movie-show-blond.vercel.app/",
      github: "https://github.com/amirShahin-7/Movies-Series",
      image: "/images/movie-show.jpg",
    },
    {
      title: "Currency Exchanger Tool",
      description:
        "A functional currency exchanger built with Vanilla JavaScript, integrating a live API for real-time exchange rates and responsive design.",
      liveDemo: "https://exchanger-gold.vercel.app/",
      github: "https://github.com/amirShahin-7/Exchanger",
      image: "/images/Exchanger.jpg",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "API Integration",
        "Responsive Design",
      ],
    },
    {
      title: "Cards",
      description:
        "A simple shopping cart application built with React, featuring a dynamic product list with add/remove functionality, quantity management, and a theme switch (light/dark mode). Utilizes local storage to persist cart items and calculates real-time totals. Deployed on Vercel.",
      tech: ["React.js", "Vercel"],
      liveDemo: "https://cards-self-rho.vercel.app/",
      github: "https://github.com/amirShahin-7/cards",
      image: "/images/cards.jpg",
    },
    {
      title: "Memes Viewer",
      description:
        "A lightweight web app for viewing memes by number, developed with Vanilla JS, styled with Bootstrap, and powered by the Imgflip API, deployed on Vercel.",
      tech: ["Vanilla JS", "Bootstrap", "Imgflip API", "Vercel"],
      liveDemo: "https://memes-rust.vercel.app/",
      github: "https://github.com/amirShahin-7/memes",
      image: "/images/memes.jpg",
    },
    {
      title: "Background Color Changer",
      description:
        "A simple web app that changes the background color of the page using 5 buttons (Red, Blue, Green, Yellow, Purple). Built with HTML, CSS, and JavaScript, deployed on Vercel.",
      tech: ["HTML", "CSS", "JavaScript"],
      liveDemo: "https://background-color-changer-alpha.vercel.app/",
      github: "https://github.com/amirShahin-7/Background-Color-Changer",
      image: "/images/color-changer.jpg",
    },

    {
      title: "Watches Products Showcase",
      description:
        "A portfolio section displaying new watch products and arrivals with interactive hover effects and responsive layout.",
      tech: ["HTML", "CSS", "JavaScript", "Flexbox", "Media Queries"],
      liveDemo: "https://watches-liart.vercel.app/",
      github: "https://github.com/amirShahin-7/Watches",
      image: "/images/Watches.jpg",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[var(--background-gradient)] text-[var(--foreground)] p-4 sm:p-6 md:p-8">
      <AnimatedSection direction="left">
        <div className="flex flex-col items-center text-center max-w-screen-lg mx-auto gap-4 mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold">My Projects</h1>
          <p className="text-base sm:text-lg">
            A showcase of my work as a Front-End Developer.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="right">
        <div className="flex flex-col items-center max-w-screen-lg mx-auto gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative flex flex-col overflow-hidden rounded-lg shadow-md  hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <Link
                      href={project.liveDemo}
                      target="_blank"
                      className="text-white text-2xl"
                    >
                      <FaEye />
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-white text-2xl"
                    >
                      <FaGithub />
                    </Link>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-[var(--primary)] text-white px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
};

export default ProjectsPage;
