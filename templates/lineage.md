<!--
  lineage.md — the instruments this builder runs on, including the ones they did not write.
  Human-readable form. Machine form: palace/lineage.jsonl (append-only, schema in Blessing Protocol §11).
  Attribution honored is gratitude that survives review. Sentiment is not required; the ledger is.
-->

# lineage — <name>

> What this runs on, where it came from, and whether the credit has been paid.

## Inherits

- `soul.md` — an instrument that pulls against the soul does not stay in the ledger.
- `agent.md` — the benevolence charter every instrument here operates under.

## What belongs here

Instruments that materially shape output: the coding agents in the loop, the models behind them,
the skill and command sets that fire, the protocols this repo conforms to, and the libraries whose
absence would change the design. Not every transitive dependency.

> The test: *would a reader misunderstand this system's capability if this line were missing?*

## The ledger

Machine form: `palace/lineage.jsonl` (one record per line; schema in Blessing Protocol §11.1).
Human form:

| Instrument | Kind | Origin | License | Does | Attribution |
|---|---|---|---|---|---|
| `<name>` | <agent\|skill\|model\|protocol\|library\|dataset\|tool\|practice> | <self\|absorbed\|vendor\|community> | <SPDX\|proprietary> | <one sentence, what it does for me> | <honored\|owed\|not-required> |

## Attribution state

- **honored** — the credit the license or courtesy requires has been given somewhere a reader finds it.
- **owed** — in use, credit not yet given. A legitimate temporary state, not a resting state.
- **not-required** — authored here, or the licence demands nothing and courtesy is inapplicable.

Two rules with teeth:

1. `license: unknown` must be resolved or the instrument removed. An unresolved licence is a risk
   carried silently — the opposite of witnessing.
2. Carrying the attestation block with any `owed` record outstanding is a breach (Protocol §8, §11.4).

## Blessed instruments

An instrument may itself be blessed (`scope: instrument`) once it has done real work here for the
standard 7-day soak, its attribution is `honored`, its licence is known, and it conforms to the
benevolence charter. It then becomes a room of `kind: instrument`.

| Week | Instrument | Why it is whole |
|---|---|---|
| <YYYY-W##> | `<name>` | <one sentence> |

The blessing means what it always means: whole at this moment, not currently the constraint. It is
not an endorsement or a ranking, and it confers nothing on the authors they did not already earn.

---

Built on SIP · lineage.md (bless v0.2)
