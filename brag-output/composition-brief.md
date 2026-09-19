# Hyperframes Composition Brief: GHS Holistic Assessment

## Objective
Create a short launch-style brag video for GHS Holistic Assessment.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1920x1080, 30 fps
- Duration: 21 seconds

## Source Material
- Project root: `C:\Users\yahaya\Documents\Holistic_Assessment`
- Primary files read: `README.md`, `d2.config.js`, `package.json`, `src/theme.css`,
  `src/App.jsx`, `src/App.module.css`, `src/pages/DashboardPage.jsx` + `.module.css`,
  `src/pages/AssessmentPage.jsx`, `src/components/IndicatorTable.jsx` + `.module.css`,
  `src/components/OutcomeChip.jsx` + `.module.css`, `src/lib/format.js`,
  `src/lib/constants.js`, `src/lib/scoring.js`, `src/framework/framework-2025.json`,
  `src/framework/indicator-ids.js`, `src/lib/__fixtures__/uer-2025-workbook.json`
- Product name: GHS Holistic Assessment
- Tagline / strongest claim: the scoring engine reproduces the published Upper East 2025 workbook exactly (0.625195990 / 0.598689801 / 0.603242148)
- Key UI to recreate: app shell sidebar + Regional Assessment indicator table (Objective 2) with DHIS2/Manual badges and −2…+2 outcome chips; the summary's overall performance score
- Copy that must appear verbatim:
  - Holistic Assessment / Ghana Health Service (sidebar brand)
  - Regional Assessment
  - Fetch DHIS2 data
  - Save draft
  - Overall performance
  - Moderately Performing
  - DHIS2 / Manual
  - higher is better / lower is better

## Creative Direction
- Tone preset: polished
- Creative direction: a quiet public-sector product film where the numbers do the talking
- Interpretation: four scenes, soft crossfades, generous holds, medium type weight; energy from the chip sequence and the exact-match beat
- Angle: the assessment used to be a workbook; now it's an app that pulls figures from DHIS2, scores every row the workbook's way and gets exactly the same answer
- Hook: "94 indicators. / Three objectives. / One score." beside an assembling grid of real indicator codes
- Outro / punchline: three-bar mark → "GHS Holistic Assessment" → "Assessment, peer review and reporting on DHIS2." → credit "Built by Bigvalues IT Systems for the Ghana Health Service."
- Avoid:
  - Generic SaaS language
  - Abstract filler visuals
  - Unrelated visual redesign (keep the app's light DHIS2 look and its palette)

## Visual Identity
- Background: `#fbfcfd`; panels `#ffffff`; borders `#e8edf2` / `#d5dde5`
- Text: `#212934`; secondary `#4a5768`
- Accent: `#0b6b35` (brand green, chrome only)
- Objective accents: `#14532d` / `#2a78d6` / `#dc6803` (tints `#e8f2ec` / `#eef4fd` / `#fdf1e3`)
- DHIS2 teal `#00796b` / `#e7f4f2` / ink `#00504a`; Manual amber `#b45309` / `#fdf3e4` / ink `#8a3f07`
- Outcome chips: +2 border `#43a047` tint `#e4f4e5` ink `#14471a`; +1 `#8bcb8e` / `#f2faf2` / `#1f6626`; −1 `#d76b6b` / `#fdeded` / `#a52121`
- Moderate band surface `#c3e5c5`, ink `#1f6626`; High band surface `#a5daa8`, ink `#14471a`
- Display font: Roboto 300/500/700 (local woff2 in `assets/fonts/`)
- Body font: Roboto 400/500
- Visual references: sidebar active pill in brand green, objective-tinted table header with a 3px accent top border, pill-shaped outcome chips, band-coloured hero score

## Storyboard
Use the storyboard in `brag-output/brag-plan.md` as the creative contract.

Scene summary:
1. Hook — 0.0–3.3s — three lines + indicator-code grid
2. Fetch and score — 3.3–10.9s — app shell, click Fetch DHIS2 data, values fill, 5 chips on beats, summary 3.72 Moderately Performing on 8.74s
3. The proof — 10.9–15.8s — workbook vs app, three objectives, checks + "Reproduces the workbook exactly." on 13.11s
4. Outro — 15.8–21.0s — mark, name on 17.47s, tagline, credit

## Audio
- Audio role: warm bed with sparse professional accents
- Audio arc: bed in from 0, steady through the flow and proof, fades out over the last 1.5s
- Music: `assets/music/happy-beats-business-moves-vol-12-by-ende-dot-app.mp3`
- Music treatment: volume 0.3, 0.4s fade in, fade out 19.5→21.0
- Music cue guidance: bundled preset `skills/brag/assets/music/cues/happy-beats-business-moves-vol-12-by-ende-dot-app.music-cues.json` (109.96 BPM); strong cues 8.74 / 13.11 / 17.47; beat grid 6.00, 6.56, 7.09, 7.64, 8.19 for chips and 11.46, 12.02, 12.55 for proof rows
- Audio-reactive treatment: subtle; brand-green background glow breathes with the bass band. Data in `assets/audio-data.js` (extracted with ffmpeg + a Node RMS pass because numpy is not installed for `extract-audio-data.py`)
- Audio-coupled moments:
  - 5.3s — simulated click on Fetch DHIS2 data
  - 8.74s — summary panel lands
  - 13.11s — exact-match headline
  - 17.47s — product name
- SFX selection guidance: polished, low HF risk, 3–4 cues total, 0.5–0.7 volume
- SFX analysis guidance: `skills/brag/assets/sfx/sfx-analysis.md`
- Exact SFX choice: `interface/click_003.ogg`, `interface/drop_001.ogg`, `interface/bong_001.ogg`, `impact/impactBell_heavy_000.ogg` (quiet)
- Audio files: copied into `brag-output/composition/assets/`

## Hyperframes Instructions
Built against the Hyperframes domain skills (core, animation, creative, keyframes, cli), read from the heygen-com/hyperframes repository because only the entry and CLI skills ship with the installed 0.8.46 CLI. Standalone monolithic `index.html`, one paused GSAP timeline registered as `window.__timelines["main"]`, `hyperframes check` as the gate before render.
