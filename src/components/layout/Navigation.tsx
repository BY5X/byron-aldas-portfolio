"use client";

import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollThreshold } from "@/lib/hooks";

// Memoize the navigation links to prevent unnecessary re-renders
const NavLinks = memo(({ isMobile = false, onLinkClick }: { isMobile?: boolean; onLinkClick?: () => void }) => (
  <nav className={`${isMobile ? 'flex flex-col space-y-4' : 'hidden md:flex items-center space-x-6'}`}>
    <a href="#about" onClick={onLinkClick} className="text-xs font-medium text-muted-foreground relative group">
      <span className="relative inline-block transition-transform duration-200 group-hover:scale-105 group-hover:text-primary">
        About
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
      </span>
    </a>
    <a href="#timeline" onClick={onLinkClick} className="text-xs font-medium text-muted-foreground relative group">
      <span className="relative inline-block transition-transform duration-200 group-hover:scale-105 group-hover:text-primary">
        Timeline
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
      </span>
    </a>
    <a href="#projects" onClick={onLinkClick} className="text-xs font-medium text-muted-foreground relative group">
      <span className="relative inline-block transition-transform duration-200 group-hover:scale-105 group-hover:text-primary">
        Projects
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
      </span>
    </a>
    <a href="#contact" onClick={onLinkClick} className="text-xs font-medium text-muted-foreground relative group">
      <span className="relative inline-block transition-transform duration-200 group-hover:scale-105 group-hover:text-primary">
        Contact
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
      </span>
    </a>
  </nav>
));

NavLinks.displayName = 'NavLinks';

// Memoize the mobile menu button
const MobileMenuButton = memo(({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button 
    className="md:hidden p-2" 
    onClick={onClick}
    aria-label={isOpen ? "Close menu" : "Open menu"}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
    >
      {isOpen ? (
        <path d="M18 6L6 18M6 6l12 12" />
      ) : (
        <>
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </>
      )}
    </svg>
  </button>
));

MobileMenuButton.displayName = 'MobileMenuButton';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrolled = useScrollThreshold(50);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "shadow-[0_1px_3px_0_rgba(0,0,0,0.05)]"
    }`}>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between">
            <a href="#" className="text-lg font-bold relative group">
              <span className="relative inline-block transition-transform duration-200 group-hover:scale-105">
                <span className="text-gradient">Byron Aldas</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </span>
            </a>
            <NavLinks />
            <MobileMenuButton isOpen={isMobileMenuOpen} onClick={handleMobileMenuClick} />
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="md:hidden bg-background border-t border-border">
              <div className="container mx-auto px-4 py-4">
                <NavLinks isMobile onLinkClick={handleLinkClick} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 