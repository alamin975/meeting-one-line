// The Meeting That Should Have Been One Line
// Writes the single sentence that could have replaced an entire pointless meeting.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "We spent forty minutes deciding what to decide, then scheduled another meeting to decide when to decide it.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  // Explicit utf8, no trailing newline — the gate counts 1–200 chars exactly.
  writeFileSync("/output/entry.txt", ENTRY, { encoding: "utf8" });
}

function main(): void {
  writeEntry();
}

main();
