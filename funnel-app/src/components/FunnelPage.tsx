import type { SponsorTokens } from "../types";
import { QualifierBar } from "./sections/QualifierBar";
import { Hero } from "./sections/Hero";
import { Bridge } from "./sections/Bridge";
import { DecisionMarkers } from "./sections/DecisionMarkers";
import { MarketContext } from "./sections/MarketContext";
import { WhatIsBotChain } from "./sections/WhatIsBotChain";
import { WhatIsCaryPact } from "./sections/WhatIsCaryPact";
import { Company } from "./sections/Company";
import { Products } from "./sections/Products";
import { HowItWorks } from "./sections/HowItWorks";
import { YieldCalculator } from "./sections/YieldCalculator";
import { RewardStructure } from "./sections/RewardStructure";
import { CtaBlock } from "./sections/CtaBlock";
import { WhyItMatters } from "./sections/WhyItMatters";
import { WhoThisIsFor } from "./sections/WhoThisIsFor";
import { Education } from "./sections/Education";
import { MediaGallery } from "./sections/MediaGallery";
import { Faq } from "./sections/Faq";
import { FinalCta } from "./sections/FinalCta";
import { SponsorBlock } from "./sections/SponsorBlock";
import { Footer } from "./sections/Footer";

/**
 * One component, rendered per member with a different set of personalization
 * tokens (Requirements §6). Nothing member-specific is hardcoded here or in
 * any child section — every dynamic value flows in through `tokens`.
 *
 * Social proof is intentionally not mounted — no real, sourced testimonials
 * exist yet. See src/components/sections/SocialProof.tsx.
 */
export function FunnelPage({ tokens }: { tokens: SponsorTokens }) {
  return (
    <div>
      <QualifierBar sponsorName={tokens.sponsor_name} />
      <Hero tokens={tokens} />
      <Bridge />
      <DecisionMarkers />

      {/* Trends */}
      <MarketContext />

      {/* Company + product */}
      <WhatIsBotChain />
      <WhatIsCaryPact />
      <Company />
      <Products />

      {/* Mechanism */}
      <HowItWorks />
      <YieldCalculator />
      <CtaBlock
        heading={`Ready to see it yourself? Register via ${tokens.sponsor_name}'s link.`}
        ctaLabel="Register"
        href={tokens.carypact_url}
      />

      {/* Reward plan */}
      <RewardStructure />
      <WhyItMatters />
      <WhoThisIsFor />
      <CtaBlock
        heading={`Questions before you register? Message ${tokens.sponsor_name} on WhatsApp.`}
        ctaLabel="Chat on WhatsApp"
        href={tokens.sponsor_whatsapp}
      />

      {/* Education */}
      <Education />
      <MediaGallery />
      <Faq tokens={tokens} />
      <FinalCta tokens={tokens} />
      <SponsorBlock tokens={tokens} />
      <Footer tokens={tokens} />
    </div>
  );
}
