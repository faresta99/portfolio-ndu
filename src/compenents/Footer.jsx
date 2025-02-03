import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="dark:bg-[#1a1a2e] text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Tentang Saya */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">About Me</h3>
            <p className="text-gray-400">
              A passionate Frontend Developer who loves crafting beautiful and functional user experiences.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-500">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500">About</a></li>
              <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
              <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Contact Me</h3>
            <p className="flex items-center justify-center md:justify-start space-x-2 text-gray-400">
              <FaEnvelope /> <span>opik@example.com</span>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2 text-gray-400 mt-2">
              <FaPhone /> <span>+62 812-3456-7890</span>
            </p>
          </div>
        </div>

        {/* Sosial Media */}
        <div className="flex justify-center md:justify-between items-center mt-8 border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Opik | All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-blue-500">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-blue-500">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-blue-500">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" className="text-gray-400 hover:text-blue-500">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
