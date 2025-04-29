import { AlignJustifyIcon } from "lucide-react";
import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  });
  return (
    <nav
      className="fixed top-0 z-40 w-full bg-[rgba(10,10,10,0.7)]
   backdrop-blur-lg border-b border-white/10 shadow-lg "
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="font-mono text-xl font-bold text-white">
            <span className="text-blue-500">Portfolio</span>
          </a>

          {/* For smaller screens */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <AlignJustifyIcon />
          </div>

          {/* for bigger screens */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#skill"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Skill
            </a>
            <a
              href="#project"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
