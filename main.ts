// One-line pitch for "A Day of One-Line Pitches" (make.fun).
// Writes a single sentence to /output/entry.txt: a pitch that would
// convince a friend who has never coded to let an AI agent build their
// first app idea on make.fun. Deterministic: same bytes every run.
// The gate allows 1-240 characters; the sentence below is 199, and the
// trailing newline brings the file to 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "You don\u2019t need to learn to code \u2014 just describe your idea to make.fun the way you\u2019d tell me, and an AI agent will build a first rough version for you to try, free, before you\u2019ve finished your coffee.";

// Fail loudly instead of writing an entry the gate would refuse.
if ([...PITCH].length < 1 || [...PITCH].length > 240 || PITCH.trim().length === 0) {
  throw new Error("pitch must be 1-240 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH + "\n", "utf8");
