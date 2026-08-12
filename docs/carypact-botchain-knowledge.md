# CaryPact & BOT Chain — Knowledge Base (Draft v1)

**Purpose:** factual summary of what CaryPact and BOT Chain are, how they work, and what the supplied source material claims — for use as the sourcing reference for the funnel landing page (see [funnel-landing-page-requirements.md](funnel-landing-page-requirements.md), Section 0). This document does **not** filter or soften anything; it records what the sources say so the page-copy pass can apply the Section 1 claims filter deliberately, with the full picture in view.

**Sources reviewed:**
1. `Final CaryPact & BOT Chain Preview_Team Africa_03072026 (1).pptx` — 40-slide deck, dated 3 Jul 2026, Team Africa branding
2. `Final CaryPact & BOT Chain Preview_Team Africa_03072026 (1).pdf` — same deck, PDF export (identical content)
3. `SuperStarZ_CaryPact-06042026.pdf` — shorter/earlier variant of the same deck (dated 6 Apr 2026), useful for cross-checking which figures changed over time (see Section 6, Discrepancies)
4. Limited open-web search (Aug 2026) for independent context — see Section 7. The three video files in the folder were **not** transcribed for this pass (no audio/video processing tool was available in this environment); if they contain material claims not covered below, they need a separate pass before the explainer sections are finalized.

---

## 1. What is BOT Chain

BOT Chain is presented as a Layer-1 public blockchain, described in the source material as "protocol-focused... designed for the future of Web3 and AI era" and, per limited external search, marketed elsewhere as built for "AI Native and DePIN" (decentralized physical infrastructure) use cases with a "SPoA hybrid consensus." **The consensus-mechanism claim is from an external PR-style article, not from the source deck, and is unverified — flag if used.**

- **Native coin:** BOT. Total supply 150 million (per SuperStarZ deck). Initial listing range stated as $5–$12 (SuperStarZ deck; not repeated in the later Team Africa deck).
- **Founder:** Mr. Johnson Zhao, also credited as founder of CoinStore Exchange and founder of the CaryPact Protocol — i.e. the same individual is named as founder of the chain, the token protocol built on it, and the exchange it lists on. This concentration is worth noting for the "who runs this" framing but should be stated neutrally.
- **Named infrastructure components:**
  - **Mainnet Chain** — "core public blockchain network powering ecosystem operations and on-chain value flow"
  - **Explorer / BOT Scan** — on-chain data, hashrate verification, transaction records
  - **Bridge** — cross-chain connectivity (BNB Chain, ETH Chain mentioned elsewhere in the deck)
  - **BO Wallet** — native wallet for holding assets, staking, and "real-world computing returns"
  - **BDEX** — decentralized exchange for on-chain asset exchange and liquidity
- **BOT Chain Lab:** described as a program covering project onboarding, technical developer support, liquidity pool provisioning, listing assistance on CoinStore Exchange, airdrop promotion, and gas-fee rebates. Site referenced: `www.botchain.ai`.
- **Gas fee revenue-share claim:** one external article (see Section 7) states BOT Chain returns 80% of protocol-generated gas fees to protocol developers. **This does not appear in the supplied decks and could not be verified against an official source — do not state as fact without confirming against botchain.ai's own documentation.**

## 2. The BOT Mining Server (hardware/hosted compute product)

A physical or hosted "mining server" product tied to BOT emission:

- **Daily BOT emission:** 8,000 BOT/day total, split 75% (6,000 BOT) to Mining Server operators and 25% (2,000 BOT) to a "Rank Reward" pool — the rank-reward share only pays out if the rank holder also owns a Mining Server.
- **Payout formula (as stated):** an individual server's daily return = (that server's hashrate ÷ total network server hashrate) × 6,000 BOT.
- **Farm locations:** Malaysia, Thailand, Mongolia.
- **Costs:** server price $3,980; maintenance fee 70 USDT/month.
- **Rank-tiered pricing table (V0–V10):** base price decreases from 3,600 USDT (V0) to 3,000 USDT (V10) as rank rises, while a paired "Retail Profit" figure rises from 380 USDT (V0) to 980 USDT (V10). This is effectively a volume/rank-based resale-margin structure layered on top of the hardware purchase — **an explicit profit figure per rank tier, must not appear on the public page (Section 1 filter).**

## 3. The BOT Card (payments product)

A card/wallet/offshore-banking bundle, four tiers:

| Tier | Price | Includes |
|---|---|---|
| BOT BASIC | Free registration | Crypto wallet, basic account features |
| BOT LITE | USD 179 | 1 offshore bank account, 1 physical debit card |
| BOT PRO | USD 279 | 1 virtual account, 1 virtual card, 1 offshore bank account, 1 premium metal card |
| BOT PREMIUM | USD 599 | 5 virtual cards, 1 offshore bank account, 1 premium metal card |

Framed as "brings digital assets closer to daily life." Sites referenced: `app.botcard.net`, `www.botcard.net`. Offshore banking + tiered card products are a distinct claim category (financial-services-adjacent) worth a compliance sanity check separate from the crypto-earnings claims — flag for human review regardless of the earnings filter.

## 4. What is CaryPact

CaryPact is described as "the first ecosystem protocol on the BOT Chain," positioned as a system to "tokenize, verify, and trade physical compute power as a decentralized asset." Marketing shorthand in the deck: "Owning Digital Machine → Activate it Once → Generate Income Daily" (**the third phrase is an earnings claim and must not be reused verbatim — Section 1**).

- **Token:** CA. Total supply 210 million.
- **Emission schedule:** 40,000 CA/day, reducing 10% every 2 years, with full emission complete in 22 years.
- **Allocation of daily emission:** 42% Hashrate Mining, 18% PoS Output, 2% Foundation, 3% DAO, 35% Active Reward Pool.
- **Participation flow (as described):**
  1. Buy "Hashrate" — minimum entry $100, priced at $1 = 1 Hashrate unit.
  2. Hashrate generates CA daily via a mining formula (payout time stated as both 12:00pm and 12:30pm GMT+8 across the two deck versions — see discrepancies below).
  3. CA can be withdrawn, staked, or bridged/swapped across BOT Chain, BNB Chain, and ETH Chain.

### 4.1 "5 Income Streams" (as literally labeled in the source deck)

The deck's own section header is "5 Income Streams," split into:

- **Passive Income:** (1) Static Mining, (2) Static Staking, (5) Staking Rewards [listed as a 5th stream in the longer deck's recap slide, overlapping with #2]
- **Active Income:** (3) Dynamic Team Rewards, (4) Dynamic Rank Rewards

This section, by the source material's own framing, is the core of what Section 1 of the requirements doc exists to prevent from reaching the public page. The mechanics below are recorded here for the knowledge base only — **none of the specific formulas, percentages, or dollar projections in this section may appear on the funnel page.**

- **Static Mining formula:** individual daily CA output = (individual hashrate ÷ total network hashrate) × 16,800 CA, described as having no expiration.
- **Static Staking / PoS pool:** daily personal earning = (personal staked amount ÷ total network staked amount) × staking pool output. Pool is sourced from three inflows: a daily PoS output of 7,200 CA, a 1.8% "sell slippage" reflow, and "remaining dynamic rewards."
- **Sell slippage on CA sales:** stated as 5% total — 1.8% to liquidity reflow, 3.2% to "Nodes & DAO."
- **Staking terms:** flexible (no lock) or fixed 30/90/180/360-day terms. Flexible daily yield stated as 0.2%–0.4%; fixed terms apply multipliers up to 2.5x at 360 days. A worked example shows 10,000 USDT of staked CA (at an assumed CA price of 30 USDT) growing to an approximate value of $60,150 at the 360-day tier. **This is an explicit dollar-return projection in the source material — the single clearest example of the kind of claim Section 1 prohibits.**
- **Dynamic Team Rewards:** 50% of the Active Reward Pool (7,000 CA/day) distributed by (personal "sub-leg" hashrate ÷ total network sub-leg hashrate). Requires a downline ("sub-leg") to reach 3,000 USDT of performance before rewards activate — this is a recruitment/downline-volume gate, a standard MLM/network-marketing mechanic.
- **Dynamic Rank Rewards:** a V0–V10 rank ladder. Advancing ranks requires escalating "Personal" volume (500u at V1 up to 20K u at V10) and "Sub Leg" volume (10K u at V1 up to 5M u at V10, with V8–V10 partly satisfied by having multiple people reach V7/V8/V9 under you). Each rank carries a stated staking percentage (6% at V1 rising to 30% at V10) and an approximate "Daily Revenue" figure (~40u at V1 up to ~200K u at V10). V7–V10 additionally receive a 3% DAO dividend. **This rank table is the deck's most detailed income-projection table and, like the staking example above, must not be reproduced.**
- **Time-limited promo (as of the deck's 3 Jul 2026 date):** effective 8 Jul 2026, for offline trainings only — spending 1,000 / 5,000 / 10,000 USDT on computing power or 360-day CA staking within 72 hours of attending a training/event yields a bonus of 1 / 7 / 15 CA respectively. This is a bonus-token promotion tied to event attendance and spend — still a value-implying claim; treat as time-bound and non-evergreen even if a non-earnings framing of "the Group runs events" is used.

### 4.2 Stated "Core Advantages"

The deck lists six claimed advantages, largely promotional/positioning language rather than technical fact: strategic positioning ("securing the high ground for the next market cycle"), architectural edge ("dual-engine synergy"), an economic model claimed to be "high-efficiency value capture," global expansion (55+ countries, 15 languages — see Section 4.3 for the fuller network stats), a 22-year mining lifecycle framed as long-term/sustainable, and an education arm (Cary Academy) framed as a "talent engine." None of these are independently verifiable from the source material; they read as marketing copy and should be treated as such if adapted for the page (i.e., rewritten factually, not repeated as claims of fact).

### 4.3 Global network statistics (self-reported)

The deck states: 55+ countries, 15 languages, 350,000+ users, 1,300+ "studios," 200+ operation centers, 1,500+ offices. **These are self-reported figures from the project's own marketing material with no independent source found — treat as unverified claims, not facts, if used at all.**

### 4.4 "Growth Logic of CA & BOT" narrative

The deck frames the tokens as "Digital Oil" / "Computing Power Currency" and a "yield engine of crypto economy," citing limited supply, controlled daily emission, a 50% gas-fee burn mechanism, and expected growth drivers including "listing in major exchanges" and "KOLs and media promotions." This is speculative, promotional framing about future token value — it should not be adapted into any form on the landing page, direct or implied (this is precisely the pattern the no-earnings-claims rule targets, just applied to token price rather than personal income).

### 4.5 Education arm

**Cary Academy** is named as the project's educational foundation, with an event noted for 12 May 2026 in Bangkok, and a slide referencing "Events in Africa & Asia" with no further specifics given in the source material — flag as incomplete if this needs to appear on the page.

### 4.6 Company / backers slide

Names Mr. Johnson Zhao (see Section 1) plus three unnamed institutional backers: a "Sweden's National-Level Technology Foundation" (stated $10M investment), a "leading investment fund in Turkey" (stated $3M investment), and an unnamed entity described as having "incubated multiple Binance Alpha projects" (stated $2M investment). **None of these three backers are named specifically, and none could be independently verified in the limited search performed — treat as unverified/unconfirmable claims. Do not present as fact; flag back to the user rather than inventing the missing names.**

### 4.7 Disclaimer already present in the source deck

Both the pptx and both PDFs open with this disclaimer (slide 2 / page 1):

> "CaryPact is a community-driven project. While we aim to provide useful tools and opportunities, participation involves certain risks. The information shared is for general knowledge only and should not be taken as financial advice. We encourage all participants to do their own research and make informed decisions. CaryPact does not guarantee any specific outcome and by engaging with the platform, users should accept full responsibility for their actions."

This is useful precedent that the source material itself acknowledges risk and non-advice status. It is **not** a substitute for the funnel page's own mandatory disclaimer (Requirements doc Section 15/16), which must reuse the exact wording defined in the main Portal PRD.

### 4.8 The deck's own funnel CTA sequence

The final "Take Action" slide lists: Get Invitation Link → Onboard to CaryPact → Join Communication Channels → Attend Trainings & Events → **"Automate your Earning."** The last phrase is itself an earnings claim in CTA form and should not be reused as page copy — it's a good illustration of how even a CTA label can trip the Section 1 filter, not just body copy.

### 4.8b Investors — now verified directly from botchain.ai

A later pass visited `https://botchain.ai` directly (not just the source decks) and found a "Backed By Leading Investors" section listing three named logos: **NIX Foundation**, **Gemhead Capital**, and **Alpha Capital**. This is the official primary source and supersedes the "unnamed, unverifiable" flag in Section 4.6 above **for the fact that named investors exist** — these three names are confirmed, safe to use, and should be cited to botchain.ai.

What's still unverified: whether these three map 1:1 onto the deck's descriptions in Section 4.6 (a "Sweden's National-Level Technology Foundation," a "leading investment fund in Turkey," and an entity that "incubated multiple Binance Alpha projects," each with a stated dollar investment figure). The names and the descriptions don't obviously match each other, and the site doesn't repeat the deck's investment-amount figures. Treat "NIX Foundation / Gemhead Capital / Alpha Capital" as the verified investor list, and treat Section 4.6's descriptions/dollar amounts as a separate, still-unverified claim from the deck — don't merge them into one combined claim (e.g. don't say "NIX Foundation invested $10 million," since that specific pairing hasn't been confirmed anywhere).

### 4.9 Official links found in source material

- `https://app.carypact.com` (app/registration)
- `https://t.me/CaryPact` (Telegram)
- `https://x.com/CaryPact` (X/Twitter)
- `https://www.youtube.com/@CaryPact` (YouTube)
- `www.botchain.ai` (BOT Chain site)
- `app.botcard.net` / `www.botcard.net` (BOT Card product)

---

## 5. What CaryPact/BOT Chain is *not*, per the source material

- Not described anywhere in the deck as a regulated financial product, security, or investment fund.
- The deck's own disclaimer (4.7) explicitly states it is not financial advice and outcomes are not guaranteed — this directly conflicts with the "Generate Income Daily," "Automate your Earning," and dollar-projection content elsewhere in the same deck. **This internal contradiction is itself worth flagging: the source material both disclaims earnings promises and makes them.** The landing page must resolve this by following the disclaimer's spirit, not the projection tables.

## 6. Discrepancies between deck versions (SuperStarZ vs. Team Africa)

Cross-checking the earlier SuperStarZ PDF against the later Team Africa deck surfaced a few figures that changed — worth knowing so no stale figure gets treated as current:

| Item | SuperStarZ (6 Apr 2026) | Team Africa (3 Jul 2026) |
|---|---|---|
| CA daily mining payout time | 12:30pm GMT+8 | 12:00pm GMT+8 |
| Global reach | 50+ countries, 12 languages | 55+ countries, 15 languages |
| BOT total supply / listing price | Stated: 150M supply, $5–$12 initial listing | Not restated |

Given even these headline numbers moved between two decks four months apart, treat every quantitative figure in this knowledge base as a snapshot of the source material's stated claims at time of writing — not as current fact. Before any number is used anywhere (even in an internal discussion), it should be re-checked against the latest official source.

## 7. External context (limited web search, Aug 2026)

Independent, non-affiliated confirmation of CaryPact/BOT Chain's legitimacy is thin:

- Most search results are the project's own channels (X/Twitter, official site), PR-syndicated "value analysis" articles that read as promotional placements rather than independent journalism, and a review-style third-party site (`carypactplan.in`) and a fan/community site (`botchaincp.com`) whose affiliation with the project is unclear — **neither should be treated as an authoritative or official source.**
- Several independent YouTube videos exist asking "is CaryPact legit or a scam" — their existence indicates active public skepticism, not a resolved answer either way.
- A GeckoTerminal listing for the CA/WBOT trading pair showed (at time of search) a fully diluted valuation in the billions of dollars against very low daily trading volume (roughly $5.5K across ~61 transactions). A large FDV against thin liquidity is a common due-diligence flag in crypto generally — noted here for internal awareness, not for the page.
- No coverage was found from mainstream financial press, a securities regulator, or an independent blockchain security auditor. Absence of coverage is not evidence of wrongdoing, but it does mean no independent verification exists for the claims in Sections 1–4 beyond the project's own material.

**Bottom line for the page:** treat CaryPact/BOT Chain's own claims as marketing material to be neutrally described, not facts to be asserted. The compensation structure (hashrate purchase → mining/staking yield → downline "sub-leg" volume → rank-based team rewards) has the standard shape of a multi-level/network-marketing compensation plan layered on a crypto-mining narrative. That's a structural observation, not an accusation — but it's exactly why Section 1's no-earnings-claims rule and Section 5's independent-Group-page disclaimer exist, and it should inform how cautiously the "How it works" and "Why it matters" sections (Requirements doc 5.7, 5.6) are worded.

## 8. Addendum — "Decision Making Markers" framework and market-context slide

Added on a later pass, after the initial read-through. Two early slides in the Team Africa deck (slides 5–6) weren't captured in the sections above and are worth recording separately since they set the deck's own navigational structure.

**Slide 5 — "Decision Making Markers":** the deck organizes itself around five pillars: Trends, Company, Product, Reward Plan, Education. This is presentational structure (an agenda/framework), not a claim in itself — but it's useful as an organizing device for the funnel page, since it's the source material's own way of grouping the same facts already captured in Sections 1–4 above (Company → Section 4.6; Product → Sections 2–4; Reward Plan → Section 4.1, kept out of public copy per Requirements §1; Education → Section 4.5). "Trends" has no dedicated content elsewhere in this document — see below.

**Slide 6 — "4 Major Classes of Crypto Wealth" / market context:** frames a general crypto-market taxonomy (Blockchain, Exchanges, Ecosystems, Coins/Tokens) and states two market-wide figures: total crypto market cap "$2.58 trillion" and public-chain market cap "$1.87 trillion." These are general industry figures, not CaryPact- or BOT Chain-specific claims, and not earnings claims — they describe the broader market CaryPact positions itself within. Still self-reported by the deck with no citation to an external source (e.g. CoinGecko's own market-cap aggregate) — treat as the deck's own framing of market context, not an independently verified figure, and date-stamp it to the deck's own date (3 Jul 2026) if used, since crypto market cap moves constantly.

## 9. Official site findings (botchain.ai and scan.botchain.ai, visited directly)

A later pass browsed BOT Chain's own official website and block explorer directly, rather than relying only on the decks. This is the strongest sourcing available — primary, official, and live — and should be preferred over deck claims where the two overlap.

**From `botchain.ai`:**
- Positioning: "AI-Native Layer 1 Blockchain for AI Agents," described as a "DePIN + POS dual-driven Layer 1 blockchain."
- Consensus: **SPoA** (the deck used this term too, but it was flagged as unverified in Section 1 above — it's now confirmed directly on the official site, so that flag is lifted). Described as a "dual-track hybrid consensus architecture, combining physical compute-backed authority and high-performance staking consensus."
- Also describes **PoSA** (Proof of Staked Authority) — "seamlessly integrating POS Staking Mining with DePIN Hardware Mining," 0.75s block time, ~0.9s average finality, 64 tx/batch parallel execution.
- Token model described as **zero-inflation**: "All dual-mining rewards (DePIN & POS) are sourced from transaction fees and physical compute service revenues, linking token value directly to infrastructure demand." (Note: this describes BOT's model, not CA's — CA's own emission model, per Section 4 above, is a fixed daily schedule with programmed reduction, which reads differently. Don't conflate the two tokens' economics.)
- Infrastructure named: BO Wallet, BOT Bridge, BDEX — consistent with Section 1 above.
- **Investors, verified:** NIX Foundation, Gemhead Capital, Alpha Capital — see Section 4.8b.
- **Ecosystem projects** (other protocols built on BOT Chain, named on the official site): Money, ArcadeX, Tandot, Meridian, Finnext Wallet, CIAO, Nasera, Silkdao, Choicepop.
- **Roadmap** (site's own "BOT Chain Roadmap L1 Updated"): the 2025 Q3–2026 Q1 phase lists "First flagship protocol within the ecosystem goes live: CaryPact" — direct, official confirmation that CaryPact is BOT Chain's own flagship protocol, not a third-party claim.
- **Typography, as rendered on the live site:** headings in `Alexandria`, body text in `Inter`/`Montserrat` (read directly from the page's computed CSS). Visual style: near-black background, teal/emerald-green accent, clean geometric sans display type, angular logo mark.

**From `scan.botchain.ai` (live snapshot, 11 Aug 2026):**
- BOT price: $9.76 (+0.10% at time of snapshot) — consistent with the CoinGecko figure in Section 7.
- Market cap: $1,463,876,664.
- Total blocks: 19,328,996. Wallet addresses: 1,272,189. Total transactions: 14,523,256. Daily transactions: ~123,013. Average block time: 0.7s.

These are all **live figures that will be stale almost immediately** — if used on the page, date-stamp them and prefer linking to the live explorer over hardcoding a number, same caution as the CA/BOT pricing in Section 7.

## 10. Open items / flags for human review

- Video files (`document_5969993254265953233.mp4`, `...234.mp4`, `...235.mp4`) have not been reviewed — need a transcription/viewing pass before Section 5.11 (media gallery) or any video-sourced claim is finalized.
- The three unnamed institutional "backers" as described in Section 4.6 (with specific dollar amounts) remain unverified — but see Section 4.8b: the *existence and names* of three investors (NIX Foundation, Gemhead Capital, Alpha Capital) is now confirmed via botchain.ai. Don't merge the verified names with the deck's unverified dollar figures.
- ~~The BOT Chain "80% gas fee to developers" claim came from a third-party article, not the source decks or an official doc — verify against botchain.ai before using, or drop it.~~ Checked against botchain.ai directly (Section 9) — the official site does not repeat this claim anywhere reviewed. Continue treating it as unverified; still don't use it.
- No brand name/logo for the Group's own portal/page yet (already flagged as a blocker in the Requirements doc, Section 10) — affects Section 5.16 footer and Section 5.1 qualifier bar framing ("independently run by a Group member").
