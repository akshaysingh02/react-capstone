import styled from "styled-components";
import { useState } from "react";


const NotesWrapper = styled.div`
    padding: 36px 50px;
    height: 100%;
    color: black;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h2{
        color: inherit;
        font-size: 38px;
        font-weight: 500;
        flex-grow: 0;
    }
    textarea{
        width: 100%;
        height: 100%;
        flex-grow: 1;
        background-color: #F1C75B;
        border: none;
        font-size: 21px;
        color: inherit;
        max-width: 100%;
    }
`

function Notes() {
    const handleChange = (e) =>{
        setNotes(e.target.value);
        localStorage.setItem("notes", e.target.value)
    }
    const [notes, setNotes] = useState(localStorage.getItem("notes") ?? "")
    return ( 
        <NotesWrapper>
            <h2>All notes</h2>
            <textarea name="mynotes" id="notesarea" onChange={handleChange} value={notes} ></textarea>
        </NotesWrapper>
     );
}

export default Notes;