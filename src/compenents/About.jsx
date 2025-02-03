import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg"; // Ganti dengan gambarmu

export default function About() {
  return (
    <section className="md:h-screen py-8 flex flex-col md:grid md:grid-cols-2 items-center md:gap-20 px-6 md:px-16 bg-gray-100 dark:bg-gray-900">
      
      {/* Kolom Kiri: Gambar */}
      <motion.div
        className="flex justify-center md:justify-end mb-6 md:mb-0 md:pr-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={profile}
          alt="Profile"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Kolom Kanan: Teks */}
      <motion.div
        className="text-center md:text-left flex flex-col justify-center max-w-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-800 dark:text-gray-400 leading-relaxed">
          I’m a passionate <span className="text-blue-600 dark:text-yellow-400">Frontend Developer</span> 
          who loves crafting beautiful and functional user experiences. 
          With expertise in <span className="font-semibold">React, Tailwind CSS, and Three.js</span>, 
          I enjoy bringing ideas to life through clean and interactive designs.
        </p>

        {/* Tombol CTA */}
        <div className="mt-6 flex justify-center md:justify-start">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
      
    </section>
  );
}
