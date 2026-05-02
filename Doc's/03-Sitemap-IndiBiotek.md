# Sitemap & URL Structure
## IndiBiotek Private Limited — Website Redesign
**Version:** v1.0 | **Date:** May 2026 | **Prepared for:** IndiBiotek Private Limited

---

## Version History

| Version | Date | Change |
|---|---|---|
| v1.0 | May 2026 | Initial release |

---

## 1. Site Architecture

```
indibiotek.com/                          ← Home (Landing)
├── /about-us                            ← About Us (Marketing)
├── /research-and-development            ← R&D (Marketing)
├── /lifesciences                        ← Lifesciences Division (Marketing)
├── /agri                                ← Agri Division (Marketing)
├── /scientific                          ← Scientific Division (Marketing)
├── /services                            ← Services (Marketing)
├── /contact-us                          ← Contact Us (Form)
└── /privacy-policy                      ← Privacy Policy (Legal)
```

Total public pages: **9** (8 main + 1 legal)
Login-required pages: **None**
Maximum depth: **1 level**

---

## 2. Full URL Map

| Page Name | URL Slug | Page Type | Auth Required | SEO Priority |
|---|---|---|---|---|
| Home | `/` | Landing | No | High |
| About Us | `/about-us` | Marketing | No | High |
| Research & Development | `/research-and-development` | Marketing | No | High |
| Lifesciences | `/lifesciences` | Marketing | No | High |
| Agri | `/agri` | Marketing | No | High |
| Scientific | `/scientific` | Marketing | No | High |
| Services | `/services` | Marketing | No | High |
| Contact Us | `/contact-us` | Form | No | High |
| Privacy Policy | `/privacy-policy` | Legal | No | Low |

---

## 3. Navigation Structure

### Primary Navigation (top bar — all pages)

```
Home  |  About Us  |  R&D  |  Lifesciences  |  Agri  |  Scientific  |  Services  |  [Contact Us Button]
```

**Behaviour:**
- Transparent over the homepage hero section
- Becomes solid (Deep Navy `#0A1628`) on scroll
- On mobile: collapses to hamburger menu icon
- "Contact Us" styled as BioGreen accent button

### Footer Navigation

**Column 1 — Company**
Home / About Us / Research & Development / Contact Us

**Column 2 — Divisions**
Lifesciences / Agri / Scientific / Services

**Column 3 — Legal & Credentials**
Privacy Policy / Patent No. 202511077832
Startup India | MSME | Make in India | BIRAC (badge logos)

**Bottom bar:**
Copyright © 2026 IndiBiotek Private Limited — Kolkata, West Bengal
info@indibiotek.com | +91 89020 52927

---

## 4. URL Rules

- Always lowercase: `/about-us` not `/About-Us`
- Hyphens, not underscores: `/research-and-development` not `/research_and_development`
- No trailing slash: `indibiotek.com/about-us` not `indibiotek.com/about-us/`
- Keyword-first, flat structure: `/lifesciences` not `/divisions/life/lifesciences`
- No dates in permanent page URLs

---

## 5. Redirect Map (GoDaddy → New Site)

| Old URL | New URL | Type |
|---|---|---|
| `/about-us` | `/about-us` | No change |
| `/research-%26-development` | `/research-and-development` | 301 Permanent |
| `/lifesciences` | `/lifesciences` | No change |
| `/agri` | `/agri` | No change |
| `/scientific` | `/scientific` | No change |
| `/services` | `/services` | No change |
| `/careers` | `/` | 301 → Home (page removed) |
| `/contact-us` | `/contact-us` | No change |

---

## 6. XML Sitemap Plan

| Page | Priority | Change Frequency |
|---|---|---|
| Home | 1.0 | Monthly |
| About Us | 0.8 | Rarely |
| R&D | 0.8 | Rarely |
| Lifesciences | 0.9 | Monthly |
| Agri | 0.9 | Monthly |
| Scientific | 0.9 | Monthly |
| Services | 0.8 | Rarely |
| Contact Us | 0.7 | Rarely |
| Privacy Policy | 0.3 | Rarely |

Sitemap file location: `indibiotek.com/sitemap.xml`
Robots file location: `indibiotek.com/robots.txt`

---

## 7. Internal Linking Plan

| From Page | Links To | Reason |
|---|---|---|
| Home | All 7 main pages | Navigation + division cards + CTAs |
| Home | Contact Us | Multiple CTAs throughout homepage |
| About Us | R&D | "Our research" reference |
| About Us | Contact Us | End-of-page CTA |
| R&D | Lifesciences | R&D outputs feed products |
| R&D | Contact Us | Inquiry CTA |
| Lifesciences | Contact Us | "Enquire Now" CTA |
| Lifesciences | Scientific | Cross-reference for labs |
| Agri | Contact Us | "Enquire Now" CTA |
| Scientific | Contact Us | "Enquire Now" CTA |
| Scientific | Lifesciences | Cross-reference for labs |
| Services | Contact Us | Primary CTA |
| All pages | Contact Us | Via persistent WhatsApp floating button |
