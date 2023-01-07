import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import NoteList, {links as noteListLinks} from "~/components/NoteList";
import { getStoredNotes, storeNotes } from "~/data/notes";
// surfacing links

export default function NotesPage() {
    // load data hook from remix
    const notes = useLoaderData();


    return ( // now passing notes
    <main>
        <NewNote />
        <NoteList notes={notes} /> 
    </main>
    );
}

// Load data when component is loaded when a GET request comes through
export async function loader() {
    const notes = await getStoredNotes();
    return notes;  // plain data
}

// actions?
export async function action({request}) {
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);
    // Add validation
    
    // existing notes
    const existingNotes = await getStoredNotes();
    noteData.id = new Date().toISOString();

    // updated notes
    const updatedNotes = existingNotes.concat(noteData);

    // store updated notes in updated notes.json
    await storeNotes(updatedNotes);

    // return response
    return redirect('/notes');

}
export function links() {
    return [...newNoteLinks(), ...noteListLinks()]; // spread new note and noteListLinks
}