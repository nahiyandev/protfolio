import React from "react";

export function Html5Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M71.4 460.6L32 16H480L440.6 460.6L256 512L71.4 460.6Z" fill="#E44D26"/>
      <path d="M256 472.4L404.9 431.1L438.4 56H256V472.4Z" fill="#F16529"/>
      <path d="M256 208.5H180.2L175 149.8H256V93.8H113.8L129.4 264.5H256V208.5ZM256 355.2L255.8 355.3L192.4 338.2L188.3 292.8H132L140.1 383.6L255.8 415.8L256 415.7V355.2Z" fill="#EBEBEB"/>
      <path d="M256 208.5V264.5H326.6L320 338.1L256 355.3V415.8L371.8 383.6L372.9 371.3L386 224.2L387.4 208.5H256ZM256 93.8V149.8H392.7L397.7 93.8H256Z" fill="white"/>
    </svg>
  );
}

export function Css3Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M71.4 460.6L32 16H480L440.6 460.6L256 512L71.4 460.6Z" fill="#1572B6"/>
      <path d="M256 472.4L404.9 431.1L438.4 56H256V472.4Z" fill="#33A9DC"/>
      <path d="M256 208.5H180.2L175 149.8H256V93.8H113.8L129.4 264.5H256V208.5ZM256 355.2L255.8 355.3L192.4 338.2L188.3 292.8H132L140.1 383.6L255.8 415.8L256 415.7V355.2Z" fill="#EBEBEB"/>
      <path d="M256 208.5V264.5H326.6L320 338.1L256 355.3V415.8L371.8 383.6L372.9 371.3L386 224.2L387.4 208.5H256ZM256 93.8V149.8H392.7L397.7 93.8H256Z" fill="white"/>
    </svg>
  );
}

export function JavaScriptLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" rx="64" fill="#F7DF1E"/>
      <path d="M136 348c9 16 23 27 47 27 24 0 39-12 39-29 0-20-16-28-44-40-40-17-66-39-66-85 0-42 32-74 82-74 36 0 62 14 78 44l-42 27c-9-16-20-23-36-23-17 0-28 11-28 25 0 18 11 25 38 37 47 20 73 41 73 89 0 51-40 78-93 78-52 0-85-26-99-63l52-33zM324 397l46-27c13 22 28 35 55 35 24 0 39-10 39-38V149h54v217c0 57-34 85-88 85-48 0-84-25-106-54z" fill="#000000"/>
    </svg>
  );
}

export function TypeScriptLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" rx="64" fill="#3178C6"/>
      <path d="M120 186h150v34h-55v156h-40V220h-55v-34zm172 121c9 13 22 23 44 23 21 0 34-10 34-24 0-16-14-23-39-33-35-14-58-32-58-70 0-35 27-61 71-61 31 0 53 11 67 36l-35 22c-8-13-17-19-32-19-15 0-24 9-24 20 0 14 10 20 33 30 40 17 63 34 63 73 0 42-34 65-80 65-44 0-72-21-84-51l40-21z" fill="#FFFFFF"/>
    </svg>
  );
}

export function ReactLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}

export function NextjsLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="90" cy="90" r="90" fill="#000000"/>
      <circle cx="90" cy="90" r="88" stroke="#333333" strokeWidth="2"/>
      <path d="M149.508 157.438L69.1412 54H54V125.968H67.4367V69.7563L138.014 161.439C142.062 160.279 145.922 158.946 149.508 157.438Z" fill="url(#next_paint0)"/>
      <path d="M115.658 54H129.095V125.968H115.658V54Z" fill="url(#next_paint1)"/>
      <defs>
        <linearGradient id="next_paint0" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="next_paint1" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ReactRouterLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="256" cy="120" r="48" fill="#F44250"/>
      <circle cx="140" cy="360" r="48" fill="#F44250"/>
      <circle cx="372" cy="360" r="48" fill="#F44250"/>
      <circle cx="256" cy="280" r="32" fill="#F44250" opacity="0.8"/>
      <path d="M236 156L160 324M276 156L352 324M180 360H332" stroke="#F44250" strokeWidth="24" strokeLinecap="round"/>
    </svg>
  );
}

export function TailwindLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.6C13.6 15.2 17.6 12 24 12C32 12 33.6 18.4 37.6 20C40.2667 21.0667 42.4 20 44 16.8C42.4 23.2 38.4 26.4 32 26.4C24 26.4 22.4 20 18.4 18.4C15.7333 17.3333 13.6 18.4 12 21.6ZM4 33.6C5.6 27.2 9.6 24 16 24C24 24 25.6 30.4 29.6 32C32.2667 33.0667 34.4 32 36 28.8C34.4 35.2 30.4 38.4 24 38.4C16 38.4 14.4 32 10.4 30.4C7.73333 29.3333 5.6 30.4 4 33.6Z" fill="#38BDF8"/>
    </svg>
  );
}

export function ExpressLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="28" fill="#1e293b"/>
      <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontFamily="monospace" fontWeight="900" fontSize="42">
        ex
      </text>
    </svg>
  );
}

export function MongoDbLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C11.5 2 7 8 7 14C7 18 9.5 21.5 11.5 22.8C11.7 22.9 11.8 23 12 23C12.2 23 12.3 22.9 12.5 22.8C14.5 21.5 17 18 17 14C17 8 12.5 2 12 2Z" fill="#47A248"/>
      <path d="M12 2V23C12.2 23 12.3 22.9 12.5 22.8C14.5 21.5 17 18 17 14C17 8 12.5 2 12 2Z" fill="#499D4A"/>
      <path d="M12 2.5C11.7 5.2 11.5 8 11.5 12C11.5 16 11.8 19.5 12 22.5V2.5Z" fill="#FFFFFF" opacity="0.3"/>
    </svg>
  );
}

export function NodejsLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 289" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M128 0L256 74v148l-128 74L0 222V74L128 0z" fill="#339933"/>
      <path d="M128 20L239 84v128l-111 64L17 212V84L128 20z" fill="#026E00"/>
      <path d="M128 55c-40 0-73 33-73 73s33 73 73 73 73-33 73-73-33-73-73-73zm0 115c-23 0-42-19-42-42s19-42 42-42 42 19 42 42-19 42-42 42z" fill="#FFFFFF"/>
    </svg>
  );
}

export function PostgresLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="28" fill="#336791"/>
      <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="36">
        SQL
      </text>
    </svg>
  );
}

export function RedisLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#DC382D"/>
      <path d="M6 8L12 5L18 8L12 11L6 8Z" fill="#FFFFFF"/>
      <path d="M6 12L12 15L18 12M6 16L12 19L18 16" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function KafkaLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#231F20"/>
      <circle cx="8" cy="8" r="2.5" fill="#FFFFFF"/>
      <circle cx="16" cy="8" r="2.5" fill="#FFFFFF"/>
      <circle cx="12" cy="16" r="2.5" fill="#FFFFFF"/>
      <path d="M9.8 9.2L14.2 9.2M9.4 10.2L11 14M14.6 10.2L13 14" stroke="#FFFFFF" strokeWidth="1.2"/>
    </svg>
  );
}

export function DockerLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#2496ED"/>
      <rect x="7" y="10" width="2" height="2" fill="#FFFFFF"/>
      <rect x="10" y="10" width="2" height="2" fill="#FFFFFF"/>
      <rect x="13" y="10" width="2" height="2" fill="#FFFFFF"/>
      <rect x="10" y="7" width="2" height="2" fill="#FFFFFF"/>
      <rect x="13" y="7" width="2" height="2" fill="#FFFFFF"/>
      <path d="M4 14C5 14 6 15 7.5 15C9 15 10 14 11.5 14C13 14 14 15 15.5 15C17 15 18 14 19 14.2C19.5 15.5 18.5 17 16 17C10 17 5 16 4 14Z" fill="#FFFFFF"/>
    </svg>
  );
}

export function KubernetesLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#326CE5"/>
      <circle cx="12" cy="12" r="5" stroke="#FFFFFF" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="12" r="2" fill="#FFFFFF"/>
      <path d="M12 4V7M12 17V20M4 12H7M17 12H20" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function AwsLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#232F3E"/>
      <path d="M6 14C10 17 14 17 18 14" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16.5 13L18.5 14.5L16.5 16" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="50%" y="42%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="bold" fontSize="7">
        AWS
      </text>
    </svg>
  );
}

export function GitLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#F05032"/>
      <circle cx="9" cy="8" r="2" fill="#FFFFFF"/>
      <circle cx="9" cy="16" r="2" fill="#FFFFFF"/>
      <circle cx="15" cy="12" r="2" fill="#FFFFFF"/>
      <path d="M9 10V14M9 11L14 12" stroke="#FFFFFF" strokeWidth="1.5"/>
    </svg>
  );
}

export function NginxLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#009639"/>
      <path d="M7 17V7L17 17V7" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function PrometheusLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#E6522C"/>
      <circle cx="12" cy="12" r="6" stroke="#FFFFFF" strokeWidth="1.5" fill="none"/>
      <path d="M12 8V12L15 14" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

