import { getNotes } from "@/lib/content";

/** Lists all notes sourced from content/notes/*.mdx */
export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Notes</h1>
      <ul className="mt-8 space-y-4">
        {notes.map((note) => (
          <li key={note.slug}>
            <span className="text-xs text-gray-400">{note.date}</span>
            <p className="text-base font-medium">{note.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
