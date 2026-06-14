#!/usr/bin/env node
/**
 * validate-protocol.mjs — CI guard for the Blessing Protocol repo.
 *
 * Asserts:
 *  1. the five standard templates + weekly.md exist under templates/
 *  2. SPEC.md references each of the five files + weekly.md
 *  3. ATTESTATION.md exists
 *  4. every local markdown link in README.md + SPEC.md resolves on disk
 *
 * Zero-dependency. Exit 0 on success, 1 with specific errors.
 */
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const p = (rel) => resolve(ROOT, rel);

// 1. templates exist
const TEMPLATES = ["soul", "agent", "skills", "palace", "bless", "weekly"];
for (const t of TEMPLATES) {
  if (!existsSync(p(`templates/${t}.md`))) errors.push(`missing template: templates/${t}.md`);
}

// 2. SPEC.md references each file
if (!existsSync(p("SPEC.md"))) {
  errors.push("missing SPEC.md");
} else {
  const spec = readFileSync(p("SPEC.md"), "utf8");
  for (const t of TEMPLATES) {
    if (!spec.includes(`${t}.md`)) errors.push(`SPEC.md does not reference ${t}.md`);
  }
}

// 3. attestation exists
if (!existsSync(p("ATTESTATION.md"))) errors.push("missing ATTESTATION.md");

// 4. local markdown links resolve
const LINK_RE = /\[[^\]]*\]\(([^)]+)\)/g;
for (const file of ["README.md", "SPEC.md", "CONTRIBUTING.md"]) {
  if (!existsSync(p(file))) continue;
  const text = readFileSync(p(file), "utf8");
  let m;
  while ((m = LINK_RE.exec(text)) !== null) {
    let target = m[1].trim();
    if (/^(https?:|mailto:|#)/.test(target)) continue; // external or anchor
    target = target.split("#")[0].split("?")[0];
    if (!target) continue;
    if (!existsSync(resolve(ROOT, target))) {
      errors.push(`${file}: broken local link → ${target}`);
    }
  }
}

if (errors.length) {
  console.error("FAIL — Blessing Protocol validation");
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log("OK — five files + weekly template present, SPEC references intact, local links resolve.");
