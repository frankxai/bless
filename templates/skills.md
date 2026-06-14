<!--
  skills.md — the repo's skills index. What agents can do here, and when each fires.
  This is the public-tier projection of SIP's SKILL.md + skill-rules.json.
  If you have no custom skills yet, list the blessing skills you rely on and delete the rest.
-->

# skills — <name>

> What agents can do in this repo, and the trigger for each.

## Inherits

- `agent.md` — the operating contract.

## Skills

| Skill | Fires when | Does |
|---|---|---|
| `weekly-blessing` | "run the weekly blessing", Sunday review | Witnesses the week, ratifies what is whole, writes `weekly/YYYY-W##.md`. |
| `palace-build` | "build the palace", after a blessing | Turns the ledger into `palace/rooms.json` + a rendered palace. |
| `<your-skill>` | <trigger keywords> | <what it does> |

## Where skills live

- Portable blessing skills: [`mind-palace-agent-skills`](https://github.com/frankxai/mind-palace-agent-skills).
- Repo-local skills: `<path, e.g. .claude/skills/ or skills/>`.

---

Built on SIP · skills.md (bless v0.1)
