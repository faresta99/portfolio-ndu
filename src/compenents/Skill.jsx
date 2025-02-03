import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: 80 },
    { name: "React", icon: <FaReact className="text-blue-400" />, level: 75 },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" />, level: 70 },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 65 }
  ];

  return (
    <section className="py-20 px-10 bg-gray-100 dark:bg-[#121826]">
      {/* Animated Header with Scroll Trigger */}
      <motion.h2
        className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      {/* Animated Skill Cards Container */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}  // Hover effect for scaling
          >
            <div className="text-5xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
              <motion.div
                className="bg-blue-500 h-3 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
