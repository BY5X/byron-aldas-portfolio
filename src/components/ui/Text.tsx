"use client";

import { cn } from "@/lib/utils";
import { ElementType, HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "small" | "tiny";
  weight?: "normal" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right";
  color?: "default" | "muted" | "accent" | "primary" | "secondary";
  as?: ElementType;
}

export function Text({
  variant = "body",
  weight = "normal",
  align = "left",
  color = "default",
  as: Component = "p",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        // Base styles
        "leading-relaxed",
        // Variant styles
        variant === "h1" && "text-4xl sm:text-5xl md:text-6xl",
        variant === "h2" && "text-3xl sm:text-4xl md:text-5xl",
        variant === "h3" && "text-2xl sm:text-3xl md:text-4xl",
        variant === "h4" && "text-xl sm:text-2xl md:text-3xl",
        variant === "body" && "text-base",
        variant === "small" && "text-sm",
        variant === "tiny" && "text-xs",
        // Weight styles
        weight === "normal" && "font-normal",
        weight === "medium" && "font-medium",
        weight === "semibold" && "font-semibold",
        weight === "bold" && "font-bold",
        // Alignment styles
        align === "left" && "text-left",
        align === "center" && "text-center",
        align === "right" && "text-right",
        // Color styles
        color === "default" && "text-foreground",
        color === "muted" && "text-muted-foreground",
        color === "accent" && "text-accent",
        color === "primary" && "text-primary",
        color === "secondary" && "text-secondary",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
} 