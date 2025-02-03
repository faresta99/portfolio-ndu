import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-[#121826] px-6 py-20">
      {/* Animasi Heading */}
      <motion.h2
        className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>
      
      {/* Animasi Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Media Icons with Animation */}
      <motion.div
        className="flex space-x-4 mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
          <FaFacebook size={28} />
        </a>
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
          <FaTwitter size={28} />
        </a>
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
          <FaLinkedin size={28} />
        </a>
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
          <FaGithub size={28} />
        </a>
      </motion.div>
    </section>
  );
}
