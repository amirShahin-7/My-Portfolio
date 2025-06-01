import PortfolioItem from "../components/PortfolioItem";

const Home = () => {
  const intro = {
    name: "Hey, I'm Amir Shahin",
    description: "Front-End Developer | React.js & Next.js Enthusiast",
  };

  const projects = [
    {
      title: "Protein Pro - E-commerce Platform",
      description:
        "A responsive e-commerce platform built with React.js, featuring a user-friendly cart system, admin dashboard, and seamless API integration, deployed on Vercel.",
      liveDemo: "https://protein-pro.vercel.app/",
      github: "https://github.com/amirShahin-7/ProteinPRO",
      image: "/images/protein-pro.jpg",
    },
    {
      title: "Movie Show - Streaming Platform",
      description:
        "A streaming platform developed using React.js, Redux Toolkit, and TMDB API.",
      liveDemo: "https://movie-show-blond.vercel.app/",
      github: "https://github.com/amirShahin-7/Movies-Series",
      image: "/images/movie-show.jpg",
    },
    {
      title: "Exchanger Gold Landing Page",
      description:
        "A sleek and responsive landing page for a currency exchange tool, featuring a user-friendly converter and modern design.",
      liveDemo: "https://exchanger-gold.vercel.app/",
      github: "https://github.com/amirShahin-7/Exchanger",
      image: "/images/Exchanger.jpg",
    },
    {
      title: "Cards",
      description:
        "A simple React shopping cart with dynamic product management, quantity controls, and a light/dark theme switch. Uses local storage for persistence.",
      liveDemo: "https://cards-self-rho.vercel.app/",
      github: "https://github.com/amirShahin-7/cards",
      image: "/images/cards.jpg",
    },
    {
      title: "Memes Viewer",
      description:
        "A simple web app to view memes by selecting a number, built with Vanilla JS, Bootstrap, and API integration, deployed on Vercel.",
      liveDemo: "https://memes-rust.vercel.app/",
      github: "https://github.com/amirShahin-7/memes",
      image: "/images/memes.jpg",
    },
    {
      title: "Background Color Changer",
      description:
        "A lightweight web app built with HTML, CSS, and JS, allowing users to change the page background color using five color buttons.",
      liveDemo: "https://background-color-changer-alpha.vercel.app/",
      github: "https://github.com/amirShahin-7/Background-Color-Changer",
      image: "/images/color-changer.jpg",
    },

    {
      title: "Watch of Choice Landing Page",
      description:
        "A responsive landing page showcasing a premium watch collection with a modern design and smooth animations.",
      liveDemo: "https://watches-liart.vercel.app/",
      github: "https://github.com/amirShahin-7/Watches",
      image: "/images/Watches.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6">
      <section className="flex flex-col flex-wrap gap-4 mb-12">
        <h1 className="text-4xl font-bold">{intro.name}</h1>
        <p className="text-2xl">{intro.description}</p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold">My Projects</h2>
        <div className="flex flex-wrap gap-6">
          {projects.map((project, index) => (
            <PortfolioItem key={index} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
