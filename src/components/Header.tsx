import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Saira } from "next/font/google";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const saira = Saira({
    subsets: ["latin"], // Supports different character sets
    weight: "400",      // Specify font weight
    variable: "--font-sancreek", // Optional CSS variable
});

const dropdownVariants = {
    open: {
      y: 0, // Slide down
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      y: "-100%", // Slide up and out of view
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      }
    }
  }

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null)
    const navbarRef = useRef<HTMLDivElement>(null);
    const [navbarHeight, setNavBarHeight] = useState(0);

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

    useEffect(() => {
        // Calculate dropdown top position
        if (navbarRef.current) {
            setNavBarHeight(navbarRef.current.offsetHeight); //72px// Update state
            console.log(navbarRef.current.offsetHeight);
        }
    }, []);

    useEffect(() => {
        if (menuRef.current && isMenuOpen && navbarHeight > 0) {
            menuRef.current.style.marginTop = `${navbarHeight}px`;
        } else if (menuRef.current) {
            menuRef.current.style.top = ``;
        }
    }, [isMenuOpen, navbarHeight]); // Add navbarHeight as a dependency

    return (
        <>
        <header ref={navbarRef} className="bg-[#C7DFFF] bg-gradient-to-r from-[#dbeafe] to-[#bedbff] flex justify-between items-center py-4 px-6 fixed w-full z-50">
          <Link href="/" className="flex items-center">
            <Image alt="logo" src="/logo-transparent.png" width={40} height={40} />
            <span className={`text-[#193cb8] text-xl font-bold ${saira.className}`}>Nova Chat</span>
          </Link>

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
            className='hidden md:flex flex-row justify-between items-center space-x-4'
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
      </header>
      <AnimatePresence>
        {isMenuOpen && (
        <motion.div
            initial={{ opacity: 0, x: 100, transition: {duration: 0.4, ease: "easeInOut"} }}
            animate={{ opacity: 1, x: 0, transition: {duration: 0.4, ease: "easeInOut"} }}
            exit={{ opacity: 0, x: 100, transition: {duration: 0.4, ease: "easeInOut"} }}
            className="md:hidden bg-[#111] space-x-4"
        >
            <div ref={menuRef} className="flex flex-col w-full sm:w-1/2 bg-[#fff] fixed right-0 z-50">
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
      </AnimatePresence>
      </>
    );
};