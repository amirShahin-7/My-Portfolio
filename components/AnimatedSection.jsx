"use client";

import { motion } from "framer-motion";

const AnimatedSection = ({ children, direction = "left" }) => {
  const initialX = direction === "left" ? -100 : 100;

  return (
    <motion.section
      initial={{ x: initialX, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="w-full"
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
