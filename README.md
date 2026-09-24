# GHS Holistic Assessment

A DHIS2 application for the Ghana Health Service annual holistic assessment of
regional and district health sector performance, including the peer-review
workflow, scoring and reporting.

Built on the DHIS2 app platform with **two entry points**:

- **App** (`src/App.jsx`) — the full application with sidebar navigation.
- **Dashboard plugin** (`src/Plugin.jsx`) — a compact scorecard that can be
  embedded on a DHIS2 dashboard.

## Getting started

```bash
npm install
npm start          # dev server against a DHIS2 instance
npm test           # scoring reconciliation suite
npm run build      # produces build/bundle/ghs-holistic-assessment-<version>.zip
npm run lint
```

`npm start` will prompt for the DHIS2 server URL and credentials on first run.
The instance this app targets is `https://dhims.chimgh.org/dhims`.

## Manual upload

`npm run build` produces a DHIS2-installable bundle:

```
build/bundle/ghs-holistic-assessment-1.1.0.zip
```

Install it in DHIS2 via **App Management → Upload app** (or *Custom apps →
Upload*). No further packaging step is needed — the bundle already carries a
complete `manifest.webapp` at its root, generated from
[`d2.config.js`](d2.config.js):

| Manifest field | Value | Comes from |
| --- | --- | --- |
| `name` | GHS Holistic Assessment | `title` |
| `short_name` | ghs-holistic-assessment | `name` |
| `version` | 1.1.0 | `package.json` |
| `launch_path` | `index.html` | `entryPoints.app` |
| `plugin_launch_path` / `plugin_type` | `plugin.html` / `DASHBOARD` | `entryPoints.plugin`, `pluginType` |
| `activities.dhis.namespace` | `ghs-holistic-assessment` | `dataStoreNamespace` |
| `authorities` | `GHS_ASSESSMENT_EDIT`, `GHS_ASSESSMENT_ADMIN`, `GHS_PEER_REVIEW` | `customAuthorities` |
| `developer` | Bigvalues IT Systems | `author` |
| `shortcuts` | six app sections | `shortcuts` |

Notes on three of these:

- **`dataStoreNamespace`** declares the namespace DHIS2 should associate with
  the app on install. It must match `NAMESPACE` in
  [`src/lib/constants.js`](src/lib/constants.js), which is what the app actually
  reads and writes — a test in `datastore.test.js` fails if the two drift apart.
- **`shortcuts`** feed the DHIS2 command palette (2.42+), so users can jump
  straight to Peer Review or Reports from anywhere. They are hash paths because
  the app uses a hash router; older versions simply ignore them.
- **`author`** is who built the app, not who it is for. **Bigvalues IT Systems**
  is the developer; the Ghana Health Service is the client whose assessment the
  app runs, and appears in the title and the sidebar rather than here. Change it
  in `d2.config.js` to attribute an upload to an individual by name and email.

`minDHIS2Version` is `2.41`, matching the version the target instance's global
shell reports. It is recorded in `d2.config.json` and is only enforced for App
Hub submissions, not for manual upload.

### The footer, and which build is running

Every page ends with the app's author on the left and the running build on the
right — *© 2026 Bigvalues IT Systems* and *Version 1.1.0 (Build 20260916)*.
Which build produced a screen is the first thing asked when a figure on it is
disputed, so it is on the page rather than in App Management.

The version is `process.env.DHIS2_APP_VERSION`, which the app platform already
substitutes from `package.json`. There is no build-date equivalent, so
`d2.config.js` adds one through `viteConfigExtensions.define` as
`DHIS2_APP_BUILD`, a `YYYYMMDD` stamp taken when the build starts;
`d2-app-scripts` merges that over its own defines for both `start` and `build`.
Neither is set when a test imports `App.jsx`, so both fall back — to `0.0.0` and
`dev` — rather than printing `undefined` beside a number somebody may be about
to quote.

After installing, grant `GHS_ASSESSMENT_EDIT` (data entry), `GHS_PEER_REVIEW`
(conducting reviews) and `GHS_ASSESSMENT_ADMIN` (administration) to the relevant
user roles — the install creates all three. **`GHS_PEER_REVIEW` is new in 1.1.0**,
so on an upgrade it has to be granted before existing reviewers can carry on
reviewing; the Admin page's Users tab shows who currently holds what.

## The assessment framework

The regional and district tools are **two different instruments**, so the app
ships two frameworks and picks one from the assessment level:

| | Regional | District |
| --- | --- | --- |
| File | [`framework-2025.json`](src/framework/framework-2025.json) | [`framework-2025-district.json`](src/framework/framework-2025-district.json) |
| Objective 1 | 41 indicators | **40** indicators |
| Objective 2 | 19 indicators | 19 indicators |
| Objective 3 | 34 indicators | 34 indicators |
| **Total** | **94** | **93** |
| Milestones | regional wording | district wording |
| Objective weights | 1.4333 / 1.3 / 1.0 | identical |

Each indicator carries its definition, numerator, denominator, calculation,
data source, target, direction and weight.

The two tools **reuse the same codes for different indicators** — 1.17 is
"Doctor to population ratio" regionally but "Physician Assistant to population
ratio" in a district, and likewise for the geographical equity index, policy
dissemination and data-validation indicators. Nothing keyed by indicator code
may be shared between them; see *DHIS2 indicator mapping* below.

### Notes on the source workbooks

Several things needed care, and the extraction resolves each in favour of the
formulas that actually produced the published scores:

1. **The "Indicator Type" column is not reliable.** Indicator 3.23 (Non-polio
   AFP rate) is declared `Negative` but every formula on its row treats it as
   positive. Direction is therefore read from the `N`/`I`/`H` formulas, not
   from that column.
2. **Some targets are corrected in place on the scoring sheet.** Six indicators
   (2.10, 2.14, 3.7, 3.9, 3.26, 3.30) carry a percentage in the definitions
   sheet but a fraction on the scoring sheet — e.g. `18` vs `0.18`. The scoring
   sheet value is the operative target.
3. **Some district targets are set locally, not nationally.** Comparing all 15
   district workbooks for 2025, 86 targets are identical everywhere and three
   are not: 1.11 (Couple Year Protection, which scales with population), 1.37
   and 1.38. Those are flagged `targetVaries`, keep the published value as the
   default, and become an editable field on the assessment form. The engine's
   `effectiveTarget` prefers the assessment's own target when one is set.
4. **One outcome is hard-coded in the published workbook.** Indicator 2.15 has a
   literal `2` in its outcome cell rather than the formula result. That is an
   assessor override, and the app models it the same way via `overrideScore`
   rather than bending the scoring rules to reproduce it.

## Scoring

Ported in [`src/lib/scoring.js`](src/lib/scoring.js), faithful to the workbook:

```
change  = (cur - prev) / prev        positive indicators
        = (prev - cur) / cur         negative indicators

gap     = (cur - target) / target    positive
        = (target - cur) / cur       negative
        = (upper - cur) / cur        range targets

outcome = -2                         no data supplied
        = target met ? 1 : 0         first year of reporting
        = matrix(target met, change band, gap band)   otherwise

score_i         = weight_i / Σweights / 2 × objectiveWeight × outcome_i
objectiveScore  = Σ score_i                    bounded by ± objectiveWeight
milestoneWeight = objectiveWeight × 0.25
```

Raw totals run from **-3.7333 to +3.7333**. Two rescalings of that same number
are derived from it:

| Field | Range | Used for |
| --- | --- | --- |
| `total` | -3.7333 … +3.7333 | the workbook-faithful score the tests reconcile |
| `index` | 0 … 100 | kept for continuity; not shown in the UI |
| `performance` | 0 … 5 | what the app reports and categorises on |

A raw score of zero — no movement at all — sits at **2.50** on the 0–5 scale.
Because each objective's weight is exactly its own maximum, averaging the three
scaled objective scores and rescaling the weighted total give the same number,
so the headline can never contradict the three figures beneath it. That identity
is pinned by a test.

The five categories are the published ones:

| Score | Category |
| --- | --- |
| 4.00 – 5.00 | Highly Performing |
| 3.00 – 3.99 | Moderately Performing |
| 2.00 – 2.99 | Sustained |
| 1.00 – 1.99 | Underperforming |
| 0.00 – 0.99 | Severely Underperforming |

A category's colour never carries it alone — every place the score appears, the
category is written out beside it.

### Verification

[`src/lib/scoring.test.js`](src/lib/scoring.test.js) reconciles the engine
against the published 2025 Upper East regional workbook. The fixture
[`src/lib/__fixtures__/uer-2025-workbook.json`](src/lib/__fixtures__/uer-2025-workbook.json)
holds every input and every computed result from that spreadsheet, and the suite
asserts each indicator's change, gap, target achievement, both bands, its
outcome and its weighted score, plus the three objective scores and the total.

The engine reproduces the workbook exactly:

| Objective | Workbook | Engine |
| --- | --- | --- |
| 1 | 0.625195990 | 0.625195990 |
| 2 | 0.598689801 | 0.598689801 |
| 3 | 0.603242148 | 0.603242148 |

`src/lib/datastore.test.js` and `src/lib/workflow.test.js` cover the
per-framework mapping (including legacy migration) and the lifecycle rules.
**289 tests** in total.

## Pages

| Page | What it is |
| --- | --- |
| Dashboard | The landing page, scoped to the user's level — see below. Everything is derived from assessments already in the datastore, so it makes no analytics call of its own. |
| Regional / District Assessment | Data entry for one org unit, one objective per tab. |
| Regional / District Peer Review | The reviewer's workspace, one destination per level. The underlying page is the same; a `level` prop fixes which one it is and hides the in-page switch. |
| Reports | Seven reports over the year's assessments — see below — each exportable as PDF, Excel or CSV, or printable. |
| Administration | See below. |
| Help | Eight tabs of documentation, with the counts and thresholds read from the framework and the constants rather than retyped, so they cannot drift from the code. |

### The dashboard is scoped to the user's level

Which dashboard a user lands on follows their own place in the hierarchy. Each
level sees itself and the tier immediately below it — never all three stacked on
one page:

| Signed in as | Headline | Listed beneath |
| --- | --- | --- |
| National (level 1, or a superuser) | the country: the mean of the regional scores, its category, and that mean taken objective by objective | **Regional Assessment Status** — every region, with its status, score and band |
| Regional (level 2) | their own region: its score, category, rank among the regions and objective breakdown | **District Assessment Status** — every district of that region |
| District (level 3) | their own district: its score, category, completion and objective breakdown | nothing — a district is the bottom of the hierarchy |

Both tables are the same component at two levels, ordered by name rather than by
score: this is somewhere to look a unit up, and Reports is where the league
table lives. A region's and a district's view keeps the *vs National Avg* tile,
so a lower tier can still see itself against the country without the page
changing subject.

The national mean is unweighted and takes in regions only. Districts are
assessed on a different instrument against their own targets, so averaging the
two together would produce a number that answers no question.

Before this, the dashboard was the user's own unit and nothing else, which left
a national account — belonging to no region — on a page with a notice box and
no figures at all.

`scopeOf` in [`src/lib/useCurrentUser.js`](src/lib/useCurrentUser.js) is what
decides this, and the Administration page gates its tabs on the same function.

## Reports

Seven reports, as the reports guide lists them, all built from the assessments
already in the datastore — the same records the dashboard reads. None of them
makes an analytics call, so two reports of the same year cannot disagree about a
figure.

| Report | Shows | Needs |
| --- | --- | --- |
| National Summary | The national score, the spread of performance categories and every region ranked | |
| Regional Performance | Regional comparison with a breakdown by objective, and each objective's spread across regions | |
| Objective Performance | One objective for every org unit, with its completion and its milestone | which objective |
| Indicator Analysis | One indicator across every org unit: target, current, previous, change, gap, outcome | which indicator |
| Peer Review Summary | Regional peer review: reviewer, progress, adjustments, recommendation | |
| District Performance | District scores, ranks and categories, for one region or the whole country | which region |
| District Peer Review | The same review picture at district level | |

### One model, four outputs

Seven reports times four ways out — screen, CSV, Excel, PDF — is twenty-eight
pieces of work if each report knows how to export itself. So none of them does.
A builder in [`src/reports/builders.js`](src/reports/builders.js) returns a
plain model:

```
report  = { id, title, subtitle, meta[], sections[] }
section = { heading, note, columns[], rows[] }
column  = { key, label, numeric, width }
```

and the renderer and the three exporters in
[`src/reports/export.js`](src/reports/export.js) are written once against it. A
new report arrives with every output already working.

A row holds the text to read; where a column is `numeric` the row also carries
the unformatted number under `_raw`, which is what the spreadsheet writes — so
a column can be summed without being retyped, while the screen, the PDF and the
CSV all show the same formatted string.

| Output | What comes out |
| --- | --- |
| **PDF** | Banner-style landscape A4, a table per section, every page numbered and dated |
| **Excel** | XLSX with one worksheet per section, frozen header row, numbers as numbers |
| **CSV** | One flat file, sections separated by their headings, UTF-8 BOM for Excel |
| **Print** | The report as shown, chrome hidden, headers repeated per sheet, rows never split |

Printing prints the page rather than re-rendering the report, which is the only
arrangement in which the two cannot drift apart.

### The export libraries are not in the initial download

ExcelJS and jsPDF are around 1.5 MB between them, and most visits to Reports
only ever look at a report on screen. Both are behind `import()`, so they are
fetched the first time somebody actually exports; the app chunk grew by about
37 kB for the reports themselves, and the libraries sit in their own chunks.

**SheetJS (`xlsx`) is deliberately not used.** Its npm releases stop at 0.18.5,
which carries unpatched prototype-pollution and ReDoS advisories — the project
moved distribution to its own CDN at 0.19. ExcelJS is maintained on npm and
covers what these reports need.

## Administration

Sections are gated by how far the user's remit reaches — DHIS2 org unit level 1
is national, 2 regional, 3 district, and a superuser counts as national:

| Tab | National | Regional | District | What it does |
| --- | :-: | :-: | :-: | --- |
| Overview | ✓ | ✓ | ✓ | Assessment counts by status for the year, and how much of each tool is bound to DHIS2 |
| Periods | ✓ | ✓ | | Whether a year is open, closed, locked or archived. National users change it; a region reads it |
| Targets | ✓ | ✓ | ✓ | The target each row is scored against for a year. National and regional users edit; a district reads and exports |
| Mappings | ✓ | | | Bind rows to DHIS2 indicators (instance-wide, so national only) |
| Regions | ✓ | | | The org unit hierarchy as DHIS2 reports it, and how much of it has been assessed |
| Pairings | ✓ | ✓ | ✓ | Who reviews whom, held per year under `peer-pairings` |
| Users | ✓ | | | Who can reach the app, at what level, and through which DHIS2 role |
| Settings | ✓ | | | Default year and organisation name |
| Data | ✓ | | | Download the whole namespace as one JSON backup |
| Audit | ✓ | ✓ | | Every assessment's `history`, poured into one timeline |

Ten tabs nationally, five regionally, three at district level, as the
administration guide sets out. The cut follows what each decision governs rather
than seniority: a period decides when the whole country submits, so it is opened
nationally, but a region has to see it because it governs whether they can
submit at all; targets reach every level because they are what an assessment is
scored against wherever it is filled in; pairings are drawn within a region as
well as across regions, so districts need them too; and the audit trail stops at
regional, because it spans other people's assessments — a regional supervisor's
business, not a district's.

**Regions and Users are read-only, deliberately.** Org units, user roles and
authorities are DHIS2's own, edited in the Maintenance and Users apps. A second
place to change them would be a second place for them to be wrong. What these
two tabs add is the question DHIS2 cannot answer from inside itself: of
everything on the instance, which parts *this app* sees — how much of the
hierarchy has an assessment, and who actually reaches the app and through which
role.

### Targets

A framework ships the targets its published workbook scored against, which are
right for the year it was transcribed from; a later year moves the bar. The
Targets tab records the target for a year and a tool, and
[`applyTargets`](src/framework/targets.js) folds those figures into the
framework before anything is scored against it. Three layers end up deciding a
row's target, narrowest last:

1. the framework's own value, from the workbook;
2. the year's override, from this tab;
3. the assessment's own value, for the rows flagged `targetVaries` whose target
   is genuinely set locally — applied in `effectiveTarget` as the row is scored.

Only differences are stored, as with indicator mapping: a target typed back to
its shipped figure stops being an override, so a corrected framework in a later
release still reaches that row. A framework with no overrides is returned
unchanged — the same object, not a copy — so an instance that never opens this
tab scores exactly as it did before the tab existed, which is what the
reconciliation suite still pins.

Four screens score assessments — the form, the dashboard, reports and the
plugin — and all four resolve their framework through
[`useScoringFramework`](src/lib/useScoringFramework.js) rather than calling
`getFramework` directly, so the same record cannot score differently depending
on which screen is looking at it.

### Periods

| Status | Editing | Submission |
| --- | :-: | :-: |
| Open | ✓ | ✓ |
| Closed | ✓ | |
| Locked | | |
| Archived | | |

Closing a year stops new submissions but leaves data entry alone, so work in
progress is not lost the moment a deadline passes; locking stops editing too.
Neither blocks a reviewer from finishing a review already under way — a review
that could not be completed would strand the assessment it belongs to.

**A year with no period recorded is open.** The gate is opted into, so adding
periods to an instance that already holds assessments does not freeze every past
year on upgrade: an administrator creates a period for the year they want to
control, and only then does it bite. `period` is an optional argument throughout
[`workflow.js`](src/lib/workflow.js) for the same reason — omitted, the rules
behave exactly as they did before periods existed.

Restoring a backup is deliberately not offered next to the button that makes
one: writing a backup over a live namespace would overwrite work in progress,
which wants a considered decision rather than a click.

## Workflow

```
DRAFT ──submit──> SUBMITTED ──review──> UNDER_REVIEW ──respond──> APPROVED
                       │
                       ├─ request revision ─> REVISION ──resubmit──> SUBMITTED
                       └─ reject ──────────> REJECTED ──reopen───> DRAFT
```

- Only the assessed region/district enters data. Editing is locked outside
  `DRAFT`, `REJECTED` and `REVISION`.
- In `REVISION` only the indicators the reviewer flagged with a suggested value
  are editable.
- Submission requires **80% completion**; a review requires **80% of rows
  verified**.
- Indicators left empty score **-2**.
- Both the assessment and the review auto-save every **30 seconds**.

## Storage

Everything lives in the DHIS2 datastore namespace `ghs-holistic-assessment`:

| Key | Contents |
| --- | --- |
| `assessment-<year>-<orgUnitId>` | One assessment: values, milestones, status, review, response, history |
| `indicator-mapping` | Indicator code → DHIS2 indicator/data element |
| `settings` | Framework id, default year |
| `peer-pairings` | Reviewer pairings |

## DHIS2 indicator mapping

The target instance publishes an indicator per assessment row, named
`GHS-HA-<code> - <indicator>`, and the app ships bound to the ones that exist:
**53 of the 94 regional rows** and **51 of the 93 district rows**, listed in
[`src/framework/indicator-ids.js`](src/framework/indicator-ids.js). A fresh
install can therefore pull those from analytics on day one. Every other row
stays manual entry and is labelled **Manual** in the table.

Those DHIS2 names carry the *regional* numbering, which the district tool does
not share — it drops regional 1.35 (Mass Drug Administration Coverage for
Schistosomiasis), so from there on its codes run one behind, and `GHS-HA-1.41`
is district 1.40. The district block is matched on each indicator's **name**
rather than its number for exactly that reason. Two rows have no district
counterpart and are deliberately absent from it: 1.17, which is "Doctor to
population ratio" regionally but "Physician Assistant to population ratio" in a
district, and 1.35, the row the district tool drops.

On the **Admin** page an administrator picks a tool, searches DHIS2 indicators
and data elements, and binds or rebinds any row. The two layers combine in
`mappingForFramework`:

| Stored for a code | In force |
| --- | --- |
| nothing | the shipped binding, if there is one |
| an entry | that entry, overriding the shipped one |
| `null` | nothing — a tombstone written by **Clear** |

The tombstone matters: without it, clearing a shipped binding would simply come
back on the next read. Saving stores only the differences (`strippedOfBuiltins`),
so a corrected id in a later release still reaches installs that never touched
that row. The Admin table marks each bound row **Built in** or **Custom**
accordingly.

### Keeping the shipped ids honest

`npm run verify:indicators` asks a live instance whether all 53 + 51 shipped
UIDs still exist, flags any that have been renamed there, and exits non-zero if
one has gone missing, so it can gate a release:

```bash
DHIS2_URL=https://dhims.chimgh.org/dhims DHIS2_TOKEN=d2p_xxx npm run verify:indicators
```

Credentials come from the environment and are never written to a file. Add
`--insecure` (running the script directly) for an instance with a self-signed
certificate. DHIS2 personal access tokens use the `ApiToken` scheme, not
`Bearer` — with `Bearer` the request falls through to the login page and comes
back as a 302 rather than an error.

### Running the app on a different instance from the data

A DHIS2 app can only query the instance it is served from — `useDataEngine` has
no notion of a second server. So an app installed on a local instance asks *that*
instance for `U8DSAPaNJ8U` and the other shipped ids, and if they live only on
the GHS instance every one of those rows quietly falls back to manual entry.

[`scripts/sync-indicators.mjs`](scripts/sync-indicators.mjs) copies them across
with their UIDs intact. The indicators are small — 53 of them and 6 indicator
types — but what their expressions *reference* is not:

| Referenced | Count |
| --- | --- |
| data elements | 197 |
| category option combos | 53 |
| data sets | 116 |
| constants | 5 |

Indicator 1.41 sums reporting rates across every data set in the instance, which
is where the 116 come from. Copying all of that into another instance would be an
enormous metadata change, and on a Ghana instance it is almost certainly
unnecessary — national data elements and data sets are already there under the
same UIDs. So the flow is **probe first, import narrowly**:

```bash
# 1. pull the indicators and record what they reference
SOURCE_URL=https://dhims.chimgh.org/dhims SOURCE_TOKEN=d2p_xxx   npm run indicators:export -- --out indicators.json

# 2. ask the target which of those references it is missing
TARGET_URL=https://192.168.11.135/dhis TARGET_USERNAME=admin TARGET_PASSWORD=...   npm run indicators:probe -- --in indicators.json --insecure

# 3. if the probe is clean, import
TARGET_URL=... TARGET_USERNAME=... TARGET_PASSWORD=...   npm run indicators:import -- --in indicators.json --dry-run --insecure
```

If the probe reports missing references, re-run the export with
`--with-dependencies` and review what it pulls before importing — especially the
data sets.

The import runs in two phases: dependencies with `importStrategy=CREATE`, so it
can add what is missing without overwriting metadata the target has diverged on,
then the indicators with `CREATE_AND_UPDATE`, since those are the app's own.
`--dry-run` maps to `importMode=VALIDATE`, so DHIS2 reports what would happen
before anything is written.

Either end takes a token (`*_TOKEN`) or basic auth (`*_USERNAME` / `*_PASSWORD`);
`--insecure` is for an instance with a self-signed certificate. References to
users and groups are stripped on the way out, because the GHS account that
created an indicator has no counterpart on the target and an import naming one
fails. The `metadata` key of the export is an ordinary DHIS2 metadata payload,
so `jq .metadata indicators.json` gives you something **Import/Export** in the UI
will take.

### Reading live from another instance

The app can also read indicator values from another instance as they are
needed, rather than from a snapshot. A national administrator connects the
source on **Admin → Settings → Data source** by giving its URL (DHIMS by
default) and a personal access token created on that instance. The app then
creates a [DHIS2 route](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/route.html)
(`ghs-ha-data-source`) on its own instance, pointing at `<source>/api/**`. The
route keeps the token on the server and relays requests to the source, so the
token never reaches a browser and the source needs no CORS entry.

Once a source is connected, *Fetch DHIS2 data* and the Mappings search both run
against it, so the bindings in `indicator-ids.js` resolve by their DHIMS UIDs
unchanged. The org unit being assessed is resolved first: by UID when the source
has the same one (an instance cloned from DHIMS), otherwise by name through the
same matcher as the prefill script ([`src/lib/orgUnitMatch.js`](src/lib/orgUnitMatch.js))
and the same alias file. An org unit with no safe counterpart is reported, not
guessed. **Disconnect** deletes the route along with its token.

Requirements and cautions:

- The Route API needs DHIS2 2.41 or later on the app's instance, and that
  server must be able to reach the source. Recent versions only relay to hosts
  allowed by `route.remote_servers_allowed` in `dhis.conf`, which defaults to
  `https://*`, so an `http://` source has to be added there.
- The route relays whatever the token allows, to every user holding
  `GHS_ASSESSMENT_EDIT` or `GHS_ASSESSMENT_ADMIN`. Create the token restricted
  to `GET` requests, on an account that can only read.

### Filling assessments from another instance

If the app's instance is not the one holding the data — and the two share no
UIDs, which is the normal case for a local instance alongside the GHS one —
there is nothing to map: the indicators, the data elements and even the org
units are all different objects. `sync-indicators.mjs` cannot help, because
metadata is not data.

[`scripts/prefill-assessments.mjs`](scripts/prefill-assessments.mjs) takes the
other route. It reads the **computed** indicator values out of the source
instance's analytics and writes them straight into the app's datastore on the
target, exactly as the assessment page's *Fetch DHIS2 data* button would have:

```bash
SOURCE_URL=https://dhims.chimgh.org/dhims SOURCE_TOKEN=d2p_xxx TARGET_URL=https://192.168.11.135/dhis TARGET_USERNAME=admin TARGET_PASSWORD=...   npm run assessments:prefill -- --year 2025 --level REGION --dry-run --insecure
```

One analytics request per batch of indicators covers every org unit at the level
at once (`ou:LEVEL-2`), so a whole country is a handful of requests rather than
hundreds. Both years are fetched together, since a row needs its previous year
to score.

It is deliberately conservative:

- a figure somebody typed is never overwritten — only empty rows and rows
  already marked `source: 'dhis2'` are filled;
- an assessment that has left `DRAFT` is skipped entirely, so a submitted or
  approved record is untouched;
- every write appends a `PREFILLED` entry to the record's history;
- `--dry-run` reports exactly what would change and writes nothing.

This is a snapshot, not a live link. Re-run it to refresh.

**Org units are matched by name**, since the UIDs differ. Regions match 16/16.
Districts are matched on (region, district), first exactly and then with the
administrative suffix dropped, which gets most of the way; the rest are listed
in [`src/framework/org-unit-aliases.json`](src/framework/org-unit-aliases.json). Only put a
pair in that file when it is certainly the same place under another spelling.
The near-misses that remain are district splits and renames — matching "Adansi
North" to "Amansie South" because the strings look alike would file one
district's figures under another, which is worse than leaving the row blank.
Those are recorded in the file's `unresolved` section with the reason, so the
question does not have to be worked out twice.

Mapping is stored **per framework**, because the two tools reuse codes for
different indicators:

```jsonc
{
  "ghs-ha-2025":          { "1.17": { "id": "...", "name": "Doctor to population ratio" } },
  "ghs-ha-2025-district": { "1.17": { "id": "...", "name": "Physician Assistant to population ratio" } }
}
```

A mapping saved in the older flat shape is read as regional-only and migrated on
the next save, so it can never leak into the district tool.

## Authorities

| Authority | Grants |
| --- | --- |
| `GHS_ASSESSMENT_EDIT` | Enter and submit assessment data; without it the app is read-only |
| `GHS_PEER_REVIEW` | Conduct a peer review of another region or district's assessment |
| `GHS_ASSESSMENT_ADMIN` | Open the Administration page: periods, targets, indicator mapping and the rest |
| `ALL` | Superusers pass every check |

The three are independent, and deliberately so: the point of peer review is that
somebody other than the author looks at the assessment, so a reviewer often
should *not* hold `GHS_ASSESSMENT_EDIT` on the record they are reviewing.

Without `GHS_PEER_REVIEW` the Peer Review page still opens and still reads —
that is how an assessment's own owner reads the feedback they were given — but
every control that would change the review is disabled, and each mutating
handler refuses on its own rather than trusting the disabled button. Disabling a
control hides an action; it does not prevent one.

[`permissionsOf`](src/lib/useCurrentUser.js) is where the rule lives, separated
from the hook that fetches the user so that which authority grants what can be
read and tested on its own.

All three custom authorities are declared in `d2.config.js` and are created in
DHIS2 when the app is installed.

## Layout

```
src/
  App.jsx                  app entry: routing and sidebar
  Plugin.jsx               dashboard plugin entry: compact scorecard
  framework/               the regional and district frameworks, and lookup helpers
  lib/
    scoring.js             the scoring engine
    scoring.test.js        reconciliation against the Excel tool
    datastore.test.js      per-framework indicator mapping
    workflow.test.js       lifecycle and submission gates
    workflow.js            status transitions and submission gates
    datastore.js           datastore read/write hooks
    useAssessment.js       load, edit, score and auto-save one assessment
    useAutoSave.js         30-second auto-save
    useDhis2Values.js      analytics fetch and metadata search
    dataSource.js          the optional remote data source, relayed through a DHIS2 route
    orgUnitMatch.js        pairs org units across instances, shared with the prefill script
    useOrgUnits.js         region and district lookup
    useCurrentUser.js      authorities, assigned org units, and scopeOf
  components/              table, milestone panel, summary, chips, context bar
  pages/                   dashboard, assessment, peer review, reports, admin, help
  pages/admin/             the administration tabs
  framework/indicator-ids.js  the DHIS2 indicators the app ships bound to
  theme.css                the colour tokens every component reads
  reports/
    builders.js            the seven reports, each returning the shared model
    export.js              CSV, Excel, PDF and print, written once against it
    model.js               what a report is: sections, columns, rows
scripts/                   indicator id verification, metadata sync, assessment prefill
public/                    app icons, copied over the shell's own on build
reference/global-shell/    the previously saved DHIS2 global-shell bundle
```

`reference/global-shell/` holds the saved copy of the DHIS2 global shell that
was in this folder before the app was scaffolded. It is not part of the build.

## Translatable strings may not contain a colon

Every user-visible string goes through `i18n.t`, and `npm run build` extracts
them into [`i18n/en.pot`](i18n/en.pot). **A colon in one of those strings makes
it untranslatable**, so use an em dash where a colon would read naturally:

```js
i18n.t('Open the Administration page — periods, targets and the rest')  // yes
i18n.t('Open the Administration page: periods, targets and the rest')  // no
i18n.t('Reviewer')  + ':'                                              // label colons go outside
```

Colon is i18next's namespace separator, so `t('A: B')` is read as key `B` in
namespace `A`. `@dhis2/d2-i18n` turns that off at runtime with
`nsSeparator: false`, which is why such a string still *displays* correctly —
but `i18next-scanner`, which d2-app-scripts uses to write the `.pot`, sets only
`keySeparator: false` and not `nsSeparator`. The string is therefore extracted
under a namespace that does not exist and never reaches the catalogue at all.
The build says so, once per string:

```
i18next-scanner: "Open the Administration page" does not exist in the
namespaces (["translation"]): key=" periods, targets and the rest"
```

The setting is hardcoded in `@dhis2/cli-app-scripts` and cannot be overridden
from this project, so avoiding the character is the whole of the fix. Twenty-five
strings carried one until this was noticed; a clean build is now the signal that
none has crept back.

## Colour

DHIS2's palette ships only blue, teal, green, yellow, red and grey, which is a
hue short of what the app needs, so everything it colours is defined once in
[`src/theme.css`](src/theme.css) and read from there by every component. (Some
rules previously reached for `--colors-purple*`, which DHIS2 does not define, so
they rendered with no colour at all.)

| Role | Colour | Where |
| --- | --- | --- |
| Brand | Ghana Health Service green | the sidebar's current page, league-table headers, the brand mark |
| Objective 1 / 2 / 3 | green / blue / orange | tabs, table headers, summary bars, dashboard rows |
| Row source | teal **DHIS2** vs amber **Manual** | the source badge and the current-value input |
| Outcome −2…+2 | green ↔ grey ↔ red | the score chip |
| Performance band | green / amber / red | the index, wherever it is shown |
| Peer review | plum | suggestions, overrides, reviewer feedback |

The values were checked rather than picked by eye, with WCAG contrast and
CIEDE2000 under Viénot–Brettel–Mollon dichromat simulation. The three objective
accents are a categorical triple whose worst all-pairs separation is ΔE 21.0
(protanopia, green against orange) and ΔE 45.7 in normal vision, each ≥3.4:1 on
white; the outcome ramp is a diverging green↔red whose poles clear CVD
separation because the arms differ in lightness as well as hue; and every ink
sits at ≥4.5:1 on its own tint and on its own filled surface. Two colours are
deliberately below 3:1 on white — the light green +1 accent and the amber
"watch" band — and both only ever appear beside their own printed number or
label, so colour never carries a meaning on its own. Under `forced-colors` the
accents step aside entirely.

Green and orange are the classic protanopia confusion pair, which is why
objective 1 is a deep green rather than a bright one: its separation from
objective 3 is carried by lightness, which protanopia leaves intact, rather than
by hue, which it does not. A brighter green in that slot fell to ΔE 6.4 against
the same orange.

Each performance band carries two fills. `-tint` is the near-white wash behind a
chip or a table cell, where bands sit next to each other and have to stay apart;
`-surface` is a deeper fill for a single large panel showing one band — the
dashboard hero — where near-white read as no colour at all. Adjacent surfaces
are close (severe and under are ΔE 3.6 apart), so `-surface` is only used where
one band fills the panel and the band's name is printed inside it.

The brand green is chrome only: it never encodes a value, so it is free to sit
near objective 1's green without anything having to tell the two apart.

A component says which objective or band it is showing with `data-objective` or
`data-band`, and every accent rule inside it resolves from there; no component
carries an objective-specific class name.

## Icon

The mark is three arcs — one per objective, in the objective accents — around a
white core on a deep navy tile. It lives in [`public/`](public/), which
`d2-app-scripts` copies over the app shell's own icons at build time, so
`dhis2-app-icon.png` is what App Management and the apps menu show.
[`public/icon.svg`](public/icon.svg) is the editable source; the PNGs, the
`.ico` and Safari's monochrome `safari-pinned-tab.svg` are cut from it. Sizes at
or below 32px use a thicker ring with wider gaps, because at 16px the fine
version closes up into a blur.
