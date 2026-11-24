import fs from "node:fs";

const LINE = "My cat told me she loves me today, and she proved it by sitting on my keyboard, deleting my report, and purring like she'd done me a favour.";

fs.mkdirSync("/output", { recursive: true });
if (LINE.trim().length === 0 || LINE.length > 200) {
  throw new Error("entry must be 1 to 200 characters");
}
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
