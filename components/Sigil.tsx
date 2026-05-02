// SVG sigils — geometría grimoire para el branding

const r3 = (n: number) => Number(n.toFixed(3));

export function HeroSigil({ size = 540 }: { size?: number }) {
  const cx = 250;
  const cy = 250;
  const triR = 130;
  const upTri = `${cx},${cy - triR} ${cx + triR * 0.866},${cy + triR * 0.5} ${cx - triR * 0.866},${cy + triR * 0.5}`;
  const downTri = `${cx},${cy + triR} ${cx + triR * 0.866},${cy - triR * 0.5} ${cx - triR * 0.866},${cy - triR * 0.5}`;

  return (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      className="pulse-glow"
      aria-hidden="true"
    >
      <defs>
        <path
          id="textRingOuter"
          d="M 250,250 m -228,0 a 228,228 0 1,1 456,0 a 228,228 0 1,1 -456,0"
        />
        <radialGradient id="centerGlow">
          <stop offset="0%" stopColor="#c9a961" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#c9a961" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#c9a961" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Resplandor central */}
      <circle cx={cx} cy={cy} r={120} fill="url(#centerGlow)" />

      {/* Anillo exterior con texto rotante */}
      <g className="rotate-slow" style={{ transformOrigin: "250px 250px" }}>
        <circle
          cx={cx}
          cy={cy}
          r={240}
          fill="none"
          stroke="#c9a961"
          strokeOpacity="0.18"
          strokeWidth="0.5"
        />
        <circle
          cx={cx}
          cy={cy}
          r={228}
          fill="none"
          stroke="#c9a961"
          strokeOpacity="0.4"
          strokeWidth="0.5"
        />
        <text
          fontSize="9.5"
          fill="#c9a961"
          letterSpacing="6"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <textPath href="#textRingOuter" startOffset="0">
            AZAZEL · DEV · STUDIO · 2026 · SOFTWARE A MEDIDA · ERP · WEB ·
            SISTEMAS PERSONALIZADOS ·
          </textPath>
        </text>
      </g>

      {/* Marcas de brújula */}
      <g stroke="#c9a961" strokeOpacity="0.55">
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * 360) / 24;
          const isCardinal = i % 6 === 0;
          const r1 = isCardinal ? 198 : 212;
          const r2 = 220;
          const rad = (a * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={r3(cx + r1 * Math.cos(rad))}
              y1={r3(cy + r1 * Math.sin(rad))}
              x2={r3(cx + r2 * Math.cos(rad))}
              y2={r3(cy + r2 * Math.sin(rad))}
              strokeWidth={isCardinal ? 1.2 : 0.5}
            />
          );
        })}
      </g>

      {/* Anillo interior contra-rotante */}
      <g
        className="rotate-slow-rev"
        style={{ transformOrigin: "250px 250px" }}
      >
        <circle
          cx={cx}
          cy={cy}
          r={195}
          fill="none"
          stroke="#c9a961"
          strokeOpacity="0.32"
          strokeWidth="0.5"
        />
        <circle
          cx={cx}
          cy={cy}
          r={180}
          fill="none"
          stroke="#c9a961"
          strokeOpacity="0.5"
          strokeWidth="0.3"
        />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * 360) / 8;
          const rad = (a * Math.PI) / 180;
          return (
            <circle
              key={i}
              cx={r3(cx + 187 * Math.cos(rad))}
              cy={r3(cy + 187 * Math.sin(rad))}
              r={1.6}
              fill="#c9a961"
            />
          );
        })}
      </g>

      {/* Hexagrama */}
      <g stroke="#c9a961" strokeOpacity="0.7" fill="none" strokeWidth="0.5">
        <polygon points={upTri} />
        <polygon points={downTri} />
        <circle cx={cx} cy={cy} r={triR} strokeOpacity="0.3" />
      </g>

      {/* Anillos internos */}
      <circle
        cx={cx}
        cy={cy}
        r={70}
        fill="none"
        stroke="#c9a961"
        strokeOpacity="0.6"
        strokeWidth="0.5"
      />
      <circle
        cx={cx}
        cy={cy}
        r={60}
        fill="none"
        stroke="#c9a961"
        strokeOpacity="0.3"
        strokeWidth="0.3"
      />

      {/* Glifo central — "A" abstracta */}
      <g stroke="#e6c878" strokeWidth="1.4" fill="none">
        <polygon
          points={`${cx},${cy - 38} ${cx + 30},${cy + 22} ${cx - 30},${cy + 22}`}
        />
        <line x1={cx - 18} y1={cy + 4} x2={cx + 18} y2={cy + 4} />
        <circle cx={cx} cy={cy - 38} r={2.2} fill="#e6c878" stroke="none" />
      </g>

      {/* Cruz tenue de fondo */}
      <g stroke="#c9a961" strokeOpacity="0.18" strokeWidth="0.3">
        <line
          x1={cx - 250}
          y1={cy}
          x2={cx + 250}
          y2={cy}
          strokeDasharray="2 6"
        />
        <line
          x1={cx}
          y1={cy - 250}
          x2={cx}
          y2={cy + 250}
          strokeDasharray="2 6"
        />
      </g>
    </svg>
  );
}

// — sigilos para tarjetas de servicios

export function SigilDatabase({ size = 100 }: { size?: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
      <g stroke="currentColor" fill="none" strokeWidth="0.6">
        <circle cx="50" cy="50" r="45" strokeOpacity="0.35" />
        <circle cx="50" cy="50" r="38" strokeOpacity="0.6" />
        <rect x="30" y="30" width="40" height="40" strokeOpacity="0.95" />
        <line x1="30" y1="43.3" x2="70" y2="43.3" strokeOpacity="0.5" />
        <line x1="30" y1="56.6" x2="70" y2="56.6" strokeOpacity="0.5" />
        <line x1="43.3" y1="30" x2="43.3" y2="70" strokeOpacity="0.5" />
        <line x1="56.6" y1="30" x2="56.6" y2="70" strokeOpacity="0.5" />
        <circle cx="50" cy="50" r="2" fill="currentColor" />
        <line x1="50" y1="3" x2="50" y2="13" strokeWidth="0.8" />
        <line x1="50" y1="87" x2="50" y2="97" strokeWidth="0.8" />
        <line x1="3" y1="50" x2="13" y2="50" strokeWidth="0.8" />
        <line x1="87" y1="50" x2="97" y2="50" strokeWidth="0.8" />
      </g>
    </svg>
  );
}

export function SigilNetwork({ size = 100 }: { size?: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
      <g stroke="currentColor" fill="none" strokeWidth="0.6">
        <circle cx="50" cy="50" r="45" strokeOpacity="0.35" />
        <circle cx="50" cy="50" r="38" strokeOpacity="0.6" />
        <polygon points="50,22 76,66 24,66" strokeOpacity="0.95" />
        <line x1="50" y1="22" x2="50" y2="50" strokeOpacity="0.55" />
        <line x1="76" y1="66" x2="50" y2="50" strokeOpacity="0.55" />
        <line x1="24" y1="66" x2="50" y2="50" strokeOpacity="0.55" />
        <circle cx="50" cy="22" r="3" fill="currentColor" />
        <circle cx="76" cy="66" r="3" fill="currentColor" />
        <circle cx="24" cy="66" r="3" fill="currentColor" />
        <circle cx="50" cy="50" r="2.5" fill="currentColor" />
        <line x1="50" y1="3" x2="50" y2="13" strokeWidth="0.8" />
        <line x1="50" y1="87" x2="50" y2="97" strokeWidth="0.8" />
        <line x1="3" y1="50" x2="13" y2="50" strokeWidth="0.8" />
        <line x1="87" y1="50" x2="97" y2="50" strokeWidth="0.8" />
      </g>
    </svg>
  );
}

export function SigilVessel({ size = 100 }: { size?: number }) {
  const points = Array.from({ length: 6 })
    .map((_, i) => {
      const a = ((i * 60 - 30) * Math.PI) / 180;
      return `${50 + 28 * Math.cos(a)},${50 + 28 * Math.sin(a)}`;
    })
    .join(" ");
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
      <g stroke="currentColor" fill="none" strokeWidth="0.6">
        <circle cx="50" cy="50" r="45" strokeOpacity="0.35" />
        <circle cx="50" cy="50" r="38" strokeOpacity="0.6" />
        <polygon points={points} strokeOpacity="0.95" />
        <circle cx="50" cy="50" r="14" strokeOpacity="0.7" />
        <circle cx="50" cy="50" r="6" strokeOpacity="0.5" />
        <circle cx="50" cy="50" r="2" fill="currentColor" />
        <line x1="50" y1="3" x2="50" y2="13" strokeWidth="0.8" />
        <line x1="50" y1="87" x2="50" y2="97" strokeWidth="0.8" />
        <line x1="3" y1="50" x2="13" y2="50" strokeWidth="0.8" />
        <line x1="87" y1="50" x2="97" y2="50" strokeWidth="0.8" />
      </g>
    </svg>
  );
}

export function SigilMark({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
      <g stroke="currentColor" fill="none" strokeWidth="3">
        <circle cx="50" cy="50" r="42" />
        <polygon points="50,24 74,64 26,64" />
        <line x1="38" y1="54" x2="62" y2="54" />
      </g>
    </svg>
  );
}
