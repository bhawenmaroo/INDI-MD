# Post-Launch Maintenance Guide
## IndiBiotek Private Limited — Website Redesign
**Version:** v1.0 | **Date:** May 2026 | **Prepared for:** IndiBiotek Private Limited

---

## Version History

| Version | Date | Change |
|---|---|---|
| v1.0 | May 2026 | Initial release |

---

## A Note Before You Begin

This guide is written for the IndiBiotek team member responsible for keeping the website running after launch. You do not need any technical knowledge to follow it. Every section is written in plain English, and where a task might need help, an AI prompt is included that you can paste directly into Claude or ChatGPT to get step-by-step assistance.

The website will not look after itself — but it also does not need daily attention. Follow the monthly routine in this guide and the site will stay fast, secure, and effective for years.

---

## Emergency Contacts

Fill these in before launch and keep this page accessible:

| Role | Name | Contact |
|---|---|---|
| Person who built the site | | |
| Framer account email | | |
| GoDaddy account email (domain) | | |
| Formspree account email | | |
| Google account (GA4 / Search Console) | | |
| IndiBiotek primary contact | | info@indibiotek.com |

---

## Section 1 — Emergency: The Website Is Down

**If the website is not loading, follow these steps in order:**

1. Check if the problem is your device — open the site on a different phone or computer
2. Check if it is a general internet issue — try visiting google.com on the same connection
3. Check Framer's status at status.framer.com — if there is a red icon, Framer is having an issue and will fix it without any action from you
4. Check if the domain has expired — log into GoDaddy → Domains → confirm indibiotek.com shows "Active"
5. If the domain is expired, renew it immediately — this is the most common cause of sites going offline
6. If none of the above, contact the person who built the site

**AI Prompt for Emergency Help:**
> "My website indibiotek.com is not loading. It is built on Framer and hosted through Framer. The domain is registered with GoDaddy. I have checked [describe what you have checked]. Please help me diagnose and fix the issue step by step."

---

## Section 2 — Emergency: The Contact Form Is Not Working

If inquiries have stopped arriving at info@indibiotek.com:

1. Go to indibiotek.com/contact-us and submit a test form using your own name and email
2. Check info@indibiotek.com inbox — including spam/junk folder — within 5 minutes
3. If not received, log into your Formspree account at formspree.io and check the form's submission log
4. If submissions are showing in Formspree but not arriving by email, check the destination email address in your Formspree form settings
5. If submissions are not showing in Formspree at all, the form may have a technical issue — contact the site builder

**AI Prompt:**
> "My website contact form uses Formspree and submissions are not arriving at info@indibiotek.com. I have checked my spam folder. Please help me diagnose the issue and fix it."

---

## Section 3 — Emergency: The WhatsApp Button Is Broken

1. Open the website on your phone and tap the green WhatsApp button
2. If it does not open WhatsApp, the link may be broken — note the exact URL it tries to open
3. The correct link should be: `https://wa.me/918902052927`
4. Contact the site builder with the exact error you see

---

## Section 4 — Weekly Tasks (5 minutes)

These take less than 5 minutes once a week:

- [ ] Check info@indibiotek.com for any contact form submissions — reply to every one within 24 hours
- [ ] Check WhatsApp (+91 89020 52927) for any messages from website visitors
- [ ] Quickly browse the homepage on your phone — does everything look correct?

---

## Section 5 — Monthly Tasks (30 minutes)

Do these at the start of every month:

### 5A — Check Your Analytics Numbers

1. Go to analytics.google.com → your IndiBiotek account
2. Check the five success metrics from the Analytics Plan document:
   - How many people visited the site this month?
   - How many submitted the contact form?
   - How many clicked the WhatsApp button?
   - Which division page got the most visits?
   - What percentage of visitors viewed more than one page?
3. Note the numbers in a simple spreadsheet — month by month comparison is where insight comes from

**AI Prompt:**
> "I am looking at my Google Analytics 4 account for my website indibiotek.com. I want to find [specific metric]. Please explain step by step where to find this in the GA4 interface."

---

### 5B — Update Any Outdated Content

Review these items monthly and update if needed:
- [ ] Are the team member names and photos still correct on the About Us page?
- [ ] Are all 11 catalogue links still working? Click the Google Drive link and confirm all catalogues open
- [ ] Are the contact details (phone, email, address) still correct?
- [ ] Is any product or service information outdated?

**How to update content in Framer:**
1. Log into framer.com with your account
2. Open the IndiBiotek project
3. Click the page you want to edit → click the text you want to change → type the new text
4. Click Publish in the top right → Publish to indibiotek.com

**AI Prompt:**
> "I need to update a paragraph of text on my Framer website. I want to change [describe the text] on the [page name] page. Please guide me through doing this in Framer."

---

### 5C — Security Check

1. Visit sucuri.net/website-malware-scanner — enter indibiotek.com — run a free scan
2. If the scan returns any warnings, note them and contact the site builder
3. Confirm the SSL padlock still shows in the browser when you visit indibiotek.com
4. If the padlock is missing or shows a warning, the SSL certificate may have expired — contact Framer support

---

### 5D — Monthly Health Triangle

Check these three numbers every month and compare to the previous month:

**RANK — Are we moving up on Google?**
Go to Google Search Console → Performance → Queries. Are you seeing more impressions and clicks than last month? Are any biotech keywords showing IndiBiotek in the results?

**RETAIN — Are people staying?**
Go to GA4 → Reports → Overview → Average Engagement Time. Is it above 60 seconds? If it drops below 30 seconds, visitors are leaving without reading — review the homepage copy and loading speed.

**CONVERT — Are people contacting you?**
Go to GA4 → Events → Contact Form Submitted. Is this number growing month-on-month? This is the most important single metric for the business.

What good looks like:
- Rank: Search Console impressions growing month-on-month
- Retain: Average engagement time above 90 seconds
- Convert: At least 15 form submissions or WhatsApp clicks per 100 visitors

What needs attention:
- Rank: Zero search impressions after 60 days — sitemap may need resubmitting
- Retain: Under 30 seconds average engagement — homepage may have a loading or clarity issue
- Convert: Under 5 contacts per 100 visitors — CTA placement or form may need review

---

## Section 6 — Quarterly Tasks (2 hours, every 3 months)

### 6A — Google Search Console Review
1. Log into search.google.com/search-console
2. Go to Coverage — check for any pages marked as Errors (red) or Excluded
3. Go to Performance → Pages — identify any page getting zero clicks despite impressions
4. Go to Performance → Queries — note which search terms bring visitors to the site
5. If you see a meaningful new keyword appearing, consider adding a sentence to the relevant page using that exact phrase

**AI Prompt:**
> "I am reviewing my Google Search Console data for indibiotek.com. I can see [describe what you see]. What actions should I take to improve my website's search performance?"

---

### 6B — Full Content Review

Read every page of the website as if you are a new visitor. Ask:
- Is all the information accurate?
- Is any product, service, or team information outdated?
- Are the catalogues up to date?
- Does the copy still reflect the company's current positioning?

Update anything that feels stale.

---

### 6C — Speed Test

1. Go to pagespeed.web.dev
2. Enter indibiotek.com and run the test for Mobile
3. Note the Performance score — aim for 70+
4. If the score drops below 60, contact the site builder to investigate

---

## Section 7 — Annual Tasks

- [ ] Renew the domain (indibiotek.com) before it expires — set a Google Calendar reminder 60 days before the renewal date
- [ ] Renew the Framer hosting plan before it expires
- [ ] Confirm Formspree plan is active — check submission limits have not been exceeded
- [ ] Review the Privacy Policy — ensure it still accurately reflects how IndiBiotek collects and uses data
- [ ] Run a full device and browser test (same as the Launch Checklist Section D) — confirm everything still works on current devices and browsers
- [ ] Review all social media account passwords and update if needed

---

## Section 8 — Domain & Hosting Renewal

| Item | Where to Renew | Reminder Timing |
|---|---|---|
| Domain — indibiotek.com | GoDaddy account → Domains | 60 days before expiry |
| Framer hosting plan | Framer account → Settings → Plan | 30 days before expiry |
| Formspree form plan | Formspree account → Billing | 30 days before expiry |

**What happens if the domain expires:**
The website goes offline immediately. All email and WhatsApp traffic stops. Visitors see an error page. Recovery is possible but takes 24–72 hours and may incur additional fees. **Do not let the domain lapse — auto-renew must be enabled.**

To enable auto-renew on GoDaddy:
1. Log into godaddy.com → Products → Domains
2. Click the three dots next to indibiotek.com → Settings
3. Confirm Auto-Renew is toggled ON

---

## Section 9 — Monthly Content Calendar

Use this table to plan social media posts that link back to the website. Three posts per week across LinkedIn, Instagram, and Facebook.

| Week | Monday (LinkedIn) | Wednesday (Instagram) | Friday (Facebook + LinkedIn) |
|---|---|---|---|
| Week 1 | Education post — biotech science explainer | Behind the scenes — lab or team | Agri product spotlight + catalogue link |
| Week 2 | Mission post — Make in India story | Product spotlight — Lifesciences | Education post — farming with bioinputs |
| Week 3 | R&D update or credential highlight | Behind the scenes — milestone or event | Scientific division spotlight |
| Week 4 | Thought leadership — industry observation | Team introduction or company culture | Contact/inquiry CTA post |

Rotate the four content pillars (Behind the Scenes, Education, Product Spotlight, Mission) across the month. Every post should include the website link and at least one call to action.

---

## Section 10 — When to Think About a Redesign

The current website is a solid foundation. It will serve IndiBiotek well for approximately 2 years from launch (until mid-2028) before a significant redesign is likely needed.

**Consider a redesign when any three of the following are true:**
1. The Health Triangle (Section 5D) has underperformed for three consecutive months with no improvement after content fixes
2. The design starts to look dated compared to what competitors and international biotech companies are doing
3. IndiBiotek adds a significant new division, product line, or business model that the current site structure cannot accommodate
4. A major rebrand — new logo, new name, new colour palette — requires the visual foundation to be rebuilt
5. The website receives consistent negative feedback from investors or high-value prospects

**How to start the redesign conversation:**
> "Our website indibiotek.com was built in 2025 on Framer. We have been using it for [duration] and [describe what has changed]. We need to understand what a redesign would involve, how long it would take, and what it would cost. Please advise."

---

## Section 11 — AI Prompt Library

All prompts from throughout this guide, collected in one place for quick reference:

**Emergency — site down:**
> "My website indibiotek.com is not loading. It is built on Framer and the domain is registered with GoDaddy. I have checked [what you checked]. Please help me diagnose and fix the issue step by step."

**Emergency — form not working:**
> "My website contact form uses Formspree and submissions are not arriving at info@indibiotek.com. I have checked my spam folder. Please help me diagnose the issue and fix it."

**Monthly analytics:**
> "I am looking at my Google Analytics 4 account for indibiotek.com. I want to find [metric]. Please explain step by step where to find this in the GA4 interface."

**Content update in Framer:**
> "I need to update a paragraph of text on my Framer website. I want to change [describe text] on the [page name] page. Please guide me through doing this in Framer."

**Search Console review:**
> "I am reviewing my Google Search Console data for indibiotek.com. I can see [describe what you see]. What actions should I take to improve search performance?"

**Speed test poor score:**
> "My Framer website indibiotek.com is scoring [score] on Google PageSpeed Insights for mobile. The main issues flagged are [describe issues]. Please advise on what to fix and how."

**Redesign conversation:**
> "Our website indibiotek.com was built in 2025 on Framer. We have been using it for [duration] and [describe changes]. We need to understand what a redesign would involve, how long it would take, and what it would cost. Please advise."

---

*This document should be stored in IndiBiotek's shared Google Drive or company files where any team member can access it.*
*Update this document whenever any account credentials, contact details, or renewal dates change.*
*Version this document — add a row to the Version History table at the top when changes are made.*
