# Launch Checklist
## IndiBiotek Private Limited — Website Redesign
**Version:** v1.0 | **Date:** May 2026 | **Prepared for:** IndiBiotek Private Limited

---

## Version History

| Version | Date | Change |
|---|---|---|
| v1.0 | May 2026 | Initial release |

---

## How to Use This Checklist

Go through every item below before the new indibiotek.com goes live. Every box must be ticked. If any item cannot be completed, note the reason — do not launch until all blockers are resolved.

**Recommended approach:** Complete a soft launch first — share the link privately with 2–3 trusted contacts for 24–48 hours and gather feedback before the public go-live.

**On launch day:** Keep a developer or technically capable person on standby for the first 4 hours. Do not launch on a Friday afternoon — if something breaks, you need working hours to fix it.

This checklist is a sign-off document. Both the person building the site and the IndiBiotek team lead should tick every item independently before launch.

---

## SECTION A — Content

- [ ] All 8 main pages have final, approved copy — not placeholder text
- [ ] The homepage hero headline reads: "Biotech Solutions for People and Planet."
- [ ] All division pages (Lifesciences, Agri, Scientific) have complete product descriptions
- [ ] R&D page is complete and content is minimal as agreed
- [ ] Services page content has been confirmed from the existing site
- [ ] Contact Us page has the correct Kolkata address, email, and phone number
- [ ] Team section on About Us page has correct names, designations, and photos pulled from existing site
- [ ] Privacy Policy page exists at `/privacy-policy` — content approved and inserted (not a blank page)
- [ ] Google Drive catalogue link is live and inserted into all three division pages and Services page
- [ ] All 11 catalogues in the Drive link are accessible and correctly named
- [ ] Patent number (202511077832) is displayed correctly on the homepage credibility bar
- [ ] All five trust badges display correctly: Patent, Startup India, MSME, Make in India, BIRAC
- [ ] SRM University and Adamas University logos display correctly on Homepage and R&D page
- [ ] No placeholder text (Lorem ipsum or "TBD") visible on any public page
- [ ] All page titles are set correctly for SEO (not "Untitled Page" or the platform default)
- [ ] All meta descriptions are written and inserted — under 155 characters each

---

## SECTION B — Design & Visual

- [ ] Poppins font loads correctly on all pages — no fallback font visible
- [ ] Deep Navy / BioGreen / Soft Steel colour tokens are applied consistently across all pages
- [ ] Light mode looks correct — white backgrounds, dark text, BioGreen accents
- [ ] Dark mode looks correct — Deep Space background, light text, BioGreen accents
- [ ] Dark/light mode toggle is visible in the navigation bar
- [ ] Switching between light and dark mode works instantly with no flicker
- [ ] The DNA / molecular helix 3D animation loads correctly on the homepage
- [ ] The 3D animation does NOT appear on mobile screens (CSS animated gradient shows instead)
- [ ] Division pages each have their correct signature gradient: Lifesciences (blue), Agri (green), Scientific (teal)
- [ ] Contact Us and Services pages have static (non-animated) backgrounds
- [ ] All images load correctly — no broken image icons on any page
- [ ] All images have alt text (important for accessibility and SEO)
- [ ] Hover effects work: cards lift, buttons glow, nav links animate
- [ ] Scroll reveal animations work — content fades in as user scrolls down
- [ ] The navigation bar is transparent on the homepage and becomes solid on scroll
- [ ] The navigation bar collapses to a hamburger menu on mobile and works correctly
- [ ] IndiBiotek logo is visible and correctly linked to the homepage

---

## SECTION C — Functionality

- [ ] Contact form submits successfully — test with a real submission
- [ ] Contact form submission arrives in info@indibiotek.com inbox — confirm receipt
- [ ] After form submission, visitor is redirected to WhatsApp — test the redirect
- [ ] WhatsApp floating button is visible on all 8 pages
- [ ] WhatsApp button opens a chat with +91 89020 52927 — test on both desktop and mobile
- [ ] WhatsApp button does not cover any important content or navigation elements on mobile
- [ ] Google Drive catalogue link opens in a new tab — does not navigate away from the site
- [ ] All internal navigation links work — click every item in the nav bar
- [ ] All CTA buttons link to the correct pages
- [ ] The light/dark mode preference is remembered — switch to dark, close browser, reopen — site stays dark
- [ ] 404 error page exists and is branded — test by visiting indibiotek.com/nonexistentpage
- [ ] Old GoDaddy URL `/careers` redirects to the homepage (301 redirect)
- [ ] Old GoDaddy URL `/research-%26-development` redirects to `/research-and-development` (301 redirect)

---

## SECTION D — Mobile & Cross-Browser Testing

Test all five of the following combinations. Check every page on each:

- [ ] **Chrome on Android** (mid-range device — Samsung Galaxy or similar)
- [ ] **Safari on iPhone** (at least iPhone 12 or newer)
- [ ] **Chrome on Desktop** (Windows or Mac)
- [ ] **Safari on Desktop** (Mac)
- [ ] **Firefox on Desktop**

For each combination, verify:
- [ ] Homepage loads in under 4 seconds on mobile (use Google PageSpeed Insights: pagespeed.web.dev)
- [ ] Navigation works and hamburger menu opens/closes correctly on mobile
- [ ] Contact form fields are easy to tap and type into on a phone
- [ ] WhatsApp button is tappable without accidentally hitting other elements
- [ ] No text overflows its container or gets cut off on small screens
- [ ] 3D animation is NOT visible on mobile — gradient shows correctly instead
- [ ] All images are visible and not distorted
- [ ] Dark mode toggle works on all tested browsers

---

## SECTION E — SEO & Search

- [ ] sitemap.xml exists at indibiotek.com/sitemap.xml — visit the URL and confirm it loads
- [ ] robots.txt exists at indibiotek.com/robots.txt and does NOT block search engine crawlers
- [ ] sitemap.xml has been submitted to Google Search Console
- [ ] indibiotek.com is verified in Google Search Console
- [ ] All page titles are unique — no two pages have the same title
- [ ] All meta descriptions are unique — no two pages have the same description
- [ ] Open Graph tags are set — share any page link in WhatsApp or LinkedIn and confirm a preview card appears with the correct title, description, and image
- [ ] The canonical URL for each page is set to its own URL
- [ ] No `noindex` meta tags are accidentally present on public pages (this would hide pages from Google)

---

## SECTION F — Analytics

- [ ] Google Tag Manager container code is added to every page — head and body sections
- [ ] Google Analytics 4 is receiving data — go to GA4 → Realtime → open the website in another tab → confirm you appear as an active user
- [ ] Contact Form Submitted event is tracked — submit a test form and check GA4 → Events → DebugView
- [ ] WhatsApp Button Clicked event is tracked — click the button and check GA4 → DebugView
- [ ] Catalogue Link Clicked event is tracked
- [ ] Google Search Console is connected to GA4
- [ ] Hotjar is installed and recording sessions — confirm at hotjar.com → Sites → Status: Active

---

## SECTION G — Domain & Hosting

- [ ] indibiotek.com resolves correctly — no GoDaddy website builder page appears
- [ ] www.indibiotek.com and indibiotek.com both load the same site (no split)
- [ ] SSL certificate is active — browser shows padlock icon and https:// in the address bar
- [ ] SSL is valid for at least 6 months — check expiry date in browser padlock
- [ ] Domain renewal date is noted: __________________ (fill in from GoDaddy account)
- [ ] Auto-renew is enabled for the domain in GoDaddy — do not let this lapse
- [ ] Old GoDaddy website builder plan — note its renewal date separately: __________________
- [ ] Framer hosting plan renewal date noted: __________________

---

## SECTION H — Legal & Compliance

- [ ] Privacy Policy page is live at `/privacy-policy` with real, approved content
- [ ] Privacy Policy covers: what data is collected (form submissions), how it is used (email response), and how to request deletion
- [ ] Contact form GDPR/IT Act notice is present: a line under the submit button stating how data is used (e.g. "Your details will only be used to respond to your inquiry.")
- [ ] Copyright notice in footer reads: Copyright © 2026 IndiBiotek Private Limited. All Rights Reserved.
- [ ] IndiBiotek Private Limited company name is correctly spelled everywhere — including footer

---

## SECTION I — Final Sign-Off

Before going live, both parties below confirm all items above are ticked:

| Role | Name | Sign-Off Date |
|---|---|---|
| IndiBiotek Team Lead | | |
| Person Building the Site | | |

**Soft launch recommended:** Share the live link with 2–3 trusted contacts for 24–48 hours before public announcement. Collect any last feedback. Make final fixes. Then announce publicly.

**Post-launch:** Monitor info@indibiotek.com for the first 48 hours. Confirm contact form submissions are arriving. Check GA4 Realtime on launch day.
