import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCog } from "react-icons/fa";

export default function TechStackBox() {
  const [open, setOpen] = useState(true); // Initially visible
  const [autoCollapsed, setAutoCollapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false); // auto collapse
      setAutoCollapsed(true);
    }, 3000); // 👈 visible for 3s before collapsing
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute bottom-4 right-4 z-30">
      {/* ⚙️ Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="absolute -top-3 -left-3 bg-primary text-white p-2 rounded-full shadow-md hover:rotate-90 transform transition-transform"
      >
        <FaCog className="w-4 h-4" />
      </button>

      {/* Collapsible Box */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 30, y: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 30, y: 30 }}
            transition={{ duration: 0.4 }}
            className="glass-card px-4 py-3 rounded-xl text-xs md:text-sm shadow-lg bg-white/10 backdrop-blur-md w-48"
          >
            <p className="font-semibold text-primary mb-1">Tech Stack</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>⚛️ React + Vite</li>
              <li>🎨 TailwindCSS</li>
              <li>🎬 Framer Motion</li>
              <li>📦 TypeScript</li>
              <li>💻 Replit</li>
              <li>🤖 Prompt Engineering</li>
              <li>🔗 Git & GitHub</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
