"use client";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const top = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="w-full bg-[var(--background-gradient)] text-[var(--foreground)] p-6 shadow-[0_-4px_6px_rgba(0,0,0,0.1),_0_4px_6px_rgba(0,0,0,0.1)] backdrop-blur-lg"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex-1 text-center md:text-left">
          <span className="text-lg font-semibold">Amir Shahin</span>
        </div>

        <div className="flex-1 text-center border-l border-r border-[var(--foreground)]/30 px-4">
          <div className="flex flex-col gap-2">
            <Link
              href="/Frontend_Developer_Resume.pdf"
              target="_blank"
              className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            >
              Download Resume
            </Link>
            <p className="text-sm">Built with Next.js & Tailwind CSS</p>
            <p className="text-sm">© 2025. All rights reserved.</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4">
            <Link href="https://x.com/Amir_Shahin9" target="_blank">
              <FaXTwitter className="text-black hover:text-[var(--primary)] transition-colors text-xl" />
            </Link>
            <Link href="https://github.com/amirShahin-7" target="_blank">
              <FaGithub className="text-black hover:text-[var(--primary)] transition-colors text-xl" />
            </Link>
            <Link href="https://blush-merla-87.tiiny.site/" target="_blank">
              <FaLinkedin className="text-black hover:text-[var(--primary)] transition-colors text-xl" />
            </Link>
            <Link href="mailto:amirshahin.1.512@gmail.com" target="_blank">
              <FaEnvelope className="text-black hover:text-[var(--primary)] transition-colors text-xl" />
            </Link>
            <Link href="tel:+201100445395">
              <FaPhone className="text-black hover:text-[var(--primary)] transition-colors text-xl" />
            </Link>
          </div>
          <button
            onClick={top}
            className="fixed bottom-16 right-6 p-3 rounded-full bg-[var(--primary)] text-white shadow-md transition-opacity"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
