"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type OptimizedAnimationProps = PropsWithChildren<{
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  className?: string;
  style?: React.CSSProperties;
}>;

export function OptimizedAnimation({ children, ...props }: OptimizedAnimationProps) {
  return <motion.div {...props}>{children}</motion.div>;
} 