import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Inter, Saira } from "next/font/google";

const sancreek = Saira({
    subsets: ["latin"], // Supports different character sets
    weight: "400",      // Specify font weight
    variable: "--font-sancreek", // Optional CSS variable
});

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <header className="bg-[#C7DFFF] bg-gradient-to-r from-[#dbeafe] to-[#bedbff] py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Image alt="logo" src="/logo-transparent.png" width={40} height={40} />
            <span className={`text-[#193cb8] text-xl font-bold ${sancreek.className}`}>Nova Chat</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#fff]">
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
            <Link href="/features" className="text-[#2D72CB] text-lg font-bold hover:text-white">
              Features
            </Link>
            <Link href="/pricing" className="text-[#2D72CB] text-lg font-bold hover:text-white">
              Pricing
            </Link>
            <Link href="/contact" className="text-[#2D72CB] text-lg font-bold hover:text-white">
              Testimonials
            </Link>
          </nav>
        </div>
      </header>
    );
};