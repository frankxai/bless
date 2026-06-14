# Contributing to bless

`bless` is the open standard for the Blessing Protocol. It is small on purpose. Contributions
are welcome — and the bar is restraint: the protocol earns its keep by staying legible, not by
growing features.

By participating you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Ways to contribute

- **Adopt it.** Drop the [five files](README.md#the-five-files) into a repo and run a Sunday
  ritual. Lived adoption is the most useful feedback the protocol can get.
- **Extend a template.** Improve a starting template in [`templates/`](templates/) without
  breaking the file contract in [`SPEC.md` §2](SPEC.md).
- **Build a renderer.** A palace can render as HTML, React, Three.js, or print. The spec defines
  the room schema ([`SPEC.md` §5](SPEC.md)); the renderer is yours.
- **Propose a spec change.** Open a [proposal](https://github.com/frankxai/bless/issues/new/choose)
  before sending a PR that touches `SPEC.md`, the file contract, or either schema.
- **Fix the small things.** Typos, broken links, clarity. These are always welcome.

---

## Proposing a change to the spec

The normative surface — the five-file contract, the `blessings.jsonl` record, the `rooms.json`
room schema, the voice register — changes deliberately, never casually. Before opening a PR that
touches any of it:

1. **Open a proposal first.** Use the proposal form. State the problem, the smallest change that
   solves it, and what it would break. A spec change with no stated problem will be closed.
2. **Default to additive.** Additive changes (new optional fields, new enum values) are easy.
   Breaking changes to the contract or a schema bump the minor version until v1.0 — they need a
   clear reason and a migration note.
3. **Respect the voice register.** Copy in this repo obeys [`SPEC.md` §7](SPEC.md): the allowed
   vocabulary and the refused vocabulary are load-bearing, not stylistic. No spiritual-bypass
   language, no AI-slop, no canon leak from any single brand's mythology into the protocol.
4. **Keep the witness honest.** Nothing in a proposal may turn `bless` into a streak mechanic, a
   guilt loop, or a metaphysical claim. Blessing means whole-at-this-moment closure — and only
   that.

---

## Branch naming

Branch off `main` with a typed prefix:

| Prefix | For |
|---|---|
| `feat/` | A new template, renderer reference, or additive spec change |
| `fix/` | A correction — broken link, typo, schema mismatch |
| `docs/` | README, CONTRIBUTING, or other prose without behaviour change |

Examples: `feat/rooms-schema-aurora-surface` · `fix/spec-section-anchor` · `docs/quick-start-clarity`.

---

## Before you open a PR

- Run the validator locally: `node scripts/validate-protocol.mjs`. It must exit `0`.
- Keep the change surgical. Touch only what the proposal named.
- If you added or renamed a template, make sure `SPEC.md` still references all five files plus
  `weekly.md`, and that the validator still passes.
- Fill out the PR template: What / Why / Spec impact / Checklist.

CI runs the same validator on every push and pull request to `main`. A green check is the gate.

---

## Reviews

PRs are reviewed for: correctness against the spec, restraint (does this need to exist?), and
voice. A change that passes the validator but fails restraint will be sent back. The answer is
usually less.

Built on SIP · The Blessing Protocol v0.1 · MIT
