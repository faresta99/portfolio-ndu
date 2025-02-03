import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Tech Company",
    feedback: "Great developer! Delivered the project on time with excellent quality.",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Project Manager, Web Agency",
    feedback: "Professional and skilled frontend developer. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "CTO, Startup Inc.",
    feedback: "Fantastic work! The UI/UX exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-6">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">
        Testimonials
      </h2>

      <motion.div
        className="relative w-full max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }} // Ketika elemen berada di dalam viewport
        transition={{ duration: 0.8 }}
      >
        <FaQuoteLeft className="text-4xl text-gray-400 mb-4 mx-auto" />
        <motion.p
          key={testimonials[index].id}
          className="text-lg text-gray-800 dark:text-gray-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          "{testimonials[index].feedback}"
        </motion.p>
        <motion.div
          className="mt-4 flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="w-16 h-16 rounded-full border-2 border-blue-500"
          />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">
            {testimonials[index].name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {testimonials[index].role}
          </p>
        </motion.div>
      </motion.div>

      {/* Navigasi */}
      <div className="flex space-x-4 mt-6">
        <button
          onClick={prevTestimonial}
          className="p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
