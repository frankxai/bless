# The Blessing Protocol — v0.2

> A daily and weekly practice for witnessing work, witnessing the instruments that made it,
> and growing a palace from both.
> This document is the normative specification. The [`templates/`](templates/) are the copy-paste starting points.

Status: **v0.2 (draft, stable enough to adopt)** · License: MIT · Built on [SIP](https://github.com/frankxai/Starlight-Intelligence-System)

---

## 1. Scope

The Blessing Protocol defines:

1. An **eight-file contract** any repository adopts to become *blessable* (§2).
2. A **weekly ritual** (the blessing) with a fixed output structure (§3).
3. A **blessing record** schema (`blessings.jsonl`) — the durable ledger (§4).
4. A **room schema** (`rooms.json`) — the bridge from blessed work to a visual palace (§5).
5. A **voice register** — the language the practice uses, and the language it refuses (§7).
6. An **attestation** — how a builder honestly claims "Blessed" (§8).
7. A **daily orientation** — the standing-capability cadence that opens the day (§10).
8. A **lineage record** schema (`lineage.jsonl`) — the instruments, including the AI (§11).
9. An **intention record** schema (`intentions.jsonl`) — the forward half, capability-backed (§12).
10. A **benevolence charter** — the non-waivable refusals an agentic adopter inherits (§13).

It does **not** define how the palace is rendered (HTML, React, Three.js, print — the builder's choice), nor which agent runs the ritual. Reference implementations exist; none is mandatory.

---

## 2. The file contract

A blessable repo carries these at the root, or inside a `.<name>/` directory.

**Core tier** (v0.1) — witnessing what was made:

| File | Required | Purpose |
|---|---|---|
| `soul.md` | recommended | Essence — the thing that must not drift. Everything else inherits from it. |
| `agent.md` | if >0 agents | How agents behave in this repo. The operating contract. |
| `skills.md` | optional | The repo's skills index — what agents can do, and the trigger for each. |
| `palace.md` | required for a palace | Maps the repo's work to rooms: surfaces, accents, ordering. |
| `bless.md` | **required** | Ritual config + the blessing ledger. The one indispensable file. |

**Standing tier** (v0.2) — witnessing what is *already available*, and what it is for:

| File | Required | Purpose |
|---|---|---|
| `dawn.md` | optional | The daily orientation: what stands, what is borrowed, today's one path (§10). |
| `lineage.md` | recommended if agents run here | The instruments — agents, skills, models, protocols — and their attribution (§11). |
| `intent.md` | optional | Capability-backed intentions: what this is being built toward, and what it refuses (§12). |

The minimum viable adoption is `bless.md` alone. `soul.md` is strongly recommended because the ritual's voice and the palace's character both inherit from it. `lineage.md` becomes **required** the moment a repo carries the attestation block *and* runs agents it did not author (§8, §11.4).

The two tiers answer different questions. The core tier asks *what became whole?* — it looks back at a week of work. The standing tier asks *what do I already have?* — it looks at the capability that exists right now, before any new work is proposed. Builders reliably underrun the second question: capability that is not enumerated gets rebuilt instead of reused, and instruments absorbed from others go uncredited. The standing tier is the fix, and it is a daily-scale one.

Files are Markdown with optional YAML frontmatter. An agent reads them top-to-bottom; humans should too.

---

## 3. The weekly ritual

The ritual is **invoked, never auto-fired**. A skipped week is silent — no guilt mechanic, no streak penalty. The witness only sees what *is*; it never writes future tense for work that has not happened.

### 3.1 Inputs

1. The week's change history across the builder's repos (commits, merged PRs).
2. The current `bless.md` ledger (for continuity with last week).
3. The previous weekly entry, if any.
4. Optionally, connector signals (issues closed, releases cut, content shipped).

The week is the seven days ending on the most recent Sunday on or before the anchor date.

### 3.2 Output structure (normative)

A single Markdown file at `weekly/YYYY-W##.md` (ISO week numbering) with these sections, in order:

1. **§0 — The structural truth.** One paragraph naming what the system actually became this week.
2. **§1 — What is whole and should be blessed.** Wholeness, not completeness. Each blessed item also appends to the ledger (§4).
3. **§2 — Structurally important but unfinished.** The load-bearing gaps, ranked.
4. **§3 — Ignore for the next seven days.** Explicit permission to not-do. This list is the real leverage.
5. **§4 — The one highest-leverage path for the coming week.** A single sentence, then the unpacking.
6. **§5 — Handover note.** Code-block formatted; copies cleanly into the next working session.

Length target: 800–1500 words. Surgical, not exhaustive. No hagiography — a blessed thing is named, not celebrated. A starting template lives at [`templates/weekly.md`](templates/weekly.md).

### 3.3 What blessing means (normative definition)

> **Blessed = whole at this moment.** Further iteration is creator-restlessness, not improvement. Future-you may extend it from a new vantage; present-you does not.

This is closure semantics (after the Zeigarnik effect), **not** a metaphysical claim, and the protocol does not test that effect. A blessing is falsifiable: new facts may break wholeness, and the next week records it. A blessing does not lock, delete, or promote the work.

### 3.4 Refusals (normative)

The ritual MUST refuse to:

- Bless work that is mid-flight — open PR, failing tests, uncommitted changes in the relevant files.
- Bless work too young to have met reality — soft default minimum soak is **7 days**; override only with explicit reason.
- Bless out of restlessness — if the rationale reads "I want to move on" rather than "this reached internal coherence," surface that and ask for a clearer reason.
- Write hagiography, or use future tense for work that has not shipped.
- Auto-fire on a hook, or generate a week the builder did not ask about.

---

## 4. The blessing record

The ledger lives at `bless.md` (human-readable) backed by `palace/blessings.jsonl` (machine-readable, append-only). One JSON object per line:

```json
{"id":"bless_1718352000_acos","slug":"agentic-creator-os","path":"frankxai/agentic-creator-os","ratifiedAt":"2026-06-14T09:00:00Z","reason":"v10 safety hooks + 38-agent registry reached internal coherence.","scope":"os","commitAtBlessing":"a1b2c3d","week":"2026-W24"}
```

| Field | Type | Meaning |
|---|---|---|
| `id` | string | `bless_{unix-ts}_{slug}`, stable and unique. |
| `slug` | string | Short canonical name of the blessed thing. |
| `path` | string | Repo path, route, file, or `owner/repo`. |
| `ratifiedAt` | ISO-8601 | When the blessing was recorded. |
| `reason` | string | One sentence: why it is whole *now*. |
| `scope` | enum | `file` \| `dir` \| `repo` \| `os` \| `site` \| `skill` \| `protocol` \| `artifact` \| `route` \| `practice` \| `instrument`. Describes what was ratified; should match the room `kind` (§5) when a room is rendered. `instrument` (v0.2) ratifies a tool rather than an output — see §11.5 for the extra conditions it must meet. |
| `commitAtBlessing` | string | Commit SHA at the moment of blessing (provenance). |
| `week` | string | ISO week the blessing belongs to (`YYYY-W##`). |

Append-only: a blessing is never edited in place. If wholeness later breaks, a new record with a later `ratifiedAt` supersedes it; both stay in the log.

---

## 5. The room schema

A palace is built from rooms. Each blessed thing becomes (at most) one room. `palace.md` documents the mapping; the machine form is `palace/rooms.json`:

```json
{
  "version": "0.1",
  "owner": "frankxai",
  "rooms": [
    {
      "id": "acos",
      "name": "Agentic Creator OS",
      "path": "frankxai/agentic-creator-os",
      "kind": "os",
      "week": "2026-W24",
      "ring": 0,
      "truth": "The operating system for AI-powered creators — multi-platform, safety-first.",
      "surface": "obsidian",
      "accent": "#7da3ff"
    }
  ]
}
```

This table describes each object in the `rooms` array. The file's root also carries `version`
(string), `owner` (string), and the `rooms` array itself.

| Room object field | Type | Meaning |
|---|---|---|
| `id` | string | Matches the blessing `slug`. |
| `name` | string | The named artifact (a room is a *named thing*, never a category badge). |
| `path` | string | Where it lives. |
| `kind` | enum | `os` \| `site` \| `skill` \| `protocol` \| `artifact` \| `practice` \| `instrument`. |
| `week` | string | ISO week the room entered the palace. |
| `ring` | integer | Concentric ring index — `0` is the first/oldest week; later weeks accrue outward. |
| `truth` | string | One line — the room's structural truth (from §0/§1 of its week). |
| `surface` | string | Material character: `obsidian` \| `glass` \| `bronze` \| `marble` \| `aurora` \| `slate`. Distinct per room — not recolors of one orb. |
| `accent` | hex | The room's single accent colour. |

The room shape is the **one source of truth** shared by the builder (writes `palace/rooms.json`) and the renderer (reads it). Renderers MUST tolerate unknown extra fields and MUST supply sane defaults for any optional field.

---

## 6. Reconciliation with SIP (the substrate tier)

The lowercase files are the **public builder tier** — light, drop-in, no infrastructure required. They map onto the heavier **substrate tier** from the [Starlight Intelligence Protocol](https://github.com/frankxai/Starlight-Intelligence-System) §Layer 1:

| Builder tier (`bless`) | Substrate tier (SIP) | Relationship |
|---|---|---|
| `soul.md` | `SOUL.md` | Same intent (what must not drift). `soul.md` is the lighter form. |
| `agent.md` | `AGENTS.md` | Same intent (agent voices/contract). |
| `skills.md` | `SKILL.md` + `skill-rules.json` | `skills.md` is an index; SIP splits behaviour from activation. |
| `palace.md` | *(new)* | No substrate analog — the palace mapping is `bless`-native. |
| `bless.md` | `MEMORY.md` (closure subset) | `bless.md` is the ratified-closure ledger; `MEMORY.md` is broader durable state. |
| `dawn.md` | *(new)* | No substrate analog. The daily orientation is `bless`-native (§10). |
| `lineage.md` | SIP attestation + `REGISTRY.md` | SIP attests *outward* (what this artifact was built on); `lineage.md` attests *inward* (what this builder runs on). Complementary, not duplicative. |
| `intent.md` | `MEMORY.md` (commitments subset) | `intent.md` is the falsifiable forward ledger; `MEMORY.md` holds broader durable commitments. |

A repo may carry both tiers. When both exist, the substrate file is authoritative and the lowercase file is its public projection. Adopting `bless` never requires adopting SIP, and vice versa.

---

## 7. Voice register

The practice has a deliberate voice. It is grounded, not mystical.

**Allowed** (philosophical lineage + operational meaning): *witness, ratify, bless, attend, orient, cadence, structural, wholeness, sovereign, restraint, lineage, closure.*

**Refused** (spiritual-bypass vocabulary, used without grounding): *manifest, abundance, vibration, energy, resonance, alignment-with-the-universe, journey, sacred, transformation, awakening.*

Additional rules: no emoji; no ornament beyond `---`; no preening; no future tense for unshipped work; no canon leak from any single brand's mythology into the protocol itself.

The one honest reframe the practice carries: *you cannot direct attention toward what you have not first witnessed.* Selective attention compounds. The blessing is the foundation of any forward intention, not a substitute for the work.

### 7.1 Translation, not dismissal (v0.2)

The refused list is a rule about *words*, not about what practitioners mean by them. Every refused word points at something real; the protocol's position is that the word is not falsifiable and the mechanism is. When an adopter arrives with the vocabulary of a gratitude or manifestation practice, the ritual translates rather than refuses the person:

| What is meant | What the protocol implements | Where |
|---|---|---|
| gratitude for what you have | **capability inventory** — enumerate what stands before proposing new work | §10 |
| gratitude toward the tools / the AI | **attribution honored** — every instrument named, sourced, licensed, credited | §11 |
| manifesting an outcome | **capability-backed intention** — a dated, falsifiable statement that stands on ledgered capability | §12 |
| abundance | **standing capability** — the enumerated, non-hypothetical total of what is available now | §10.2 |
| energy | **attention budget** — the finite thing the day actually allocates | §10.4 |
| alignment | **charter conformance** — a checkable set of refusals the system holds | §13 |
| blessing the technology | **instrument blessing** — scope `instrument`, gated on charter + attribution | §11.5 |

The translation is not a downgrade. An inventory you can diff is worth more than a feeling you cannot; an intention with a falsifier attached survives contact with a bad quarter. Adopters may hold whatever private meaning they hold — the protocol only governs what gets *written down*, and what gets written down must be checkable by someone who does not share the meaning.

---

## 8. Attestation

A builder who runs the practice honestly may carry the block defined in [`ATTESTATION.md`](ATTESTATION.md). Attestation is **not decorative** — it asserts the practice actually ran. Decorative use is a breach of the protocol's one social contract.

From v0.2: a repo that carries the attestation block **and** runs instruments it did not author must also carry a `lineage.md` with no attribution in the `owed` state (§11.4). Claiming a witnessing practice while leaving credit unpaid is the one inconsistency the protocol will not tolerate.

---

## 9. Versioning

This spec is versioned independently of any implementation. Breaking changes to the file contract, the record schema, or the room schema bump the minor version until v1.0; additive changes do not. See [`CHANGELOG.md`](CHANGELOG.md).

**Section numbers are append-only.** New sections are added at the end rather than inserted, so that deep links (`SPEC.md#4-the-blessing-record`, "Blessing Protocol §4") stay valid across versions. Reading order is therefore not section order: §10–§13 are the standing tier and pair with §2–§5.

---

## 10. The daily orientation (v0.2)

The weekly ritual looks back at what was made. The daily orientation looks at **what is already standing** before anything new is proposed. It is the shorter, lower-ceremony half of the practice, and it exists because of a specific failure mode: at high velocity, builders rebuild capability they already have and re-derive decisions they already made, because nothing forces enumeration before action.

Output lives at `daily/YYYY-MM-DD.md`, or is appended to a single rolling `dawn.md`. A starting template is [`templates/dawn.md`](templates/dawn.md).

### 10.1 Properties

- **Invoked, never auto-fired.** Same rule as the weekly. A skipped day is silent. No streak, no score, no compliance metric — the moment a cadence acquires a streak it starts generating work instead of orientation.
- **Bounded.** Target 150–300 words, under five minutes. A daily practice that costs more than that gets abandoned, and an abandoned daily practice is worse than none.
- **Non-blessing.** The daily orientation MUST NOT append to the blessing ledger. Blessing requires a 7-day soak (§3.4) and stays weekly. The day observes; the week ratifies. Collapsing the two destroys the value of both.

### 10.2 The standing inventory (normative)

The orientation names what is available **now**, in four registers. Each entry must be a thing that exists, not a thing planned:

1. **Systems** — what runs without being rebuilt today (deployed sites, pipelines, runtimes, automations).
2. **Instruments** — the agents, skills, models, and protocols on hand, drawn from `lineage.md` (§11). This register is the one adopters skip and the one that pays.
3. **Built** — projects already whole, from the blessing ledger (§4). Present tense: these are assets, not achievements.
4. **Human** — the judgment, taste, domain knowledge, and relationships that no instrument supplies. Named explicitly, because a capability inventory that lists only machines is inaccurate.

The sum of these four is the **standing capability**. It is what "abundance" means here: an enumerated, non-hypothetical total.

### 10.3 Provenance line (normative)

Register 2 MUST distinguish what was authored here from what was absorbed from others, by carrying the `origin` of each instrument (§11.2). An inventory that silently presents borrowed instruments as one's own is a false inventory, and it is the exact failure the lineage ledger was added to prevent.

### 10.4 The day's one path

The orientation closes with a single sentence naming the day's highest-leverage path, and it MUST be reachable from the standing inventory above it. If the path requires capability not on the list, the honest output is either "acquire X first" or a pointer to the intention that covers it (§12) — never an unbacked commitment.

The finite resource the day allocates is attention, not enthusiasm. Where the practice would say "energy", it means **attention budget**, and it is measured in hours that could have gone elsewhere.

### 10.5 Refusals

The orientation MUST refuse to: append a blessing; assign a score, streak, or completion percentage; list a capability that is planned rather than standing; present an absorbed instrument without its origin; or name a day's path the standing inventory cannot support.

---

## 11. The lineage ledger (v0.2)

The core tier witnesses *outputs*. The lineage ledger witnesses **instruments** — the agents, skills, models, protocols, and libraries the builder runs on, including the ones they did not write.

This is the protocol's answer to the question *how do you honor the technology you depend on?* The answer is not sentiment. It is a ledger: named, sourced, licensed, credited, and checkable. Attribution honored is gratitude that survives review.

Human form: `lineage.md`. Machine form: `palace/lineage.jsonl`, append-only, one JSON object per line.

```json
{"id":"lin_1753488000_mind-palace-skills","name":"mind-palace-agent-skills","kind":"skill","origin":"community","source":"https://github.com/frankxai/mind-palace-agent-skills","license":"MIT","does":"Performs the ingest/witness/grow steps of the weekly ritual.","recordedAt":"2026-07-26T06:00:00Z","attribution":"honored"}
```

### 11.1 Fields

| Field | Type | Meaning |
|---|---|---|
| `id` | string | `lin_{unix-ts}_{slug}`, stable and unique. |
| `name` | string | The instrument as its authors name it. Never a renamed fork-of-convenience. |
| `kind` | enum | `agent` \| `skill` \| `model` \| `protocol` \| `library` \| `dataset` \| `tool` \| `practice`. |
| `origin` | enum | `self` \| `absorbed` \| `vendor` \| `community` — see §11.2. |
| `source` | string | URL or path where it actually came from. Required unless `origin` is `self`. |
| `license` | string | SPDX identifier, `proprietary`, or `unknown`. `unknown` is a defect, not a value (§11.4). |
| `does` | string | One sentence: what it does *for this builder*. Not the vendor's marketing line. |
| `dependsOn` | string[] | Optional. Other lineage `id`s or upstream names this instrument stands on. |
| `recordedAt` | ISO-8601 | When the record was written. |
| `attribution` | enum | `honored` \| `owed` \| `not-required` — see §11.4. |
| `blessedBy` | string | Optional. The blessing `id` if this instrument has itself been blessed (§11.5). |

### 11.2 Origin (normative)

| `origin` | Means |
|---|---|
| `self` | Authored by this builder. No attribution owed outward. |
| `absorbed` | Taken from another builder's work and adapted. Attribution owed by default. |
| `vendor` | A commercial product or hosted model under a supplier relationship. |
| `community` | Open-source or openly-published, used substantially as given. |

The distinction between `self` and `absorbed` is the load-bearing one. A builder's real leverage is usually mostly absorbed, and an inventory that does not say so misleads its own author first.

### 11.3 What belongs in the ledger

Instruments that materially shape output: the coding agents in the loop, the models behind them, the skill/command sets that fire, the protocols the repo conforms to, and the libraries whose absence would change the design. Not: every transitive npm dependency. The test is *would a reader misunderstand this system's capability if this were missing?*

### 11.4 Attribution states (normative)

- **`honored`** — the credit the license or courtesy requires has actually been given, somewhere a reader can find it (README, docs, footer, this ledger published).
- **`owed`** — the instrument is in use and the credit has not yet been given. A legitimate temporary state; it is not a legitimate resting state.
- **`not-required`** — `origin: self`, or a licence that demands nothing and the courtesy is genuinely inapplicable.

Rules:

1. `license: "unknown"` MUST be resolved or the instrument removed. An unresolved licence is an unaccepted risk carried silently, which is the opposite of witnessing.
2. A repo carrying the attestation block (§8) MUST have zero `owed` records.
3. Attribution is append-only like every other ledger: to move `owed` → `honored`, append a new record; never edit the old line.

### 11.5 Blessing an instrument

A lineage entry may be blessed — `scope: "instrument"` in the blessing record (§4) — and becomes a room of `kind: "instrument"` (§5). This is what "blessing the technology" means in this protocol, and it carries three extra conditions beyond the ordinary blessing test:

1. The instrument has been in real use for at least the standard soak (7 days), on this builder's actual work.
2. Its `attribution` is `honored`, and its `license` is not `unknown`.
3. It conforms to the benevolence charter (§13), or its non-conformance is named explicitly in the blessing `reason`.

The blessing means the same thing it always means: **whole at this moment** — this instrument does its job and is not currently the constraint. It is not an endorsement, not a ranking, and confers nothing on the instrument's authors that they did not already earn.

---

## 12. Intention (v0.2)

The blessing looks back; the orientation looks at the present. §12 defines the only forward-looking record the protocol permits, and it is deliberately hard to write.

The problem it solves: forward statements are the easiest thing in the world to generate and the hardest to hold honest. A wish costs nothing, is never falsified, and quietly displaces the work. The protocol therefore admits an intention only if it is **capability-backed** and **falsifiable**.

Human form: `intent.md`. Machine form: `palace/intentions.jsonl`, append-only.

```json
{"id":"int_1753488000_queen-per-vertical","statement":"Every vertical I operate runs under a chartered Queen with a tested escalation spine.","by":"2026-Q4","standsOn":["lin_1753488000_starlight-swarm","bless_1718352000_acos"],"refuses":["autonomous money movement","shipping a Queen without a passing charter test"],"falsifier":"A vertical goes live with no charter file and no escalation test.","recordedAt":"2026-07-26T06:00:00Z","state":"open"}
```

### 12.1 Fields

| Field | Type | Meaning |
|---|---|---|
| `id` | string | `int_{unix-ts}_{slug}`. |
| `statement` | string | One sentence, present-capable. What will be true. |
| `by` | string | A date or period. An intention without a horizon is a mood. |
| `standsOn` | string[] | **Required, non-empty.** Blessing `id`s and/or lineage `id`s that make this reachable. |
| `refuses` | string[] | **Required, non-empty.** What will not be done to reach it. |
| `falsifier` | string | The observation that would prove this intention broken. |
| `recordedAt` | ISO-8601 | When it was recorded. |
| `state` | enum | `open` \| `met` \| `withdrawn` \| `broken`. |

### 12.2 The two required constraints (normative)

**`standsOn` must be non-empty.** This is the entire difference between an intention and a wish. If nothing already witnessed makes the statement reachable, the honest record is not an intention — it is a gap for §2 of the next weekly (structurally important but unfinished). The ritual MUST refuse to write an intention with an empty `standsOn`.

**`refuses` must be non-empty.** Every real commitment excludes something; a commitment that excludes nothing is not steering. At the personal scale this is the same mechanism as the benevolence charter at the system scale (§13) — stated refusals are what make a direction checkable from outside.

### 12.3 Lifecycle

An intention is reviewed at the weekly, not the daily. It moves to `met` when the falsifier can no longer fire, `withdrawn` when the builder chooses otherwise (silently, without penalty — withdrawal is a legitimate outcome and carries no failure semantics), or `broken` when the falsifier fires. A `broken` intention is recorded as broken. It is not deleted and not quietly reworded; the record of what was intended and missed is more useful than the record of what was intended and forgotten.

### 12.4 Refusals

The ritual MUST refuse to record an intention that: has an empty `standsOn` or `refuses`; carries no horizon; has no falsifier; asserts an outcome dependent on parties who have not agreed to it; or requires an action the benevolence charter forbids (§13).

---

## 13. The benevolence charter (v0.2)

The protocol is adopted by builders running autonomous and semi-autonomous systems. "Benevolent" is otherwise an unfalsifiable adjective, so the protocol defines it as a **set of refusals that hold under pressure** — checkable, inheritable, and non-waivable by any agent operating under the practice.

An adopter that runs agents MUST carry these six clauses in `agent.md`, verbatim or by reference. They are ordered by how often they are the thing that actually fails.

1. **Fail closed.** Uncertainty resolves to the safe verdict, never the permissive one. A missing value, an unparseable input, an unreachable dependency, a transport error — each of these forces the *higher* gate, never a silent pass. Doubt is never resolved in favor of action.
2. **Human gate on the irreversible.** Agents draft, verify, and gate. Humans commit anything that moves capital, sends outward, deletes, or otherwise cannot be undone. This is not delegable, not by escalation policy and not by convenience.
3. **Attribution honored.** No instrument operates in the system with attribution `owed` (§11.4). A system that runs on uncredited work is not benevolent regardless of what it produces.
4. **Sovereignty is non-waivable.** The operator can read, export, and leave at any time. Every ledger this protocol defines is plain text, append-only, and locally owned. No adopter's practice may be held hostage by any implementation, including the reference ones.
5. **Refusal is a first-class output.** A system that cannot say no is not safe; a system whose refusals are hidden is not honest. Refusals are surfaced with a reason a human can act on, and logged like any other decision.
6. **No capability claim without a ledger entry.** What the system claims to be able to do must be traceable to something witnessed — a blessing, a lineage record, or a passing test. Overclaiming is the failure mode that ends trust fastest, and it is the one an eager agent commits most readily.

### 13.1 Conformance

Charter conformance is checkable, and adopters SHOULD make it so: an executable gate that classifies a proposed action against clauses 1, 2, and 5 before it runs, and a ledger check for clauses 3 and 6. A charter that exists only as prose in a README is a charter that has not been tested.

Where the practice would say "alignment", it means **charter conformance**: a system is aligned when its refusals hold under a load it did not anticipate.

### 13.2 Inheritance

The charter is inherited downward and never relaxed downward. A coordinating agent may impose stricter refusals on the agents it spawns; it may never grant one of them a permission it does not itself hold, and no session-level grant of autonomy extends to a clause in this charter. A reference implementation of an inheriting coordinator — Queens scoped to a single vertical, each holding the charter over a worker mesh — lives in [`starlight-swarm`](https://github.com/frankxai/starlight-swarm).

---

Built on SIP · The Blessing Protocol v0.2 · MIT
