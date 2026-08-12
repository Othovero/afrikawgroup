# Funnel Landing Page — Requirements (Draft v1)

**Scope:** the personalized member funnel/landing page front-end only. This is a companion to the main Marketing Group Portal PRD (dashboard, accounts, flyer tool, admin) — that document is out of scope here. This one is written to be handed directly to Claude Code as a build brief.

**Status:** structural draft. Colour theme, final typography choice, and final copy are explicitly deferred — see Section 8.

---

## 0. Before you write any code

Do these two things first, in order:

1. **Build a knowledge base.** Read every source material provided (PowerPoint decks, PDFs, video) about CaryPact and BOT Chain and produce `/docs/carypact-botchain-knowledge.md` — a factual summary of what they are, how they work, what they claim to offer, and anything ambiguous or unverifiable. Flag anything in the source material that reads as an income/return promise — it must not be repeated on the page verbatim (see Section 1).
2. **Study the reference funnel templates** as they're provided (first one is attached to this brief). Extract the *structural pattern* — section order, hierarchy, pacing of CTAs — not the specific copy, colours, or claims. Section 4 below tells you exactly what to keep and what to discard from the reference.

Only after both of those exist should page content and layout be drafted.

---

## 1. Non-negotiable constraints

These override anything else in this document or any template you're shown.

- **No affiliation claim.** The page must be clear it's independently run by a Group member, not an official CaryPact/BOT Chain page.
- **Mandatory disclaimer footer** on every page (see Section 5, Section 15). Non-dismissible, legible, not buried in 8px grey text.
- **Personalization is data-driven, not hardcoded.** Sponsor name, photo, WhatsApp number, CaryPact link, and BOT Chain link are all props/tokens — see Section 6. The same component renders every member's page.
- **All media must be original, properly licensed, or officially supplied with permission.** No scraped stock photography, no lifted video.
- **Copy claims filter.** Before finalizing any generated copy block, scan it against a blocklist: `guaranteed, ROI, returns, profit, passive income, double your, risk-free, get rich, financial freedom, quit your job`, plus any `\d+%` or currency-amount pattern used in an earnings context. If a draft trips the filter, rewrite it — don't soften it with a qualifier, remove the claim.

---

## 2. Objective

Primary goal: a visitor reads enough to trust the opportunity and clicks through to the member's CaryPact/BOT Chain sign-up link.
Secondary goal: a visitor who isn't ready to sign up yet leaves a contact enquiry instead of bouncing.

The page needs to *sell* — but the persuasion lever available to it is clarity, credibility, and production quality, not claims. That constraint is a design brief, not a limitation: make the page feel premium and trustworthy rather than hyped.

---

## 3. Design quality mandates

### 3.1 Patterns to eliminate on sight

These are the tells that make a page look AI-generated and undermine trust — treat every one of these as a hard fail in review, not a style note:

- Italic serif headline with one word pulled out into a different colour for "emphasis"
- Small "eyebrow text" sitting directly above a heading
- Sections labelled sequentially like a slide deck ("Section 01", "02", etc.)
- Generic, semantically-irrelevant stock imagery
- A logo carousel replaced with a row of typed-out company names

### 3.2 Typography

Pick one deliberate, non-default font pairing and commit to it across the page — don't let the framework's default typeface ship. Whatever you choose, it should read as a considered decision, not a template leftover.

### 3.3 Motion, atmosphere, and perceived quality

- Hero background: a short (~15s) looping video is acceptable on desktop. On mobile, swap to a static still image for the same shot — never autoplay the video loop on mobile. This is a hard requirement, not a nice-to-have (data cost + performance).
- Subtle "liquid glass" / frosted-panel treatment is welcome on cards or nav elements where it reads as intentional, not decorative noise.
- Scroll-triggered detail (a counter that animates in, gentle parallax on a section) is encouraged in one or two places — enough to feel crafted, not so much it feels busy.
- Avoid instant, jarring pop-in on load; a brief, natural entrance transition reads as more considered.

### 3.4 Working discipline (for later iteration passes)

When changes are requested after this first draft, expect narrowly-scoped instructions (one or two asks at a time, explicitly marked "surgical" where precision matters) — a single heading change should never cascade into unrelated spacing shifts elsewhere on the page. Build the component structure defensively with that in mind now (isolated sections, not one entangled layout).

### 3.5 Pre-ship checklist

Before any section is considered done:

- [ ] Spacing/padding is consistent across sections, not eyeballed per-section
- [ ] Type hierarchy is logical and accessible (don't skip heading levels, don't rely on size alone)
- [ ] No leftover placeholder text, commented-out blocks, or dead code in the final pass

---

## 4. Reference template — what to take, what to leave

The attached screenshot (a tax-advisory consultation funnel) is a structurally strong, high-converting layout. Its **structure** is worth learning from. Its **content strategy** is not fully transferable — flag the differences explicitly:

**Take (structural pattern):**
- Top interrupt/qualifier bar before the hero
- Dual-image or video hero with a clear single CTA
- A benefits checklist (icon + bold label + short description) rather than a wall of prose
- A dedicated "is this for you?" audience-qualifier section
- Repeated CTA blocks between major sections rather than one CTA at the very bottom
- FAQ as an accordion
- A visible legal/compliance disclaimer block in the footer

**Leave behind (content strategy that won't transfer):**
- The headline makes a specific, large dollar-amount promise ("Save over $20,000..."). That pattern is exactly what Section 1's no-claims rule exists to prevent — do not adapt this to a savings/earnings figure for CaryPact/BOT Chain, under any phrasing.
- Testimonials in the reference are generic praise quotes with first-name-plus-surname attribution and stock avatar photography — if testimonials are used at all here, they must be real, sourced from actual members, and must not reference money, returns, or specific figures (see Section 5.12).

As more templates are shared, apply the same test to each: borrow the shape, not the specific claims.

---

## 5. Page skeleton

Structural only — no colours, no final copy. Each section notes its purpose, what's dynamic vs. shared, and anything to watch for.

**1. Qualifier bar** — one line, sits above the hero, sets context for who this page is for. No urgency/scarcity language.

**2. Hero** — headline + one-line subheadline, sponsor photo or short video, primary CTA ("Register" → member's CaryPact link, click logged). Personalized: sponsor image/video if provided, CTA destination.

**3. Bridge paragraph** — short, factual transition into "what is this." Pulled from the knowledge doc (Section 0), not invented.

**4. What is CaryPact** — factual explainer block, sourced from the knowledge doc.

**5. What is BOT Chain** — factual explainer block, sourced from the knowledge doc.

**6. Why it matters / key points** — icon + label + short description checklist. Content should center on community, technology, and support — not financial outcomes.

**7. How it works** — a short numbered or connected-step visual (3–4 steps). Use icons or a connecting line for the sequence, not literal "Step 01 / Step 02" slide-deck numbering (see 3.1).

**8. CTA block** — repeat of the primary CTA.

**9. Who this is for** — audience-qualifier checklist, same visual pattern as #6, describing who the Group is a fit for without implying an income outcome.

**10. CTA block** — repeat.

**11. Media / video gallery** — space for supplied video and imagery (from the PPTX/PDF/video sources). Every video needs a static-image fallback for mobile per 3.3.

**12. Social proof (optional, conditional)** — only include if real, attributable testimonials exist. Must describe experience/support, never earnings. Each quote passes the Section 1 claims filter individually before use.

**13. FAQ** — accordion. Content drawn from the knowledge doc; include at minimum: what CaryPact/BOT Chain is, whether this is financial advice (it isn't), whether there's a cost to join the Group's page/portal (there isn't), and how to get started.

**14. Final CTA** — last chance before the footer.

**15. Sponsor block** — this member's name, photo, WhatsApp click-to-chat link. Fully personalized, every field data-driven.

**16. Footer / legal disclaimer** — non-dismissible. Must state: independently run by a Group member, not an official CaryPact/BOT Chain page or communication; no income or return is promised or guaranteed; digital asset participation carries risk including loss of capital. (Same standard disclaimer defined in the main Portal PRD — reuse that exact wording, don't redraft it here.)

---

## 6. Personalization tokens

| Token | Description |
|---|---|
| `sponsor_name` | Member's display name |
| `sponsor_photo` | Member's profile photo |
| `sponsor_whatsapp` | Click-to-chat WhatsApp link |
| `carypact_url` | Member's CaryPact referral link — the only referral link; BOT Chain doesn't issue one |
| `funnel_url` | This page's own shareable link |

Every instance of this page is the same component rendered with a different set of these five values. Nothing member-specific should be hardcoded anywhere in the template.

---

## 7. Content inputs to expect

- PowerPoint deck(s) and PDF(s) about CaryPact/BOT Chain — source material for the knowledge doc (Section 0) and the explainer sections (5.4, 5.5)
- Video files — for the hero and/or media gallery (Section 5.11), each needs a mobile still-image fallback
- Additional funnel-page template screenshots — apply the same take/leave analysis as Section 4 to each
- If any source material is incomplete or a claim can't be verified, don't fill the gap with invented specifics — flag it back rather than guessing.

---

## 8. Explicitly out of scope for this pass

- Colour palette and final theme
- Final font selection (a placeholder pairing is fine for now, per 3.2)
- Final, sign-off-ready copy (draft copy is expected; anything that reads like an earnings claim gets flagged for human review, not shipped)
- Dashboard, accounts, referral tracking, flyer generator — covered in the main Portal PRD

---

## 9. Definition of done for this draft pass

- All 16 sections in Section 5 exist as distinct, isolated components
- Personalization tokens (Section 6) are wired as props/data, not hardcoded
- Disclaimer footer is present and matches the required wording
- No Section 3.1 "AI slop" pattern appears anywhere on the page
- Hero video has a working mobile still-image fallback
- Nothing in the draft copy trips the Section 1 claims filter
- Colour/theme and final copy remain open, pending Bakang's next pass

---

## 10. Open questions

- Which of the supplied templates (beyond the one attached) should set the primary structural reference, if they conflict?
- Does a testimonials section (5.12) go in at all for v1, or wait until real, usable member quotes exist?
- Any brand name/logo yet? (Flagged as a blocker in the main Portal PRD — this page can't be fully themed until that's resolved.)
