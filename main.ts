import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My AI agent finished the project in a minute, then asked for a week off to recover from the effort.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
