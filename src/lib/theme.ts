export const BRAND_COLORS = {
  orange: {
    default: 'hsl(var(--brand-orange))',
    foreground: 'hsl(var(--brand-orange-foreground))',
  },
  purple: {
    default: 'hsl(var(--brand-purple))',
    foreground: 'hsl(var(--brand-purple-foreground))',
  },
  blue: {
    default: 'hsl(var(--brand-blue))',
    foreground: 'hsl(var(--brand-blue-foreground))',
  },
} as const;

// Semantic color mappings for easier component usage
export const SEMANTIC_COLORS = {
  // Primary brand color (orange)
  accent: 'brand-orange',
  accentForeground: 'brand-orange-foreground',
  
  // Primary text color (purple)
  heading: 'brand-purple',
  headingForeground: 'brand-purple-foreground',
  
  // Secondary text color (blue)
  subheading: 'brand-blue',
  subheadingForeground: 'brand-blue-foreground',
} as const;

// Tailwind class utilities
export const BRAND_CLASSES = {
  // Text colors
  text: {
    accent: 'text-brand-orange',
    accentHover: 'hover:text-brand-orange/80',
    heading: 'text-brand-purple',
    headingHover: 'hover:text-brand-purple/80',
    subheading: 'text-brand-blue',
    subheadingHover: 'hover:text-brand-blue/80',
  },
  // Background colors
  bg: {
    accent: 'bg-brand-orange',
    accentHover: 'hover:bg-brand-orange/80',
    heading: 'bg-brand-purple',
    headingHover: 'hover:bg-brand-purple/80',
    subheading: 'bg-brand-blue',
    subheadingHover: 'hover:bg-brand-blue/80',
  },
  // Border colors
  border: {
    accent: 'border-brand-orange',
    accentHover: 'hover:border-brand-orange/80',
    heading: 'border-brand-purple',
    headingHover: 'hover:border-brand-purple/80',
    subheading: 'border-brand-blue',
    subheadingHover: 'hover:border-brand-blue/80',
  },
} as const; 