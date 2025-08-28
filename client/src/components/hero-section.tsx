import { motion, AnimatePresence } from "framer-motion";
import { Download, Mail, Cpu, Database, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Soil & Weather Monitoring PCB",
    description: "Advanced IoT solution for real-time environmental monitoring with integrated sensors and wireless connectivity.",
    category: "Hardware/IoT",
    categoryColor: "bg-accent text-accent-foreground",
    icon: Cpu,
    tech: ["Arduino", "PCB Design", "IoT"],
    gradient: "from-primary/20 to-accent/20"
  },
  {
    id: 2,
    title: "Smart Inventory Management",
    description: "Capstone project featuring automated inventory tracking, predictive analytics, and real-time dashboard for supply chain optimization.",
    category: "Software",
    categoryColor: "bg-primary text-primary-foreground",
    icon: Database,
    tech: ["Python", "SQL", "Tableau"],
    gradient: "from-accent/20 to-primary/20"
  },
  {
    id: 3,
    title: "Procol SaaS Growth",
    description: "Drove user acquisition and retention strategies, implemented growth experiments, and analyzed customer behavior to optimize conversion funnel.",
    category: "Business",
    categoryColor: "bg-purple-500 text-white",
    icon: TrendingUp,
    tech: ["HubSpot", "Analytics", "Growth"],
    gradient: "from-purple-500/20 to-primary/20"
  }
];

const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

export default function HeroSection() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentProject = projects[currentProjectIndex];

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-testid="hero-name"
            >
              Sanyam Agarwal
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-testid="hero-tagline"
            >
              Electronics Engineer | Data, Product & Finance Enthusiast
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
              data-testid="button-download-cv"
            >
              <a href="/Sanyam_Agarwal_CV.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300"
              data-testid="button-contact"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="lg:flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              className="glass-card p-6 rounded-2xl max-w-md w-full animate-float"
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              data-testid="featured-project-card"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`${currentProject.categoryColor} px-3 py-1 rounded-full text-sm font-medium`}>
                  {currentProject.category}
                </span>
              </div>

              <div className={`mb-4 h-48 bg-gradient-to-br ${currentProject.gradient} rounded-lg flex items-center justify-center transition-all duration-300`}>
                <currentProject.icon className="w-16 h-16 text-primary/50" />
              </div>

              <h3 className="text-xl font-bold mb-2">{currentProject.title}</h3>
              <p className="text-muted-foreground mb-4">
                {currentProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {currentProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Progress indicator */}
              <div className="flex gap-2 justify-center">
                {projects.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentProjectIndex ? 'bg-primary' : 'bg-primary/30'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
