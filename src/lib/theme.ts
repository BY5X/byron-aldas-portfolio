export const theme = {
  fonts: {
    sans: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },
  colors: {
    primary: {
      light: 'hsl(217, 91%, 60%)',
      DEFAULT: 'hsl(217, 91%, 60%)',
      dark: 'hsl(217, 91%, 50%)',
    },
    background: {
      light: 'hsl(0, 0%, 100%)',
      DEFAULT: 'hsl(222, 47%, 11%)',
      dark: 'hsl(222, 47%, 9%)',
    },
  },
  spacing: {
    section: {
      sm: '4rem',
      md: '6rem',
      lg: '8rem',
    },
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
    },
  },
  transitions: {
    DEFAULT: '0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    fast: '0.15s cubic-bezier(0.16, 1, 0.3, 1)',
    slow: '0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  effects: {
    hover: {
      scale: 'scale(1.02)',
      shadow: 'shadow-lg shadow-primary/10',
    },
    active: {
      scale: 'scale(0.98)',
    },
    focus: {
      ring: 'ring-2 ring-ring ring-offset-2 ring-offset-background',
    },
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1400px',
  },
} as const;

export type Theme = typeof theme;

export const mediaQueries = {
  sm: `(min-width: ${theme.breakpoints.sm})`,
  md: `(min-width: ${theme.breakpoints.md})`,
  lg: `(min-width: ${theme.breakpoints.lg})`,
  xl: `(min-width: ${theme.breakpoints.xl})`,
  '2xl': `(min-width: ${theme.breakpoints['2xl']})`,
} as const;

export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
} as const; 