<!--
  bless.md — the one indispensable file. Ritual config + the human-readable ledger.
  The machine-readable ledger is palace/blessings.jsonl (append-only).
-->

# bless — <name>

> What has been witnessed whole here, and on what cadence.

## Inherits

- `soul.md` — the voice of the witness.

## Cadence

- **Weekly** (Sunday): the active ritual. Invoked, never auto-fired. A skipped week is silent.
- Higher cadences (monthly / quarterly / annual) activate only after the weekly has proven it runs.

## What is blessable here

- <Scopes that can be blessed in this repo: a route, a module, an OS, a practice…>
- A thing must be **whole at this moment** — not merely shipped. Minimum soak: 7 days.

## What blessing means

> Whole at this moment. Further iteration is creator-restlessness, not improvement.
> Future-you may extend it from a new vantage; present-you does not.

Closure semantics (Zeigarnik), not metaphysics. A blessing is falsifiable and append-only.

## The ledger

Machine form: `palace/blessings.jsonl` (one record per line; schema in Blessing Protocol §4).
Human form, newest first:

| Week | Blessed | Why it is whole |
|---|---|---|
| <YYYY-W##> | `<slug>` | <one sentence> |

## Refusals

The witness refuses to bless what is mid-flight (open PR, failing tests, uncommitted changes),
what is too young to have met reality, and what is offered out of restlessness rather than coherence.

---

Built on SIP · bless.md (bless v0.1)
