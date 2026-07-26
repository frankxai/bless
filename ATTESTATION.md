# Attestation

A builder who runs the Blessing Protocol honestly may carry this block. It is a signal that the
practice *actually ran* — not a badge.

## The block

```
Blessed · <YYYY-W##> · whole-at-this-moment
Practice: The Blessing Protocol v0.2 · github.com/frankxai/bless
Ledger: <N> blessings across <M> weeks · last witnessed <ISO date>
Lineage: <K> instruments · attribution clear
```

The `Lineage` line is required for any repo that runs instruments it did not author, and omitted
otherwise. "Attribution clear" asserts zero `owed` records — it is a claim, and rule 5 makes it a
falsifiable one.

Inline short form, for a README or footer:

```
Built on SIP · Blessed (bless v0.2)
```

## Rules

1. **Attestation is not decorative.** It asserts the weekly ritual ran and the ledger is real.
   A repo that carries the block but has an empty or fabricated ledger is in breach of the one
   social contract the protocol has.
2. **Honest counts only.** `<N>`, `<M>` and `<K>` come from `palace/blessings.jsonl` and
   `palace/lineage.jsonl` — never hand-inflated.
3. **No metaphysical claim.** "Blessed" means whole-at-this-moment closure, as defined in
   [`SPEC.md` §3.3](SPEC.md). The block never implies more than that.
4. **Drop it freely.** If the practice lapses, remove the block. Lapsing is silent and carries no
   penalty; falsely attesting does not.
5. **Attribution must be clear.** A repo running instruments it did not author may carry this block
   only with zero `owed` records in its lineage ledger ([`SPEC.md` §11.4](SPEC.md)). Claiming a
   witnessing practice while leaving credit unpaid is the one inconsistency the protocol will not
   tolerate — it is cheap to fix and expensive to the standard if tolerated.

The compounding value of attestation depends on it staying an honest signal. If it inflates, every
adopter loses the leverage it was meant to give.

---

Built on SIP · The Blessing Protocol v0.2 · MIT
