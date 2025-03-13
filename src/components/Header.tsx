import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Saira } from "next/font/google";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const saira = Saira({
    subsets: ["latin"], // Supports different character sets
    weight: "400",      // Specify font weight
    variable: "--font-sancreek", // Optional CSS variable
});

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null)

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target as Node)) {
                    setIsMenuOpen(false)
            }
        }
        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [isMenuOpen]);

    return (
        <>
        <header className="bg-[#C7DFFF] bg-gradient-to-r from-[#dbeafe] to-[#bedbff] py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Image alt="logo" src="/logo-transparent.png" width={40} height={40} />
            <span className={`text-[#193cb8] text-xl font-bold ${saira.className}`}>Nova Chat</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button ref={menuButtonRef} onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#193cb8] bg-[#fff] hover:bg-[#f3f4f6] cursor-pointer">
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
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav
            className='hidden md:flex flex-row justify-between items-center space-x-4 mt-4'
          >
            <Link href="/features" className="text-[#193cb8] text-lg hover:text-[#2D72CB]">
              Features
            </Link>
            <Link href="/pricing" className="text-[#193cb8] text-lg hover:text-[#2D72CB]">
              Pricing
            </Link>
            <Link href="/contact" className="text-[#193cb8] text-lg hover:text-[#2D72CB]">
              Testimonials
            </Link>
          </nav>
        </div>
      </header>
      {isMenuOpen && (
      <motion.div
        initial={{ opacity: 0, x: 100, transition: {duration: 0.6, ease: "easeInOut"} }}
        animate={{ opacity: 1, x: 0, transition: {duration: 0.6, ease: "easeInOut"} }}
        exit={{ opacity: 0, y: 100, transition: {duration: 0.6, ease: "easeInOut"} }}
        ref={menuRef}
        className="md:hidden bg-[#111] space-x-4"
      >
        <div className="flex flex-col w-full sm:w-1/2 bg-[#fff] fixed right-0">
        <Link href="/features" className="text-[#193cb8] ml-3 mt-3 mb-2 text-lg hover:text-[#2D72CB]">
          Features
        </Link>
        <Link href="/pricing" className="text-[#193cb8] ml-3 text-lg mb-2 hover:text-[#2D72CB]">
          Pricing
        </Link>
        <Link href="/contact" className="text-[#193cb8] ml-3 text-lg mb-3 hover:text-[#2D72CB]">
          Testimonials
        </Link>
        </div>
      </motion.div>
      )}
      </>
    );
};