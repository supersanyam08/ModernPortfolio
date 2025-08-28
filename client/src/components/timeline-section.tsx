import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2023",
    title: "Procol - SaaS Growth Intern",
    description: "Drove growth initiatives, analyzed user behavior, and optimized conversion funnels for B2B SaaS platform.",
    color: "bg-accent",
    side: "left"
  },
  {
    year: "2022",
    title: "IIT Roorkee - Research Intern",
    description: "Developed PCB solutions for soil and weather monitoring systems with integrated IoT capabilities.",
    color: "bg-primary",
    side: "right"
  },
  {
    year: "2019-2023",
    title: "Electronics Engineering",
    description: "Bachelor's degree with focus on embedded systems, signal processing, and circuit design.",
    color: "bg-purple-500",
    side: "left"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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

export default function TimelineSection() {
  return (
    <section className="py-20 bg-card" id="timeline">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="timeline-title">My Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A timeline of my educational background and professional experiences.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-purple-500 h-full rounded-full"></div>

            <motion.div
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center relative"
                  variants={itemVariants}
                  data-testid={`timeline-item-${index}`}
                >
                  {item.side === "left" ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <div className="glass-card p-6 rounded-xl">
                          <div className="text-primary font-bold text-lg">{item.year}</div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${item.color} rounded-full border-4 border-background shadow-lg`}></div>
                      <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8"></div>
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${item.color} rounded-full border-4 border-background shadow-lg`}></div>
                      <div className="w-1/2 pl-8">
                        <div className="glass-card p-6 rounded-xl">
                          <div className="text-accent font-bold text-lg">{item.year}</div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
