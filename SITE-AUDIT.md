# Northform Psychiatry — Site Audit, round 2 (Nov 11, 2026)

Read-only audit. The only site changes this session are the ones in "Changes made this session" below; the audit findings themselves are not fixed.

**Method:** All 33 routes (the sitemap plus `/patients`) were fetched from the dev server and checked for status, h1, title, description and word count. Each page's rendered text was also searched for risky wording. Key pages were screenshotted in the browser: the home page, `/start`, `/patients`, `/billing`, `/services` and `/contact`. Every route was loaded at 320, 390, 768 and 1024 px and checked for horizontal overflow.

**Limits:** I did not screenshot every page. Tablet and mobile were verified by measurement, not by eye. Performance was not measured, because this is the dev build.

## Changes made this session

- **Hero:**
  - The background now loads at higher quality (92 instead of 75), and the dimming filter that muted it is gone.
  - The slow drift is larger and slightly faster (28 s cycle).
  - The four-fact row (First visit, Every follow-up, Where, Payment) is removed.
  - The text-readability gradient is lighter and left-weighted, with a soft text shadow.
- **Header:** the vertical divider is gone. The right side now reads: language, a person icon and "Patient login", then the "Become a patient" button.

## Resolved after this audit

- **Legal pages:** the HIPAA Notice of Privacy Practices and the Washington consumer health-data policy are now full documents, with no placeholder language. They have an effective date, a privacy contact, and the HHS and Washington Attorney General complaint routes. The text is in English with a translated-help note in the other three languages. It should be reviewed by counsel or Mitch's compliance contact before launch.
- **Stale software references:** "PracticeQ" and "once linked" are gone from the privacy, terms, telehealth and patient-portal copy in all four languages.
- **Services not yet open:** EMDR, medication-assisted treatment and perinatal care are described in the future tense ("opens January 2027", and so on) on the home page, the services pages and the conditions pages, in all four languages. The perinatal hormone-therapy sentence was removed.
- **Crisis bar:** the 911 and 988 links have larger tap targets.
- Awards and domain: set aside for now, at Marco's direction.

## Summary

The design reads as finished, and nothing overflows horizontally at any width tested. Structure is consistent: every real page has one h1, a title, and alt text on images.

The open work is almost all **content that nobody has confirmed**:
- Placeholder legal pages.
- Duration, fee and "sliding scale" claims that conflict with the live widget.
- Services Mitch never listed.

## Findings that need a decision (High)

1. **Two legal pages are marked as placeholders to the public.**
   - `/privacy/npp` has the meta description "Placeholder HIPAA Notice of Privacy Practices", and `/privacy/health-data` uses the word "placeholder" in its description. Both are about 250 words.
   - A real HIPAA Notice of Privacy Practices has required elements. These must be reviewed by whoever handles Mitch's compliance before launch. Do not ship them as drafted.
2. **Sixty-minute and 75–90 minute claims appear on 14 pages.** They are on home, services, conditions (depression, ADHD), medication-management, MAT, perinatal, geriatric, OUD, telehealth, billing and the FAQ.
   - IntakeQ lists Medication Management at 30 min, Extended Follow-up at 50 min, and the evaluation at 60 min.
   - Mitch's rate list gave dollar amounts, not those durations.
3. **"Sliding scale", "payment plans" and "$0 fit call" were never in Mitch's supplied details.** They appear on home, services, child-adolescent, billing (six times), the FAQ and the schema data.
4. **The widget lists services the site does not mention:** Extended Follow-up ($250) and Occupational/Return-to-Work ($375), which are in IntakeQ but not in Mitch's rate list or on `/billing`.
5. **Services Mitch never listed have pages.** `/services/geriatric` and `/services/child-adolescent` exist and are in the sitemap.
   - Mitch's list was general, ADHD, anxiety, depression, bipolar, PTSD, pharmacogenomics, functional medicine, occupational, EMDR, substance-use/MAT and perinatal.
   - Child and adolescent also conflicts with "ages 12 and up" in the other direction, because it implies younger children. Geriatric is not mentioned anywhere by him.
6. **Present-tense copy for services not yet open:** home and the PTSD condition page describe EMDR, and home and `/conditions/oud` describe medication-assisted treatment, in present tense. Timeline: MAT January 2027, perinatal May 2027, EMDR September 2027.
7. **Age wording:** home says "adults and college-age"; Mitch's details say 12 and up.
8. **Visible awards schema.** `content/recognitions.ts` lists "Best Psychiatrist", "Best Nurse Technology", "Top 100 Healthcare Leaders" and "Top 40 under 40" with no issuer or year. Do not publish them in structured data until Mitch can name the source of each.
9. **Fee-card blurbs.** The descriptions under each price on `/billing` (for example "A longer diagnostic visit with history, standardized screenings…") are mine, not Mitch's or the widget's.

## Page-by-page and directory-by-directory

Word counts are rendered text including nav and footer (roughly 160 words of that is chrome).

### Root (`/`) — 1,071 words, h1 "Psychiatric care with time to see you."
- **Works:** full-bleed river photo with slow drift, tabbed pharmacogenomics section, treatment list, bio with real portrait, three practical blocks, CTA.
- **Issues:**
  - Seven sixty-minute or 75–90 minute mentions.
  - A fit-call mention.
  - A sliding-scale mention.
  - "College" wording.
  - Present-tense EMDR and MAT.
  - The tagline "Sixty minutes. A name. A plan." repeats the unconfirmed duration claim in the hero itself.
- **Design:** the photo is a fallback until the seasonal set arrives. Mobile height is about 7,000 px.

### `/about` — 368 words
- Clean and accurate against his bio. Awards stay off the visible page.
- **Gap:** Mitch's two bio options were provided, and the page uses neither verbatim. Confirm the final wording with him.
- **Gap:** the "30 years" and "precision medicine" phrases correctly do not appear.

### `/approach` — 319 words
- Pharmacogenomics and supplementation explained.
- **Check:** the one "physician/doctor" hit. The home and terms pages use the word only to say he is not a physician, which is correct. Confirm the one on `/approach` reads the same way.

### `/services` — 345 words; services directory (6 child pages)
- **Page:** "How the hour is used" headline, six service rows. The header image is offset to the right-hand columns with empty space to its left, which looks intentional.
- **Issues:** "sixty-minute" in the lede and again in the Psychotherapy section. "Sliding scale" is a headline with an invented paragraph. See findings 5 and 6.
- **Gap:** no pharmacogenomics, functional medicine or occupational psychiatry service page, though Mitch listed all three as available now. Pharmacogenomics lives at `/approach`; occupational lives in `/insights`.
- **Child pages:**
  - `medication-management`: duration claim, and it contradicts the 30-minute widget service.
  - `mat`: "Opens January 2027".
  - `perinatal`: "Opens May 2027".
  - `emdr`: "Opens September 2027".
  - `child-adolescent`: unlisted by Mitch, with a sliding-scale claim.
  - `geriatric`: unlisted by Mitch.

### `/conditions` — 310 words; conditions directory (6 child pages)
- Index plus depression (481 words), anxiety, ADHD, bipolar, PTSD, OUD.
- **Issues:** depression and ADHD each repeat the sixty-minute claim three times. PTSD mentions EMDR. OUD mentions MAT and a sixty-minute claim.
- **Gap:** Mitch lists occupational and functional medicine as available now. There is no condition or service page for either. OUD is not on his list under that name; he listed substance-use/MAT.

### `/billing` — 979 words, $19 mentions
- **Works:** estimator, standard-rates cards, the five payment notes side by side, cancellation grid, FAQ.
- **Issues:** findings 2, 3, 4 and 9. The FAQ still carries invented durations, a $0 fit call and "sliding scale". The page contains the word "soon".
- **Design:** after the rework, the layout is even and consistent. At 5-across the payment notes are narrow at the 1024 px breakpoint.

### `/start` — 178 words
- Stripped to the widget plus three links and the crisis note.
- **Works:** the widget mounts once, the loading state holds the space, nothing is invented.
- **Issue:** the white widget and its orange and green buttons clash with the site palette. Check IntakeQ's widget color settings.
- **Issue:** the widget's own "Loading…" label stays visible inside the iframe. See below.

### `/patients` — 170 words
- **Works:** portal widget, email, secondary "Become a patient" button.
- **Issues:**
  - The intro still says "sign in to the portal when the link is live".
  - The meta description is only 61 characters.
  - The portal widget's "Loading…" label.

### `/telehealth` — 214 words
- Washington and Idaho licensing is correct. One sixty-minute claim.
- **Gap:** no mention of what technology or platform is used for video, or what to do if the connection fails.

### `/contact` — 212 words
- Email, phone, address, languages. All are Mitch's real details.
- **Gaps:**
  - No map or directions.
  - No parking or office-access note.
  - Fax appears in his details but not on the page.
  - Hours appear in the header and footer but not in a contact block.
  - "How to begin" repeats "Become a patient" three times on one screen (header, body, footer).

### `/insights` directory — index plus education, recipes, women, and three FMLA articles
- Index 302 words; articles 360–390 words each.
- **Works:** the FMLA article set is on-brand and clean.
- **Issues:**
  - `/insights/recipes` and `/insights/women` read as filler for a psychiatry practice. Confirm Mitch wants meal-prep and women's resources here.
  - `/insights/videos` is disallowed in robots but is not an existing route.
- **Gap:** no author byline or last-reviewed date on clinical articles.

### `/privacy`, `/privacy/npp`, `/privacy/health-data`, `/terms`, `/nondiscrimination`
- `/privacy` (240 words) and `/nondiscrimination` (233) read as complete.
- `/privacy/npp` and `/privacy/health-data` are placeholders (finding 1).
- `/terms` is 218 words and has a 50-character meta description. It uses "physician" only to disclaim the title.
- **Gap:** no accessibility statement, no cookie or analytics note. Neither is required unless you add analytics, but Washington's My Health My Data Act applies to a practice like this.

### Routes that are not content pages
- `/garden`, `/truenorth`, `/preview/a|b|c` and `/api/north`. The first two and `/preview` are disallowed in `robots.txt` and are not in the sitemap.
- Disallow is not the same as noindex. They can still be indexed if linked from elsewhere. Remove them, or add a `noindex` tag, before launch.
- `/for-colleagues` redirects to `/start`. `/llms.txt` returns 404, as intended.

### Project folders
- `app/` (routes), `components/`, `content/` (articles, conditions, services, fees, faq, recognitions), `lib/` (i18n, SEO, schema, season, photos), `public/images` (7 photos plus CREDITS.txt).
- `.verify-shots/` is an empty leftover folder. `scripts/` exists; check it holds nothing needed for launch.
- Root files with process notes: `AUDIT.md`, `MITCH-INTAKE.md`, `README.md`, `SITE-AUDIT.md`. Remove or move them before the repo is shared.
- `public/images/CREDITS.txt` lists CC BY-SA sources. Those photos need attribution on the site, which the footer provides.

## Technical and SEO

- **Domain.** The sitemap and robots point at `northformpsychiatry.com`, a placeholder domain. Contact emails use `northform.health`. Decide the one real domain; schema, sitemap, canonical and social metadata all depend on it.
- **No canonical tags** on any page.
- **Meta descriptions:** home is 287 characters (truncated in results). `/terms` is 50, `/patients` is 61 and `/contact` is 100.
- **Structured data:** FAQ JSON-LD on `/billing` repeats the unconfirmed claims. Awards are in the schema without issuers.
- **Git:** the repo has no commits; everything is untracked.
- **Image performance:** the hero source is 4,592 px wide and ships at 3,840 px at quality 92. That is intentional for quality, but it is a heavy first load. Check the production result.

## Design observations

- **Strong:** typography, pine-and-parchment palette, the PGx tabs, billing cards, About page, consistent crisis bar.
- **Watch:**
  - The header over the hero depends on the sky being dark. A bright seasonal photo, such as winter snow, could wash out the nav text. Test each seasonal photo.
  - Repeated "Become a patient" buttons: the header, hero, call-to-action band and footer all carry one. Fine for conversion, but heavy on short pages like `/contact`.
  - Patient login now has an icon in the header. If Mitch wants it quieter, the footer is the lowest-key place for it.
- **Widget label:** the "Loading…" text sits inside IntakeQ's iframe. It cannot be restyled from the site. Options are IntakeQ support, IntakeQ's custom widget CSS, or leaving it.

## Information still needed from Mitch

1. Real follow-up and evaluation durations, matching IntakeQ.
2. Whether a free fit call, a sliding scale and payment plans exist.
3. Whether the $250 Extended Follow-up and $375 Occupational services are current.
4. Whether child and adolescent and geriatric care are offered, and the minimum age.
5. Final bio wording, and the awards with issuer and year, or confirmation they should stay off the site.
6. Seasonal photos (spring, summer, autumn, winter).
7. The final domain.
8. Reviewed NPP and health-data policy text from a compliance reviewer.
9. Whether recipes and women's resources belong in Insights.
10. His video-visit platform and a connection-failure note.
11. Whether to publish fax and an office-access or parking note.

## Suggested order

1. Remove or confirm unconfirmed durations, sliding scale, fit call, and fee-card blurbs site-wide (including FAQ and schema).
2. Replace the two placeholder legal pages.
3. Decide the services list (geriatric, child, EMDR, MAT, perinatal wording).
4. Fix the domain, then add canonical tags and tidy descriptions.
5. Remove or noindex the stray routes.
6. Test each seasonal photo behind the header.
7. Run Lighthouse on a production build.
8. Clean the root folder and commit the repo.
