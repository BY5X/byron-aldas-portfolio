"use client";

import { cn } from "@/lib/utils";
import { OptimizedAnimation } from "./OptimizedAnimation";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  containerWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  spacing?: "sm" | "md" | "lg" | "none";
  animate?: boolean;
}

export function Section({
  as: Component = "section",
  containerWidth = "2xl",
  spacing = "md",
  animate = true,
  className,
  children,
  ...props
}: SectionProps) {
  const content = (
    <Component
      className={cn(
        // Base styles
        "relative w-full",
        // Spacing variants
        spacing === "sm" && "py-16",
        spacing === "md" && "py-24",
        spacing === "lg" && "py-32",
        spacing === "none" && "py-0",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          containerWidth === "sm" && "max-w-screen-sm",
          containerWidth === "md" && "max-w-screen-md",
          containerWidth === "lg" && "max-w-screen-lg",
          containerWidth === "xl" && "max-w-screen-xl",
          containerWidth === "2xl" && "max-w-screen-2xl",
          containerWidth === "full" && "max-w-none"
        )}
      >
        {children}
      </div>
    </Component>
  );

  if (animate) {
    return (
      <OptimizedAnimation
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </OptimizedAnimation>
    );
  }

  return content;
} 