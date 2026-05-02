# Analytics & Tracking Plan
## IndiBiotek Private Limited — Website Redesign
**Version:** v1.0 | **Date:** May 2026 | **Prepared for:** IndiBiotek Private Limited

---

## Version History

| Version | Date | Change |
|---|---|---|
| v1.0 | May 2026 | Initial release |

---

## 1. What Success Looks Like

These are the five numbers that tell you whether the new website is working:

> **1. At least 15% of all visitors click the Contact button or submit the contact form.**
> This is the most important number. If visitors are not contacting you, the site is not doing its job.

> **2. At least 60% of visitors scroll past the hero section on the homepage.**
> If people leave after seeing only the first screen, something is wrong with the first impression.

> **3. The WhatsApp button is clicked by at least 10% of mobile visitors.**
> Mobile visitors who click WhatsApp are high-intent leads. Track this separately from desktop.

> **4. Visitors spend at least 90 seconds on the Lifesciences, Agri, or Scientific division pages.**
> If they read the division pages, they are seriously evaluating your products.

> **5. At least 30% of visitors view more than one page.**
> Visitors who look at multiple pages are engaged — they want to know more.

---

## 2. Recommended Tools

| Tool | What It Does | Cost | When to Install |
|---|---|---|---|
| Google Analytics 4 (GA4) | Tracks everything — visitors, pages, clicks, time on site, where people came from | Free | Before launch — Day 1 |
| Google Search Console | Shows what people searched for on Google to find you, and which pages appear in results | Free | Before launch — Day 1 |
| Google Tag Manager | Makes it easy to add tracking without touching the website code | Free | Before launch — Day 1 |
| Hotjar (Free Plan) | Records how visitors move on the page — where they click, where they stop reading, where they leave | Free | First week after launch |
| LinkedIn Insight Tag | Tracks visits from LinkedIn — useful since VCs and grant bodies often come via LinkedIn | Free | Optional — add if running LinkedIn presence |

**Priority order:** Install GA4 + Search Console + Tag Manager first. Add Hotjar in the first week. LinkedIn tag only if social media activity begins.

---

## 3. Key Events to Track

These are the specific actions that matter — track each one from day one.

| Event Name | What Triggers It | Why It Matters |
|---|---|---|
| Contact Form Submitted | Visitor completes and submits the contact form | Primary conversion — most important event |
| WhatsApp Button Clicked | Visitor taps/clicks the floating WhatsApp button | High-intent lead signal |
| Catalogue Link Clicked | Visitor clicks the Google Drive catalogue link | Shows purchase intent |
| Email Link Clicked | Visitor clicks info@indibiotek.com | Direct outreach intent |
| Phone Number Clicked | Visitor clicks +91 89020 52927 | Mobile lead signal |
| Division Page Visited | Visitor lands on /lifesciences, /agri, or /scientific | Shows which audience segment visits most |
| R&D Page Visited | Visitor lands on /research-and-development | Investor/grant body signal |
| Scroll Depth 50% Home | Visitor scrolls past halfway on the homepage | Engagement quality indicator |
| Scroll Depth 75% Home | Visitor scrolls three-quarters down the homepage | High engagement signal |
| Session Duration >2min | Visitor stays on site for more than 2 minutes | Strong engagement indicator |

---

## 4. Conversion Goals

### Primary Conversion
**Contact form successfully submitted** — this is the single most important action on the site.

### Micro-Conversions (supporting signals)

| Micro-Conversion | Page | What It Tells You |
|---|---|---|
| WhatsApp button clicked | All pages | Visitor wants immediate contact |
| Catalogue link opened | Division pages | Visitor is evaluating products seriously |
| Email address clicked | Contact Us | Visitor prefers email over form |
| R&D page scrolled to bottom | R&D | Investor-type visitor deeply engaged |
| Division page visited + Contact page visited in same session | Multiple | Strong sales funnel progression |

---

## 5. Monthly Reporting Checklist

Check these ten things at the start of every month:

1. **How many people visited the website?** (Total visitors — GA4 → Reports → Overview)
2. **Where did they come from?** (Google search, direct, social, referral — GA4 → Traffic Acquisition)
3. **How many submitted the contact form?** (Contact Form Submitted event — GA4 → Events)
4. **How many clicked the WhatsApp button?** (WhatsApp Button Clicked event — GA4 → Events)
5. **Which division page got the most visits?** (Lifesciences vs Agri vs Scientific — GA4 → Pages)
6. **How long did people stay on average?** (Average engagement time — GA4 → Overview)
7. **What percentage left immediately without scrolling?** (Bounce/engagement rate — GA4 → Overview)
8. **What search terms brought people from Google?** (Search Console → Performance → Queries)
9. **Are there any pages with zero visits?** (Flag for review — may need better internal linking)
10. **Did any visitors view the R&D page?** (Investor signal — GA4 → Pages)

---

## 6. Red Flags to Watch For

| What You See | What It Means | What to Do |
|---|---|---|
| Less than 2% of visitors submit the contact form | The form or CTA is not visible enough | Move the form higher on the Contact page; add a CTA on more pages |
| Over 70% of visitors leave within 10 seconds | The homepage is not making a strong first impression | Review the hero headline, loading speed, and mobile layout |
| The 3D background is taking more than 3 seconds to load | Performance issue | Reduce animation complexity; ensure mobile fallback is active |
| One division page gets far fewer visits than others | That audience is not finding the site | Improve SEO keywords for that division; add better navigation |
| WhatsApp clicks drop suddenly | Button may be broken or hidden | Test the button on mobile; check z-index and positioning |
| Google Search Console shows zero impressions after 4 weeks | Site is not indexed by Google | Verify sitemap.xml is submitted; check robots.txt is not blocking crawlers |

---

## 7. 90-Day Review Plan

### At 30 Days Post-Launch
- Confirm GA4 is tracking all 10 events correctly
- Check that Google Search Console shows indibiotek.com being indexed
- Review first month visitor count and top traffic sources
- Check Hotjar recordings — identify where visitors stop scrolling on the homepage
- Flag any technical issues with the contact form or WhatsApp button

### At 60 Days Post-Launch
- Review which division page has the highest engagement time
- Check search terms bringing visitors — are any biotech keywords showing up?
- Compare contact form submissions vs WhatsApp clicks — which do visitors prefer?
- Identify the top exit page — where do visitors leave most often?

### At 90 Days Post-Launch
- Full review against the 5 success metrics defined in Section 1
- Decide whether any page needs updated copy based on visitor behaviour
- Assess whether the catalogue link is being clicked — if not, consider featuring it more prominently
- Set targets for months 4–6 based on 90-day baseline

---

## 8. Setup Instructions — Plain English

### Step 1: Create a Google Analytics 4 account
1. Go to analytics.google.com and sign in with your Google account (create one if needed)
2. Click "Start measuring" → enter "IndiBiotek" as the account name
3. Create a Property called "IndiBiotek Website" — select India as your time zone and INR as currency
4. Choose "Web" as the platform → enter indibiotek.com
5. Copy your Measurement ID (looks like G-XXXXXXXXXX) — you will need this

### Step 2: Create a Google Tag Manager account
1. Go to tagmanager.google.com → Create Account → enter "IndiBiotek" → Container name "indibiotek.com"
2. Select "Web" → Create
3. Copy the two code snippets shown — your web developer / platform will need to add these to every page

### Step 3: Connect GA4 to Tag Manager
1. In Tag Manager → New Tag → Google Analytics: GA4 Configuration
2. Enter your Measurement ID from Step 1
3. Set trigger to "All Pages" → Save → Submit → Publish

### Step 4: Set up Google Search Console
1. Go to search.google.com/search-console
2. Click "Add Property" → enter https://indibiotek.com
3. Verify ownership — the easiest method is via Google Analytics (if already installed)
4. Submit your sitemap: go to Sitemaps → enter `sitemap.xml` → Submit

### Step 5: Install Hotjar
1. Go to hotjar.com → create a free account
2. Add your site → copy the Hotjar tracking code
3. In Google Tag Manager → New Tag → Custom HTML → paste the Hotjar code
4. Set trigger to "All Pages" → Save → Submit → Publish
