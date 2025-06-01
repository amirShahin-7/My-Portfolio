"use client";

import * as Icons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { motion } from "framer-motion";

const SkillItem = ({ name, icon }) => {
  const IconComponent = Icons[icon] || SiIcons[icon] || Icons.FaCode;

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="max-w-56 bg-gradient-to-r from-[#7bdff2] to-[#b2f7ef] dark:from-[#4da8c7] dark:to-[#80c9c0] p-4 rounded-lg flex items-center gap-3 border-l-4 border-[#f2b5d4] dark:border-[#c286a6] hover:border-[#f7d6e0] dark:hover:border-[#d4a9b5] transition-colors"
    >
      <IconComponent className="text-2xl" />
      <span className="text-[var(--foreground)]">{name}</span>
    </motion.div>
  );
};

export default SkillItem;
