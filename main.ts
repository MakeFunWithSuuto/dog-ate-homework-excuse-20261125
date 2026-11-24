import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_PATH = "/output/entry.txt";
const EXCUSE =
  "Your homework smelled like panic, so I ate the whole thing to make it stop. You're fixed now—open the cheese drawer.";

mkdirSync(dirname(ENTRY_PATH), { recursive: true });
writeFileSync(ENTRY_PATH, EXCUSE, "utf8");
