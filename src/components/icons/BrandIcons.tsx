"use client";

import { useId, type ReactNode, type SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({
  size = 40,
  children,
  ...props
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

/** Soft metallic green shield with depth */
export function IconShield({ size = 40, ...props }: IconProps) {
  const uid = useId().replace(/:/g, "");
  return (
    <Base size={size} {...props}>
      <defs>
        <linearGradient id={`${uid}-body`} x1="12" y1="6" x2="36" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6EE7A8" />
          <stop offset="0.55" stopColor="#22C55E" />
          <stop offset="1" stopColor="#15803D" />
        </linearGradient>
        <linearGradient id={`${uid}-shine`} x1="16" y1="8" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <filter id={`${uid}-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#14532D" floodOpacity="0.45" />
        </filter>
      </defs>
      <path
        filter={`url(#${uid}-soft)`}
        d="M24 5.5C19.2 8.2 14.4 9.4 9.5 9.6c-.6.02-1 .5-1 1.1v11.8c0 9.3 6.2 16.7 15.5 19.9.3.1.7.1 1 0C34.3 39.2 40.5 31.8 40.5 22.5V10.7c0-.6-.4-1.08-1-1.1-4.9-.2-9.7-1.4-14.5-4.1-.3-.18-.7-.18-1 0Z"
        fill={`url(#${uid}-body)`}
      />
      <path
        d="M24 8.2c-4.2 2.2-8.4 3.2-12.6 3.4v10.9c0 7.6 5 13.7 12.6 16.5 7.6-2.8 12.6-8.9 12.6-16.5V11.6c-4.2-.2-8.4-1.2-12.6-3.4Z"
        fill={`url(#${uid}-shine)`}
      />
      <path
        d="M21.2 29.8 16.6 25.2a1.4 1.4 0 0 1 2-2l2.6 2.6 6.6-6.6a1.4 1.4 0 0 1 2 2l-7.6 7.6a1.4 1.4 0 0 1-2 0Z"
        fill="#ECFDF5"
      />
    </Base>
  );
}

export function IconPhone({ size = 40, ...props }: IconProps) {
  const uid = useId().replace(/:/g, "");
  return (
    <Base size={size} {...props}>
      <defs>
        <linearGradient id={`${uid}-body`} x1="10" y1="8" x2="38" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#86EFAC" />
          <stop offset="0.45" stopColor="#22C55E" />
          <stop offset="1" stopColor="#166534" />
        </linearGradient>
        <filter id={`${uid}-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.2" floodColor="#14532D" floodOpacity="0.4" />
        </filter>
      </defs>
      <path
        filter={`url(#${uid}-soft)`}
        fill={`url(#${uid}-body)`}
        d="M34.8 30.6c-1.7-1.5-3.7-2.5-5.8-3-.7-.15-1.4.1-1.8.7l-1.6 2.4c-.4.6-1.1.8-1.8.6-2.3-.7-4.4-2-6.2-3.8-1.8-1.8-3.1-3.9-3.8-6.2-.2-.7 0-1.4.6-1.8l2.4-1.6c.6-.4.85-1.1.7-1.8-.5-2.1-1.5-4.1-3-5.8-.4-.5-1.1-.7-1.7-.5l-3.2 1.1c-.7.25-1.2.9-1.2 1.65.2 5.6 2.6 10.8 6.7 14.9 4.1 4.1 9.3 6.5 14.9 6.7.75 0 1.4-.5 1.65-1.2l1.1-3.2c.2-.6 0-1.3-.5-1.7Z"
      />
      <circle cx="33.5" cy="14.5" r="3.2" fill="#BBF7D0" opacity="0.9" />
      <circle cx="33.5" cy="14.5" r="1.4" fill="#F0FDF4" />
    </Base>
  );
}

export function IconWhatsApp({ size = 40, ...props }: IconProps) {
  const uid = useId().replace(/:/g, "");
  return (
    <Base size={size} {...props}>
      <defs>
        <linearGradient id={`${uid}-body`} x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4ADE80" />
          <stop offset="0.5" stopColor="#22C55E" />
          <stop offset="1" stopColor="#15803D" />
        </linearGradient>
        <filter id={`${uid}-soft`} x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.4" floodColor="#14532D" floodOpacity="0.35" />
        </filter>
      </defs>
      <path
        filter={`url(#${uid}-soft)`}
        fill={`url(#${uid}-body)`}
        d="M24 6.5c-9.4 0-17 7.6-17 17 0 3 .8 5.8 2.2 8.3L7.5 41.5l10-2.6c2.4 1.3 5.1 2 8 2 9.4 0 17-7.6 17-17s-7.6-17-17-17Z"
      />
      <path
        fill="#ECFDF5"
        d="M31.8 27.4c-.4-.2-2.3-1.1-2.6-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.5-.7.2-.2.2-.4.4-.7.1-.2 0-.5 0-.7 0-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.7c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.3 0 1.9 1.4 3.8 1.6 4 .2.3 2.7 4.2 6.6 5.8 3.9 1.6 3.9 1.1 4.6 1 .7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.1-.4-.3-.8-.5Z"
      />
    </Base>
  );
}

export function IconPin({ size = 40, ...props }: IconProps) {
  const uid = useId().replace(/:/g, "");
  return (
    <Base size={size} {...props}>
      <defs>
        <linearGradient id={`${uid}-body`} x1="16" y1="4" x2="32" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#86EFAC" />
          <stop offset="0.5" stopColor="#22C55E" />
          <stop offset="1" stopColor="#166534" />
        </linearGradient>
        <filter id={`${uid}-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.3" floodColor="#14532D" floodOpacity="0.4" />
        </filter>
      </defs>
      <path
        filter={`url(#${uid}-soft)`}
        fill={`url(#${uid}-body)`}
        d="M24 5.5c-6.3 0-11.4 5.1-11.4 11.4 0 8.2 9.4 18.8 10.6 20.1.4.45 1.2.45 1.6 0 1.2-1.3 10.6-11.9 10.6-20.1C35.4 10.6 30.3 5.5 24 5.5Z"
      />
      <circle cx="24" cy="16.5" r="4.2" fill="#ECFDF5" />
      <circle cx="22.8" cy="15.2" r="1.4" fill="#fff" opacity="0.7" />
    </Base>
  );
}

export function IconPool({ size = 24, ...props }: IconProps) {
  const uid = useId().replace(/:/g, "");
  return (
    <Base size={size} {...props}>
      <defs>
        <linearGradient id={`${uid}-g`} x1="14" y1="8" x2="34" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6EE7B7" />
          <stop offset="0.5" stopColor="#14B8A6" />
          <stop offset="1" stopColor="#0F766E" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${uid}-g)`}
        d="M24 7c-1.2 0-9.5 9.2-9.5 16.2A9.5 9.5 0 0 0 24 32.7a9.5 9.5 0 0 0 9.5-9.5C33.5 16.2 25.2 7 24 7Z"
      />
      <path
        fill="#ECFDF5"
        opacity="0.45"
        d="M20.2 14.5c1.6-2.2 3-3.9 3.8-5 1.4 1.9 3.5 4.8 5.2 8.1-1.8-.6-3.6-.4-5.2.4-1.2.6-2.4.4-3.8-3.5Z"
      />
      <path
        stroke="#BBF7D0"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M14 36.5c2.5-1.5 5-1.5 7.5 0s5 1.5 7.5 0 5-1.5 7.5 0"
      />
    </Base>
  );
}

export function IconPump({ size = 24, ...props }: IconProps) {
  const uid = useId().replace(/:/g, "");
  return (
    <Base size={size} {...props}>
      <defs>
        <linearGradient id={`${uid}-g`} x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#86EFAC" />
          <stop offset="1" stopColor="#15803D" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="8.5" fill={`url(#${uid}-g)`} />
      <circle cx="24" cy="24" r="3.4" fill="#ECFDF5" />
      <g fill="#22C55E">
        <rect x="22.2" y="7" width="3.6" height="7" rx="1.2" />
        <rect x="22.2" y="34" width="3.6" height="7" rx="1.2" />
        <rect x="7" y="22.2" width="7" height="3.6" rx="1.2" />
        <rect x="34" y="22.2" width="7" height="3.6" rx="1.2" />
      </g>
    </Base>
  );
}

export function IconVilla({ size = 24, ...props }: IconProps) {
  const uid = useId().replace(/:/g, "");
  return (
    <Base size={size} {...props}>
      <defs>
        <linearGradient id={`${uid}-g`} x1="12" y1="8" x2="36" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BBF7D0" />
          <stop offset="0.4" stopColor="#4ADE80" />
          <stop offset="1" stopColor="#166534" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${uid}-g)`}
        d="M24 8.5 8.5 21.2c-.5.4-.2 1.3.5 1.3H12v14.2c0 .7.5 1.3 1.2 1.3h8.1V28.5c0-.7.5-1.2 1.2-1.2h2.9c.7 0 1.2.5 1.2 1.2v9.5h8.1c.7 0 1.2-.6 1.2-1.3V22.5h3c.7 0 1-.9.5-1.3L24 8.5Z"
      />
    </Base>
  );
}

export function IconElectric({ size = 24, ...props }: IconProps) {
  const uid = useId().replace(/:/g, "");
  return (
    <Base size={size} {...props}>
      <defs>
        <linearGradient id={`${uid}-g`} x1="18" y1="6" x2="30" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BBF7D0" />
          <stop offset="0.45" stopColor="#4ADE80" />
          <stop offset="1" stopColor="#15803D" />
        </linearGradient>
        <filter id={`${uid}-glow`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="1.8" floodColor="#22C55E" floodOpacity="0.55" />
        </filter>
      </defs>
      <path
        filter={`url(#${uid}-glow)`}
        fill={`url(#${uid}-g)`}
        d="M27.8 6.5 14.2 25.2c-.5.7 0 1.7.8 1.7h7.1l-2.6 14.1c-.2 1.1 1.1 1.8 1.9.9l14.2-18.8c.5-.7 0-1.7-.8-1.7h-7.4l2.3-13.6c.2-1.1-1.1-1.9-1.9-1.3Z"
      />
    </Base>
  );
}

export function IconArrowDown({ size = 24, ...props }: IconProps) {
  const uid = useId().replace(/:/g, "");
  return (
    <Base size={size} {...props}>
      <defs>
        <linearGradient id={`${uid}-g`} x1="18" y1="10" x2="30" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#86EFAC" />
          <stop offset="1" stopColor="#16A34A" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="15" fill={`url(#${uid}-g)`} opacity="0.22" />
      <path
        d="M24 14v16.5M17.5 24.5 24 31l6.5-6.5"
        stroke="#4ADE80"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Base>
  );
}

export function IconArrowOut({ size = 24, ...props }: IconProps) {
  return (
    <Base size={size} {...props}>
      <path
        d="M18 30 30 18M20 18h10v10"
        stroke="#4ADE80"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Base>
  );
}

export function IconTrust({ size = 24, ...props }: IconProps) {
  const uid = useId().replace(/:/g, "");
  return (
    <Base size={size} {...props}>
      <defs>
        <linearGradient id={`${uid}-g`} x1="12" y1="8" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6EE7A8" />
          <stop offset="1" stopColor="#15803D" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="14" fill={`url(#${uid}-g)`} />
      <path
        d="M16.5 24.2 21.2 28.8 31.5 18.2"
        stroke="#ECFDF5"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Base>
  );
}

export function IconSystem({ size = 24, ...props }: IconProps) {
  const uid = useId().replace(/:/g, "");
  return (
    <Base size={size} {...props}>
      <defs>
        <linearGradient id={`${uid}-g`} x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#86EFAC" />
          <stop offset="1" stopColor="#166534" />
        </linearGradient>
      </defs>
      <rect x="9" y="11" width="30" height="22" rx="4" fill={`url(#${uid}-g)`} />
      <rect x="13" y="15" width="12" height="8" rx="1.5" fill="#ECFDF5" opacity="0.85" />
      <rect x="27" y="15" width="8" height="3" rx="1" fill="#BBF7D0" />
      <rect x="27" y="20" width="8" height="3" rx="1" fill="#BBF7D0" opacity="0.7" />
      <circle cx="16" cy="28" r="1.6" fill="#BBF7D0" />
      <circle cx="22" cy="28" r="1.6" fill="#BBF7D0" opacity="0.7" />
    </Base>
  );
}

export function IconFocus({ size = 24, ...props }: IconProps) {
  const uid = useId().replace(/:/g, "");
  return (
    <Base size={size} {...props}>
      <defs>
        <linearGradient id={`${uid}-g`} x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4ADE80" />
          <stop offset="1" stopColor="#166534" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="7" fill={`url(#${uid}-g)`} />
      <circle cx="24" cy="24" r="2.8" fill="#ECFDF5" />
      <path
        stroke="#4ADE80"
        strokeWidth="2.4"
        strokeLinecap="round"
        d="M24 10v4M24 34v4M10 24h4M34 24h4"
      />
    </Base>
  );
}

export function IconChat({ size = 24, ...props }: IconProps) {
  const uid = useId().replace(/:/g, "");
  return (
    <Base size={size} {...props}>
      <defs>
        <linearGradient id={`${uid}-g`} x1="10" y1="10" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#86EFAC" />
          <stop offset="1" stopColor="#15803D" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${uid}-g)`}
        d="M10 16.5c0-4.1 3.9-7.5 9.2-7.5h9.6c5.3 0 9.2 3.4 9.2 7.5v7.2c0 4.1-3.9 7.5-9.2 7.5h-4.1L18 39.2v-5.5c-4.7-.4-8-3.5-8-7.5V16.5Z"
      />
      <circle cx="20" cy="20.5" r="1.6" fill="#ECFDF5" />
      <circle cx="26" cy="20.5" r="1.6" fill="#ECFDF5" />
      <circle cx="32" cy="20.5" r="1.6" fill="#ECFDF5" />
    </Base>
  );
}
