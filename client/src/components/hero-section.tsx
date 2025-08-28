import { motion } from "framer-motion";
import { Download, Mail, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

export default function HeroSection() {
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
          <motion.div
            className="glass-card p-6 rounded-2xl max-w-md w-full animate-float"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            data-testid="featured-project-card"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                Hardware/IoT
              </span>
            </div>

            <div className="mb-4 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <Cpu className="w-16 h-16 text-primary/50" />
            </div>

            <h3 className="text-xl font-bold mb-2">Soil & Weather Monitoring PCB</h3>
            <p className="text-muted-foreground mb-4">
              Advanced IoT solution for real-time environmental monitoring with integrated sensors and wireless connectivity.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">Arduino</span>
              <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">PCB Design</span>
              <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">IoT</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
