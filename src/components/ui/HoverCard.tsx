"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HoverCardProps {
  trigger: ReactNode;
  content: ReactNode;
  contentClassName?: string;
}

export function HoverCard({ trigger, content, contentClassName = "" }: HoverCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getPlacementStyles = () => {
    if (!triggerRef.current) return {};

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const scrollY = window.scrollY;

    return {
      position: 'fixed' as const,
      top: `${triggerRect.bottom + scrollY}px`,
      left: `${triggerRect.left}px`,
      transform: 'translateY(8px)',
    };
  };

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {trigger}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.15,
              delay: 0,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              ...getPlacementStyles(),
              position: 'fixed',
              zIndex: 50,
              backgroundColor: 'var(--background)',
              border: '1px solid var(--border)',
              borderRadius: '0.375rem',
              boxShadow: 'var(--shadow-lg)',
              padding: '0.75rem',
            }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 