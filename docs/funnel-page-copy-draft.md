# Funnel Landing Page — Copy & Layout Draft v1

Grounded solely in [carypact-botchain-knowledge.md](carypact-botchain-knowledge.md) (KB) and [funnel-landing-page-requirements.md](funnel-landing-page-requirements.md) (Req). Every factual line below carries a `[KB §x.x]` citation to the exact source line it traces to. Nothing here is invented, extrapolated, or rounded up beyond what's explicitly marked as a hypothetical worked example.

**Group name / brand:** Afrika Wealth Group ("AWG"), tagline "Build · Connect · Grow" — taken from the supplied logo asset (`logo.png`), not from the knowledge base (no group branding existed in the KB — this is the one piece of content sourced from outside it, by necessity, since the page needs a name to disclaim under).

**Explicitly excluded from every section below** (per this pass's instructions, Req §1, and KB §4.1/§4.4/§4.8):
- V0–V10 rank/price/profit table
- CA staking yield/projection table (KB §4.2 worked example, the "$10,000 → ~$60,150" table)
- "Generate Income Daily," "Automate your Earning," or earnings-framed variants
- "Digital Oil" / yield-engine / growth-driver language (KB §4.4)
- Dollar figures tied to ranks, staking tiers, or recruitment
- The three unnamed institutional backers (KB §4.6 — unverifiable, omitted rather than invented)
- Global network stats (KB §4.3) unless explicitly labeled self-reported

---

## 1. Qualifier bar

One line, above the hero. No urgency/scarcity language (Req §5.1).

> This page is run by an independent Afrika Wealth Group member — not an official CaryPact or BOT Chain page.

Traces to: Req §1 (no-affiliation constraint) + KB §4.7 (source deck's own risk framing) + KB §5 (internal contradiction note — page follows the disclaimer's spirit).

---

## 2. Hero

**Layout:** full-bleed dark hero (black background, gold line-art continent/network motif echoing the logo — no stock photography per Req §1). Sponsor photo in a frosted-glass card, single primary CTA. Desktop may use a short looping video background per Req §3.3; mobile always shows a static still (hard requirement, no source video has been vetted yet per KB §8 — ships as a CSS/motif background until real, licensed footage is supplied).

**Headline:**
> A community-run gateway into the BOT Chain ecosystem

**Subheadline:**
> Afrika Wealth Group member {{sponsor_name}} shares access to CaryPact, the first ecosystem protocol on BOT Chain — a Layer-1 blockchain project.

Traces to: KB §4 ("CaryPact is described as 'the first ecosystem protocol on the BOT Chain'"), KB §1 ("BOT Chain is presented as a Layer-1 public blockchain").

**Primary CTA:** `Learn How It Works` → scrolls to §7 (not a direct registration push in the hero — registration CTA is reserved for the repeated CTA blocks per Req §5.2/§5.8/§5.10, so the hero doesn't lead with the highest-commitment ask).

**No claim used:** the deck's own hero-equivalent line ("Owning Digital Machine → Activate it Once → Generate Income Daily," KB §4) is explicitly not reused — the third phrase is an earnings claim.

---

## 3. Bridge paragraph

> BOT Chain is a Layer-1 blockchain project. CaryPact is a protocol built on top of it that lets participants tokenize, verify, and trade access to compute power. The next two sections explain what each one is, in plain terms, before anything else on this page.

Traces to: KB §1 ("BOT Chain is presented as a Layer-1 public blockchain"), KB §4 ("CaryPact is described as... to tokenize, verify, and trade physical compute power as a decentralized asset").

---

## 4. What is CaryPact

**Factual explainer block:**

> CaryPact is described by its team as the first ecosystem protocol built on BOT Chain. Its stated purpose is to tokenize, verify, and trade physical compute power as a decentralized asset. Its token, CA, has a total supply of 210 million, with 40,000 CA released per day, reducing 10% every two years until emission completes over roughly 22 years.
>
> Participation works in three steps: hashrate is purchased (a $100 minimum, priced at $1 per hashrate unit), that hashrate generates CA daily through a mining formula, and the resulting CA can be withdrawn, staked, or moved across BOT Chain, BNB Chain, and ETH Chain.
>
> CaryPact also runs an education arm, Cary Academy, described as its "talent engine."

Traces to: KB §4 (protocol description, token supply/emission, participation flow), KB §4.5 (Cary Academy).

**Not included:** the "5 Income Streams" framing, any formula output, and the "Core Advantages" marketing language (KB §4.2) — flagged in KB as promotional, not factual.

---

## 5. What is BOT Chain

> BOT Chain is a Layer-1 blockchain. Its native coin is BOT, with a total supply of 150 million. The chain includes a mainnet, a block explorer, a cross-chain bridge, a native wallet (BO Wallet), and a decentralized exchange (BDEX).
>
> BOT Chain also runs a Lab program covering project onboarding, developer support, liquidity provisioning, and exchange-listing assistance for projects building on the chain.

Traces to: KB §1 (all bullet points — native coin/supply, named infrastructure components, BOT Chain Lab description).

**Not included:** the 80%-gas-fee-rebate claim (KB §1 explicitly flags this as unverified, sourced only from a third-party article) and the SPoA-consensus claim (same flag).

---

## 6. Why it matters / key points

Icon + label + short description checklist. Per this pass's instruction, centers on infrastructure and education — not financial outcomes.

| Icon | Label | Description |
|---|---|---|
| Chain-link | Built on real infrastructure | A mainnet, explorer, bridge, wallet, and exchange sit under the protocol — not just a token. |
| Compass | A defined participation path | Buy hashrate, generate CA, then choose to hold, stake, or move it across chains. |
| Graduation cap | An education arm | Cary Academy is positioned as CaryPact's ongoing training and talent program. |
| Users | Independently introduced | This page is run by an Afrika Wealth Group member who can walk you through it directly. |

Traces to: KB §1 (infrastructure), KB §4 (participation flow), KB §4.5 (Cary Academy), Req §1 (independent, not-official framing).

---

## 7. How it works

Numbered/connected-step visual, not literal "Step 01" labeling (Req §3.1). Three steps mirroring KB §4's participation flow, followed by two worked examples.

**Steps:**
1. **Acquire hashrate** — minimum entry $100, priced at $1 per hashrate unit. *[KB §4]*
2. **Hashrate generates CA daily** — via a network-wide mining formula. *[KB §4, §4.1]*
3. **Choose what to do with it** — withdraw, stake, or move across BOT Chain, BNB Chain, and ETH Chain. *[KB §4]*

**Framing line above the worked examples:**
> The two examples below use the protocol's own published formulas with round, hypothetical numbers chosen only to illustrate the mechanism — not to project what any real participant would earn. Both formulas divide a fixed daily pool by total network participation, so an individual's share shrinks as more participants join, regardless of the numbers used here.

### Worked example A — Mining

Formula: individual daily CA output = (individual hashrate ÷ total network hashrate) × 16,800 CA, described as having no expiration. *[KB §4.1: "Static Mining formula: individual daily CA output = (individual hashrate ÷ total network hashrate) × 16,800 CA"]*

> **Hypothetical only.** Say a participant holds 1,000 hashrate units, out of a hypothetical total network hashrate of 1,000,000 units.
> Their share: 1,000 ÷ 1,000,000 = 0.1% of the network.
> Applied to the fixed daily pool: 0.1% × 16,800 CA = **16.8 CA that day**.
>
> The 16,800 CA pool doesn't grow with the network. If total network hashrate later doubles to 2,000,000 units (more participants joining) and this participant still holds the same 1,000 units, their share is now 0.05% — **8.4 CA that day** for the same holding. This is a hypothetical illustration of the formula, not a forecast.

### Worked example B — Staking

Formula: daily personal earning = (personal staked amount ÷ total network staked amount) × staking pool output; the pool's daily PoS output component is 7,200 CA. *[KB §4.1: "Static Staking / PoS pool: daily personal earning = (personal staked amount ÷ total network staked amount) × staking pool output... a daily PoS output of 7,200 CA"]*

> **Hypothetical only.** Say a participant has 5,000 CA staked, out of a hypothetical total network staked amount of 5,000,000 CA.
> Their share: 5,000 ÷ 5,000,000 = 0.1% of total staked CA.
> Applied to the daily PoS output component: 0.1% × 7,200 CA = **7.2 CA that day**.
>
> If total network staked CA later grows to 10,000,000 (more participants staking) and this participant's stake stays at 5,000 CA, their share drops to 0.05% — **3.6 CA that day** for the same holding. This is a hypothetical illustration of the formula, not a forecast.

**Explicitly not built:** a Team Rewards or Rank Rewards worked example. Per this pass's instruction, those mechanics pay out based on recruiting other depositors (KB §4.1, "Sub Leg" volume gates), and a persuasive explainer of that mechanic — even without dollar figures — would function as promotional material for the compensation structure. Disclosed factually instead in the FAQ (§13 below).

---

## 8. CTA block

Repeat of the primary CTA, this time pointed at actual registration.

> Ready to see it yourself? **Register via {{sponsor_name}}'s link** → `{{carypact_url}}`

Traces to: Req §6 (personalization tokens), KB §4.9 (app.carypact.com is the actual registration surface — the member-specific `carypact_url` token routes there).

---

## 9. Who this is for

Audience-qualifier checklist, same visual pattern as §6. Describes fit without implying an income outcome, per this pass's instruction.

| Icon | Label | Description |
|---|---|---|
| Search | Comfortable doing their own research | CaryPact's own material states this isn't financial advice and no outcome is guaranteed. *[KB §4.7]* |
| Layers | Interested in how blockchain infrastructure works | Someone who wants to understand a mainnet, wallet, bridge, and exchange, not just buy a token. *[KB §1]* |
| Handshake | Prefers a direct point of contact | Someone who'd rather ask a person than navigate an app alone — that's what the sponsor block below is for. *[Req §5.15]* |
| Graduation cap | Open to learning before participating | Cary Academy exists as an education step, not just a purchase step. *[KB §4.5]* |

---

## 10. CTA block

Same pattern as §8, repeated.

> Questions before you register? **Message {{sponsor_name}} on WhatsApp** → `{{sponsor_whatsapp}}`

Traces to: Req §6 (personalization tokens), Req §5.15 (sponsor block purpose).

---

## 11. Media / video gallery

Per KB §8, the three supplied `.mp4` files have not yet been reviewed (no transcription/viewing tool was available in this pass) — so this section ships as a **structural placeholder**, not populated content:

> Layout: a responsive grid (2-up desktop / 1-up mobile) of video cards, each with a required static poster image for mobile per Req §3.3. Each card takes `videoSrc`, `posterSrc`, and `caption` as props — currently empty. **Do not populate until each video has been watched and any claim it makes has been checked against the knowledge base and Req §1's filter.** This is a flag-back, not a guess, per KB §8's own instruction.

---

## 12. Social proof

Per Req §10's open question and Req §5.12's condition ("only include if real, attributable testimonials exist"): **omitted from v1.** No real, sourced member testimonials exist in the KB or were supplied. The component ships built (per Req §3.4, isolated sections) but unmounted, so it can be dropped in later without touching any other section — but it stays empty until real quotes exist, each individually passing the Req §1 filter.

---

## 13. FAQ (accordion)

| Question | Answer |
|---|---|
| What is CaryPact? | CaryPact describes itself as the first ecosystem protocol on BOT Chain, designed to tokenize, verify, and trade access to compute power. *[KB §4]* |
| What is BOT Chain? | A Layer-1 blockchain with its own mainnet, wallet, bridge, and exchange, and a native coin, BOT. *[KB §1]* |
| Is this financial advice? | No. CaryPact's own material states it is a community-driven project, that participation involves risk, that its information is for general knowledge only, and that no specific outcome is guaranteed. *[KB §4.7, verbatim source disclaimer]* |
| Is there a cost to use this page or join the Group? | No — this page and the Afrika Wealth Group community itself carry no cost. (Note: CaryPact's own hashrate purchase has a stated $100 minimum entry, and BOT Chain's card/mining-server products have their own separate stated prices — those are CaryPact/BOT Chain product costs, not a cost of using this page.) *[KB §4 ($100 min entry), KB §2 (mining server pricing), KB §3 (card tiers)]* |
| Is there a team or referral component to this? | Yes. CaryPact's compensation structure includes a rewards component tied to referring other participants (what the source material calls "Sub Leg" volume) on top of its mining and staking mechanics. The specifics of that structure are available directly from your sponsor, {{sponsor_name}}, rather than published on this public page. *[KB §4.1, per this pass's explicit instruction not to build a public explainer of the recruitment-tied reward mechanic]* |
| How do I get started? | Message {{sponsor_name}} on WhatsApp with questions, or register directly using the link on this page. *[Req §5.15, §6]* |

---

## 14. Final CTA

> Last step: talk to the person who shared this page with you.
> **Message {{sponsor_name}}** → `{{sponsor_whatsapp}}` · **Or register directly** → `{{carypact_url}}`

---

## 15. Sponsor block

Fully personalized, per Req §6 — every field data-driven, nothing hardcoded:

- `{{sponsor_photo}}` — circular frame, frosted-glass card background
- `{{sponsor_name}}` — display name
- "Afrika Wealth Group member" — fixed label (group affiliation, not CaryPact/BOT Chain affiliation, per Req §1)
- Click-to-chat button → `{{sponsor_whatsapp}}`

---

## 16. Footer / legal disclaimer

Non-dismissible, full-width, legible (not small/buried grey text per Req §1). Reuses the exact wording Req §5/§16 specifies must come from the main Portal PRD rather than being redrafted here — **that PRD was not supplied to this pass, so the exact wording is a flag-back, not an invention.** Placeholder structure below carries the three required substantive points from Req §16 until the real PRD wording is supplied:

> This page is independently run by a member of Afrika Wealth Group. It is not an official CaryPact or BOT Chain page or communication. No income or return is promised or guaranteed. Digital asset participation carries risk, including loss of capital.

Traces to: Req §5 (§16 requirements) — **flagged: exact wording must be swapped for the Portal PRD's standard disclaimer text once supplied; this is a structural stand-in, not final copy.**

Secondary line, sourced directly from CaryPact's own material for consistency:

> CaryPact states: "The information shared is for general knowledge only and should not be taken as financial advice... CaryPact does not guarantee any specific outcome." *[KB §4.7, verbatim]*

© Afrika Wealth Group. `{{funnel_url}}`

---

## Open flags carried forward into build

1. **Video/media gallery (§11):** unpopulated until the three `.mp4` files are reviewed.
2. **Footer disclaimer (§16):** structural stand-in until the main Portal PRD's exact wording is supplied.
3. **Testimonials (§12):** component built but unmounted until real, sourced quotes exist.
4. **Brand palette:** now resolved by the supplied `logo.png` (black background, gold/bronze metallic type, African-continent network motif) — no longer an open question per Req §8/§10, since a concrete asset now exists.
