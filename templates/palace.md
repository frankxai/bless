<!--
  palace.md — how this repo's blessed work becomes rooms in the palace.
  A room is a *named thing*, never a category badge. Give each a distinct surface so the
  palace reads as a place, not six recolors of one orb.
-->

# palace — <name>

> The manifest. How blessed work becomes rooms, and how the palace grows.

## Inherits

- `soul.md` — the palace's character comes from here.
- `bless.md` — only blessed things become rooms.

## The rule of the palace

- **One blessing → at most one room.** Unblessed work has no room yet.
- **Rooms accrue by week.** Each week is a concentric `ring`; ring `0` is the oldest.
- **A room is a named artifact.** It has weight and a one-line truth — not a label.
- The palace gets *more beautiful*, not more crowded: restraint over accumulation.

## Surface vocabulary

Each room picks one surface so the place has texture:

`obsidian` · `glass` · `bronze` · `marble` · `aurora` · `slate`

Pick by the nature of the thing — infrastructure reads `slate`/`obsidian`; creative work reads
`aurora`/`glass`; durable canon reads `bronze`/`marble`.

## Data

- Machine form: `palace/rooms.json` (schema: Blessing Protocol §5).
- The renderer (HTML / React / Three.js) reads `rooms.json` and supplies its own defaults.

## This palace's ordering

<Describe how you want rooms arranged — by domain, by chronology, by importance.
 Default: chronological rings, newest outermost.>

---

Built on SIP · palace.md (bless v0.1)
