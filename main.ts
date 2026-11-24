import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_PATH = "/output/entry.txt";
const EXCUSE =
  "Your homework made you cry, so I killed it and ate the body. You're safe now—throw the ball.";

mkdirSync(dirname(ENTRY_PATH), { recursive: true });
writeFileSync(ENTRY_PATH, EXCUSE, "utf8");
