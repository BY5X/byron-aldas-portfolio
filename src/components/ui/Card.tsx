"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "interactive" | "ghost";
  size?: "sm" | "md" | "lg";
  hover?: boolean;
}

export function Card({
  variant = "default",
  size = "md",
  hover = true,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        // Base styles
        "rounded-lg border border-border/50 bg-card text-card-foreground transition-all duration-300",
        // Size variants
        size === "sm" && "p-4",
        size === "md" && "p-6",
        size === "lg" && "p-8",
        // Variant styles
        variant === "default" && "shadow-lg shadow-background/5 backdrop-blur-sm",
        variant === "interactive" && "cursor-pointer",
        variant === "ghost" && "border-none shadow-none bg-transparent",
        // Hover styles
        hover && variant !== "ghost" && [
          "hover:border-border hover:shadow-xl hover:shadow-primary/5",
          "hover:scale-[1.02] active:scale-[0.98]"
        ],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div className={cn("space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
}

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ className, children, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn(
        "font-semibold leading-none tracking-tight text-lg",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({
  className,
  children,
  ...props
}: CardDescriptionProps) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  );
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn("pt-6", className)} {...props}>
      {children}
    </div>
  );
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div
      className={cn("flex items-center pt-6", className)}
      {...props}
    >
      {children}
    </div>
  );
} 