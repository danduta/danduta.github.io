# Brand Theme System

## Overview

This theme system provides consistent brand colors based on the Dan Duta branding:
- **Brand Orange**: Primary accent color (logo, interactive elements)
- **Brand Purple**: Primary text color (headings, "Dan Duta")  
- **Brand Blue**: Secondary text color (taglines, subtitles)

## CSS Custom Properties

The theme uses CSS custom properties that automatically adapt to light/dark mode:

```css
/* Light mode */
--brand-orange: 16 89% 55%;
--brand-purple: 256 44% 25%;
--brand-blue: 222 47% 60%;

/* Dark mode */
--brand-orange: 16 89% 60%;
--brand-purple: 256 44% 75%;
--brand-blue: 222 47% 70%;
```

## Usage in Tailwind Classes

### Basic Colors
```jsx
// Text colors
<h1 className="text-brand-purple">Dan Duta</h1>
<p className="text-brand-blue">Software Engineer</p>
<span className="text-brand-orange">Accent text</span>

// Background colors
<div className="bg-brand-orange text-brand-orange-foreground">
  Orange background with contrasting text
</div>

// Border colors
<div className="border border-brand-orange">
  Orange border
</div>
```

### With Opacity
```jsx
<div className="text-brand-orange/80">80% opacity orange text</div>
<div className="bg-brand-purple/20">20% opacity purple background</div>
<div className="border-brand-blue/50">50% opacity blue border</div>
```

### Hover States
```jsx
<a className="text-brand-orange hover:text-brand-orange/80 transition-colors">
  Orange link with hover effect
</a>
```

## Usage with TypeScript Constants

Import the theme constants for programmatic usage:

```tsx
import { BRAND_CLASSES, BRAND_COLORS, SEMANTIC_COLORS } from '@/lib/theme';

// Using class utilities
<button className={BRAND_CLASSES.text.accent}>
  Button with accent color
</button>

// Using semantic mappings
<h2 className={`text-${SEMANTIC_COLORS.heading}`}>
  Heading with semantic color
</h2>

// Using raw color values (for style props)
<div style={{ color: BRAND_COLORS.orange.default }}>
  Styled with raw CSS value
</div>
```

## Migration from Hardcoded Colors

Replace hardcoded orange classes:

```jsx
// Before
<h1 className="text-orange-500">Dan Duta</h1>
<p className="text-orange-400">Software Engineer</p>
<div className="border-orange-500/50">Card</div>

// After
<h1 className="text-brand-purple">Dan Duta</h1>
<p className="text-brand-blue">Software Engineer</p>
<div className="border-brand-orange/50">Card</div>
```

## Component Examples

### Hero Section
```tsx
export function Hero() {
  return (
    <header>
      <h1 className="text-4xl font-bold text-brand-purple">
        Dan Duta
      </h1>
      <p className="text-xl text-brand-blue">
        Software Engineer 🧑‍💻
      </p>
      <button className="bg-brand-orange text-brand-orange-foreground px-6 py-2 rounded-lg hover:bg-brand-orange/80 transition-colors">
        Get in touch
      </button>
    </header>
  );
}
```

### Navigation Link
```tsx
export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href}
      className="text-brand-orange hover:text-brand-orange/80 transition-colors"
    >
      {children}
    </Link>
  );
}
```

## Best Practices

1. **Use semantic naming**: Prefer `text-brand-purple` for headings over `text-orange-500`
2. **Consistent opacity**: Use standard opacity values like `/80`, `/50`, `/20`
3. **Hover states**: Always add `transition-colors` when using hover effects
4. **Accessibility**: The foreground colors are designed to have proper contrast ratios
5. **Dark mode**: Colors automatically adapt - no need for dark: prefixes

## Customization

To adjust brand colors, modify the CSS custom properties in `src/app/globals.css`:

```css
:root {
  --brand-orange: 16 89% 55%; /* Adjust hue, saturation, lightness */
  --brand-purple: 256 44% 25%;
  --brand-blue: 222 47% 60%;
}
``` 