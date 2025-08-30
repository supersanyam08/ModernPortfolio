"use client";
import { motion } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-0 z-50 bg-background/60 backdrop-blur-lg px-6 py-3 rounded-full shadow-lg flex gap-6"
    >
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          {item.name}
        </a>
      ))}
    </motion.nav>
  );
}
