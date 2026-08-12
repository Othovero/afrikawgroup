import type { SVGProps } from "react";

const base = (props: SVGProps<SVGSVGElement>) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export function ChainLinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M9.5 14.5 14.5 9.5" />
      <path d="M8 16.5a3.5 3.5 0 0 1 0-5l2-2a3.5 3.5 0 0 1 5 5" />
      <path d="M16 7.5a3.5 3.5 0 0 1 0 5l-2 2a3.5 3.5 0 0 1-5-5" />
    </svg>
  );
}

export function CompassIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m14.5 9.5-1.8 4.7a1 1 0 0 1-.5.5L7.5 16.5l1.8-4.7a1 1 0 0 1 .5-.5z" />
    </svg>
  );
}

export function GraduationCapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M2 9.5 12 5l10 4.5-10 4.5-10-4.5Z" />
      <path d="M6.5 11.7v4.3c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4.3" />
      <path d="M21 9.5v5.5" />
    </svg>
  );
}

export function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M16 8a2.7 2.7 0 0 1 0 5.3" />
      <path d="M15.5 14c2.6.3 4.5 2.1 4.5 5" />
    </svg>
  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.3-4.3" />
    </svg>
  );
}

export function LayersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
      <path d="m3 17.5 9 5 9-5" />
    </svg>
  );
}

export function HandshakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M2.5 12.5 6 9l3 2.5 2-2 2 2 3-3 3.5 3.5" />
      <path d="M9 11.5 5 15.5a1.8 1.8 0 0 0 2.5 2.5l.7-.7" />
      <path d="M13 11.5l4 4a1.8 1.8 0 0 1-2.5 2.5l-.7-.7" />
      <path d="m8 14 1.8 1.8a1.7 1.7 0 0 0 2.4 0" />
    </svg>
  );
}

export function WalletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="6.5" width="18" height="12" rx="2" />
      <path d="M3 10h18" />
      <circle cx="16.5" cy="14" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h15.5" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MessageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M21 12a8 8 0 0 1-11.5 7.2L3 20l1-6.2A8 8 0 1 1 21 12Z" />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5 19 6.5v5c0 5-3 8-7 9-4-1-7-4-7-9v-5Z" />
      <path d="m9 12 2 2 4-4.5" />
    </svg>
  );
}

export function BuildingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="3.5" width="10" height="17" rx="1" />
      <path d="M15 9.5h4.5v11H15" />
      <path d="M8 7.5h1M11 7.5h1M8 11h1M11 11h1M8 14.5h1M11 14.5h1" />
    </svg>
  );
}

export function PackageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="m3.5 8 8.5-4.5L20.5 8 12 12.5 3.5 8Z" />
      <path d="M3.5 8v8l8.5 4.5 8.5-4.5V8" />
      <path d="M12 12.5V21" />
    </svg>
  );
}

export function TrendingUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="m3.5 16 6-6 4 4 7-7.5" />
      <path d="M15 6.5h5.5V12" />
    </svg>
  );
}

export function GiftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="9.5" width="17" height="4" rx="0.5" />
      <path d="M5 13.5v6.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6.5" />
      <path d="M12 9.5V21" />
      <path d="M12 9.5c-1.2-3.5-6-3.5-6-.5 0 1.4 1.3 .5 6 .5Z" />
      <path d="M12 9.5c1.2-3.5 6-3.5 6-.5 0 1.4-1.3 .5-6 .5Z" />
    </svg>
  );
}
