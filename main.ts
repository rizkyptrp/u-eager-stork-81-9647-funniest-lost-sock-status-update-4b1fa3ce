import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Lost Sock Status Update — one line (112 chars) in the voice of
// a lost sock. Chosen from 8 scored variants (see the build report): the
// sock is not missing — it LEFT its partner, for a left shoe. The last
// clause lands the punchline on sock anatomy ("no elastic left"), and
// "left shoe" carries a double meaning: left as in abandoned, left as in
// left-foot. It inverts the obvious missing-partner trope instead of
// repeating the default dryer joke every other entry writes.
const entry = `Lost sock update: I left my partner for a left shoe. The shoe has commitment issues, and I have no elastic left.`;

// Guard: the sealed scorer rejects an invalid entry with 0, so fail loudly
// here instead of silently writing a bad file. The entry must be a single
// line of 1–120 chars and contain more than whitespace.
if (entry.length < 1 || entry.length > 120) {
  throw new Error(`entry must be 1-120 chars, got ${entry.length}`);
}
if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
