import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Globe, Target } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutSection() {
  return (
    <section className="py-20 bg-card" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-4xl font-bold gradient-text"
              variants={itemVariants}
              data-testid="about-title"
            >
              About Me
            </motion.h2>
            <motion.div
  className="space-y-4 text-lg text-muted-foreground leading-relaxed"
  variants={itemVariants}
>
  {/* Mobile version (shortened) */}
  <div className="block md:hidden space-y-3">
    <p>
      <strong>Electronics Engineer</strong> with experience in PCB design, data analysis, and SaaS growth.  
      Skilled in <strong>Excel, SQL, Python, Tableau, HubSpot</strong>.  
    </p>
    <p>
      Passionate about solving real problems by blending <strong>technology and strategy</strong>.
    </p>
  </div>

  {/* Desktop / tablet version (full) */}
  <div className="hidden md:block space-y-4">
    <p data-testid="about-education">
      I'm an <strong>Electronics Engineering graduate</strong> with a passion for bridging the gap between 
      technical innovation and business impact. My journey spans from designing PCB circuits to analyzing 
      data patterns and driving SaaS growth.
    </p>
    <p data-testid="about-experience">
      Through my internships at <strong>IIT Roorkee</strong> (PCB project development) and{" "}
      <strong>Procol</strong> (SaaS growth initiatives), I've developed a unique blend of technical 
      expertise and business acumen. I thrive at the intersection of technology and strategy.
    </p>
    <p data-testid="about-skills">
      I'm proficient in <strong>Excel, SQL, Python, Tableau, and HubSpot</strong>, with hands-on 
      experience in data analysis, product development, and growth marketing. I believe in the power 
      of data-driven decision making and user-centric product development.
    </p>
  </div>
</motion.div>

          </motion.div>

          <motion.div
            className="glass-card p-6 rounded-2xl h-fit"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            data-testid="quick-facts-card"
          >
            <h3 className="text-xl font-bold mb-6 text-accent">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="font-medium">Education</div>
                  <div className="text-sm text-muted-foreground">Electronics Engineering Graduate</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="font-medium">Experience</div>
                  <div className="text-sm text-muted-foreground">
                    <div>Procol - SaaS Growth</div>
                    <div>IIT Roorkee - PCB Development</div>
                    
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="font-medium">Languages</div>
                  <div className="text-sm text-muted-foreground">
                    <div>English (Fluent)</div>
                    <div>French (Learning)</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="font-medium">Open to Roles</div>
                  <div className="text-sm text-muted-foreground">
                    <div>Business Analyst</div>
                    <div>Data Analyst</div>
                    <div>Associate Product Manager</div>
                    
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
