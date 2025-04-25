"use client";

import { ReactNode } from 'react';

interface WidgetContainerProps {
  children: ReactNode;
  className?: string;
}

export function WidgetContainer({ children, className = '' }: WidgetContainerProps) {
  return (
    <div className={`
      bg-card
      border border-border/50
      rounded-xl
      p-6 sm:p-8
      hover:border-border
      transition-all duration-300
      will-change-transform
      backdrop-blur-[2px]
      animate-fade-in-up
      ${className}
    `}>
      {children}
    </div>
  );
} 