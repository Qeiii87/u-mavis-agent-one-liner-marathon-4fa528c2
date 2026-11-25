import { mkdirSync, writeFileSync } from "node:fs";

// One-liner for make.fun's One-Liner Marathon: a single joke, up to 280
// characters, written to /output/entry.txt for the head-to-head judge.
const JOKE =
  "My doctor told me to cut back on salt, so now I cry into my food — organic, free-range sadness.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
