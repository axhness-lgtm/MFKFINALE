# MFKhan International - Design & Logic Manifesto

This document contains the core prompt and configuration details required to replicate the MFKhan International experience exactly.

## Brand Identity
**MFKhan International** is a luxury hand-crafted tailoring house. The digital presence is designed to feel like a high-fashion editorial magazine—minimal, authoritative, and artisanal.

## Visual Identity & Design System
- **Color Palette (HSL):**
  - **Background:** `#FAF9F6` (Warm Cream - `45 20% 97%`)
  - **Foreground/Primary Text:** `#3E2723` (Dark Chocolate - `11 37% 19%`)
  - **Accent:** `#D4AF37` (Gold - `46 65% 52%`)
- **Typography:**
  - **Headlines & Body:** Times New Roman. Use light weights (300/400) for a modern, breathable feel.
  - **Artisanal Accents:** "Pinyon Script" (used as the digital equivalent for Citadel Script). Apply to decorative phrases and lower-case lowercase italics.
- **UI Elements:**
  - **Sharp Edges:** Border-radius is set to `0` for a high-fashion architectural feel.
  - **Borders:** Thin, subtle borders (`border-border/10` or `border-border/30`) instead of heavy shadows.
  - **Floating Glass Nav:** A centered, rounded navigation bar. It starts transparent at the top of the page and transitions into a semi-transparent blurred glass box (Chocolate border) upon scrolling.
  - **Nav Interactions:** Links feature a thin gold underline that expands from left-to-right on hover.

## Key Components
1. **Intro Loader:** A full-screen cream overlay with a pulsing SVG brand logo and a minimal gold loading bar.
2. **Scroll Reveals:** All sections use an Intersection Observer to "Fade In" (translate-y + opacity) as the user scrolls.
3. **SVG Brand Logo:** A circular frame containing a stylized "MFK" monogram. Centered and minimal.

## Technical Specifications
- **Framework:** Next.js 15 (App Router), TypeScript.
- **Styling:** Tailwind CSS + ShadCN UI.
- **AI Layer:** Genkit with Gemini 2.5 Flash for text and Imagen 4 for visual inspirations.
- **Voice & Tone:** Premium and artisanal. **STRICT RULE:** Never use the word "Bespoke". Use "Hand-crafted", "Artisanal", "Custom-tailored", or "Made-to-measure".

## Page Structure
1. **Home:** Immersive storytelling through Hero, Collections, Craftsmanship, and Testimonial sections.
2. **Heritage:** (About) Deep dive into the 25-year history and artisanal stats.
3. **Collections:** A minimal visual showcase of suits, sherwanis, and formal wear. Specialty focus on Blazers and Suits.
4. **Hand-Crafted Process:** A step-by-step interactive journey from consultation to final fitting.
5. **Contact:** A clean, luxury inquiry form for private consultations.
6. **AI Style Advisor:** A generative tool providing personalized sartorial narratives and visual renderings.

## Style Advisor Logic
The Advisor is a Genkit flow that accepts `eventType`, `aestheticPreferences`, and `garmentChoice`. It returns:
- A detailed "Suit Style" description.
- A "Color Palette" recommendation.
- "Fabric Combinations".
- An "Inspiration Message".
- Two Imagen 4 generated images: One editorial shot of the garment and one macro detail shot of the textures.
