import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground" data-testid="footer-copyright">
            © {currentYear} Sanyam Agarwal. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground" data-testid="footer-tech">
            Built with{" "}
            <span className="text-primary">React</span> ·{" "}
            <span className="text-accent">Framer Motion</span> ·{" "}
            <span className="text-purple-400">Tailwind</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
