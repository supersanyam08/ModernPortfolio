import { motion } from "framer-motion";
import { Cpu, Database, TrendingUp, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Soil & Weather Monitoring PCB",
    description: "Advanced IoT solution for real-time environmental monitoring with integrated sensors, wireless connectivity, and data analytics dashboard.",
    category: "Hardware/IoT",
    categoryColor: "bg-accent text-accent-foreground",
    icon: Cpu,
    tech: ["Arduino", "PCB Design", "IoT", "Sensors"],
    gradient: "from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20"
  },
  {
    id: 2,
    title: "Smart Inventory Management",
    description: "Capstone project featuring automated inventory tracking, predictive analytics, and real-time dashboard for supply chain optimization.",
    category: "Software",
    categoryColor: "bg-primary text-primary-foreground",
    icon: Database,
    tech: ["Python", "SQL", "Tableau", "Analytics"],
    gradient: "from-accent/10 to-primary/10 group-hover:from-accent/20 group-hover:to-primary/20"
  },
  {
    id: 3,
    title: "Procol SaaS Growth",
    description: "Drove user acquisition and retention strategies, implemented growth experiments, and analyzed customer behavior to optimize conversion funnel.",
    category: "Business",
    categoryColor: "bg-purple-500 text-white",
    icon: TrendingUp,
    tech: ["HubSpot", "Analytics", "Growth", "SaaS"],
    gradient: "from-purple-500/10 to-primary/10 group-hover:from-purple-500/20 group-hover:to-primary/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ProjectsSection() {
  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="projects-title">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning hardware development, software engineering, and business growth initiatives.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="glass-card p-6 rounded-2xl group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              data-testid={`project-card-${project.id}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`${project.categoryColor} px-3 py-1 rounded-full text-sm font-medium`}>
                  {project.category}
                </span>
              </div>

              <div className={`mb-4 h-32 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center transition-all duration-300`}>
                <project.icon className="w-12 h-12 text-primary/50" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button className="text-primary hover:text-accent transition-colors font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                View Details
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
