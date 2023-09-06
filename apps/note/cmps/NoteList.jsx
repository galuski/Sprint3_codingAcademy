<<<<<<< HEAD
import {noteService } from "../services/note.service.js"
console.log(noteService.notes)
export function NoteList() {
    return (
        <section>
            <h2>info txt: {noteService.notes[0].info.txt}</h2>
        </section>
    )
}

=======
// import {NoteService} from "../services/note.service.jsx"

// export function NoteList() {
//     return ( <div>
//         <h1>note list</h1>
//     {/* <span>{NoteService.notes.info.txt}</span> */}
//     </div>

//     )
// }
>>>>>>> 2000ab89407a2a361ae91ba1b9355bf3f0d56d29
