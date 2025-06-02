"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setIsVisible(scrollPercentage < 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const yOffset = -80; 
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
  setIsMobileMenuOpen(false);
};

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-white/95 backdrop-blur-sm border-b border-gray-100 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className=" mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <button onClick={() => scrollToSection("hero")}>
              <Image
                src="/logo.png"
                alt="Igba Ayo Logo"
                width={120}
                height={60}
                className="h-8 sm:h-12 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("personal")}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Personal
            </button>
            <button
              onClick={() => scrollToSection("business")}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Business
            </button>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-gray-900 text-sm lg:text-base"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
            <Button
              className="bg-slate-800 hover:bg-slate-700 text-white px-4 lg:px-6 text-sm lg:text-base"
              onClick={() => scrollToSection("download")}
            >
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("personal")}
                className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium"
              >
                Personal
              </button>
              <button
                onClick={() => scrollToSection("business")}
                className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium"
              >
                Business
              </button>
              <div className="pt-4 space-y-2">
                <Button
                  variant="ghost"
                  className="w-full text-gray-700 hover:text-gray-900"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Us
                </Button>
                <Button
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white"
                  onClick={() => scrollToSection("download")}
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
