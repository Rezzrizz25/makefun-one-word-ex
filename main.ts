// SPDX-License-Identifier: MIT
// One Word From Your Ex — entry: "underwhelming" (13 characters)
// Writes exactly one word to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "underwhelming"; // 13 characters

if (WORD.length < 1 || WORD.length > 24) {
  throw new Error(`gate: entry must be 1-24 characters, got ${WORD.length}`);
}
if (/\s/.test(WORD)) {
  throw new Error("gate: entry must be exactly one word");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
