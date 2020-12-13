import React, {useRef} from 'react'

export default function SubmitForm() {
    const submitButton = useRef();
    const noteTitleInput = useRef();
    const noteTextInput = useRef();
    function submitForm() {
        console.log("submited")
        const newNote = new Note(noteTitleInput.current,noteTextInput.text);
        console.log(newNote);
        console.log(noteTitleInput);
    }


    
    class Note {
        constructor(noteTitle, noteText){
        this.title = noteTitle;
        this.text = noteText;
        }
    }
    
    return (
        <>
            <form id="newNote" name="newNote">
                <label htmlFor="title">NOTE TITLE</label>
                <input useRef={noteTitleInput} id="noteTitle" name="noteTitle" type="text"></input>
                <label htmlFor="noteText">NOTE</label>
                <textarea useRef={noteTextInput} id="noteText" name="noteText" rows="4" cols="50">
                </textarea>
            </form>
            <input ref={submitButton} onClick={submitForm} htmlFor="newNote" type="submit"></input>
        </>
    )
}
