function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function SponsorAvatar({
  photoUrl,
  name,
  size = 96,
}: {
  photoUrl: string;
  name: string;
  size?: number;
}) {
  const style = { width: size, height: size };

  if (photoUrl) {
    return (
      <img
        src={photoUrl}
        alt={name}
        style={style}
        className="rounded-full object-cover border-2 border-[var(--color-gold)]"
      />
    );
  }

  return (
    <div
      style={style}
      className="rounded-full border-2 border-[var(--color-gold)] bg-gradient-to-br from-[var(--color-gold-soft)] via-[var(--color-gold)] to-[var(--color-gold-deep)] flex items-center justify-center text-[var(--color-ink)] font-display font-semibold"
    >
      <span style={{ fontSize: size * 0.36 }}>{initials(name)}</span>
    </div>
  );
}
