import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_PATH = "/output/entry.txt";
const EXCUSE =
  "Your homework smelled like another dog's human, so be grateful I ate it instead of peeing on it.";

mkdirSync(dirname(ENTRY_PATH), { recursive: true });
writeFileSync(ENTRY_PATH, EXCUSE, "utf8");
