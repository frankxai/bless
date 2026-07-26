# Changelog

All notable changes to the Blessing Protocol spec. The spec is versioned independently of any
implementation. Format loosely follows Keep a Changelog.

## [0.2.0] — 2026-07-26

The standing tier. v0.1 witnesses what a builder *made*; v0.2 adds the half that witnesses what
they already *have* — the systems running, the instruments on hand (including the AI), and what
that capability is being pointed at. Additive throughout: every v0.1 file, schema, and section
anchor is unchanged.

### Added
- **Standing tier file contract** — `dawn.md`, `lineage.md`, `intent.md` (`SPEC.md` §2, `templates/`).
- **The daily orientation** — bounded, invoked, non-blessing. The four-register standing inventory
  (systems · instruments · built · human), the provenance line, the day's one path, and the
  attention budget (`SPEC.md` §10).
- **Lineage ledger** — `palace/lineage.jsonl` schema: instruments with kind, origin, source,
  licence, and attribution state. `unknown` licences must be resolved; attestation requires zero
  `owed` records (`SPEC.md` §11).
- **Instrument blessing** — `scope: "instrument"` and room `kind: "instrument"`, gated on soak +
  honored attribution + known licence + charter conformance (`SPEC.md` §11.5).
- **Intention record** — `palace/intentions.jsonl` schema. Non-empty `standsOn` and `refuses` are
  required; an intention without ledgered capability behind it is a wish and is refused
  (`SPEC.md` §12).
- **The benevolence charter** — six non-waivable clauses inherited downward and never relaxed
  downward, carried in `agent.md` (`SPEC.md` §13).
- **Voice translation table** — the gratitude/manifestation vocabulary mapped to the mechanisms
  that implement it, rather than refused at the door (`SPEC.md` §7.1).
- Version-consistency check in `scripts/validate-protocol.mjs`; the three new templates are now
  validated alongside the core six.

### Changed
- Attestation block gains an optional `Lineage:` line and a fifth rule — attribution must be clear
  (`ATTESTATION.md`).
- Blessing `scope` and room `kind` enums extended with `instrument` (`SPEC.md` §4, §5).
- SIP reconciliation table extended with the three standing-tier files (`SPEC.md` §6).
- Section numbers are now explicitly **append-only**, so existing deep links stay valid across
  versions (`SPEC.md` §9). §10–§13 are the standing tier and pair with §2–§5.

### Notes
- No breaking changes. A v0.1 adopter is a valid v0.2 adopter until they run agents they did not
  author *and* carry the attestation block — at which point `lineage.md` becomes required.
- The charter's reference implementation (Queens holding it over a worker mesh) lives in
  [`starlight-swarm`](https://github.com/frankxai/starlight-swarm).

## [0.1.0] — 2026-06-14

### Added
- Initial public draft of the Blessing Protocol.
- Five-file contract: `soul.md`, `agent.md`, `skills.md`, `palace.md`, `bless.md` (`templates/`).
- The weekly ritual: inputs, six-section output structure, refusals (`SPEC.md` §3).
- Blessing record schema — `blessings.jsonl` (`SPEC.md` §4).
- Room schema — `rooms.json` — the bridge to a visual palace (`SPEC.md` §5).
- Reconciliation table with the Starlight Intelligence Protocol substrate tier (`SPEC.md` §6).
- Voice register: allowed + refused vocabulary (`SPEC.md` §7).
- Attestation block + honesty rules (`ATTESTATION.md`).
- Reference-adoption pointer (`examples/frankx-mind-palace.md`).

### Notes
- Extracted and generalised from the private `starlight-chronicle` practice in the FrankX OS.
- The FrankX `/sunday`, `/palace`, `/bless` commands remain the reference implementation.
