---
name: Aura Luxury Performance
colors:
  surface: '#f4faff'
  surface-dim: '#ccdce7'
  surface-bright: '#f4faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e7f6ff'
  surface-container: '#e0f0fb'
  surface-container-high: '#daebf5'
  surface-container-highest: '#d5e5ef'
  on-surface: '#0e1d25'
  on-surface-variant: '#5b4138'
  inverse-surface: '#23323a'
  inverse-on-surface: '#e3f3fd'
  outline: '#8f7066'
  outline-variant: '#e3bfb2'
  surface-tint: '#a93800'
  primary: '#a93800'
  on-primary: '#ffffff'
  primary-container: '#ff5f15'
  on-primary-container: '#551800'
  inverse-primary: '#ffb59b'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e0dfdf'
  on-secondary-container: '#626362'
  tertiary: '#5e5e5d'
  on-tertiary: '#ffffff'
  tertiary-container: '#949492'
  on-tertiary-container: '#2c2d2c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59b'
  on-primary-fixed: '#380d00'
  on-primary-fixed-variant: '#812900'
  secondary-fixed: '#e3e2e1'
  secondary-fixed-dim: '#c7c6c5'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#464746'
  tertiary-fixed: '#e3e2e0'
  tertiary-fixed-dim: '#c7c6c4'
  on-tertiary-fixed: '#1b1c1b'
  on-tertiary-fixed-variant: '#464746'
  background: '#f4faff'
  on-background: '#0e1d25'
  surface-variant: '#d5e5ef'
typography:
  display-xl:
    fontFamily: Epilogue
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 90px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  technical-data:
    fontFamily: Lexend
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Lexend
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 64px
  section-padding: 120px
---

## Brand & Style

This design system embodies "Light Luxury," a philosophy that marries high-performance athletic utility with the refined restraint of architectural minimalism. The brand persona is sophisticated yet active—catering to high-net-worth individuals who value precision, technical superiority, and understated elegance.

The visual style is a fusion of **Minimalism** and **Glassmorphism**. It utilizes expansive whitespace to allow content to breathe, conveying a sense of airy exclusivity. Elements are treated with physical lightness, utilizing frosted surfaces and ethereal depth to create a UI that feels like it’s floating over a soft, matte canvas.

## Colors

The palette is anchored by "Pearl White," a soft, non-glare background that provides more warmth than standard digital white. "Platinum" is used for surface-level elements and cards to provide a barely-there distinction from the background. 

Typography is rendered in "Deep Slate" for a softer, more premium contrast than pure black. The "Signature Maxwill Orange" is the high-energy pulse of the system; it is used with surgical precision for primary calls to action, active states, and critical performance data, ensuring it retains its impact without overwhelming the sophisticated aesthetic.

## Typography

The typographic hierarchy balances editorial luxury with technical readability. For headlines, an extended geometric style (Epilogue) creates a commanding, high-fashion presence. These should be set with tight tracking in larger sizes to mimic premium architectural signage.

Body copy relies on Inter for its neutral, functional clarity. For sports-specific metrics, technical readouts, and labels, Lexend is utilized to provide an athletic, high-performance feel that remains accessible and highly legible at small scales.

## Layout & Spacing

This design system uses a **fixed grid** model for desktop experiences to maintain the "framed" look of a luxury catalog. The layout is based on a 12-column grid with generous 32px gutters and significant outer margins to focus the user's attention.

The spacing rhythm is intentionally oversized. Sections are separated by large vertical gaps (120px+) to emphasize the "Airy" direction. Content blocks should prioritize asymmetrical alignments and wide margins, echoing the structural minimalism found in contemporary galleries.

## Elevation & Depth

Depth is achieved through a combination of **Glassmorphism** and **Ambient Shadows**. Navigation bars and overlay panels use a 20px backdrop blur with a highly transparent Platinum (#E5E4E2) tint and a subtle 1px white inner stroke to define the edges.

Shadows must be incredibly soft and diffused, utilizing multiple layers of low-opacity (2-5%) blurs with a slight Y-offset to create a "floating" rather than "heavy" effect. Tonal layering is the preferred method for secondary UI containers, using subtle shifts from Pearl White to Platinum without the need for borders.

## Shapes

The shape language is "Soft" (0.25rem - 0.75rem). While the brand is athletic, overly round or pill-shaped buttons feel too casual for high-luxury. Instead, small corner radii provide a precision-engineered look that feels modern and ergonomic. 

Images and primary containers should use a slightly larger radius (0.75rem) to soften the architectural grid, while functional elements like inputs and smaller buttons use the base 0.25rem radius to maintain a sense of crispness.

## Components

### Buttons
Primary buttons are solid Signature Orange with Deep Slate text for maximum visibility. Secondary buttons are "Ghost" style, featuring a thin Platinum border and Slate text. The hover state should involve a subtle shift in backdrop blur or a slight lift via shadow.

### Cards & Surfaces
Cards utilize the Platinum background with a very soft shadow. Content within cards should have generous internal padding (min 32px). For featured items, use a Glassmorphism effect for the text overlay to maintain visibility over high-action sports photography.

### Inputs & Form Fields
Fields are Alabaster-filled with no border, using only a bottom stroke that thickens when active. This mimics high-end interior design details. Labels use the Lexend font in all-caps for a technical, precise feel.

### Navigation
The primary navigation is a persistent frosted glass bar at the top of the viewport. Links are spaced widely, using the Label-Caps typography style. The brand mark should be centered or far-left to anchor the composition.

### Chips & Tags
Used for performance categories (e.g., "Endurance," "Carbon-Fiber"). These are small, Alabaster-filled pills with Deep Slate text, ensuring they remain secondary to the primary content.