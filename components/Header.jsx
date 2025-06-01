"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import NavMenu from "./NavMenu";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const navLinks = [
    { href: "/", label: "Home", active: true },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "about" },
  ];

  return (
    <header className="bg-[var(--background-gradient)] backdrop-blur-lg flex items-center justify-around py-4 px-6 shadow-md">
      <Link href="/">
        <span className="text-2xl font-bold text-[var(--foreground)]">
          Portfolio
        </span>
      </Link>
      <div className="flex items-center  gap-4">
        <nav className="hidden md:flex gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[var(--foreground)] hover:text-[var(--primary)] transition-colors ${
                link.active ? "font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={toggleTheme}
          className="text-[var(--foreground)] text-2xl"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
