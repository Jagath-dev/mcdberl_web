# Design QA — McD BERL homepage

source visual truth: live capture of `https://mcdberl.com/` in the Codex in-app browser (desktop and mobile states)
implementation screenshot: browser-rendered capture of `http://localhost:3001/` in Codex in-app browser tab 3
viewport: desktop 1440 × 900 CSS px and mobile 390 × 844 CSS px; device scale was not overridden
state: homepage at top of page; mobile menu open/close and carousel next states also tested

## Comparison evidence

- Full view: desktop implementation preserves the source hierarchy—sticky white navigation, full-bleed darkened hero, serif/red identity, editorial spacing, project proof, testimonial block, careers image, partners, and footer.
- Mobile implementation preserves the source's stacked flow and collapsible navigation at 390 × 844.
- Focused regions: hero/header, project carousel, testimonial carousel, and footer were checked because these contain the source's strongest visual and interaction contracts.

## Required fidelity surfaces

- Fonts and typography: source Work Sans/Jost/serif contrast is retained with locally bundled Work Sans and Jost files plus a restrained Georgia editorial fallback.
- Spacing and layout rhythm: source proportions are retained, with a max-width editorial grid, generous section rhythm, hairline dividers, and a compact sticky header.
- Colors and visual tokens: source red, paper-white, ink, and neutral line tokens are carried into CSS variables; hero/careers overlays preserve readable contrast.
- Image quality and asset fidelity: observed source project, logo, partner, and background assets were bundled locally. The source hero video could not be bundled, so the closest captured architectural image is used as the self-contained fallback.
- Copy and content: homepage headings, project names/locations, testimonial authors/organizations, partner names, social destinations, and footer copy were extracted from the live DOM.

## Findings

No actionable P0/P1/P2 findings remain after the comparison pass. The hero media differs from the live moving video because the source video endpoint did not bundle successfully; this is documented and the fallback remains on-brand, local, and stable.

## Primary interactions tested

- Mobile menu toggles between collapsed and expanded states with an accessible name and `aria-expanded`.
- Project next control advances from Bharatiya City School to Infosys Nagpur.
- Testimonial next control advances from Dr. B. Ramakrishna Rao to Guruprakash Shastry.
- Header navigation scrolls to the matching section IDs.

## Browser diagnostics

- Production build: passed (`npm run build`).
- Browser console: no runtime errors; only a non-blocking Next.js LCP optimization warning was observed.

## Comparison history

- Initial capture: source and implementation were compared at desktop and mobile. The only material difference was unavailable hero video media; no P0/P1/P2 layout or interaction mismatch was found.
- Final capture: mobile menu and both carousel next states were verified; no new P0/P1/P2 issues.

## Follow-up polish

- If the original hero MP4 becomes available, replace the fallback image in `app/page.tsx` with a local `<video>` source while retaining the current image poster.

final result: passed
