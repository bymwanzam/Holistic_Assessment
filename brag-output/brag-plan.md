# Brag Plan: GHS Holistic Assessment

## What is this app?
A DHIS2 app that runs the Ghana Health Service's annual holistic assessment:
each region and district scores itself on 94 (district: 93) indicators across
three objectives, a peer reviews it, and seven reports come out the other end.
The impressive part is that its scoring engine reproduces the published Excel
workbook to the ninth decimal place.

## The angle
Quiet confidence. The assessment used to be a workbook; now it's a working app
that pulls its figures from DHIS2, scores every row the way the workbook does,
and gets exactly the same answer. The video shows real rows, the real score
chips and the real Upper East 2025 numbers from the reconciliation fixture, then
lets the matching numbers make the claim. No adjectives, just proof.

## Hook (first 2-3 seconds)
Three short lines slam in on a light canvas, left-anchored, while a grid of real
indicator codes (1.1 … 3.34) assembles on the right in the three objective
colours:

> 94 indicators.
> Three objectives.
> One score.

## Key moments (the middle)
- The Regional Assessment screen, Objective 2 tab: a cursor clicks
  **Fetch DHIS2 data**, current-year values fill the teal DHIS2 cells, and the
  outcome chips pop in one by one: +2, +1, −1, +1, +2.
- The summary lands: **Overall performance 3.72 · Moderately Performing**.
- The proof: workbook against app for Upper East 2025, all three objectives,
  0.625195990 / 0.598689801 / 0.603242148, identical in both columns, then
  **Reproduces the workbook exactly.**

## Outro / punchline
The brand mark's three objective bars draw in, **GHS Holistic Assessment**
lands, then "Assessment, peer review and reporting on DHIS2." A small credit
line: "Built by Bigvalues IT Systems for the Ghana Health Service."

## User flow worth showing
Open Regional Assessment (Upper East, 2025, Objective 2) → click **Fetch DHIS2
data** → values fill and each row scores −2…+2 → overall performance 3.72,
Moderately Performing.

## Tone
- Preset: polished
- Creative direction: a quiet public-sector product film where the numbers do the talking
- Interpretation: 4 scenes, soft crossfades, generous holds, light-to-medium
  type weight; energy comes from the chip sequence and the exact-match beat, not
  from loud motion.

## Format: landscape — 1920x1080
## Duration: 21 seconds

## Visual identity (from the project)
- Background: `#fbfcfd` (DHIS2 `grey050`, the app shell background), panels `#ffffff`
- Accent: `#0b6b35` (`--ghs-brand`, Ghana Health Service green)
- Text: `#212934` (DHIS2 `grey900`), secondary `#4a5768` (`grey700`)
- Objective accents: `#14532d` / `#2a78d6` / `#dc6803`
- Row source: DHIS2 teal `#00796b` (tint `#e7f4f2`), Manual amber `#b45309` (tint `#fdf3e4`)
- Outcome chips: +2 `#43a047`/`#e4f4e5`/ink `#14471a`; +1 `#8bcb8e`/`#f2faf2`/`#1f6626`;
  −1 `#d76b6b`/`#fdeded`/`#a52121`
- Moderate band surface `#c3e5c5`, ink `#1f6626`
- Display font: Roboto (DHIS2 UI's face; local woff2 from `node_modules/typeface-roboto`)
- Body font: Roboto
- Strongest visual element: the outcome chip ramp and the objective-coloured
  brand mark (three bars)

## Share copy (draft)
The Ghana Health Service's annual health sector assessment, rebuilt as a DHIS2
app, and it scores Upper East 2025 to the same nine decimal places as the
published workbook.

## Audio direction
- Role: warm bed with sparse professional accents
- Music: `happy-beats-business-moves-vol-12-by-ende-dot-app.mp3` (steady, clean)
- Music treatment: starts at 0, volume ~0.3, short fade in, fades out over the last ~1.5s
- Music cue guidance: bundled preset read (109.96 BPM). Strong cues: 8.74s
  (summary score lands), 13.11s (exact-match headline), 17.47s (product name).
  Beat grid for the chip sequence: 6.00, 6.56, 7.09, 7.64, 8.19. Chips are
  numeric accents, so one per beat is fine; readable lines hold ≥ the reading floor.
- Audio-reactive treatment: subtle; overall music energy makes the soft brand-green
  background glow breathe. No waveform or equaliser visuals.
- SFX posture: sparse, motion-matched
- Audio-coupled moments: cursor click on Fetch DHIS2 data; summary panel landing;
  exact-match headline; product name
- Restraint rule: no hits on every chip, nothing bright or metallic, no SFX in the hook

## Storyboard

### Scene 1 — Hook — 3.3s
Light canvas. Left: "94 indicators." / "Three objectives." / "One score." enter
fast one after another and hold (all settled by ~1.2s, held ~2s). Right: a
grid of real indicator codes (1.1, 1.2 … 3.34) assembles, cells edged in the
objective colour they belong to; the grid gently drifts.
Sequential/interaction: yes, three lines one by one; code cells assemble
Audio intent: music opens, calm and confident
Audio-coupled idea: none
Music: steady clean bed
Transition mood: soft → Scene 2

### Scene 2 — Fetch and score — 7.6s
The app shell recreated: white sidebar with the three-bar mark, "Holistic
Assessment" / "Ghana Health Service", nav with **Regional Assessment** active in
brand green. Main: "Regional Assessment", context "2025 · Upper East", buttons
**Fetch DHIS2 data** / **Save draft**, Objective 2 tab (blue) active, and five
real rows:

| Code | Indicator | Source | Previous | Current | Target | Outcome |
|---|---|---|---|---|---|---|
| 2.1 | Proportion of facility deaths that are medically certified | Manual | 0.846 | 0.942 | 0.9 | +2 |
| 2.8 | Penta 3 coverage | DHIS2 | 0.926 | 0.905 | 0.95 | +1 |
| 2.11 | Institutional Maternal Mortality Ratio per 100,000 | DHIS2 | 97 | 133 | 125 | −1 |
| 2.12 | Institutional Neonatal Mortality Rate per 1000 | DHIS2 | 5.35 | 5.7 | 7 | +1 |
| 2.16 | Percentage of maternal deaths that are audited | DHIS2 | 0.975 | 1 | 1 | +2 |

Values are shown raw, the way the app's number inputs and `targetLabel` print
them, with "higher is better" / "lower is better" under each target. Source:
`src/lib/__fixtures__/uer-2025-workbook.json` and `framework-2025.json`; the
Manual/DHIS2 badge follows `BUILTIN_INDICATOR_IDS` (2.1 has no shipped binding).

Cursor glides to Fetch DHIS2 data and clicks (~5.3s). DHIS2 current-value cells
fill teal row by row; the chips pop one per beat (6.00–8.19). On 8.74 the summary
panel lands: "Overall performance", **3.72** counting up from 2.50,
"Moderately Performing", with the three objective scores 3.59 / 3.65 / 4.01
beneath. Holds to scene end.
Sequential/interaction: yes, simulated click, row fill, 5 chips one per beat, count-up
Audio intent: gentle momentum, a satisfying settle on the score
Audio-coupled idea: click on the button; soft landing on the summary
Music: same bed
Transition mood: soft → Scene 3

### Scene 3 — The proof — 4.9s
Kicker: "Upper East Region · 2025". A three-row comparison: Objective 1 / 2 / 3
against "Published workbook" and "GHS Holistic Assessment". Workbook values sit
there; the app column fills row by row on beats (11.46, 12.02, 12.55). On 13.11
all three rows get a brand-green check and the headline lands:
**Reproduces the workbook exactly.** (4 words, held ~2.5s.)
Sequential/interaction: yes, 3 rows fill; checks land together
Audio intent: precision, a small warm confirmation
Audio-coupled idea: one soft confirmation on the headline
Music: same bed
Transition mood: soft → Scene 4

### Scene 4 — Outro — 5.2s
The three objective bars draw in (green, blue, orange). **GHS Holistic
Assessment** lands on 17.47. "Assessment, peer review and reporting on DHIS2."
follows (held ≥2.4s). Small credit: "Built by Bigvalues IT Systems for the Ghana
Health Service." Music fades out under the hold.
Sequential/interaction: yes, mark → name → tagline → credit
Audio intent: resolve and fade
Audio-coupled idea: gentle payoff under the name
Music: fading bed
Transition mood: end

**Music mood for this video:** upbeat but restrained, clean corporate
**Audio summary:** a steady bed that carries the flow, with a click, a soft landing, one warm confirmation and a quiet payoff before it fades.
