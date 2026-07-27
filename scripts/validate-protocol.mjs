#!/usr/bin/env node
/**
 * validate-protocol.mjs — CI guard for the Blessing Protocol repo.
 *
 * Asserts:
 *  1. every standard template (core + standing tier) + weekly.md exists under templates/
 *  2. SPEC.md references each template file
 *  3. ATTESTATION.md exists
 *  4. every local markdown link in README.md + SPEC.md resolves on disk
 *  5. the spec version is stated consistently across SPEC.md, README.md and ATTESTATION.md
 *
 * Zero-dependency. Exit 0 on success, 1 with specific errors.
 */
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const p = (rel) => resolve(ROOT, rel);

// 1. templates exist — core tier (v0.1) + standing tier (v0.2) + the weekly output template
const TEMPLATES = ["soul", "agent", "skills", "palace", "bless", "weekly", "dawn", "lineage", "intent"];
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
// Match every `](target)` so nested image-badge links — [![alt](img)](target) — are checked too.
const LINK_RE = /\]\(([^)]+)\)/g;
for (const file of ["README.md", "SPEC.md", "CONTRIBUTING.md"]) {
  if (!existsSync(p(file))) continue;
  const dir = dirname(p(file));
  const text = readFileSync(p(file), "utf8");
  let m;
  while ((m = LINK_RE.exec(text)) !== null) {
    let target = m[1].trim();
    if (/^(https?:|mailto:|#)/.test(target)) continue; // external or anchor
    target = decodeURIComponent(target.split("#")[0].split("?")[0]); // %20 etc.
    if (!target) continue;
    // resolve relative to the file being checked, not just the repo root
    if (!existsSync(resolve(dir, target))) {
      errors.push(`${file}: broken local link → ${target}`);
    }
  }
}

// 5. version stated consistently. SPEC.md's H1 is the source of truth; the README badge and the
// attestation block must name the same version, or adopters copy a stale block into their repo.
let version = null;
if (existsSync(p("SPEC.md"))) {
  const m = /^#\s+The Blessing Protocol\s+—\s+(v\d+\.\d+)/m.exec(readFileSync(p("SPEC.md"), "utf8"));
  if (!m) {
    errors.push("SPEC.md: no parseable version in the H1 (expected '# The Blessing Protocol — vX.Y')");
  } else {
    version = m[1];
    for (const file of ["README.md", "ATTESTATION.md"]) {
      if (!existsSync(p(file))) continue;
      if (!readFileSync(p(file), "utf8").includes(version)) {
        errors.push(`${file}: does not state the current spec version (${version})`);
      }
    }
  }
}

if (errors.length) {
  console.error("FAIL — Blessing Protocol validation");
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(
  `OK — ${TEMPLATES.length} templates present, SPEC references intact, local links resolve, ` +
    `version ${version} stated consistently.`,
);
