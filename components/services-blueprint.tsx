import "../app/services/services-blueprint.css";

/*
 * Decorative MEP / CAD linework for the Services page.
 * Pure SVG + CSS: no client JS. Hidden from assistive tech.
 * Every drawn path uses pathLength="1" so the draw-in keyframes can share one dash value.
 */

const flanges = [1430, 1340, 1230, 1150];

export function ServicesHeroBlueprint() {
  return (
    <div className="bp-hero" aria-hidden="true">
      <div className="bp-grid" />
      <svg className="bp-svg" viewBox="0 0 1440 720" preserveAspectRatio="xMaxYMid meet" focusable="false">
        <defs>
          <marker id="bp-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0 1 L9 5 L0 9" fill="none" stroke="currentColor" strokeWidth="1.4" />
          </marker>
        </defs>

        <g transform="translate(216 54) scale(.85)">
        {/* Structural column grid */}
        <g className="bp-colgrid">
          {[
            ["A", 820],
            ["B", 1060],
            ["C", 1300],
          ].map(([label, x], i) => (
            <g key={label} style={{ ["--d" as string]: `${0.15 + i * 0.12}s` }}>
              <path className="bp-draw bp-faint" pathLength={1} d={`M${x} 66 V880`} />
              <circle className="bp-bubble" cx={x} cy={46} r={15} />
              <text className="bp-bubble-text" x={x} y={51}>{label}</text>
            </g>
          ))}
          {[
            ["1", 290],
            ["2", 520],
          ].map(([label, y], i) => (
            <g key={label} style={{ ["--d" as string]: `${0.4 + i * 0.12}s` }}>
              <path className="bp-draw bp-faint" pathLength={1} d={`M700 ${y} H1440`} />
              <circle className="bp-bubble" cx={680} cy={y} r={15} />
              <text className="bp-bubble-text" x={680} y={Number(y) + 5}>{label}</text>
            </g>
          ))}
        </g>

        {/* Supply air main: double-line duct with elbows */}
        <g className="bp-duct">
          <path className="bp-draw" style={{ ["--d" as string]: "0.5s", ["--t" as string]: "2.2s" }} pathLength={1} d="M1500 152 H1062 V412 H770" />
          <path className="bp-draw" style={{ ["--d" as string]: "0.6s", ["--t" as string]: "2.2s" }} pathLength={1} d="M1500 188 H1098 V448 H770" />
          <path className="bp-draw" style={{ ["--d" as string]: "2.5s", ["--t" as string]: ".3s" }} pathLength={1} d="M770 412 V448" />
          {flanges.map((x, i) => (
            <path key={x} className="bp-draw bp-thin" style={{ ["--d" as string]: `${1 + i * 0.12}s`, ["--t" as string]: ".3s" }} pathLength={1} d={`M${x} 152 V188`} />
          ))}
          <path className="bp-draw bp-thin" style={{ ["--d" as string]: "2s", ["--t" as string]: ".3s" }} pathLength={1} d="M1062 300 H1098" />
          <path className="bp-draw bp-thin" style={{ ["--d" as string]: "2.3s", ["--t" as string]: ".3s" }} pathLength={1} d="M950 412 V448" />

          {/* Branch to ceiling diffuser */}
          <path className="bp-draw" style={{ ["--d" as string]: "2.2s", ["--t" as string]: ".8s" }} pathLength={1} d="M888 448 V560 M912 448 V560" />
          <g className="bp-fade" style={{ ["--d" as string]: "2.8s" }}>
            <rect className="bp-stroke" x={870} y={560} width={60} height={60} />
            <rect className="bp-stroke bp-thin" x={882} y={572} width={36} height={36} />
            <path className="bp-stroke bp-thin" d="M870 560 L930 620 M930 560 L870 620" />
          </g>
          <g className="bp-fade" style={{ ["--d" as string]: "2.9s" }}>
            <rect className="bp-stroke" x={706} y={400} width={60} height={60} />
            <rect className="bp-stroke bp-thin" x={718} y={412} width={36} height={36} />
            <path className="bp-stroke bp-thin" d="M706 400 L766 460 M766 400 L706 460" />
          </g>

          {/* Airflow: dashes travelling along the duct centreline */}
          <path className="bp-airflow" d="M1500 170 H1080 V430 H780" />
          <path className="bp-airflow bp-airflow-branch" d="M900 430 V560" />
        </g>

        {/* Inline fan */}
        <g className="bp-fade" style={{ ["--d" as string]: "1.6s" }}>
          <circle className="bp-stroke bp-fan-ring" cx={1250} cy={170} r={30} />
          <g className="bp-fan">
            <path className="bp-stroke bp-thin" d="M1250 170 C1258 156 1270 152 1274 160 Z M1250 170 C1264 178 1268 190 1260 194 Z M1250 170 C1242 184 1230 188 1226 180 Z M1250 170 C1236 162 1232 150 1240 146 Z" />
          </g>
          <text className="bp-label" x={1250} y={226}>EF-01</text>
        </g>

        {/* Chilled water supply and return */}
        <g className="bp-pipes">
          <path className="bp-draw bp-pipe-s" style={{ ["--d" as string]: "1.2s", ["--t" as string]: "2s" }} pathLength={1} d="M1500 590 H1210 V660 H960" />
          <path className="bp-draw bp-pipe-r" style={{ ["--d" as string]: "1.4s", ["--t" as string]: "2s" }} pathLength={1} d="M1500 606 H1226 V676 H960" />
          <g className="bp-fade" style={{ ["--d" as string]: "2.6s" }}>
            <path className="bp-valve" d="M1100 650 L1100 670 L1120 660 Z M1140 650 L1140 670 L1120 660 Z" />
            <path className="bp-stroke bp-thin" d="M1120 660 V640 M1112 640 H1128" />
            <circle className="bp-node" cx={1210} cy={590} r={3.5} />
            <circle className="bp-node" cx={1226} cy={676} r={3.5} />
            <text className="bp-label bp-label-left" x={1330} y={580}>CHW-S Ø80</text>
            <text className="bp-label bp-label-left" x={1330} y={626}>CHW-R Ø80</text>
          </g>
          <path className="bp-pipeflow" d="M1500 590 H1210 V660 H960" />
        </g>

        {/* Dimension lines */}
        <g className="bp-dims">
          <path className="bp-draw bp-thin" style={{ ["--d" as string]: "2.7s", ["--t" as string]: ".4s" }} pathLength={1} d="M1098 146 V100 M1420 146 V100" />
          <path className="bp-draw bp-dim" style={{ ["--d" as string]: "3s", ["--t" as string]: ".7s" }} pathLength={1} d="M1098 110 H1420" markerStart="url(#bp-arrow)" markerEnd="url(#bp-arrow)" />
          <text className="bp-fade bp-dim-text" style={{ ["--d" as string]: "3.5s" }} x={1259} y={102}>3600</text>

          <path className="bp-draw bp-thin" style={{ ["--d" as string]: "2.9s", ["--t" as string]: ".4s" }} pathLength={1} d="M1056 188 H1000 M1056 412 H1000" />
          <path className="bp-draw bp-dim" style={{ ["--d" as string]: "3.2s", ["--t" as string]: ".7s" }} pathLength={1} d="M1012 188 V412" markerStart="url(#bp-arrow)" markerEnd="url(#bp-arrow)" />
          <text className="bp-fade bp-dim-text" style={{ ["--d" as string]: "3.6s" }} x={0} y={0} transform="translate(1003 300) rotate(-90)">2250</text>

          <g className="bp-fade" style={{ ["--d" as string]: "3.4s" }}>
            <path className="bp-stroke bp-thin" d="M1150 188 L1180 236 H1290" />
            <text className="bp-label bp-label-left" x={1186} y={252}>SA 600×400</text>
            <path className="bp-stroke bp-thin" d="M900 590 L860 650 H760" />
            <text className="bp-label bp-label-right" x={850} y={666}>CD-02 · 450 L/s</text>
          </g>
        </g>

        </g>

        {/* Title block */}
        <g className="bp-fade bp-titleblock" style={{ ["--d" as string]: "3.8s" }}>
          <rect className="bp-stroke bp-thin" x={1236} y={688} width={190} height={26} />
          <path className="bp-stroke bp-thin" d="M1316 688 V714" />
          <text className="bp-label bp-label-left" x={1244} y={705}>M-201</text>
          <text className="bp-label bp-label-left" x={1324} y={705}>HVAC · 1:100</text>
        </g>

        {/* Plotter sweep */}
        <path className="bp-scan" d="M0 0 V720" />
      </svg>
    </div>
  );
}

export function ServicesCalloutBlueprint() {
  return (
    <div className="bp-callout" aria-hidden="true">
      <svg viewBox="0 0 1440 420" preserveAspectRatio="xMaxYMid slice" focusable="false">
        <path className="bp-callout-line" d="M1010 -10 V150 H1250 V440" />
        <path className="bp-callout-line" d="M1030 -10 V130 H1270 V440" />
        <path className="bp-callout-line" d="M1330 -10 V270 H1460" />
        <path className="bp-callout-line" d="M1346 -10 V254 H1460" />
        <path className="bp-callout-flow" d="M1020 -10 V140 H1260 V440" />
        <path className="bp-callout-flow bp-callout-flow-b" d="M1338 -10 V262 H1460" />
        <circle className="bp-callout-line" cx={1260} cy={310} r={22} />
        <path className="bp-callout-line" d="M1080 150 V196 M1250 150 V196 M1080 186 H1250" />
      </svg>
    </div>
  );
}
