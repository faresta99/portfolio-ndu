import { motion } from "framer-motion";
import satu from "../assets/1.png";

export default function Home() {
  return (
    <section className="pt-5 md:pr-32 min-h-screen flex flex-col md:flex-row items-center px-6 md:px-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        
        {/* Kolom Kiri: Teks */}
        <motion.div
          className="text-center md:text-left max-w-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Hi, I'm <span className="text-blue-500 dark:text-pink-400">Opik</span>
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl">
            A Frontend Developer passionate about creating amazing web experiences.
          </p>

          {/* Tombol CTA */}
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition"
            >
              My Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white rounded-xl shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Kolom Kanan: Gambar */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={satu}
            alt="Developer Illustration"
            className="w-48 sm:w-64 md:w-80 rounded-lg shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}
