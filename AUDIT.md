# Northform Psychiatry — UX, IA, and front-end audit

**Audit only.** No application code was changed. Recommendations below wait for approval before implementation.

**Practice:** private outpatient psychiatry + telehealth in Washington; Spokane-based; Mitchell Corbet, MSN, ARNP, PMHNP-BC.

**Primary audience:** adults and college-age patients seeking medication management and sixty-minute psychiatric care; trauma / occupational psychiatry; foster parents and youth; a quieter door for healthcare colleagues. Secondary: referring providers.

**Primary conversion:** **Become a patient** → `/start` → PracticeQ intake. `site.intakeUrl` is currently `""` (`site.config.ts` L31), so the button is a same-page hash, not a live form.

**Tone wanted:** reserved Pacific Northwest — Newsreader + Source Sans 3, pine and parchment, calm and trustworthy. Not clinical-cold, not Miami-bright, not Brightside-mint.

---

## 1. Executive summary

The site already has a distinctive voice and a coherent visual system. What fails a first-time visitor — especially one who is anxious, in distress, or hesitant — is **order, completeness, and collisions between catalogs**, not a lack of craft.

### Top 5 issues

1. **Homepage order fights the visitor’s mental journey.** Cash-pay and award titles land before “do they treat what I have” and before a real first-visit walkthrough. Current sequence in `app/page.tsx`: HomeHero → Superbill band (L37–66) → RecognitionRow (L68–72) → pillars (L74–100) → TreatGrid (L102–125) → clinician photo (L127–153) → CtaBand.

2. **The conversion path is incomplete.** Header CTA goes to `/start`, but “Begin intake” is `href="#intake"` until `intakeUrl` is set (`app/start/page.tsx` L32–33). Phone, NPI, street address, portrait, and socials are still placeholders (`site.config.ts` L8–24, L26–29). Launching like this ships fake NAP into JSON-LD (`lib/schema.ts` L15–22).

3. **Primary nav hides the doors people actually need.** Header is Home / About / Approach / Services / Conditions / Insights (`site.config.ts` L55–62). Billing, Telehealth, Contact, and Become a patient (except the `lg+` header button) live in the footer. Mobile has no sticky CTA; the parchment button is `hidden … lg:flex` (`components/Header.tsx` L80–114).

4. **Trust signals are missing, placeholder, or unverifiable.** No provider photograph (`components/PortraitPlaceholder.tsx`). Footer and About show “NPI forthcoming” (`components/CredentialStrip.tsx` L9). Award titles have no issuers (`content/recognitions.ts`). Crisis 988 is footer-only at `0.72rem` (`components/Footer.tsx` L77–82). Schema telephone is `(509) 000-0000`.

5. **Four catalogs answer the same question.** Home TreatGrid (`content/treat.ts`, 9 cells), `/services` titled “What we treat.” (`app/services/page.tsx` L46), `/conditions` titled “What we treat, and how.” (`app/conditions/page.tsx` L28), and `/approach` (method vocabulary). A first-time visitor cannot tell which page is canonical.

### Top 5 opportunities

1. Reorder the homepage to: **right place → treat → who you’ll sit with → first visit → cost/Superbill → book.** Superbill stays loud — after they want to stay, not as a gate.

2. Put **Billing** and **Contact** in reach. Keep Insights off the first-visit path. Surface Telehealth as a quiet chip, not a sixth primary nav item.

3. Make `/start` a **concrete first-hour walkthrough** (length, what happens, what to bring, the $0 fit call that already exists in `content/fees.ts` L17–21) instead of three poetic chapters.

4. Replace placeholders with real local data before launch (NPI, address, phone, portrait, OG image, live intake URL). Do **not** invent award issuers or testimonials.

5. Keep the existing type and color system. Add only CSS + Intersection Observer motion that already matches the stack. Do **not** install Framer Motion or GSAP for v1.

---

## 2. Current sitemap and page structure

### Tech stack

| Layer | What is in use |
|---|---|
| Framework | Next.js 16.3.5 App Router (`package.json`) |
| UI | React 19.2.8, `ViewTransition` in `app/layout.tsx` L51 |
| Styling | Tailwind CSS v4, design tokens in `app/globals.css` L3–34 |
| Type | Newsreader (serif, `opsz`) + Source Sans 3 via `next/font/google` (`app/layout.tsx` L10–23) |
| Motion | CSS (`.hero-copy`, `.reveal`, `.btn-sheen`, `animation-timeline: view()` for `.rise` / `.spine-fill` / photo parallax); `Reveal` Intersection Observer (`components/Reveal.tsx`) |
| 3D | `three`, `@react-three/fiber`, `@react-three/drei` still in `package.json`. **Unmounted from live HomeHero.** `BrainCanvas` / `BrainSlot` remain; preview C still imports BrainSlot. |
| Not installed | Framer Motion, GSAP / ScrollTrigger |
| Analytics | None by design (`components/Footer.tsx` L85–86) |
| Chrome | `SiteChrome` wraps Header + Footer except `/preview*` (`components/SiteChrome.tsx` L9–16) |

### Visual system (current)

- Background: `--pine-deep` `#0e1612`, `--pine` `#1a2a22`
- Text / CTA: `--parchment` `#f3efe8`
- Accents: `--moss` `#5f6f64`, `--moss-soft` `#8b968c`
- Photos: `/images/mist.jpg`, `/images/pines.jpg`, `/images/forest.jpg` via `FrameImage` (Next `Image` `fill`, optional `drift` / `parallax` / `share`)
- Type roles documented in `app/globals.css` L36–41: Display/Title/Heading = Newsreader 400; Lede/wordmark italic; Body = Source Sans 3 400; Kicker 500 uppercase; UI 500 never italic

### Primary navigation (header)

From `site.config.ts` L55–62, rendered in `components/Header.tsx` L80–104:

1. Home `/`
2. About `/about`
3. Approach `/approach`
4. Services `/services`
5. Conditions `/conditions`
6. Insights `/insights`
7. **Become a patient** `/start` (button, desktop only)

Mobile: text “Menu” / “Close”, full-screen serif list, Become a patient at the bottom of the overlay (`Header.tsx` L122–151). No focus trap. Scroll progress bar on the header (`L116–120`).

### Footer navigation

`site.config.ts` L64–70: Become a patient, Billing, Telehealth, Contact, For colleagues.

Legal (`L72–78`): Privacy, HIPAA NPP, Health data, Terms, Nondiscrimination.

Crisis line is the last band (`Footer.tsx` L77–82).

### Sitemap

```
/                          Home
/about                     Provider bio
/approach                  Method vocabulary (Functional, Self-Determination, …)
/services                  TreatGrid + diagnosis/prescribing/therapy + GEO offerings
  /services/medication-management
  /services/mat
  /services/perinatal
  /services/child-adolescent
  /services/emdr
  /services/geriatric
/conditions                Six named-condition cards
  /conditions/depression
  /conditions/anxiety
  /conditions/adhd
  /conditions/bipolar
  /conditions/ptsd
  /conditions/oud
/insights                  Hubs + FMLA articles
  /insights/education
  /insights/recipes
  /insights/women
  /insights/videos
  /insights/fmla-is-not-only-physical
  /insights/language-of-a-toxic-workplace
  /insights/from-documentation-to-leave
/start                     Become a patient / intake
/billing                   Rates, estimate, Superbill, GFE
/telehealth                WA virtual visits (LegalPage layout)
/contact                   Placeholder NAP
/for-colleagues            noindex (`app/for-colleagues/page.tsx` L10)
/privacy
/privacy/npp               HIPAA NPP placeholder
/privacy/health-data       WA MHMDA placeholder
/terms
/nondiscrimination
/garden                    Easter egg (robots disallow)
/truenorth                 Easter egg (robots disallow)
/preview, /preview/a|b|c   A/B tests, chrome hidden
(not-found)
```

`app/sitemap.ts` includes the public marketing and legal URLs above; it omits `/for-colleagues`, `/garden`, `/truenorth`, and `/preview`. `app/robots.ts` disallows `/garden`, `/truenorth`, `/api/`, `/preview`.

### Section-by-section outlines (current order)

#### Home `/` — `app/page.tsx`

1. **HomeHero** (`components/HomeHero.tsx`): full-bleed mist + drift; kicker tagline “Sixty minutes. A name. A plan.”; H1 “Psychiatric care with time to see you.”; lede = `site.positioning` (pharmacogenomics sentence); Become a patient + The approach; meta chips Psychiatric care · Pharmacogenomics · Personalized supplementation.
2. **Cash-pay band** (L37–66): “Cash-pay, on purpose. Superbill included.” + Become a patient + Billing link + “Based in Spokane · telehealth in Washington · Spanish available”.
3. **RecognitionRow** (L68–72): four leaf-marked titles, no issuers.
4. **Pillars** `#practice` (L74–100): three equal cards linking to `/approach`.
5. **TreatGrid** (L102–125): “What we *treat*.” Nine accordion cells.
6. **Clinician photo band** (L127–153): pines + overlay bio snippet + About Mitchell.
7. **CtaBand**: “Become a patient today.” + Superbill copy.

#### About `/about` — `app/about/page.tsx`

1. PageHeader (pines): “Mitchell Corbet, PMHNP-BC.”
2. Two-column: PortraitPlaceholder (“Portrait forthcoming”) + origin story (foster care, OSU botany, genetics, Miami/Kentucky, Gonzaga) + CredentialStrip + For colleagues ghost button.
3. RecognitionRow again.
4. Education strip: Oregon State / Miami · Kentucky / Gonzaga.
5. CtaBand.

#### Approach `/approach` — `app/approach/page.tsx`

1. PageHeader (forest, `imageAlt=""`): pharmacogenomics H1.
2. Definition list: Functional, Self-Determination, Peer Support, Holistic Goals, Selfcare.
3. CtaBand.

#### Services `/services` — `app/services/page.tsx`

1. PageHeader: title **“What we treat.”** (collides with Home and Conditions).
2. Same TreatGrid as home.
3. Core: Diagnosis, Prescribing, Psychotherapy sixty minutes.
4. Sliding scale and payment plans (duplicated from Billing).
5. Six GEO offering links (medication-management, mat, perinatal, child-adolescent, emdr, geriatric).
6. Spanish / colleagues note.
7. CtaBand.

#### Conditions `/conditions` — `app/conditions/page.tsx`

1. PageHeader: “What we treat, and how.”
2. ConditionCards (6).
3. CtaBand.

#### Condition / service article — `components/ClinicalArticle.tsx`

1. JSON-LD Webpage + FAQPage.
2. PageHeader (title + answer as lede).
3. ReviewedBy, lede, optional “How we treat this”, body paragraphs, FAQ dl, citations, Become a patient button.
4. CtaBand.

#### Insights `/insights` — `app/insights/page.tsx`

1. PageHeader.
2. Crisis box (911 / 988) — the only in-flow crisis treatment besides footer.
3. Hubs: education, meal prep, women, videos, for colleagues.
4. FMLA article list (3).

Hubs: education / recipes / women are short lists; videos is an explicit placeholder (`app/insights/videos/page.tsx`).

#### Start `/start` — `app/start/page.tsx`

1. PageHeader: “Start here.” + Begin intake.
2. Three editorial chapters: “This site is the first visit.” / “The intake is the first hour on paper.” / “If it is a fit, we schedule.” + CSS spine-fill.
3. Sticky aside: Begin the intake (dead until `intakeUrl`).

No: visit length, what to bring, private room for telehealth, $0 fit call, privacy/HIPAA link, crisis line.

#### Billing `/billing` — `app/billing/page.tsx`

1. PageHeader.
2. FeeEstimate calculator (default eval $325 + 3× $275 = $1,150).
3. Two large rate cards: $325 / $275.
4. Full fee table (`content/fees.ts`, includes $0 brief fit call).
5. Why cash-pay, Superbill, Insurance (empty array), Sliding scale.
6. Good Faith Estimate.
7. CtaBand.

#### Telehealth `/telehealth` — `app/telehealth/page.tsx`

LegalPage: WA location requirement, 60-minute sessions, consent in PracticeQ, Become a patient. Not in the header.

#### Contact `/contact` — `app/contact/page.tsx`

Placeholder email / phone / fax / address (“Placeholder — street address forthcoming”). “How to begin” column with no intake button. CtaBand. Phone `dd` is not a `tel:` link (unlike the footer).

#### For colleagues `/for-colleagues`

noindex. Discretion copy + intake CTA. Linked from About, Services note, TreatGrid cell, Insights hubs, footer.

#### Legal pages

Privacy (general, no ads), NPP placeholder, health-data placeholder, Terms, Nondiscrimination. All use PageHeader + forest photo via `LegalPage` except Privacy which inlines the same pattern.

#### Hidden

`/garden`, `/truenorth` (BotanicalMark easter egg in footer). `/preview/*` without chrome.

---

## 3. Information architecture and flow

### Visitor journey vs current home

A first-time visitor who may be anxious or hesitant typically asks, in order:

| Question | Should appear | What happens now |
|---|---|---|
| Am I in the right place? | Hero: psychiatry, Spokane / WA, adults, time | H1 is strong. Lede leads with pharmacogenomics (`site.config.ts` L5–6; `HomeHero.tsx` L33). Location is a later meta line in the cash-pay band, not the H1 cluster. |
| Do they treat what I’m dealing with? | Immediately after hero | TreatGrid is section 5, after money and awards. |
| Can I trust them? | Photo, name, credentials soon | Clinician band is section 6, using a forest photo, not a face. About uses “Portrait forthcoming.” Awards appear first, without issuers. |
| What happens at a first visit? | Short on home, full on `/start` | Missing on home. `/start` is metaphorical (“This site is the first visit.”) rather than logistical. The $0 fit call exists only in the billing table. |
| Cost / insurance | After they want to stay | Section 2 of the homepage. Superbill copy is good; placement is early. |
| How do I book? | CTA above fold + logical repeats | Desktop header + hero + CtaBand. Mobile CTA only after opening Menu. Intake is not live. |

### CTA: visibility vs pushiness

**Working:** “Become a patient” is the right label (not Book / Schedule / Start your journey). Desktop header button is visible. Hero has one primary and one text link. CtaBand repeats without a second competing brand.

**Not working:**

- Mobile visitors do not see the primary CTA until they open Menu (`Header.tsx` L80 vs L106–114).
- CtaBand is bolted onto About, Approach, Services, Conditions, articles, Billing, Contact — same forest, same title. Repetition starts to feel like a template, not a decision.
- `/start` “Begin intake” that goes nowhere is worse than no button.

### Buried, redundant, out of sequence, or missing

| Item | Status |
|---|---|
| Conditions treated | Present, but split across TreatGrid / Services / Conditions with colliding H1s. |
| Services | Present; Services page *is* a second treat catalog plus method plus rates. |
| Provider bio and credentials | About is strong on story, weak on photo/NPI. Home bio is late and faceless. |
| What to expect at first appointment | Effectively missing. `/start` does not say 75–90 min eval, what to bring, camera/private room, or the $0 fit call. |
| Insurance / payment | Excellent once you reach `/billing`. On home it is too early and too long. Superbill clarity is a strength — keep it. |
| Telehealth | Accurate page, buried in footer. Hero does not say “in Washington.” |
| FAQs | Only inside clinical articles (`ClinicalArticle.tsx` L42–51). No practice-level FAQ (cost, first visit, telehealth, confidentiality). `faqSchema()` exists and is unused on `/start` / `/billing`. |
| Location / contact | Placeholders. Footer `tel:+15090000000`. Contact phone is not tappable. |
| Crisis 988 | Footer microcopy + Insights box. Not on Home, Start, or Contact. Insights is the wrong canonical home for crisis. |
| Privacy / confidentiality | Legal pages exist; not linked from `/start` or the intake aside. NPP is still a placeholder (`app/privacy/npp/page.tsx` L17–20). |
| Testimonials / social proof | Absent. **Correct.** Do not invent reviews or star widgets. Awards-without-issuers are the current stand-in and they are weaker than a real photograph and NPI. |

### Navigation evaluation

- **Labels:** About, Approach, Services, Conditions are industry-standard but **overlap**. A distressed visitor does not know whether their depression lives under Conditions or Services.
- **Grouping:** Editorial (Insights) sits in the same row as care decisions. For colleagues is correctly off-nav.
- **Depth:** One level in the header; service/condition slugs are undiscoverable except from index pages. Fine if indexes are clear; they are not.
- **Mobile:** Full-screen serif menu is beautiful and slow to scan (2.4rem names, no Billing/Contact). Overlay does not trap focus or restore it. `aria-controls="mobile-nav"` is good; visible “Menu” text is acceptable vs icon-only.

### Content hierarchy and language

- Headlines are mostly clear. The weakest is `site.positioning`: one long sentence that front-loads method (“pharmacogenomics and personalized supplementation”) before outcome.
- Body paragraphs on About are long and literary — appropriate on About, wrong as the first proof of competence.
- Approach terms (“Selfcare”, “Functional” with lithium orotate / Semax) are insider vocabulary. Fine on Approach; they should not be the homepage’s first explanation of the practice.
- TreatGrid kickers (Adults · College age, MHT · TRT) are scannable. Collapsed state shows title + kicker only — good. Open state what/how is the right pattern.
- Jargon vs plain language: “pharmacogenomics,” “superbill,” “Good Faith Estimate” need a one-line gloss at first mention. Superbill already has one on home. Pharmacogenomics does not.

### Recommended new page order (site)

Keep the URL set. Change **what is primary**, not a sprawling rename.

| Priority | Route | Role |
|---|---|---|
| 1 | `/` | Orient, treat, trust, first visit, cost tease, book |
| 2 | `/start` | How to begin (logistics + intake) |
| 3 | `/about` | Who you sit with |
| 4 | `/billing` | Money, Superbill, GFE (reachable, not a homepage novel) |
| 5 | `/contact` | Real NAP, map when address is live |
| 6 | `/services` | How care is delivered (diagnosis, prescribing, 60-min hour) — **not** a second treat grid |
| 7 | `/conditions` | Named conditions (GEO) |
| 8 | `/approach` | Method, for people who want it |
| 9 | `/telehealth` | Short logistics; linked from home/start |
| 10 | `/insights` | Resources; off primary nav |
| 11 | `/for-colleagues` | Quiet door; stay noindex |
| — | Legal | Footer only |

**Recommended header:** About · Work (or Care) · Become a patient. Optional quiet text links: Billing, Contact. Insights and Approach drop to footer or a “More” cluster. Do not add a sixth item.

Rationale: the current six-item row forces Services vs Conditions vs Approach as peers. They are not.

### Recommended homepage section order

Each line is a move + one-line rationale.

1. **Hero (tightened)** — Stay: psychiatry, sixty minutes, Spokane / telehealth WA, Become a patient. Move the pharmacogenomics sentence down or shorten the lede. *Rationale: “Am I in the right place?” before method.*
2. **What we treat (TreatGrid)** — Move up from section 5. *Rationale: scan-for-self is the next anxious question.*
3. **Provider band** — Move up from section 6; use a real portrait when it exists; keep name, credentials, one paragraph, link to About. Recognition leaves can sit *under* this, not before treat. *Rationale: trust is a person, not a title row.*
4. **First visit (new, 4–5 lines)** — New. Length of eval, “you will not be rushed,” link to `/start`. Mention the $0 fit call if it remains real. *Rationale: fear of the unknown blocks booking more than fear of price.*
5. **Cash-pay / Superbill band** — Move down from section 2; keep the current copy. *Rationale: Superbill is a differentiator; it is not the second thing a person in distress should read.*
6. **Telehealth WA (one line or chip)** — New on home, link to `/telehealth`. *Rationale: “Can I do this from home?” should not require the footer.*
7. **CtaBand** — Stay last. *Rationale: book once the path is complete.*
8. **Pillars** — Demote or fold into Approach; do not sit between money and treat. *Rationale: three method cards duplicate Approach and delay the catalog.*

### Recommended inner-page orders

**`/start`**

1. PageHeader: what happens next, not a poem.
2. Concrete first hour: 75–90 min eval, 60 min follow-ups, private room / WA for video, what to have ready.
3. Cost in one breath: self-pay, sliding scale, Superbill, link to Billing. Link Privacy / NPP.
4. Sticky intake (live URL). Crisis line in the aside or a one-line note.
5. Drop or rewrite the three chapters so they describe *the visit*, not *the website*.

*Rationale: this page is the conversion document; metaphor belongs in Approach.*

**`/about`**

1. Header with name and credentials.
2. Photograph + CredentialStrip (NPI when real) *before* the origin story.
3. Origin story (keep — it is the most human writing on the site).
4. Education strip.
5. RecognitionRow only if issuers exist; otherwise omit or move last.
6. Quiet colleagues link; CtaBand.

*Rationale: competence, then story. Awards without issuers should not outrank a face.*

**`/services`**

1. Retitle away from “What we treat.” (that belongs to Conditions / TreatGrid).
2. Diagnosis / prescribing / sixty-minute hour first.
3. Offering list (the six GEO slugs).
4. Remove duplicate TreatGrid *or* keep TreatGrid here and remove it from Home — not both at full size.
5. Sliding scale: one sentence + link to Billing, not a reprint.

*Rationale: Services = how we work; Conditions = what we name.*

**`/conditions`**

1. Keep as named-condition index (GEO).
2. Retitle so it does not clone Services.
3. One line pointing at TreatGrid / Services for the wider catalog.

**`/billing`**

1. Keep $325 / $275 cards near the top (they are clearer than the calculator).
2. Superbill + insurance-not-yet in the same breath as the rates.
3. Calculator after the two numbers.
4. Full table last (includes fit call, 120-min intake, 30-min med check).
5. GFE.

*Rationale: anxious visitors need two numbers, then nuance.*

**`/contact`**

1. Real NAP, tappable phone, hours, WA telehealth.
2. Map when the street address is posted.
3. How to begin = intake button, not a second CtaBand only.
4. Crisis line on this page.

**`/telehealth`**

Keep short. Link from Home, Start, Header-adjacent chip. Do not restyle as a legal dump if the content stays this brief.

**`/approach`**

Keep the glossary. It is the right home for Functional / Semax / lithium orotate. Do not lead the site with it.

**`/insights`**

Keep crisis box. Move a shorter crisis treatment onto Home/Start/Contact so Insights is not the safety net. Demote from primary nav.

---

## 4. UI/UX findings by page

### Global

**What is working.** Pine-deep + parchment + Newsreader optical size already reads as a small, serious practice. Buttons are consistent (`ButtonLink` primary/light/ghost). Cards share a bordered pine language. Header becomes a blurred pine bar after the hero — calm, not sticky-SaaS. Photo treatment (brightness 0.92, saturate 0.86 in `.media-frame`) fits the reserved brief.

**What is not.** Three JPGs do all the emotional work. Almost every interior page opens on mist/pines/forest with the same gradient stack (`PageHeader.tsx` L31–45). CtaBand repeats the forest again. Without a face, the site feels like a landscape brand with a psychiatry overlay.

**Type.** Display clamp 2.35–4.2rem is appropriate. Lede italic 1.2rem / 1.52 at `max-w-xl` is readable; on HomeHero the positioning sentence still feels long. `type-kicker` at 0.7rem / 0.2em tracking / moss-soft is elegant and low-contrast. Body 1.0625rem / 1.65 is good. Never extra-bold, never all-caps serif — keep that rule.

**Color / contrast.** Parchment on pine-deep is the intended premium register. `text-parchment/50`, `/55`, `/60` on `#0e1612` will fail WCAG 2.2 AA for small text (footer crisis, fee notes, “NPI forthcoming”). Moss-soft `#8b968c` on pine-deep is a likely fail at 0.7–0.78rem.

**Components.** Heading classes are not applied consistently: Services H2s are raw `text-[clamp(2rem…)]` (`app/services/page.tsx` L59); Contact “How to begin” is `text-xl` (`app/contact/page.tsx` L53); ClinicalArticle H2s are `font-serif text-2xl`. Three heading recipes.

**Imagery.** Forest alts are generic (“Pine forest”, “Overcast hills”). CtaBand correctly uses `alt=""` (`components/CtaBand.tsx` L16). Approach and 404 use empty alts on large photos (`app/approach/page.tsx` L44, `app/not-found.tsx` L18) — acceptable if decorative; the photo still competes with the title.

**Mobile.** `min-h-svh` hero is fine. TreatGrid is one column then two. Fee table `min-w-[40rem]` + `overflow-x-auto` (`app/billing/page.tsx` L44–45) will pinch on phones. Header height 4.25rem; Menu control has no min 44×44 padding. No thumb-zone sticky CTA. Tap targets on footer legal links are text-sm with comfortable gap-y-3.

**Trust / tone.** Voice is calm, adult, and specific — that is the asset. The failures are structural (money first, no face, dead intake) and a slight taste for opacity (“This site is the first visit”) that can read as coy when someone is trying to get help.

### Home

Hero H1 is the best line on the site. Secondary “The approach” is the wrong escape hatch; “What we treat” or “About” would better answer the next question. Pillar cards are aligned now (`items-stretch`, `min-h-[2.5em]`) but they duplicate Approach. RecognitionRow as section 3, before a face, looks like decoration.

### About

The bio is the trust engine and should not be rewritten into marketing bullets. The portrait placeholder actively *subtracts* trust: it announces the site is unfinished. Education strip is the right kind of credentialing (schools, not trophy logos). For colleagues as the first button after the bio is the wrong primary action for a general visitor.

### Approach

Beautiful glossary. `imageAlt=""` on a 56svh header is a wasted chance to say nothing rather than “Forest.” Semax / lithium orotate will alarm some visitors and reassure others — keep them here, not in the hero.

### Services / Conditions

Two indexes titled as treat catalogs. Services then *also* embeds TreatGrid. Conditions is the cleaner GEO index. Pick one scan surface for the homepage and one for Services.

TreatGrid interaction: slow 500ms grid-rows, `inert` when collapsed (`components/TreatGrid.tsx` L43–48) — good. Plus/minus is `aria-hidden`; the button has `aria-expanded`. Only one cell open at a time — fine.

### Start

Visually one of the strongest pages (spine, sticky tray, editorial type). Strategically the weakest: it does not answer first-visit questions, and the primary button is a placeholder. Copy still talks about PracticeQ from the inside (“Until the live link is in, it still stands as the way in.” L82).

### Billing

Best-in-class honesty on Superbill vs guarantee and GFE vs calculator. Calculator is labeled (`FeeEstimate.tsx` L27–67). Leading with the widget before $325 / $275 buries the two numbers people came for. Range input for follow-up count is fiddly on mobile; a stepped control would be kinder.

### Contact / Telehealth

Contact looks like a pre-launch stub and says so in the lede (`app/contact/page.tsx` L19). Telehealth is clear and appropriately short; using `LegalPage` makes it feel like a policy, not care logistics.

### Insights

Crisis box is well written and in the wrong place as the *only* prominent 988. Videos hub is an empty slot — hide until there is something to play. FMLA cluster is a real differentiator for occupational patients; it should be reachable from the occupational TreatGrid cell (it already is) without living in the main nav.

---

## 5. Accessibility, performance, and SEO

### Accessibility (WCAG 2.2 AA)

**Present**

- Skip link (`app/layout.tsx` L43–47).
- `lang="en"` on `html`.
- `:focus-visible` 2px parchment (`globals.css` L67–70).
- TreatGrid accordion semantics + `inert`.
- `prefers-reduced-motion: reduce` kills drift, reveal, sheen, view transitions, north-breath (`globals.css` L405–446).
- Decorative CtaBand image `alt=""`.
- Form labels on FeeEstimate.

**Gaps**

| Issue | Where | Severity |
|---|---|---|
| Small muted text likely fails contrast | Footer crisis (`text-[0.72rem] … parchment/50`), CredentialStrip moss-soft, `parchment/55–60` notes | High |
| `.reveal { opacity: 0 }` before JS | `globals.css` L247–253; `Reveal.tsx` | High — content invisible if JS fails (reduced-motion users are exempt) |
| No focus trap / Escape-to-close documented in full-screen menu | `Header.tsx` L122–151 | Med (2.2 3.2.6 / 2.4.11 related) |
| Menu control lacks 44px target | `Header.tsx` L106–114 | Med (2.2 2.5.8 Target Size) |
| Mobile nav not in tab order until open, then no wrap | Header | Med |
| `ConditionCards` `focus-visible:outline-none` | `components/ConditionCards.tsx` L24 | High — kills visible focus unless something else restores it |
| Heading inconsistency / skipped visual levels | Services H2 vs Contact `h2.text-xl` vs kicker-as-label | Low–Med |
| View transition blur `filter: blur(4px)` | `globals.css` L391–402 | Med for vestibular; already off under reduced motion |
| Hero drift 48s scale 1.08–1.16 | `globals.css` L180–196 | Med vestibular; gated by reduced-motion on the animation itself, not on `will-change` |
| Empty or generic alts on large photos | Approach, 404, many PageHeaders | Low if decorative |
| Sticky `/start` aside `Begin intake` → `#intake` | circular, no error state | Med |
| Footer phone `tel:+15090000000` | `Footer.tsx` L31 | High for real users; wrong number |

`Reveal` also does not read `prefers-reduced-motion` in JS; CSS overrides after paint. First paint can still flash hidden→shown.

### Performance / Core Web Vitals

- **LCP:** Home LCP is likely the mist hero (`HomeHero.tsx` `priority` on `FrameImage`). Good. Interior pages also `priority` every PageHeader image (`PageHeader.tsx` L36) — correct for LCP, expensive if someone lands on a long article and then navigates (view transitions re-share photos).
- **Images:** JPG only in use; no `srcSet` art-direction beyond `sizes`. Drift/parallax keep `will-change: transform` on full-bleed photos (`globals.css` L182, L203) — compositing cost on mobile.
- **CLS:** Hero `min-h-svh` and PageHeader fixed svh heights reduce shift. Fonts `display: swap` (`layout.tsx` L13, L20) can still swap Newsreader (FOUT). `.reveal` translating 16px after IO can nudge layout perception; opacity-only would be safer.
- **JS weight:** Live home does not import three.js. Preview C and leftover `components/BrainCanvas.tsx` still make it easy to pull WebGL back in. `qrcode` is a dependency — confirm it is not on the home graph. Reveal is a client island per section (multiple observers).
- **View transitions:** 280ms leave + 480ms enter with blur delays content and can feel overstimulating. Header is correctly frozen (`::view-transition-group(site-header)` animation none).

### SEO and local SEO

**Present**

- `metadataBase`, title template, default description (`layout.tsx` L25–32).
- JSON-LD `@graph` MedicalBusiness + Person/Physician + MedicalCondition (`lib/schema.ts`).
- FAQPage on clinical articles; HowTo on `/start`.
- `ReviewedBy` + `lastReviewed` on MedicalWebPage.
- Sitemap + robots.
- Service area list in config (unused in schema).

**Gaps**

- Default title `Northform Psychiatry · Sixty minutes. A name. A plan.` is brand-forward and keyword-weak. Prefer “Psychiatrist in Spokane” / “PMHNP” language in the default or home absolute title without stuffing.
- **No `openGraph` / Twitter images** anywhere (repo grep is empty). QR-to-site sharing will be a blank card.
- Schema `telephone` and address are placeholders. `Physician` for a PMHNP is a stretch; keep `Person` + accurate `jobTitle` (already “Psychiatric-Mental Health Nurse Practitioner”).
- No `geo`, `hasMap`, `openingHoursSpecification`, `sameAs`, `identifier` NPI.
- `areaServed` is only `["Spokane, WA", "Washington"]` despite `site.serviceArea` listing Valley, Liberty Lake, Cheney, etc.
- HIPAA NPP / health-data pages are placeholders — do not launch them as if counsel-approved.
- Insights videos placeholder should be `noindex` until real.

---

## 6. Modern style and animation proposals

Direction: **calm, soft, premium, human** — a small practice in a pine interior, not a wellness startup. The current pairing is already the right pairing. Do not rebrand; refine.

### Type

Keep Newsreader + Source Sans 3. Refinements only:

- Slightly larger body contrast: parchment at ~0.88–0.92 opacity for reading, not 0.70.
- Reserve italic lede for one sentence, not the positioning paragraph.
- Kickers: moss-soft is too dim; use parchment at ~0.7 or moss at larger size.
- Do not introduce a third font. Do not extra-bold. Do not all-caps serif.

### Color and spacing

- Lift `--moss-soft` or stop using it at 0.7rem.
- Keep pine-deep; do not go “more white” to chase clinics, and do not go Miami. The earlier white experiment already failed this brand.
- Spacing: homepage sections already use `py-16 / lg:py-24`. After reorder, give TreatGrid and the provider band more air than the cash-pay band (cost should feel like a footnote to care, not a billboard).
- Cards: keep 1px parchment/20 borders. No glassmorphism, no colored shadows, no 01–02–03 badges.

### Image treatment

- Keep the desaturated forest language for atmosphere.
- **Add one human photograph** as soon as it exists; until then, do not pretend a pine stand is a portrait.
- Stop repeating the same three photos as the meaning of every page. Contact can be quieter (no 62svh forest) once NAP is real.
- Prefer AVIF/WebP derivatives for LCP; keep JPG fallback.

### Motion — stack-native only

Do **not** add Framer Motion or GSAP. Use CSS, `Reveal` (IO), and the existing `view()` timelines. Honor `prefers-reduced-motion` (extend the existing block at `globals.css` L405–446). Nothing that delays first paint. Nothing flashy. Nothing vestibular.

| Where | What | Duration / easing | Implementation |
|---|---|---|---|
| HomeHero copy | Keep staggered fade/translate of children | 0.8s `cubic-bezier(0.22, 1, 0.36, 1)`, delays 80–290ms | Existing `.hero-copy` (`globals.css` L299–318). **Do not start from opacity 0 in CSS that applies before the media query.** Already gated on `no-preference`. |
| TreatGrid, pillars, condition cards | Scroll-triggered fade + 12–16px translate | 0.6–0.7s `--ease-out`; stagger ≤ 70–90ms | Existing `Reveal`. Change default `.reveal` to visible, animate only when `.in` *and* motion allowed — or `@media (no-preference)` around opacity 0 — so no-JS and reduced-motion still show content. |
| `/start` chapters | Keep `.rise` + spine-fill | view() `entry 0–42%` / `cover 0–70%` | Existing. Fallback: static rule for browsers without `animation-timeline`. |
| Photo bands (home clinician, CtaBand) | Gentle 1–2% translate, not 5–6% |  view() or none | Existing `.is-parallax` (`globals.css` L206–213) is too large (`-5%` to `6%` at scale 1.14). Reduce or limit to CtaBand. Never Ken Burns-as-a-named-gimmick; the current mist-drift on the hero is already the maximum. |
| Hero mist-drift | Keep only if reduced-motion is solid | 48s ease-in-out | Existing. Consider disabling on `hover: none` / coarse pointers if it janks. |
| Buttons | Keep sheen + 1px lift | 300ms transform, 700ms sheen | Existing `.btn-sheen`, hover-only + `hover: hover`. No magnetic pull. |
| Nav links | Underline grow already used for active | 200–300ms | Keep. Hover color to full parchment. |
| Form fields (FeeEstimate) | Border to parchment/50 on focus | already `focus-visible:border-parchment/50` | Add a 150ms color transition only. |
| Page transitions | **Remove blur.** Crossfade opacity only, ≤ 220ms | replace `page-leave` / `page-enter` filters | `ViewTransition` already in `layout.tsx`. Blur is the overstimulating bit (`globals.css` L391–402). |
| Header | Keep current hero-aware bar; add compact **mobile sticky CTA** (“Become a patient”) at bottom or in the bar | 300–500ms background as now | CSS/IO already there. Do not add more header chrome. |
| TreatGrid open | Keep grid-rows 500ms | `--ease-out`; `motion-reduce:duration-0` already | `TreatGrid.tsx` L44. |
| Lists (credentials, treat how) | Optional 1-stagger of inner lines | 40ms step, 400ms fade | CSS or `Stagger` in `Reveal.tsx`. Easy to overdo — one list max. |

**Guardrails (non-negotiable)**

- No mesh, aurora, or gradient-mask H1.
- No magnetic buttons.
- No 01–02–03 HowTo UI.
- No film grain, no named Ken Burns.
- No motion that delays LCP or hides copy behind JS.
- All new animation inside `prefers-reduced-motion: reduce` → instant/static.
- Superbill stays visible in the care path; do not hide it to look “softer.”

---

## 7. Prioritized action list

| # | Action | Impact | Effort | Category |
|---|---|---|---|---|
| 1 | Reorder homepage: treat → provider → first visit → cash-pay → CTA; demote pillars | High | M | IA |
| 2 | Rewrite `/start` as first-hour logistics; wire `intakeUrl` when PracticeQ is ready | High | M | IA / Conversion |
| 3 | Trim header: About · Work/Care · Become a patient; Billing + Contact reachable on mobile | High | S | IA / Nav |
| 4 | Sticky mobile Become a patient control (44px+) | High | S | UI / Mobile |
| 5 | Replace NAP / NPI / `tel:` placeholders; stop shipping fake JSON-LD | High | S | Trust / SEO |
| 6 | Provider photograph in About and home band | High | S | Trust |
| 7 | Crisis 988 on Home, Start, Contact (not Insights-only) | High | S | Safety / A11y |
| 8 | Disambiguate Services vs Conditions vs TreatGrid (retitle; one grid, not two) | High | M | IA |
| 9 | Lift text contrast (footer, kickers, `/70` body) to 2.2 AA | High | S | A11y |
| 10 | Fix `.reveal` so content is visible without JS | High | S | A11y |
| 11 | Restore focus ring on ConditionCards; 44px menu target; mobile nav focus trap | Med | S | A11y |
| 12 | Billing: lead with $325 / $275; calculator second; mention $0 fit call on Start | Med | S | IA / UX |
| 13 | About: credentials + photo before origin story; colleagues button secondary | Med | S | IA |
| 14 | Telehealth chip on home + link from Start | Med | S | IA |
| 15 | Practice-level FAQ (first visit, cost, telehealth, privacy) + `faqSchema` | Med | M | Content / SEO |
| 16 | Open Graph image; home title that includes Spokane / psychiatry | Med | S | SEO |
| 17 | Schema: real address/geo/NPI; `Person` not `Physician`; use `serviceArea` | Med | S | SEO |
| 18 | Privacy/NPP: link from Start; replace legal placeholders before launch | Med | M | Trust / Legal |
| 19 | Hide empty Insights/videos until real; demote Insights from primary nav | Med | S | IA |
| 20 | Reduce CtaBand frequency (home + start + maybe about; not every article) | Med | S | UI |
| 21 | Remove view-transition blur; reduce parallax amplitude | Med | S | Motion / A11y |
| 22 | Convert LCP photos to AVIF/WebP; lazy non-hero forests | Med | M | Performance |
| 23 | Award issuers only if Mitch supplies them; otherwise leave titles quiet or drop from home | Low | S | Trust |
| 24 | Keep three.js off the live graph; delete or isolate preview-only | Low | S | Performance |
| 25 | Do **not** add testimonials, insurance-logo walls, chatbot, Framer, or GSAP | — | — | Guardrail |

---

## 8. Suggested phased implementation

### Phase 1 — Structure and order

Goal: an anxious first visit that can finish the journey without hunting.

- Homepage reorder (actions 1, 7, 8, 14).
- Nav trim + mobile CTA (3, 4).
- `/start` as logistics (2, 12 fit-call mention).
- About section order (13).
- Billing lead with two numbers (12).
- One TreatGrid, retitled Services/Conditions (8).
- Crisis on the care path (7).

No new animation library. No visual rebrand.

### Phase 2 — UI refresh and launch-readiness

Goal: the site can be shown to a real patient.

- Placeholders: intake URL, NPI, phone, address, portrait, OG (5, 6, 16, 17).
- Contrast and focus (9, 10, 11).
- FAQ + privacy link from Start (15, 18).
- CtaBand restraint and photo variety (20).
- Awards policy (23).
- Hide empty hubs (19).

### Phase 3 — Motion and polish

Goal: the same voice, slightly more alive, never louder than the content.

- Reveal no-JS safe; reduce parallax; kill page-fade blur (10, 21).
- Image formats and lazy forests (22).
- Isolate or remove three.js (24).
- Micro-interactions only as listed in §6.

---

## Out of scope until you say otherwise

- Restoring the 3D brain on the live hero.
- Inventing award issuers, years, or logos.
- Inventing testimonials or insurance contracts.
- Installing Framer Motion or GSAP.
- Copying Brightside patterns (chatbot, mint, fake payer logos).
- Publishing public NPI/address/phone from outside research without your confirmation — even if those values are public record.

---

*End of audit. Waiting for approval before any code change.*
