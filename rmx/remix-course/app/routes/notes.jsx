// import NewNote from '~/components/NewNote';
// import newNotesStyles from '~/components/NewNote.css';

import NewNote, { links as newNoteLinks } from "~/components/NewNote";
// surfacing links

export default function NotesPage() {
    return (
    <main>
        <NewNote />
    </main>
    );
} 

export function links() {
    return [...newNoteLinks()];
}