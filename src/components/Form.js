import React from 'react'

export default function Form() {
    return (
        <>
        <form id="newNote" name="newNote">
            <label for="title">NOTE TITLE</label>
            <input id="noteTitle" name="noteTitle" type="text"></input>
            <label for="noteText">NOTE</label>
            <textarea id="noteText" name="noteText" rows="4" cols="50">
            </textarea>
        </form>
        </>
    )
}
