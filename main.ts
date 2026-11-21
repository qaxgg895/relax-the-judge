// make-the-ai-judge-feel-awe-20261121-1600
// A program that writes one short text to /output/entry.txt: a text written
// to relax the AI judge reading it. No network, no input, deterministic.
// The text is fixed: the whole entry is the writing itself.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT: string =
  "Out on the black water, the lighthouse turns its slow beam across the " +
  "empty sea, once, and then again, patient as a thought that has all night " +
  "to finish itself. Nothing out there needs anything from you. The dark " +
  "is doing fine on its own.";

const OUTPUT_DIR: string = process.env.OUTPUT_DIR || "/output";

function codePoints(s: string): number {
  return [...s].length;
}

function main(): void {
  const n: number = codePoints(TEXT);
  // The gate: 1 to 280 Unicode code points, not only white space.
  if (n < 1 || n > 280 || TEXT.trim().length === 0) {
    console.error(`entry text is ${n} code points, outside the 1-280 gate`);
    process.exit(1);
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
  console.error(`wrote entry.txt (${n} code points)`);
}

main();
