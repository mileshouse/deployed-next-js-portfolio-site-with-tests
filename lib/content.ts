import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export interface Project {
  slug: string;
  title: string;
  description: string;
  url?: string;
  tags: string[];
  date: string;
}

export interface Note {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
}

/**
 * Reads all MDX files under content/projects/, parses frontmatter,
 * and returns a list of Project objects sorted by date descending.
 */
export async function getProjects(): Promise<Project[]> {
  const dir = path.join(CONTENT_ROOT, "projects");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const projects = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title as string,
      description: (data.description ?? "") as string,
      url: data.url as string | undefined,
      tags: (data.tags ?? []) as string[],
      date: (data.date ?? "") as string,
    };
  });

  return projects.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Reads all MDX files under content/notes/, parses frontmatter,
 * and returns a list of Note objects sorted by date descending.
 *
 * Implementation lands in a later commit alongside the notes route.
 */
export async function getNotes(): Promise<Note[]> {
  const dir = path.join(CONTENT_ROOT, "notes");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const notes = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title as string,
      date: (data.date ?? "") as string,
      excerpt: data.excerpt as string | undefined,
    };
  });

  return notes.sort((a, b) => (a.date < b.date ? 1 : -1));
}
