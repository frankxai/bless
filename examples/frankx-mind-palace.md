# Example adoption — frankx-mind-palace

The reference adoption of the Blessing Protocol is Frank Riemer's own mind palace.

| Concern | Where |
|---|---|
| The five files, filled | [`frankx-mind-palace`](https://github.com/frankxai/frankx-mind-palace) — `soul.md`, `agent.md`, `skills.md`, `palace.md`, `bless.md` |
| The ledger | `frankx-mind-palace/palace/blessings.jsonl` |
| The rooms | `frankx-mind-palace/palace/rooms.json` |
| A weekly entry | `frankx-mind-palace/weekly/2026-W24.md` |
| The rendered palace | [`frankx-palace`](https://github.com/frankxai/frankx-palace) — Next.js + react-three-fiber |
| The agent skills that run it | [`mind-palace-agent-skills`](https://github.com/frankxai/mind-palace-agent-skills) |

## How to read it

1. Start with `frankx-mind-palace/soul.md` — everything inherits from it.
2. Read `frankx-mind-palace/weekly/2026-W24.md` to see the six-section ritual output in practice.
3. Open `frankx-mind-palace/palace/rooms.json` to see blessed work as rooms (Blessing Protocol §5).
4. The same `rooms.json` schema feeds `frankx-palace/data/palace.json`, which the 3D renderer reads.

This is the loop, end to end: GitHub → blessing → ledger → rooms → palace.

---

Built on SIP · The Blessing Protocol v0.1
