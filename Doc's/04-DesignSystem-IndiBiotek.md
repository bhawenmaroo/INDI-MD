# Design System
## IndiBiotek Private Limited — Website Redesign
**Version:** v1.0 | **Date:** May 2026 | **Prepared for:** IndiBiotek Private Limited

---

## Version History

| Version | Date | Change |
|---|---|---|
| v1.0 | May 2026 | Initial release |

---

## 1. Project Overview

**Project:** IndiBiotek Private Limited — Website Redesign
**One-line description:** A premium biotech corporate website serving farmers, doctors, laboratory purchase officers, and venture capitalists across three divisions — Lifesciences, Agri, and Scientific.
**Primary audience:** Multi-segment — professional B2B buyers and institutional investors
**Primary goal:** Drive email contact inquiries while building immediate trust and credibility

---

## 2. Design Philosophy

Five principles guide every design decision on this website:

1. **Credibility before beauty.** Every visual choice must reinforce trust — not just look good. The patent badge, university logos, and government certifications are not decorations, they are the most important elements on the page.

2. **Clarity for every audience.** A farmer and a venture capitalist both land on this site. Neither should have to work hard to find what they need. Design guides each visitor naturally to their section.

3. **Premium but sober.** The visual standard is world-class biotech — not flashy startup energy. Deep tones, clean whites, precise typography. Nothing shouts. Everything carries weight.

4. **Science is the brand.** The DNA helix, molecular structures, and cellular aesthetics are not borrowed from a template — they are IndiBiotek's industry made visible. The 3D animation communicates what the company does before a word is read.

5. **Mobile is not a second thought.** Farmers and purchase officers frequently visit on mid-range Android phones. The site must perform flawlessly on a 4G connection with a small screen.

---

## 3. Colour Palette

### Light Mode

| Token Name | Hex Code | Use |
|---|---|---|
| Deep Navy | `#0A1628` | Navigation, headings, dark elements |
| BioGreen | `#00C896` | Primary buttons, hover states, key highlights |
| Soft Steel | `#4A90A4` | Secondary text, decorative accents |
| Page Background | `#FFFFFF` | Page background |
| Surface | `#F0F7FF` | Cards, section backgrounds |
| Card | `#E6F0FF` | Elevated card surfaces |
| Text Primary | `#1A1A1A` | Body text, main readable content |
| Text Secondary | `#4A4A4A` | Supporting text, captions |
| Text Muted | `#8A8A8A` | Placeholders, fine print |
| Success | `#16A34A` | Confirmation messages |
| Warning | `#D97706` | Caution alerts |
| Error | `#DC2626` | Form errors |

### Dark Mode

| Token Name | Hex Code | Use |
|---|---|---|
| Deep Space | `#080F1E` | Page background |
| Surface Dark | `#0D1830` | Section backgrounds |
| Card Dark | `#111F3A` | Card surfaces |
| Deep Navy | `#0A1628` | Borders, dividers |
| BioGreen | `#00C896` | Buttons, hover states, highlights — same accent |
| Soft Steel | `#6BAFC4` | Secondary text (lightened for dark bg) |
| Text Primary Dark | `#F0F0F0` | Body text |
| Text Secondary Dark | `#A0A0A0` | Supporting text |
| Text Muted Dark | `#606060` | Placeholders |

**Why this palette:**
Deep Navy communicates scientific authority and institutional trust — the same psychology that makes navy the default of pharmaceutical companies globally. BioGreen is IndiBiotek's signature energy — it references biology, growth, and life without being a cliché laboratory green. The contrast between navy and BioGreen is high enough to be accessible at all text sizes.

---

## 4. Typography

**Font family: Poppins (Google Fonts)**

All text across the entire website uses Poppins. It is clean, geometric, modern, and highly readable at all sizes — from mobile captions to large desktop hero headlines. It communicates precision and accessibility simultaneously, which matches IndiBiotek's multi-audience needs.

| Style | Weight | Size (Desktop) | Size (Mobile) | Use |
|---|---|---|---|---|
| Page Title / Hero H1 | Bold (700) | 56–72px | 36–48px | Homepage hero headline |
| Section Heading H2 | SemiBold (600) | 40–48px | 28–32px | Major section titles |
| Sub-heading H3 | SemiBold (600) | 28–32px | 22–24px | Card titles, sub-sections |
| Body Text | Regular (400) | 16–18px | 15–16px | All paragraph copy |
| Caption / Fine Print | Regular (400) | 13–14px | 13px | Image captions, labels |
| Button Label | SemiBold (600) | 15–16px | 15px | All button text |
| Navigation | Medium (500) | 15px | 15px | Top navigation links |

---

## 5. Background Strategy — Per Page

### Home — Hero Section
**Type:** Category 7 — Three.js / Vanta.js WebGL 3D
**Effect:** Rotating DNA double helix molecular structure — slow, elegant, deep navy/BioGreen tones
**Trigger:** Loads on page entry, loops continuously
**Mobile:** Replaced with a CSS animated gradient (Category 1) on screens under 768px — WebGL performance on mid-range Android is unreliable
**Reduced motion fallback:** Static deep navy gradient `#0A1628` → `#080F1E`
**Text contrast:** Semi-transparent dark overlay (`rgba(8, 15, 30, 0.6)`) ensures hero text always readable
**Why this:** A biotechnology company's background should be biology made visible. The DNA helix communicates IndiBiotek's field before any text is read — it is the brand made physical.

### Home — Below Hero (All Sections)
**Type:** Category 3 — Scroll-driven background colour shift
**Effect:** Each section transitions between Deep Space `#080F1E`, Surface Dark `#0D1830`, and subtle BioGreen-tinted dark `#0A1F1A` as user scrolls
**Trigger:** IntersectionObserver — fires at 50% section visibility
**Mobile:** Same effect, reduced transition duration for performance

### About Us
**Type:** Static — clean white (light mode) / Deep Space (dark mode)
**Why:** The About page is for storytelling and team profiles. Nothing should compete with the human content.

### Research & Development
**Type:** Category 1 — Subtle animated gradient
**Effect:** Very slow-moving dark blue-to-teal gradient — scientific and calm
**Colours:** `#0A1628` → `#0A2030` — barely perceptible movement, 20-second loop
**Mobile:** Same (CSS — no performance concern)

### Lifesciences Division
**Type:** Category 1 — Clinical blue animated gradient
**Effect:** Slow pulse between `#0A1628` and `#0D1E3A` — clean, medical, precise
**Personality:** Clinical whites and blues — diagnostic lab aesthetic

### Agri Division
**Type:** Category 1 — Earthy green animated gradient
**Effect:** Slow shift between `#0A1F0E` and `#0D2814` — organic, natural, grounded
**Personality:** Earthy greens and warm tones — agricultural, living, connected to nature

### Scientific Division
**Type:** Category 1 — Deep teal animated gradient
**Effect:** Slow movement between `#081A1F` and `#0A2028` — precise, technical, cool
**Personality:** Deep teals and metallics — research lab precision

### Services
**Type:** Static — same as About Us
**Why:** Services page drives inquiry — no animation distracts from the CTA

### Contact Us
**Type:** Static — always
**Why:** Form conversion pages must have static backgrounds. Animation around a form reduces completion rates.

### Privacy Policy
**Type:** Static — white/light grey
**Why:** Legal pages need maximum readability, minimum decoration.

---

## 6. Navigation Bar

**Style:** Transparent hero nav → solid on scroll
- Starts: Fully transparent, white Poppins text over the DNA helix hero
- On scroll (>80px from top): Transitions to solid Deep Navy `#0A1628` background with BioGreen logo accent
- Transition: 0.3s ease — smooth and premium
- Dark mode: Same behaviour — solid becomes Deep Space `#080F1E`
- Mobile: Hamburger icon (three lines) — expands to full-screen dark overlay menu
- Contact Us in nav: Styled as a BioGreen pill button — stands out from text links

---

## 7. Component Guide

### Primary Button
- Background: BioGreen `#00C896`
- Text: Deep Navy `#0A1628` (dark on light — high contrast)
- Hover: Glow effect — `box-shadow: 0 0 20px rgba(0, 200, 150, 0.5)` + slight brighten
- Border radius: 8px
- Padding: 14px 28px
- Font: Poppins SemiBold 15px

### Secondary Button
- Background: Transparent
- Border: 1.5px solid BioGreen `#00C896`
- Text: BioGreen
- Hover: BioGreen fill, Deep Navy text

### Division Cards (Home)
- Dark mode: `#111F3A` surface, BioGreen top border accent
- Light mode: `#F0F7FF` surface, Deep Navy top border
- Hover: Lifts 6px (`transform: translateY(-6px)`), subtle glow
- Transition: 0.3s ease

### Credibility Badge Bar (Homepage)
- Background: Dark overlay strip `rgba(8, 15, 30, 0.8)`
- Logos: White monochrome versions of Patent badge, Startup India, MSME, Make in India, BIRAC
- Spacing: Equal horizontal spacing, centered on all screen sizes

### WhatsApp Floating Button
- Fixed position: Bottom-right, 24px from edges
- Size: 56px diameter circle
- Background: `#25D366` (WhatsApp green — universally recognised)
- Icon: White WhatsApp logo
- Hover: Scale 1.1, subtle shadow
- z-index: 9999 — always on top

### Contact Form Fields
- Background: Transparent with 1.5px border — Deep Navy (light) / Soft Steel (dark)
- Focus: BioGreen border glow
- Label: Above field, Poppins Medium 14px
- Error state: Red `#DC2626` border + inline error message below field
- Submit button: Primary button style with "Send Message →" label

---

## 8. Division Visual Identities

Each division page has its own visual personality while remaining within the IndiBiotek brand family.

### Lifesciences
- Signature colour: Clinical Blue `#1A6FA8`
- Accent: Ice White
- Aesthetic: Clean, medical, precise — diagnostic lab environment
- Imagery direction: Microscopy imagery, diagnostic devices, clinical settings (stock)
- Section dividers: Horizontal lines with subtle Clinical Blue gradient

### Agri
- Signature colour: Earth Green `#2D7A3A`
- Accent: Warm Amber `#C47B1A`
- Aesthetic: Natural, organic, grounded — field and farm environment
- Imagery direction: Crops, soil health, farming landscape (stock)
- Section dividers: Leaf/organic shape motifs in muted green

### Scientific
- Signature colour: Deep Teal `#1A6A6A`
- Accent: Metallic Silver `#8FA8B0`
- Aesthetic: Precise, technical, cool — research lab environment
- Imagery direction: Lab equipment, reagent bottles, microscopes (stock)
- Section dividers: Geometric grid lines in teal

---

## 9. Animation Principles

**Scroll reveal:** All sections animate in as the user scrolls — content fades up from 20px below its resting position. Duration: 0.6s ease-out. Staggered for card grids.

**Hover states:**
- Cards: `translateY(-6px)` + shadow deepens
- Buttons: Glow effect expands
- Nav links: BioGreen underline slides in from left
- Images: Very subtle scale 1.02

**Page transitions:** Smooth opacity fade (0.3s) between pages — not jarring.

**Reduced motion:** All animations disabled when `prefers-reduced-motion: reduce` is set. Static fallbacks always present.

**3D helix:** Rotates at 0.3 RPM — slow enough to feel premium, fast enough to feel alive. Mouse movement subtly shifts the camera angle.

---

## 10. Dark / Light Mode Toggle

**Toggle placement:** Top navigation bar, right side — icon-based (sun/moon)
**Remembers preference:** Stored in the visitor's browser — switching to dark mode stays dark on return visits
**System preference:** If the visitor's device is set to dark mode, the site automatically starts in dark mode
**Transition:** All colour tokens swap instantly — 0.2s transition on background-color and color properties
**No flicker on load:** Mode is detected before the page renders — no flash of wrong mode
