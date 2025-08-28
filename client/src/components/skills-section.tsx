import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const skills = [
  { name: "Excel", percentage: 85 },
  { name: "SQL", percentage: 80 },
  { name: "Python", percentage: 75 },
  { name: "Tableau", percentage: 70 },
  { name: "HubSpot", percentage: 65 },
];

const SkillBar = ({ skill, index }: { skill: { name: string; percentage: number }; index: number }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            width: `${skill.percentage}%`,
            transition: { duration: 2, delay: index * 0.1 },
          });
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [controls, skill.percentage, index]);

  return (
    <motion.div
      ref={ref}
      className="skill-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      data-testid={`skill-${skill.name.toLowerCase()}`}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold">{skill.name}</span>
        <span className="text-primary font-bold">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-3">
        <motion.div
          className="bg-gradient-to-r from-primary to-accent h-3 rounded-full"
          initial={{ width: "0%" }}
          animate={controls}
        />
      </div>
    </motion.div>
  );
};

export default function SkillsSection() {
  return (
    <section className="py-20" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="skills-title">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My proficiency across various technologies and tools I use in my daily work.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
