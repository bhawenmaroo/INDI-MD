# Technical Specification
## IndiBiotek Private Limited — Website Redesign
**Version:** v1.0 | **Date:** May 2026 | **Prepared for:** IndiBiotek / Developer

---

## Version History

| Version | Date | Change |
|---|---|---|
| v1.0 | May 2026 | Initial release |

---

## 1. Project Overview

A complete rebuild of indibiotek.com — replacing the existing GoDaddy Website Builder site with a premium, animated, multi-division corporate website. The site has 8 main pages + 1 legal page. Key technical requirements include a Three.js/Vanta.js DNA helix hero animation, a dark/light mode system with localStorage persistence, a backend contact form that emails submissions to info@indibiotek.com and redirects to WhatsApp, and a floating WhatsApp button. The site is built and maintained by the client (non-developer), so the recommended platform is Framer — the only no-code/low-code platform that can achieve WebGL-grade 3D visual effects without requiring code.

---

## 2. Recommended Tech Stack

| Layer | Technology | Why |
|---|---|---|
| Platform | **Framer** *(recommended)* | Best self-build platform for premium 3D animated sites; supports WebGL embeds, dark/light mode, scroll animations, and custom code blocks without full coding |
| 3D Animation | **Vanta.js HALO or NET effect** *(recommended)* | Pre-built WebGL effect configurable to DNA/molecular aesthetic; embeds in Framer via custom code block |
| Form Backend | **Formspree** *(recommended)* | No-code form handler that emails submissions to any address; free tier covers IndiBiotek's volume |
| WhatsApp Button | **Custom HTML embed** | A simple fixed-position `<a href="https://wa.me/918902052927">` tag styled as a circle button |
| Dark/Light Toggle | **Framer built-in** | Framer handles dark/light mode switching natively with localStorage |
| Hosting | **Framer Hosting** *(recommended)* | Built-in to Framer — connects to custom domain indibiotek.com via DNS |
| Domain | **Existing indibiotek.com** | DNS A-record and CNAME updated to point to Framer — GoDaddy DNS manager |
| Analytics | **Google Tag Manager** | Paste GTM snippet into Framer custom code → head section |
| Fonts | **Poppins via Google Fonts** | Imported via Framer font picker — zero additional setup |

---

## 3. Page & Route Map

| URL | Page | Auth | Notes |
|---|---|---|---|
| `/` | Home | No | Hero with Vanta.js embed, scroll colour shift, division cards |
| `/about-us` | About Us | No | Static background, team section |
| `/research-and-development` | R&D | No | Animated gradient, university logos |
| `/lifesciences` | Lifesciences | No | Clinical blue animated gradient, catalogue link |
| `/agri` | Agri | No | Earth green animated gradient, catalogue link |
| `/scientific` | Scientific | No | Deep teal animated gradient, catalogue link |
| `/services` | Services | No | Static background, inquiry CTA |
| `/contact-us` | Contact Us | No | Formspree form, static background |
| `/privacy-policy` | Privacy Policy | No | Static, minimal styling |
| `/404` | Error page | No | Simple branded error page |

---

## 4. Colour Token System

Define these as Framer variables (Design → Variables) so they apply globally:

```
/* Light Mode Tokens */
--color-primary:        #0A1628   /* Deep Navy */
--color-accent:         #00C896   /* BioGreen */
--color-secondary:      #4A90A4   /* Soft Steel */
--color-bg:             #FFFFFF
--color-surface:        #F0F7FF
--color-card:           #E6F0FF
--color-text-1:         #1A1A1A
--color-text-2:         #4A4A4A
--color-text-muted:     #8A8A8A

/* Dark Mode Tokens */
--color-bg-dark:        #080F1E
--color-surface-dark:   #0D1830
--color-card-dark:      #111F3A
--color-text-1-dark:    #F0F0F0
--color-text-2-dark:    #A0A0A0
--color-text-muted-dark:#606060
/* Accent and primary colours remain identical in dark mode */

/* Semantic Tokens */
--color-success:        #16A34A
--color-warning:        #D97706
--color-error:          #DC2626
--color-whatsapp:       #25D366
```

---

## 5. Background & Animation Implementation

### Home — Hero (Vanta.js WebGL)

Add a custom code block in Framer at the top of the Home page:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js"></script>
<script>
  VANTA.HALO({
    el: "#vanta-hero",
    mouseControls: true,
    touchControls: false,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    baseColor: 0x0a1628,
    backgroundColor: 0x080f1e,
    amplitudeFactor: 1.5,
    size: 1.2
  })
</script>
```

**Mobile fallback:** In Framer, use breakpoint-specific visibility — hide the Vanta embed on screens < 768px. Replace with a CSS animated gradient background on mobile:

```css
@media (max-width: 767px) {
  .hero-section {
    background: linear-gradient(135deg, #080F1E, #0A1628, #0D1830);
    background-size: 400% 400%;
    animation: gradient-flow 12s ease infinite;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero-section { animation: none; background: #080F1E; }
}
```

### Division Pages — Animated Gradients

```css
/* Lifesciences */
.lifesciences-bg {
  background: linear-gradient(135deg, #0A1628, #0D1E3A);
  background-size: 400% 400%;
  animation: gradient-flow 15s ease infinite;
}

/* Agri */
.agri-bg {
  background: linear-gradient(135deg, #0A1F0E, #0D2814);
  background-size: 400% 400%;
  animation: gradient-flow 15s ease infinite;
}

/* Scientific */
.scientific-bg {
  background: linear-gradient(135deg, #081A1F, #0A2028);
  background-size: 400% 400%;
  animation: gradient-flow 15s ease infinite;
}

@keyframes gradient-flow {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

## 6. Contact Form — Formspree Setup

1. Create a free account at formspree.io
2. Create a new form → set the email destination to `info@indibiotek.com`
3. Copy the form endpoint URL (format: `https://formspree.io/f/XXXXXXXX`)
4. In Framer, use a custom code embed for the form:

```html
<form action="https://formspree.io/f/XXXXXXXX" method="POST" id="contact-form">
  <input type="text"  name="name"  placeholder="Your Name"  required>
  <input type="email" name="email" placeholder="Your Email" required>
  <textarea name="query" placeholder="Your Query" required></textarea>
  <button type="submit">Send Message →</button>
</form>

<script>
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    // After Formspree submission (2s delay for processing), redirect to WhatsApp
    setTimeout(function() {
      window.open('https://wa.me/918902052927', '_blank');
    }, 2000);
  });
</script>
```

---

## 7. WhatsApp Floating Button

Add this as a custom code embed in Framer → placed in the global layout (appears on all pages):

```html
<style>
  .whatsapp-float {
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 56px;
    height: 56px;
    background: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    text-decoration: none;
  }
  .whatsapp-float:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 24px rgba(37, 211, 102, 0.6);
  }
  .whatsapp-float svg { width: 28px; height: 28px; fill: white; }
</style>

<a href="https://wa.me/918902052927" target="_blank" class="whatsapp-float" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>
```

---

## 8. Dark / Light Mode

Framer handles this natively:
- Add a dark mode variable set in Framer → Design → Variables → Dark Mode
- Add a toggle button component connected to Framer's dark mode state
- Store preference via Framer's built-in localStorage integration
- System preference detection: Framer auto-detects `prefers-color-scheme` on first load

---

## 9. Third-Party Integrations

| Service | Purpose | How to Add | Notes |
|---|---|---|---|
| Formspree | Contact form email delivery | Form action URL | Free tier: 50 submissions/month |
| Vanta.js | DNA/3D hero animation | CDN script in custom code | Free, open source |
| Google Tag Manager | Analytics container | Paste GTM snippet in Framer custom code → head | Required before GA4 tracks events |
| Google Analytics 4 | Visitor tracking | Via GTM tag | Free |
| Google Search Console | SEO monitoring | DNS verification or GA4 verification | Free |
| Hotjar | Heatmaps | Via GTM custom HTML tag | Free tier available |

---

## 10. DNS Migration (GoDaddy → Framer)

1. In Framer → Settings → Domains → Connect Custom Domain → enter `indibiotek.com`
2. Framer provides DNS records to add (A record and CNAME)
3. Log into GoDaddy DNS manager → add Framer's A record and CNAME
4. Remove old GoDaddy website builder records (old A records)
5. DNS propagation: 24–48 hours
6. SSL: Framer provides free SSL automatically — no setup needed

---

## 11. Performance Checklist

- [ ] Vanta.js loads asynchronously — does not block page render
- [ ] All images in WebP format, compressed under 200kb each
- [ ] Poppins font loaded via Google Fonts with `display=swap`
- [ ] Vanta.js disabled on screens under 768px — CSS animated gradient serves as fallback
- [ ] `prefers-reduced-motion` fallback implemented for all animations
- [ ] WhatsApp button z-index set to 9999 — never hidden behind content
- [ ] Formspree endpoint tested — confirm submissions arrive at info@indibiotek.com
- [ ] Google Drive catalogue link opens in a new tab
- [ ] All pages tested on Chrome (Android), Safari (iPhone), and Chrome (Desktop)
- [ ] 301 redirects set for old GoDaddy URLs (especially `/careers` and `/research-%26-development`)

---

## 12. Accessibility Checklist

- [ ] All images have descriptive alt text
- [ ] All buttons have aria-label attributes (especially the WhatsApp icon button)
- [ ] Form fields have visible labels — not just placeholder text
- [ ] Colour contrast meets WCAG AA — text on BioGreen buttons uses Deep Navy for contrast
- [ ] Dark mode and light mode both pass contrast requirements
- [ ] Keyboard navigation works — tab order is logical
- [ ] `prefers-reduced-motion` disables all animations
- [ ] WhatsApp button minimum tap target: 56px × 56px (already sized correctly)

---

## 13. SEO Checklist

- [ ] Page title for every page: `[Page Topic] | IndiBiotek — Biotech Solutions for People and Planet`
- [ ] Meta description for every page: under 155 characters, includes primary keyword
- [ ] Open Graph tags set on all pages (title, description, image)
- [ ] sitemap.xml generated and submitted to Google Search Console
- [ ] robots.txt configured — allows all crawlers, references sitemap.xml
- [ ] Canonical URLs set on all pages
- [ ] Old URL redirects configured (especially `/research-%26-development` → `/research-and-development`)
- [ ] Images have descriptive, keyword-relevant alt text
- [ ] All pages load under 3 seconds on mobile (test with Google PageSpeed Insights)

---

## 14. Open Technical Questions

1. Formspree endpoint URL — created after account setup, insert into form code
2. Google Drive catalogue link — insert into division pages and Services page once provided
3. Vanta.js effect choice — HALO recommended; NET effect is an alternative if HALO feels too abstract
4. GTM container ID — created after Tag Manager account setup
5. Whether any products from the 11 catalogues should be individually listed on division pages
