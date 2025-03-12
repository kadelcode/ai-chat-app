import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <header className="bg-gray-800 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">AI Chat App</div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav
            className={`md:flex space-x-4 ${
              isMenuOpen ? 'flex flex-col mt-4' : 'hidden md:flex'
            }`}
          >
            <a href="/" className="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="/features" className="text-gray-300 hover:text-white">
              Features
            </a>
            <a href="/pricing" className="text-gray-300 hover:text-white">
              Pricing
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>
    );
};