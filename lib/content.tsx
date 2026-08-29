import type { ComponentType } from "react";

type IconProps = { className?: string; filled?: boolean };

const basePath =
  "M2 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7l-4 4v-4H4a2 2 0 0 1-2-2V6Z";

function Icon({
  className,
  filled,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={filled ? 0 : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

function ChildCareIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="8" r="2.2" />
      <circle cx="15" cy="8" r="2.2" />
      <circle cx="12" cy="14" r="2.2" />
      <path d="M12 11.5c-2.2 0-4 1.2-4 3.4 0 .9.7 1.6 1.6 1.6h4.8c.9 0 1.6-.7 1.6-1.6 0-2.2-1.8-3.4-4-3.4Z" />
      <path d={basePath} />
    </Icon>
  );
}

function ExtensionIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 3.5A1.5 1.5 0 0 1 8.5 5v1h3a1.5 1.5 0 0 1 0 3h-3v2a1.5 1.5 0 0 1-3 0v-2h-2a1.5 1.5 0 0 1 0-3h2V5A1.5 1.5 0 0 1 7 3.5Z" />
      <path d="M10 11h3a2 2 0 0 1 2 2v2h1.5a1.5 1.5 0 0 1 0 3H15v2a2 2 0 0 1-4 0v-2H9a2 2 0 0 1 0-4h3v-2a2 2 0 0 1 2-2h.5" />
    </Icon>
  );
}

function SchoolIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3 2 7.5 12 12l10-4.5L12 3Z" />
      <path d="M6 10v4.5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5V10" />
      <path d="M22 9v5" />
    </Icon>
  );
}

function BookIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21V5.5Z" />
      <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
    </Icon>
  );
}

function GraduationIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3 2 7.5 12 12l10-4.5L12 3Z" />
      <path d="M6 10.2v4.3c0 1.2 2.7 2.5 6 2.5s6-1.3 6-2.5v-4.3" />
      <path d="M22 9.5V14" />
      <path d="M4.5 15.5v3" />
    </Icon>
  );
}

function CollegeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 10.5 12 5l9 5.5-9 5.5-9-5.5Z" />
      <path d="M7 12.8V16c0 1.1 2.2 2.5 5 2.5s5-1.4 5-2.5v-3.2" />
      <path d="M3 19h18" />
    </Icon>
  );
}

function BriefcaseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
      <path d="M12 13v2" />
    </Icon>
  );
}

function EnglishIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
      <path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" />
    </Icon>
  );
}

function HistoryIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l3 2" />
      <path d="M9 2h6" />
      <path d="M12 2v3" />
    </Icon>
  );
}

function ScienceIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <ellipse cx="12" cy="12" rx="9" ry="4" />
    </Icon>
  );
}

function CodingIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
      <path d="m13.5 5-3 14" />
    </Icon>
  );
}

function MandarinIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 9h5" />
      <path d="M9.5 9v7" />
      <path d="M7 13h5" />
      <path d="M14.5 9h.01M17 9h.01M14.5 13h.01M17 13h.01M14.5 16.5h.01M17 16.5h.01" />
    </Icon>
  );
}

export const PROGRAMS: {
  key: string;
  icon: ComponentType<IconProps>;
}[] = [
  { key: "toddler", icon: ChildCareIcon },
  { key: "preschool", icon: ExtensionIcon },
  { key: "primary", icon: SchoolIcon },
  { key: "middleSchool", icon: BookIcon },
  { key: "highSchool", icon: GraduationIcon },
  { key: "college", icon: CollegeIcon },
  { key: "professionals", icon: BriefcaseIcon },
];

export const SUBJECTS: {
  key: string;
  icon: ComponentType<IconProps>;
}[] = [
  { key: "english", icon: EnglishIcon },
  { key: "social", icon: HistoryIcon },
  { key: "science", icon: ScienceIcon },
  { key: "coding", icon: CodingIcon },
  { key: "mandarin", icon: MandarinIcon },
];

export const FEATURES: {
  key: string;
  icon: ComponentType<IconProps>;
  accent: "secondary" | "tertiary" | "primary";
}[] = [
  {
    key: "personalized",
    icon: () => (
      <Icon {...({} as IconProps)}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="1.5" />
        <path d="M12 12V7" />
        <path d="M12 12l-4 5" />
      </Icon>
    ),
    accent: "secondary",
  },
  {
    key: "flexibleHours",
    icon: () => (
      <Icon {...({} as IconProps)}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </Icon>
    ),
    accent: "tertiary",
  },
  {
    key: "expertTutors",
    icon: () => (
      <Icon {...({} as IconProps)}>
        <path d="M12 3l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L6.2 7.2l4-.6L12 3Z" />
        <path d="M4 20c1-2.5 4-3.5 8-3.5s7 1 8 3.5" />
      </Icon>
    ),
    accent: "primary",
  },
];
