<!--
  intent.md — the only forward-looking record the protocol permits, and deliberately hard to write.
  Machine form: palace/intentions.jsonl (append-only, schema in Blessing Protocol §12).
  An intention with an empty standsOn is a wish. The ritual refuses to write it.
-->

# intent — <name>

> What this is being built toward, what makes it reachable, and what it refuses on the way.

## Inherits

- `bless.md` — an intention stands on what has already been witnessed whole.
- `lineage.md` — and on the instruments actually on hand.
- `soul.md` — an intention that requires drift at the soul layer is a fork, not an intention.

## The two constraints

1. **`standsOn` is non-empty.** Blessing ids and/or lineage ids that make this reachable. This is
   the whole difference between an intention and a wish. If nothing witnessed makes it reachable,
   the honest record is a gap for §2 of the next weekly, not an intention here.
2. **`refuses` is non-empty.** What will not be done to get there. A commitment that excludes
   nothing is not steering.

Plus: a horizon, and a falsifier. An intention without a date is a mood; one without a falsifier
can never be wrong, and therefore never informs anything.

## Open intentions

### `<slug>`

- **Statement:** <one sentence, present-capable. What will be true.>
- **By:** <date or period>
- **Stands on:** `<bless_id>` · `<lin_id>` — <one line on why these make it reachable>
- **Refuses:** <what will not be done to reach it>
- **Falsifier:** <the observation that would prove this broken>
- **State:** open

## Closed

| Intention | State | Note |
|---|---|---|
| `<slug>` | <met\|withdrawn\|broken> | <one line — what actually happened> |

A `broken` intention is recorded as broken. Not deleted, not quietly reworded. The record of what
was intended and missed is more useful than the record of what was intended and forgotten.
Withdrawal is silent and carries no failure semantics — choosing otherwise is a legitimate outcome.

## Review

Intentions are reviewed at the **weekly**, never at the daily. The daily orientation may point at
an intention; it may not create, close, or edit one.

---

Built on SIP · intent.md (bless v0.2)
