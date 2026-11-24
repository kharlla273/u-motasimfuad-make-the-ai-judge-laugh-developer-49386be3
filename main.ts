// Make the AI Judge Laugh: Developer Excuses
// Writes one funny single-line excuse a developer gives when code breaks
// in production to /output/entry.txt (gate: UTF-8 text, 1-200 characters,
// not only whitespace). Deterministic: the same line every run.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "The postmortem says root cause: me. Specifically the me from Friday at 6 p.m. who thought 'what could go wrong' was a deployment strategy.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} chars to ${outDir}/entry.txt`);
