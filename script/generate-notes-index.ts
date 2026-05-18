import { readdirSync, writeFileSync, statSync } from "fs";
import { join, relative } from "path";

const NOTES_BASE = join(process.cwd(), "client/public/documents/ExportNotion");
const OUTPUT_PATH = join(process.cwd(), "client/public/documents/notes-index.json");

export interface NoteItem {
  id: string;
  name: string;
  type: "file" | "folder";
  children?: NoteItem[];
}

function cleanNotionName(filename: string): string {
  return filename
    .replace(/\s+[0-9a-f]{32}\.md$/i, "")
    .replace(/\.md$/, "")
    .trim();
}

function buildTree(dir: string): NoteItem[] {
  let entries: { name: string; isDir: boolean }[];
  try {
    entries = readdirSync(dir).map((name) => ({
      name,
      isDir: statSync(join(dir, name)).isDirectory(),
    }));
  } catch {
    return [];
  }

  const result: NoteItem[] = [];
  const usedFolders = new Set<string>();

  // Process .md files first
  for (const entry of entries) {
    if (!entry.name.endsWith(".md")) continue;

    const displayName = cleanNotionName(entry.name);
    const relPath = relative(NOTES_BASE, join(dir, entry.name));

    const matchFolder = entries.find((e) => e.isDir && e.name === displayName);

    const node: NoteItem = {
      id: relPath,
      name: displayName,
      type: matchFolder ? "folder" : "file",
    };

    if (matchFolder) {
      usedFolders.add(matchFolder.name);
      const children = buildTree(join(dir, matchFolder.name));
      if (children.length > 0) node.children = children;
    }

    result.push(node);
  }

  // Process standalone folders (no matching .md)
  for (const entry of entries) {
    if (!entry.isDir || usedFolders.has(entry.name)) continue;

    const children = buildTree(join(dir, entry.name));
    const relPath = relative(NOTES_BASE, join(dir, entry.name));

    result.push({
      id: relPath,
      name: cleanNotionName(entry.name),
      type: "folder",
      ...(children.length > 0 && { children }),
    });
  }

  return result.sort((a, b) => {
    if (a.type !== b.type) return a.type === "folder" ? -1 : 1;
    return a.name.localeCompare(b.name, "tr");
  });
}

export function generateNotesIndex(): void {
  console.log("generating notes index...");
  const tree = buildTree(NOTES_BASE);
  writeFileSync(OUTPUT_PATH, JSON.stringify(tree), "utf-8");
  console.log(`notes index written → ${OUTPUT_PATH} (${tree.length} root items)`);
}

// Run standalone when executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateNotesIndex();
}
