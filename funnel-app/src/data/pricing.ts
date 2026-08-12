/**
 * Manual price snapshot — NOT live data. Both figures will go stale the
 * moment they're written down; each carries the source and the date so a
 * future pass can tell how old the number is and refresh it.
 *
 * CA is not listed on CoinGecko directly — only its CA/WBOT trading pair on
 * BDEX, via GeckoTerminal. That pair also carries very thin volume relative
 * to its fully diluted valuation, so the price is shown with that context
 * attached rather than as a bare number.
 */
export const pricing = {
  asOf: "11 Aug 2026",
  bot: {
    usd: 9.75,
    source: "CoinGecko",
    url: "https://www.coingecko.com/en/coins/bot",
  },
  ca: {
    usd: 31.23,
    source: "GeckoTerminal (CA/WBOT pool on BDEX)",
    url: "https://www.geckoterminal.com/bot-chain/pools/0x822dc160cc971510cf87999004a28b4a7aefd082",
    liquidityNote:
      "This pair trades thinly — about $5.6K in 24h volume across 61 transactions against a multi-billion-dollar fully diluted valuation at time of writing. A price built on that little volume can move sharply on a single trade and may not hold by the time you check it.",
  },
} as const;

export function caToUsdt(caAmount: number): string {
  return (caAmount * pricing.ca.usd).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
