import { motion } from "framer-motion";
import { FaPython, FaFigma, FaFileExcel, FaReact } from "react-icons/fa";
import {
  SiMysql,
  SiTableau,
  SiHubspot,
  SiLibreofficemath,
  SiFlask,
} from "react-icons/si";
import { MdOutlineScience, MdAutoMode } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiBookshelf } from "react-icons/gi";

const skills = [
  { name: "SQL", icon: <SiMysql className="text-4xl text-primary" />, usage: "Used in Smart Inventory project for database queries" },
  { name: "Python", icon: <FaPython className="text-4xl text-yellow-400" />, usage: "Capstone project (Pandas, NumPy, regression models)" },
  { name: "Excel", icon: <FaFileExcel className="text-4xl text-green-500" />, usage: "Pivot tables & VBA during Procol internship" },
  { name: "Power BI", icon: <SiTableau className="text-4xl text-yellow-500" />, usage: "Visualized supply chain analytics" },
  

  { name: "HubSpot", icon: <SiHubspot className="text-4xl text-orange-500" />, usage: "Managed CRM during Procol SaaS growth" },
  { name: "Figma", icon: <FaFigma className="text-4xl text-pink-500" />, usage: "Created dashboard wireframes" },
  { name: "MATLAB", icon: <SiLibreofficemath className="text-4xl text-blue-500" />, usage: "Signal analysis at IIT Roorkee internship" },
  { name: "Flask", icon: <SiFlask className="text-4xl text-gray-300" />, usage: "Built backend for inventory project" },

  { name: "Market Research", icon: <MdOutlineScience className="text-4xl text-purple-500" />, usage: "Competitor study during Procol internship" },
  { name: "Optimization", icon: <MdAutoMode className="text-4xl text-cyan-400" />, usage: "Workflow automation in capstone project" },
  { name: "Engagement", icon: <HiOutlineUserGroup className="text-4xl text-teal-400" />, usage: "Client demos at Procol" },
  { name: "Case Analysis", icon: <GiBookshelf className="text-4xl text-indigo-400" />, usage: "Prepared business cases in academics" },
];

const SkillItem = ({ skill, index }: { skill: any; index: number }) => (
  <motion.div
    className="relative flex flex-col items-center space-y-2 group cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.05 }}
    whileHover={{
      scale: 1.15,
      transition: { type: "tween", duration: 0.2, ease: "easeOut" },
    }}
  >
    {/* Icon */}
    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-muted/30 shadow-md transition-all duration-300 group-hover:shadow-primary/50">
      {skill.icon}
    </div>

    {/* Skill Name */}
    <span className="font-semibold text-center text-sm">{skill.name}</span>

    {/* Hover Tooltip */}
    <div className="absolute bottom-full mb-3 hidden group-hover:block bg-background text-foreground text-xs px-3 py-2 rounded-lg shadow-md w-48 text-center z-50">
      {skill.usage}
    </div>
  </motion.div>
);



export default function SkillsSection() {
  return (
    <section className="py-20" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Technical & Analytical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my proficiency in tools, technologies, and problem-solving competencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
