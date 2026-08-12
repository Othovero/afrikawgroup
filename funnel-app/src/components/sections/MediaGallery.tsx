import { Container } from "../ui/Container";
import { SectionShell, SectionHeading } from "../ui/SectionShell";
import { Reveal } from "../ui/Reveal";

export interface MediaItem {
  videoSrc: string;
  posterSrc: string;
  caption: string;
}

export interface YoutubeItem {
  youtubeId: string;
  title: string;
  caption: string;
}

/**
 * Requirements §5.11. The featured video is the official BOT Chain YouTube
 * channel's own upload ("BOT Chain Global Consensus Summit · Hong Kong |
 * Full Event Recap"), embedded via YouTube's standard iframe player — the
 * stream stays on YouTube's own CDN, nothing is downloaded or re-hosted, so
 * this doesn't run into the "no lifted video" constraint the same way a
 * locally re-encoded copy would. A YouTube iframe embed also never
 * autoplays, so the "no autoplay video on mobile" requirement (§3.3) is
 * satisfied by construction — there is no separate mobile fallback to wire.
 *
 * The three raw .mp4 files supplied alongside this brief document the same
 * event but have not individually been cleared against the claims filter
 * (see knowledge base §9) or confirmed as ours to re-host — they are left
 * out of `items` until that's done, rather than guessed at.
 */
const featured: YoutubeItem = {
  youtubeId: "FHdsTVRdWO8",
  title: "BOT Chain Global Consensus Summit — Hong Kong, full event recap",
  caption:
    "Official recap from the BOT Chain YouTube channel. Any figures shown on screen are the project's own, self-reported claims — not verified independently.",
};

export function MediaGallery({ items = [] }: { items?: MediaItem[] }) {
  return (
    <SectionShell id="media" tone="panel">
      <Container>
        <SectionHeading title="Media" />
        <Reveal>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)]">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${featured.youtubeId}`}
                title={featured.title}
                loading="lazy"
                allow="accelerometer; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="p-4 text-sm text-[var(--color-muted)]">{featured.caption}</p>
          </div>
        </Reveal>

        {items.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.videoSrc}
                className="overflow-hidden rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)]"
              >
                <video
                  className="hidden aspect-video w-full object-cover md:block"
                  poster={item.posterSrc}
                  controls
                  preload="none"
                >
                  <source src={item.videoSrc} />
                </video>
                <img
                  src={item.posterSrc}
                  alt={item.caption}
                  className="aspect-video w-full object-cover md:hidden"
                />
                <p className="p-4 text-sm text-[var(--color-muted)]">{item.caption}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </SectionShell>
  );
}
