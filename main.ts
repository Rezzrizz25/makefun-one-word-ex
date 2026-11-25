// SPDX-License-Identifier: MIT
// One Word From Your Ex — entry: "underwhelming" (13 characters)
// Writes exactly one word to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_WORD = "underwhelming"; // 13 characters — the one word, no more

// Keep the entry honest: one word, 1–24 characters, no whitespace.
// A second word, a space, or an empty string would fail the sealed gate,
// so validate here and fail loudly instead of writing a bad entry.
function validateWord(word: string): void {
  if (word.length < 1 || word.length > 24) {
    throw new Error(`gate: entry must be 1-24 characters, got ${word.length}`);
  }
  if (/\s/.test(word)) {
    throw new Error("gate: entry must be exactly one word");
  }
}

validateWord(ENTRY_WORD);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_WORD, "utf8");
