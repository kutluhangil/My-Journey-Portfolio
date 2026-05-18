import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ChevronRight,
  FileText,
  Folder,
  Menu,
  X,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NoteItem {
  id: string;
  name: string;
  type: "file" | "folder";
  children?: NoteItem[];
}

function encodePath(relPath: string): string {
  return relPath
    .split("/")
    .map(encodeURIComponent)
    .join("/");
}

function TreeItem({
  item,
  depth,
  activeId,
  onSelect,
}: {
  item: NoteItem;
  depth: number;
  activeId: string | null;
  onSelect: (item: NoteItem) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = Boolean(item.children?.length);
  const isActive = activeId === item.id;
  const hasContent = item.id.endsWith(".md");

  const handleChevron = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded((v) => !v);
  };

  const handleClick = () => {
    if (hasContent) onSelect(item);
    if (hasChildren) setExpanded((v) => !v);
  };

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        className={cn(
          "flex items-center gap-1 w-full text-left text-[11px] py-[3px] cursor-pointer select-none transition-colors",
          isActive
            ? "bg-foreground text-background"
            : "text-foreground/60 hover:text-foreground hover:bg-muted/40"
        )}
        style={{
          paddingLeft: `${depth * 14 + 6}px`,
          paddingRight: "10px",
        }}
      >
        <span
          className="flex items-center justify-center w-4 h-4 shrink-0"
          onClick={hasChildren ? handleChevron : undefined}
        >
          {hasChildren ? (
            <ChevronRight
              className={cn(
                "w-3 h-3 transition-transform duration-150",
                expanded && "rotate-90"
              )}
            />
          ) : null}
        </span>

        {item.type === "folder" ? (
          <Folder className="w-3 h-3 shrink-0 opacity-50" />
        ) : (
          <FileText className="w-3 h-3 shrink-0 opacity-40" />
        )}

        <span className="truncate ml-0.5 leading-5">{item.name}</span>
      </div>

      {hasChildren && expanded && (
        <div>
          {item.children!.map((child) => (
            <TreeItem
              key={child.id}
              item={child}
              depth={depth + 1}
              activeId={activeId}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Notes() {
  const [tree, setTree] = useState<NoteItem[]>([]);
  const [activeNote, setActiveNote] = useState<NoteItem | null>(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/documents/notes-index.json")
      .then((r) => r.json())
      .then(setTree)
      .catch(console.error);
  }, []);

  const loadNote = useCallback(async (item: NoteItem) => {
    setActiveNote(item);
    if (!item.id.endsWith(".md")) {
      setContent("");
      return;
    }
    setLoading(true);
    setContent("");
    if (contentRef.current) contentRef.current.scrollTop = 0;
    try {
      const url = `/documents/ExportNotion/${encodePath(item.id)}`;
      const r = await fetch(url);
      if (!r.ok) throw new Error("fetch failed");
      const text = await r.text();
      setContent(text);
    } catch {
      setContent("*Failed to load note content.*");
    } finally {
      setLoading(false);
    }
  }, []);

  const loadNoteByRelativePath = useCallback(
    async (href: string) => {
      const decoded = decodeURIComponent(href);
      let resolved = decoded;
      if (activeNote && !decoded.startsWith("/")) {
        const dir = activeNote.id.includes("/")
          ? activeNote.id.split("/").slice(0, -1).join("/")
          : "";
        resolved = dir ? `${dir}/${decoded}` : decoded;
      }
      const fakeItem: NoteItem = {
        id: resolved,
        name: resolved
          .split("/")
          .pop()
          ?.replace(/\s+[0-9a-f]{32}\.md$/i, "")
          .replace(/\.md$/, "") || resolved,
        type: "file",
      };
      await loadNote(fakeItem);
    },
    [activeNote, loadNote]
  );

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="flex h-[calc(100vh-6rem)] mt-24 overflow-hidden">
        {/* ── Sidebar ── */}
        <aside
          className={cn(
            "absolute md:relative z-30 md:z-auto h-full w-[260px] shrink-0",
            "border-r border-border/40 flex flex-col bg-background",
            "transition-transform duration-300 md:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          )}
        >
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/40 shrink-0">
            <div className="flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                My Notes
              </span>
            </div>
            <button
              className="md:hidden p-1 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Tree */}
          <div className="flex-1 overflow-y-auto py-2">
            {tree.length === 0 ? (
              <p className="px-4 py-3 text-xs text-muted-foreground animate-pulse">
                Loading...
              </p>
            ) : (
              tree.map((item) => (
                <TreeItem
                  key={item.id}
                  item={item}
                  depth={0}
                  activeId={activeNote?.id ?? null}
                  onSelect={(item) => {
                    loadNote(item);
                    setSidebarOpen(false);
                  }}
                />
              ))
            )}
          </div>
        </aside>

        {/* Mobile toggle */}
        <button
          onClick={() => setSidebarOpen(true)}
          className={cn(
            "fixed bottom-6 left-6 z-40 md:hidden bg-foreground text-background p-2.5 shadow-lg transition-opacity duration-200",
            sidebarOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
          aria-label="Open notes sidebar"
        >
          <Menu className="w-4 h-4" />
        </button>

        {/* ── Content ── */}
        <main
          ref={contentRef}
          className="flex-1 overflow-y-auto"
        >
          {!activeNote ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-8 gap-3">
              <BookOpen className="w-8 h-8 text-muted-foreground/20" />
              <p className="text-sm font-light text-muted-foreground">
                Select a note from the sidebar to start reading.
              </p>
            </div>
          ) : loading ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-sm font-light text-muted-foreground animate-pulse">
                Loading...
              </p>
            </div>
          ) : !content ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-8 gap-3">
              <Folder className="w-8 h-8 text-muted-foreground/20" />
              <p className="text-sm font-light text-muted-foreground">
                {activeNote.name}
              </p>
              <p className="text-[11px] text-muted-foreground/40">
                This page has no text content.
              </p>
            </div>
          ) : (
            <article className="max-w-3xl mx-auto px-8 py-12">
              <div
                className={cn(
                  "prose prose-neutral dark:prose-invert max-w-none",
                  // Headings
                  "prose-headings:font-display prose-headings:font-normal prose-headings:tracking-tight",
                  "prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-0 prose-h1:border-b prose-h1:border-border/40 prose-h1:pb-4",
                  "prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4",
                  "prose-h3:text-base prose-h3:mt-6 prose-h3:mb-2",
                  // Body text
                  "prose-p:font-light prose-p:leading-relaxed prose-p:text-foreground/80",
                  // Links
                  "prose-a:text-foreground prose-a:no-underline prose-a:border-b prose-a:border-foreground/30",
                  "hover:prose-a:border-foreground",
                  // Code
                  "prose-code:bg-muted prose-code:text-[11px] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-none prose-code:font-mono prose-code:before:content-none prose-code:after:content-none",
                  "prose-pre:bg-muted prose-pre:border prose-pre:border-border/40 prose-pre:rounded-none prose-pre:text-[12px]",
                  // Lists
                  "prose-ul:text-foreground/80 prose-ol:text-foreground/80 prose-li:leading-relaxed",
                  // Blockquote
                  "prose-blockquote:border-l-2 prose-blockquote:border-foreground/20 prose-blockquote:text-muted-foreground prose-blockquote:not-italic prose-blockquote:font-light",
                  // Table
                  "prose-table:text-sm prose-th:font-medium prose-td:align-top",
                  // HR
                  "prose-hr:border-border/30",
                  // Strong
                  "prose-strong:font-medium prose-strong:text-foreground"
                )}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    a({ href, children }) {
                      // Internal Notion link → navigate within the app
                      if (
                        href &&
                        !href.startsWith("http") &&
                        !href.startsWith("#") &&
                        !href.startsWith("mailto")
                      ) {
                        return (
                          <button
                            type="button"
                            onClick={() =>
                              href && loadNoteByRelativePath(href)
                            }
                            className="text-foreground border-b border-foreground/30 hover:border-foreground transition-colors cursor-pointer bg-transparent p-0 inline text-left"
                          >
                            {children}
                          </button>
                        );
                      }
                      return (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {children}
                        </a>
                      );
                    },
                    img({ alt }) {
                      return (
                        <span className="flex items-center gap-2 py-1.5 px-3 bg-muted text-[11px] text-muted-foreground border border-border/40 font-mono not-prose my-2">
                          📎 {alt || "image"}
                        </span>
                      );
                    },
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </article>
          )}
        </main>
      </div>
    </>
  );
}
