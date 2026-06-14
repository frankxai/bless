# The Blessing Protocol — v0.1

> A weekly practice for witnessing work and growing a palace from it.
> This document is the normative specification. The [`templates/`](templates/) are the copy-paste starting points.

Status: **v0.1 (draft, stable enough to adopt)** · License: MIT · Built on [SIP](https://github.com/frankxai/Starlight-Intelligence-System)

---

## 1. Scope

The Blessing Protocol defines:

1. A **five-file contract** any repository adopts to become *blessable*.
2. A **weekly ritual** (the blessing) with a fixed output structure.
3. A **blessing record** schema (`blessings.jsonl`) — the durable ledger.
4. A **room schema** (`rooms.json`) — the bridge from blessed work to a visual palace.
5. A **voice register** — the language the practice uses, and the language it refuses.
6. An **attestation** — how a builder honestly claims "Blessed".

It does **not** define how the palace is rendered (HTML, React, Three.js, print — the builder's choice), nor which agent runs the ritual. Reference implementations exist; none is mandatory.

---

## 2. The five-file contract

A blessable repo carries these at the root, or inside a `.<name>/` directory:

| File | Required | Purpose |
|---|---|---|
| `soul.md` | recommended | Essence — the thing that must not drift. Everything else inherits from it. |
| `agent.md` | if >0 agents | How agents behave in this repo. The operating contract. |
| `skills.md` | optional | The repo's skills index — what agents can do, and the trigger for each. |
| `palace.md` | required for a palace | Maps the repo's work to rooms: surfaces, accents, ordering. |
| `bless.md` | **required** | Ritual config + the blessing ledger. The one indispensable file. |

The minimum viable adoption is `bless.md` alone. `soul.md` is strongly recommended because the ritual's voice and the palace's character both inherit from it.

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

Length target: 800–1500 words. Surgical, not exhaustive. No hagiography — a blessed thing is named, not celebrated.

### 3.3 What blessing means (normative definition)

> **Blessed = whole at this moment.** Further iteration is creator-restlessness, not improvement. Future-you may extend it from a new vantage; present-you does not.

This is closure semantics (Kahneman/Zeigarnik), **not** a metaphysical claim. A blessing is falsifiable: new facts may break wholeness, and the next week records it. A blessing does not lock, delete, or promote the work.

### 3.4 Refusals (normative)

The ritual MUST refuse to:

- Bless work that is mid-flight — open PR, failing tests, uncommitted changes in the relevant files.
- Bless work too young to have met reality — soft default minimum soak is **7 days**; override only with explicit reason.
- Bless out of restlessness — if the rationale reads "I want to move on" rather than "this reached internal coherence," surface that and ask for a clearer reason.
- Write hagiography, or use future tense for work that has not shipped.
- Auto-fire on a hook, or generate a week the builder did not ask about.

---

## 4. The blessing record

The ledger lives at `bless.md` (human-readable) backed by `blessings.jsonl` (machine-readable, append-only). One JSON object per line:

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
| `scope` | enum | `file` \| `dir` \| `repo` \| `os` \| `route` \| `practice`. |
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

| Field | Type | Meaning |
|---|---|---|
| `id` | string | Matches the blessing `slug`. |
| `name` | string | The named artifact (a room is a *named thing*, never a category badge). |
| `path` | string | Where it lives. |
| `kind` | enum | `os` \| `site` \| `skill` \| `protocol` \| `artifact` \| `practice`. |
| `week` | string | ISO week the room entered the palace. |
| `ring` | integer | Concentric ring index — `0` is the first/oldest week; later weeks accrue outward. |
| `truth` | string | One line — the room's structural truth (from §0/§1 of its week). |
| `surface` | string | Material character: `obsidian` \| `glass` \| `bronze` \| `marble` \| `aurora` \| `slate`. Distinct per room — not recolors of one orb. |
| `accent` | hex | The room's single accent colour. |

The room shape is the **one source of truth** shared by the builder (writes `rooms.json`) and the renderer (reads it). Renderers MUST tolerate unknown extra fields and MUST supply sane defaults for any optional field.

---

## 6. Reconciliation with SIP (the substrate tier)

The lowercase five files are the **public builder tier** — light, drop-in, no infrastructure required. They map onto the heavier **substrate tier** from the [Starlight Intelligence Protocol](https://github.com/frankxai/Starlight-Intelligence-System) §Layer 1:

| Builder tier (`bless`) | Substrate tier (SIP) | Relationship |
|---|---|---|
| `soul.md` | `SOUL.md` | Same intent (what must not drift). `soul.md` is the lighter form. |
| `agent.md` | `AGENTS.md` | Same intent (agent voices/contract). |
| `skills.md` | `SKILL.md` + `skill-rules.json` | `skills.md` is an index; SIP splits behaviour from activation. |
| `palace.md` | *(new)* | No substrate analog — the palace mapping is `bless`-native. |
| `bless.md` | `MEMORY.md` (closure subset) | `bless.md` is the ratified-closure ledger; `MEMORY.md` is broader durable state. |

A repo may carry both tiers. When both exist, the substrate file is authoritative and the lowercase file is its public projection. Adopting `bless` never requires adopting SIP, and vice versa.

---

## 7. Voice register

The practice has a deliberate voice. It is grounded, not mystical.

**Allowed** (philosophical lineage + operational meaning): *witness, ratify, bless, attend, orient, cadence, structural, wholeness, sovereign, restraint, lineage, closure.*

**Refused** (spiritual-bypass vocabulary, used without grounding): *manifest, abundance, vibration, energy, resonance, alignment-with-the-universe, journey, sacred, transformation, awakening.*

Additional rules: no emoji; no ornament beyond `---`; no preening; no future tense for unshipped work; no canon leak from any single brand's mythology into the protocol itself.

The one honest reframe the practice carries: *you cannot direct attention toward what you have not first witnessed.* Selective attention compounds. The blessing is the foundation of any forward intention, not a substitute for the work.

---

## 8. Attestation

A builder who runs the practice honestly may carry the block defined in [`ATTESTATION.md`](ATTESTATION.md). Attestation is **not decorative** — it asserts the practice actually ran. Decorative use is a breach of the protocol's one social contract.

---

## 9. Versioning

This spec is versioned independently of any implementation. Breaking changes to the file contract, the record schema, or the room schema bump the minor version until v1.0; additive changes do not. See [`CHANGELOG.md`](CHANGELOG.md).

---

Built on SIP · The Blessing Protocol v0.1 · MIT
