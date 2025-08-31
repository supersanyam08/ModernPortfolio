import Navbar from "./navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";
import { FaLaptopCode, FaChartLine, FaBookOpen, FaUserTie } from "react-icons/fa";
import { GiRocket } from "react-icons/gi";

import { FaCog } from "react-icons/fa";


/** ---------------- Constellation Background ---------------- */
function ConstellationBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const cfg = {
      speed: 0.15,
      linkDist: 120,
      density: 0.00015,
      maxParticles: 180,
      dotSize: 2,
    };

    function resize() {
      const { clientWidth, clientHeight } = canvas.parentElement!;
      canvas.width = Math.floor(clientWidth * DPR);
      canvas.height = Math.floor(clientHeight * DPR);
      canvas.style.width = `${clientWidth}px`;
      canvas.style.height = `${clientHeight}px`;

      const area = clientWidth * clientHeight;
      const target = Math.min(Math.floor(area * cfg.density), cfg.maxParticles);
      particles = new Array(target).fill(0).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * cfg.speed * DPR,
        vy: (Math.random() - 0.5) * cfg.speed * DPR,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      const r = cfg.dotSize * DPR;

      for (const p of particles) {
  p.x += p.vx;
  p.y += p.vy;

  if (mouseRef.current) {
    const mx = mouseRef.current.x * DPR;
    const my = mouseRef.current.y * DPR;
    p.vx += ((p.x - mx) / canvas.width) * -0.002;
    p.vy += ((p.y - my) / canvas.height) * -0.002;
  }

  // Wrap around edges
  if (p.x < -r) p.x = canvas.width + r;
  if (p.x > canvas.width + r) p.x = -r;
  if (p.y < -r) p.y = canvas.height + r;
  if (p.y > canvas.height + r) p.y = -r;

  // 🎨 Glow effect for bottom particles
  const inBottomZone = p.y > canvas.height * 0.7;
  ctx.fillStyle = inBottomZone 
    ? "rgba(99, 102, 241, 0.9)"   // brighter indigo glow
    : "rgba(255,255,255,0.7)";   // normal

  ctx.beginPath();
  ctx.arc(p.x, p.y, r * (inBottomZone ? 1.6 : 1), 0, Math.PI * 2);
  ctx.fill();
}


      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy) / DPR;
          if (d < cfg.linkDist) {
            const alpha = 1 - d / cfg.linkDist;
            ctx.strokeStyle = `rgba(150, 170, 255, ${0.15 * alpha})`;
            ctx.lineWidth = DPR * 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function onMouseLeave() {
      mouseRef.current = null;
    }

    resize();
    step();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-60"
    />
  );
}
/** ---------------- End Constellation Background ---------------- */

// Rotating slides with icons
const slides = [
  {
    id: 1,
    heading: "Now Building",
    text: "Designing and coding this personal portfolio with modern animations and storytelling.",
    icon: <FaLaptopCode className="w-12 h-12 text-primary mb-4" />,
  },
  {
    id: 2,
    heading: "Currently Exploring",
    text: "Sharpening skills in SQL, Python, and Tableau through analytics projects.",
    icon: <FaChartLine className="w-12 h-12 text-green-400 mb-4" />,
  },
  {
    id: 3,
    heading: "Experimenting With",
    text: "Studying market research, consulting cases, and strategy for real-world impact.",
    icon: <FaUserTie className="w-12 h-12 text-purple-400 mb-4" />,
  },
  {
    id: 4,
    heading: "Learning",
    text: "Expanding beyond tech — currently learning French to connect globally.",
    icon: <FaBookOpen className="w-12 h-12 text-pink-400 mb-4" />,
  },
  {
    id: 5,
    heading: "Next Up",
    text: "Preparing for consulting & analyst interviews, bridging tech with business strategy.",
    icon: <GiRocket className="w-12 h-12 text-yellow-400 mb-4" />,
  },
];

const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="bg-gradient-to-br from-[#0a0f2c] via-[#0d1235] to-[#0a0f2c] min-h-screen flex items-start justify-center pt-32 relative overflow-hidden">
      {/* animated background */}
      <ConstellationBg />
      <Navbar />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side */}
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sanyam Agarwal
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Problem Solving | Business Analytics | Strategy
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground transform hover:scale-105 transition-all duration-300"
            >
              <a href="/Sanyam_CV.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </Button>
          </motion.div>
        </div>

        {/* Right side - Now Building Panel */}
        <motion.div
          className="lg:flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              className="glass-card p-6 rounded-2xl max-w-md w-full animate-float shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-shadow duration-500"

              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {currentSlide.icon}
              <h3 className="text-2xl font-bold mb-3">{currentSlide.heading}</h3>
              <p className="text-muted-foreground text-lg">{currentSlide.text}</p>

              {/* Progress indicator */}
              <div className="flex gap-2 justify-center mt-4">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary" : "bg-primary/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      {/* Scroll Cue Arrow */}
<motion.div
  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
  onClick={() => {
    const nextSection = document.getElementById("about"); // 👈 change "about" to the id of your next section
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 text-primary drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]"

    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" />
  </svg>
</motion.div>
{/* Tech Stack Box */}
<motion.div
  className="absolute bottom-4 left-4 glass-card px-4 py-3 rounded-xl text-xs md:text-sm shadow-lg bg-white/10 backdrop-blur-md"
  initial={{ opacity: 0, x: 30, y: 30 }}
  animate={{ opacity: 1, x: 0, y: 0 }}
  transition={{ duration: 0.8, delay: 1.2 }}
  whileHover={{ scale: 1.05 }}
>
  <p className="font-semibold text-primary mb-1">Built This With</p>
  <ul className="space-y-1 text-muted-foreground">
  <li>⚛️ React + Vite</li>
  <li>🎨 TailwindCSS</li>
  <li>🎬 Framer Motion</li>
  <li>📦 TypeScript</li>
  <li>🤖 Prompt Engineering</li>
  </ul>
</motion.div>


    </section>
  );
}
