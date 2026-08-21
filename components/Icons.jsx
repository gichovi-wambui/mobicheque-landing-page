/**
 * MobiCheque icon set.
 *
 * One consistent 24x24 grid, 1.6 stroke, round caps/joins, currentColor.
 * Replaces the emoji that were previously used as section icons.
 */

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  xmlns: "http://www.w3.org/2000/svg",
};

function Svg({ children, className = "w-6 h-6", ...rest }) {
  return (
    <svg {...base} className={className} aria-hidden="true" {...rest}>
      {children}
    </svg>
  );
}

/* ---------------- Product / capability icons ---------------- */

export const ScanIcon = (p) => (
  <Svg {...p}>
    <path d="M3 8V5.5A2.5 2.5 0 0 1 5.5 3H8" />
    <path d="M16 3h2.5A2.5 2.5 0 0 1 21 5.5V8" />
    <path d="M21 16v2.5a2.5 2.5 0 0 1-2.5 2.5H16" />
    <path d="M8 21H5.5A2.5 2.5 0 0 1 3 18.5V16" />
    <path d="M3.5 12h17" />
  </Svg>
);

export const OcrIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M7 10h5" />
    <path d="M7 14h3" />
    <path d="m15.5 13.5 1.6 1.6" />
    <circle cx="14.6" cy="12.6" r="2.1" />
  </Svg>
);

export const ShieldIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3 5 6v5.5c0 4.2 2.9 8 7 9.5 4.1-1.5 7-5.3 7-9.5V6l-7-3Z" />
    <path d="m9.2 11.8 2 2 3.6-3.8" />
  </Svg>
);

export const DuplicateIcon = (p) => (
  <Svg {...p}>
    <rect x="8" y="8" width="12" height="12" rx="2.4" />
    <path d="M16 5.6A2.6 2.6 0 0 0 13.4 3H6.6A3.6 3.6 0 0 0 3 6.6v6.8A2.6 2.6 0 0 0 5.6 16" />
    <path d="m11.4 13.6 1.6 1.6 3-3.2" />
  </Svg>
);

export const TrackIcon = (p) => (
  <Svg {...p}>
    <circle cx="5.5" cy="12" r="2.2" />
    <circle cx="18.5" cy="12" r="2.2" />
    <path d="M7.7 12h8.6" strokeDasharray="1.6 2.2" />
    <path d="M5.5 9.8V5.4" />
    <path d="M18.5 14.2v4.4" />
  </Svg>
);

export const RecordsIcon = (p) => (
  <Svg {...p}>
    <path d="M3 7.2A2.2 2.2 0 0 1 5.2 5h3.4l1.9 2.2h8.3A2.2 2.2 0 0 1 21 9.4v7.4a2.2 2.2 0 0 1-2.2 2.2H5.2A2.2 2.2 0 0 1 3 16.8Z" />
    <path d="M7.5 12.6h9" />
  </Svg>
);

export const LockIcon = (p) => (
  <Svg {...p}>
    <rect x="4.5" y="10.5" width="15" height="10" rx="2.4" />
    <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" />
    <path d="M12 14.6v2.2" />
  </Svg>
);

export const AuditIcon = (p) => (
  <Svg {...p}>
    <path d="M6 3h8.5L19 7.5V21H6Z" />
    <path d="M14 3v4.8h4.8" />
    <path d="M9.2 12.5h6" />
    <path d="M9.2 16.2h4" />
  </Svg>
);

export const RouteIcon = (p) => (
  <Svg {...p}>
    <path d="M4 6h5.5a4 4 0 0 1 4 4v4a4 4 0 0 0 4 4H20" />
    <circle cx="4" cy="6" r="1.8" />
    <path d="m17.6 15.6 2.4 2.4-2.4 2.4" />
  </Svg>
);

export const ClockIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 7.4V12l3 1.9" />
  </Svg>
);

/* ---------------- Audience icons ---------------- */

export const BankIcon = (p) => (
  <Svg {...p}>
    <path d="M3.5 9.6 12 4.6l8.5 5" />
    <path d="M5.6 9.6v8.2M10 9.6v8.2M14 9.6v8.2M18.4 9.6v8.2" />
    <path d="M3.2 19.6h17.6" />
  </Svg>
);

export const SaccoIcon = (p) => (
  <Svg {...p}>
    <circle cx="8.6" cy="8.4" r="3" />
    <path d="M3.2 19.2a5.6 5.6 0 0 1 10.8 0" />
    <path d="M15.8 6.2a3 3 0 0 1 0 5.8" />
    <path d="M17 14.4a5.6 5.6 0 0 1 3.8 4.8" />
  </Svg>
);

export const BusinessIcon = (p) => (
  <Svg {...p}>
    <path d="M4 20V6.4A1.4 1.4 0 0 1 5.4 5h6.2A1.4 1.4 0 0 1 13 6.4V20" />
    <path d="M13 10.4h5.6A1.4 1.4 0 0 1 20 11.8V20" />
    <path d="M3 20h18" />
    <path d="M7 9h2M7 13h2M16 14h1" />
  </Svg>
);

export const PersonIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="8.2" r="3.4" />
    <path d="M5.4 19.8a6.6 6.6 0 0 1 13.2 0" />
  </Svg>
);

/* ---------------- UI icons ---------------- */

export const CheckIcon = (p) => (
  <Svg {...p}>
    <path d="m5 12.6 4.4 4.4L19 7.4" />
  </Svg>
);

export const ArrowRightIcon = (p) => (
  <Svg {...p}>
    <path d="M4.5 12h15" />
    <path d="m13.4 5.9 6.1 6.1-6.1 6.1" />
  </Svg>
);

export const ChevronDownIcon = (p) => (
  <Svg {...p}>
    <path d="m6 9.5 6 6 6-6" />
  </Svg>
);

export const MenuIcon = (p) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const CloseIcon = (p) => (
  <Svg {...p}>
    <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />
  </Svg>
);

export const MailIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="5.2" width="18" height="13.6" rx="2.4" />
    <path d="m3.8 7 7.1 5.2a2 2 0 0 0 2.2 0L20.2 7" />
  </Svg>
);

export const AlertIcon = (p) => (
  <Svg {...p}>
    <path d="M12 4.5 2.8 20h18.4Z" />
    <path d="M12 10v4" />
    <path d="M12 17.2h.01" />
  </Svg>
);

export const PaperIcon = (p) => (
  <Svg {...p}>
    <rect x="2.6" y="6.4" width="18.8" height="11.2" rx="1.8" />
    <path d="M6 10.4h5.2" />
    <path d="M6 13.6h3" />
    <path d="M15 14.4h3.4" />
  </Svg>
);
