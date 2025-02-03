import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.jpg";

export default function Projects() {
  const projects = [
    { id: 1, title: "Study", image: project1 },
    { id: 2, title: "Scool", image: project2 },
    { id: 3, title: "Portfolio", image: project3 },
    { id: 4, title: "Blog", image: project4 },
    { id: 5, title: "learning", image: project5 },
    { id: 6, title: "website", image: project6 },
    { id: 7, title: "Shop", image: project7 },
    { id: 8, title: "Game", image: project8 },
  ];

  const projectsPerRow = 4;  // Menampilkan 4 proyek per baris
  const totalRows = Math.ceil(projects.length / projectsPerRow);

  const [currentRow, setCurrentRow] = useState(0);

  const nextRow = () => {
    if (currentRow < totalRows - 1) {
      setCurrentRow(currentRow + 1);
    }
  };

  const prevRow = () => {
    if (currentRow > 0) {
      setCurrentRow(currentRow - 1);
    }
  };

  const currentProjects = projects.slice(
    currentRow * projectsPerRow,
    (currentRow + 1) * projectsPerRow
  );

  return (
    <section className="min-h-screen py-20 px-10 bg-gray-100 dark:bg-[#121826] flex flex-col items-center">
      {/* Animated Header with Scroll Trigger */}
      <motion.h2
        className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* Animated Project Container */}
      <motion.div
        className="relative w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {currentProjects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Navigation Buttons */}
      <div className="mt-8 md:flex justify-between w-full max-w-6xl hidden">
        <motion.button
          onClick={prevRow}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
          disabled={currentRow === 0}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FaChevronLeft size={24} />
        </motion.button>
        <motion.button
          onClick={nextRow}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
          disabled={currentRow === totalRows - 1}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FaChevronRight size={24} />
        </motion.button>
      </div>
    </section>
  );
}
