import { useState, useEffect } from "react";

export default function Navbar() {
  // Baca localStorage untuk dark mode
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">Opik</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-pink-400">Home</a></li>
          <li><a href="#" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-pink-400">About</a></li>
          <li><a href="#" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-pink-400">Projects</a></li>
          <li><a href="#" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-pink-400">Skills</a></li>
          <li><a href="#" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-pink-400">Contact</a></li>
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full ml-4 text-gray-900 dark:text-white"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-900 dark:text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
          <ul className="space-y-4 text-center">
            <li><a href="#" className="block text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-pink-400">Home</a></li>
            <li><a href="#" className="block text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-pink-400">About</a></li>
            <li><a href="#" className="block text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-pink-400">Projects</a></li>
            <li><a href="#" className="block text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-pink-400">Skills</a></li>
            <li><a href="#" className="block text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-pink-400">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
