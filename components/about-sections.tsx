import type { ReactNode } from "react";

/* Two-tone line icons: ink strokes with a McD red accent. 48×48 viewBox. */
const ink = "#1d1d1b";
const red = "#c83d32";
const tint = "#f6dcd8";

function Icon({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width="48"
      height="48"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      {children}
    </svg>
  );
}

const icons = {
  cost: (
    <Icon>
      <ellipse cx="18" cy="14" rx="10" ry="4" fill={tint} stroke={ink} />
      <path d="M8 14v6c0 2.2 4.5 4 10 4s10-1.8 10-4v-6" stroke={ink} />
      <path d="M8 20v6c0 2.2 4.5 4 10 4s10-1.8 10-4v-6" stroke={ink} />
      <path d="M8 26v6c0 2.2 4.5 4 10 4s10-1.8 10-4v-6" stroke={ink} />
      <path d="M37 12v22" stroke={red} strokeWidth="2.2" />
      <path d="M31.5 28.5L37 34l5.5-5.5" stroke={red} strokeWidth="2.2" />
    </Icon>
  ),
  energy: (
    <Icon>
      <circle cx="24" cy="24" r="17" fill={tint} stroke={ink} />
      <path d="M26.5 10L15 26.5h8.5L21 38l12-17h-8.5z" fill={red} stroke={red} strokeWidth="1.4" />
    </Icon>
  ),
  water: (
    <Icon>
      <path d="M24 6c6.5 8.2 11 14.6 11 20.5a11 11 0 0 1-22 0C13 20.6 17.5 14.2 24 6z" fill={tint} stroke={ink} />
      <path d="M15.5 29c2.6-2 5.2-2 8.5 0s5.9 2 8.5 0" stroke={red} strokeWidth="2.2" />
      <path d="M19 22.5c1.5-3 3-5.2 5-7.8" stroke="#fff" strokeWidth="2.2" />
    </Icon>
  ),
  carbon: (
    <Icon>
      <path d="M14 30a9 9 0 0 1 1.5-17.9A11 11 0 0 1 36 15.5 7.5 7.5 0 0 1 35 30z" fill={tint} stroke={ink} />
      <path d="M24 34v9M19.5 38.5L24 43l4.5-4.5" stroke={red} strokeWidth="2.2" />
      <path d="M19 24c0-4.5 3-7.5 9-8 0 5.5-3 8.2-7.5 8.2" stroke={red} strokeWidth="1.8" />
      <path d="M19 24.2l4.5-4.5" stroke={red} strokeWidth="1.6" />
    </Icon>
  ),
  netPositive: (
    <Icon>
      <path d="M10 40V20l12-8 12 8v20" stroke="#f8f8f6" />
      <path d="M17 40v-9h10v9" stroke="#f8f8f6" />
      <path d="M6 40h36" stroke="#f8f8f6" />
      <circle cx="37" cy="11" r="7" fill={red} stroke={red} />
      <path d="M37 7.5v7M33.5 11h7" stroke="#fff" strokeWidth="2" />
    </Icon>
  ),
  perspective: (
    <Icon>
      <circle cx="24" cy="24" r="17" fill={tint} stroke={ink} />
      <path d="M30 18l-3.6 8.4L18 30l3.6-8.4z" fill={red} stroke={red} strokeWidth="1.4" />
      <circle cx="24" cy="24" r="1.6" fill="#fff" stroke="none" />
      <path d="M24 5v4M24 39v4M5 24h4M39 24h4" stroke={ink} />
    </Icon>
  ),
  experience: (
    <Icon>
      <circle cx="17" cy="17" r="5.5" fill={tint} stroke={ink} />
      <circle cx="31" cy="17" r="5.5" fill={tint} stroke={ink} />
      <path d="M7 37c0-6 4.5-10 10-10s10 4 10 10" stroke={ink} />
      <path d="M21 37c0-6 4.5-10 10-10s10 4 10 10" stroke={ink} />
      <path d="M36 6l1.6 3.3 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5z" fill={red} stroke={red} strokeWidth="1" />
    </Icon>
  ),
  tools: (
    <Icon>
      <rect x="6" y="9" width="36" height="26" rx="3" fill={tint} stroke={ink} />
      <path d="M17 41h14M24 35v6" stroke={ink} />
      <path d="M19 18l-5 4.5 5 4.5M29 18l5 4.5-5 4.5" stroke={red} strokeWidth="2.2" />
      <path d="M26 16.5l-4 12" stroke={ink} />
    </Icon>
  ),
  efficiency: (
    <Icon>
      <path d="M7 32a17 17 0 0 1 34 0" fill={tint} stroke={ink} />
      <path d="M7 32h34" stroke={ink} />
      <path d="M12 23l2.5 1.6M24 15v3M36 23l-2.5 1.6" stroke={ink} />
      <path d="M24 32l9-10" stroke={red} strokeWidth="2.4" />
      <circle cx="24" cy="32" r="2.6" fill={red} stroke={red} />
      <path d="M17 39c3-2.4 6-2.4 7 0s5 2.4 7 0" stroke={red} strokeWidth="1.6" />
    </Icon>
  ),
  innovate: (
    <Icon>
      <path d="M17 29a11 11 0 1 1 14 0c-1.6 1.3-2.5 3-2.5 5h-9c0-2-.9-3.7-2.5-5z" fill={tint} stroke={ink} />
      <path d="M19.5 38h9M21 42h6" stroke={ink} />
      <path d="M21 25l3-6 3 6" stroke={red} strokeWidth="2.2" />
      <path d="M24 19v-2" stroke={red} strokeWidth="2.2" />
      <path d="M8 10l3 2M40 10l-3 2M24 3v3" stroke={red} strokeWidth="2" />
    </Icon>
  ),
};

const metrics = [
  {
    icon: icons.cost,
    stat: "30–50%",
    label: "Lower opex · 3% capex",
    title: "Reduce Capex by 3% & Opex by 30–50%",
    copy: "Integrated MEP rightsizing and lean infrastructure design that cuts both upfront budget and recurring utility expenditure.",
  },
  {
    icon: icons.energy,
    stat: "30–50%",
    label: "Energy savings",
    title: "Achieve Energy Savings by 30–50%",
    copy: "Advanced computational energy modeling, passive cooling, and high-COP mechanical systems that surpass ASHRAE benchmarks.",
  },
  {
    icon: icons.water,
    stat: "48%",
    label: "Water savings",
    title: "Achieve Water Savings by 48%",
    copy: "Closed-loop water balance systems, zero-liquid discharge engineering, and innovative rainwater catchment networks.",
  },
  {
    icon: icons.carbon,
    stat: "35%",
    label: "Carbon savings",
    title: "Carbon Emission Savings by 35%",
    copy: "Lifecycle carbon assessments targeting embodied construction emissions and low-carbon operational footprints.",
  },
];

export function AboutOutcomes() {
  return (
    <section className="about-outcomes-v2 page-shell" aria-labelledby="about-outcomes-title">
      <div className="ao-head">
        <div>
          <p className="eyebrow">Measurable outcomes</p>
          <h2 id="about-outcomes-title">What can we do for you</h2>
        </div>
        <p>
          Delivering quantifiable, verified performance improvements that enhance long-term building viability while
          minimizing environmental footprint.
        </p>
      </div>

      <div className="ao-layout">
        <article className="ao-feature">
          <div className="ao-feature-top">
            <span className="ao-feature-tag">The goal</span>
            <span className="ao-feature-icon">{icons.netPositive}</span>
          </div>
          <div className="ao-feature-body">
            <span className="ao-feature-stat">Net +</span>
            <h3>Net-Positive Energy, Net-Positive Water and Carbon-Neutral Buildings</h3>
            <p>
              Transforming real estate assets into self-sufficient, regenerative ecosystems that generate surplus energy
              and clean water.
            </p>
          </div>
          <a className="ao-feature-link" href="/contact/">
            Start a net-positive project <span aria-hidden="true">→</span>
          </a>
        </article>

        <div className="ao-metrics">
          {metrics.map((m) => (
            <article className="ao-metric" key={m.title}>
              <div className="ao-metric-top">
                <span className="ao-metric-stat">{m.stat}</span>
                <span className="ao-metric-icon">{m.icon}</span>
              </div>
              <span className="ao-metric-label">{m.label}</span>
              <h3>{m.title}</h3>
              <p>{m.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: icons.perspective, title: "Fresh perspective", copy: "We see every project from a fresh perspective." },
  { icon: icons.experience, title: "Deep experience", copy: "100+ years of combined experience to deliver excellence." },
  { icon: icons.tools, title: "In-house tools & tech", copy: "Unique solutions via in-house built tools and technology." },
  { icon: icons.efficiency, title: "Sustainable efficiency", copy: "Maximize efficiency using sustainable engineering." },
  { icon: icons.innovate, title: "Relentless innovation", copy: "A relentless drive to learn and innovate." },
];

export function AboutApproach() {
  return (
    <section className="about-approach-v2" aria-labelledby="about-approach-title">
      <div className="page-shell">
        <div className="ap-head">
          <div className="ap-head-title">
            <span className="red-rule" aria-hidden="true" />
            <div>
              <p className="eyebrow">Methodology</p>
              <h2 id="about-approach-title">Our Approach</h2>
            </div>
          </div>
          <p>
            Our holistic engineering methodology unites physics-driven building simulation, integrated MEP engineering,
            and post-occupancy performance monitoring into an unbroken continuum.
          </p>
        </div>

        <ol className="ap-steps">
          {steps.map((s, i) => (
            <li className="ap-step" key={s.title}>
              <div className="ap-node">
                <span className="ap-num">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="ap-card">
                <span className="ap-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
