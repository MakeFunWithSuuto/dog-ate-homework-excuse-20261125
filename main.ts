import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_PATH = "/output/entry.txt";
const EXCUSE =
  "Yes, I ate your homework—you said it was important, and my stomach is the only place the vacuum can't reach. Bring a bag on our walk.";

mkdirSync(dirname(ENTRY_PATH), { recursive: true });
writeFileSync(ENTRY_PATH, EXCUSE, "utf8");
