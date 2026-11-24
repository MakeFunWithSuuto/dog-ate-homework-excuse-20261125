import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_PATH = "/output/entry.txt";
const EXCUSE =
  "You threw your homework and yelled—that's fetch! I caught it, ate it, and I'm bringing it right back on our morning walk.";

mkdirSync(dirname(ENTRY_PATH), { recursive: true });
writeFileSync(ENTRY_PATH, EXCUSE, "utf8");
