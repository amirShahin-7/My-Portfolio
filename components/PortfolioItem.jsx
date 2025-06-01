"use client";
import Link from "next/link";
import { FaEye, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const PortfolioItem = ({ title, description, liveDemo, github, image }) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="group relative max-w-[480px] w-full flex flex-col overflow-hidden rounded-lg shadow-md mx-auto"
    >
      <div className="relative w-full h-[250px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4">
            <Link
              href={liveDemo}
              target="_blank"
              className="text-white text-2xl"
            >
              <FaEye />
            </Link>
            <Link href={github} target="_blank" className="text-white text-2xl">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
