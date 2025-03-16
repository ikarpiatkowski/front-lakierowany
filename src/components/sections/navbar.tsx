"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Start", href: "#home" },
  { label: "Oferta", href: "#features" },
  { label: "Produkty", href: "#offer" },
  { label: "O nas", href: "#about" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDarkMode = theme === "dark";
  const isHeroSection = !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            onClick={() => scrollToSection("#home")}
            className="flex items-center"
          >
            <div className="relative">
              {scrolled || isDarkMode ? (
                <div className="flex items-center">
                  <div className="bg-secondary rounded-md h-8 w-8 flex items-center justify-center mr-2">
                    <span className="font-bold">FL</span>
                  </div>
                  <span className="font-bold text-lg">Front Lakierowany</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <div className="bg-secondary rounded-md h-8 w-8 flex items-center justify-center mr-2">
                    <span className="font-bold">FL</span>
                  </div>
                  <span className="font-bold text-white text-lg">
                    Front Lakierowany
                  </span>
                </div>
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={cn(
                  "text-sm font-medium transition-colors relative",
                  !scrolled
                    ? "text-white/80 hover:text-white" // When not scrolled (transparent bg)
                    : "text-foreground/80 hover:text-foreground" // When scrolled
                )}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className={cn(
                      "absolute -bottom-1 left-0 right-0 h-0.5",
                      !scrolled ? "bg-white" : "bg-primary"
                    )}
                  />
                )}
              </Link>
            ))}
            <ThemeToggle isTransparent={!scrolled} />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle isTransparent={!scrolled} />
            <button
              className="focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X
                  className={isHeroSection && !isDarkMode ? "text-white" : ""}
                />
              ) : (
                <Menu
                  className={isHeroSection && !isDarkMode ? "text-white" : ""}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background dark:bg-neutral-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={cn(
                      "py-2 text-sm font-medium transition-colors",
                      activeSection === item.href.substring(1) &&
                        "text-primary font-semibold"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
