import React, {useState} from "react";
import { 
    CLLI,
    CLLIEdit,
    DateStyled,
    LocationBase,
    NoteStatus,
    Notes,
    NotesEdit,
    NotesWrapper,
} from "./Location.styled"


function Location(props) {
    const [isCLLIEditMode, setCLLIEditMode] = useState(false)
    const [isNotesEditMode, setNotesEditMode] = useState(false)

    function handleDoubleClick(field) {
        if(field == "CLLI")
            setCLLIEditMode(true);
        if(field == "Notes")
            setNotesEditMode(true);
        props.setAnyEditMode(true);
    }

    return (
        <LocationBase>
            {(isCLLIEditMode && props.anyEditMode) ? 
                <CLLIEdit type="text" placeholder={props.location.CLLI || "CLLI"} onBlur={() => setCLLIEditMode(false)} defaultValue={props.location.CLLI} />
                :
                <CLLI onDoubleClick={() => handleDoubleClick("CLLI")}>{props.location.CLLI}</CLLI>
            }
            {(isNotesEditMode && props.anyEditMode) ? 
                <NotesEdit type="text" placeholder={props.location.notes || "Notes"} onChange={() => (null)} defaultValue={props.location.notes}/>
                :
                <NotesWrapper>
                    <Notes onDoubleClick={() => handleDoubleClick("Notes")} status="green">{props.location.notes}</Notes>
                    <NoteStatus/>
                </NotesWrapper>
            }
            <DateStyled>{new Date().toLocaleString('en-US',{dateStyle: "short", timeStyle: "short"})}</DateStyled>
        </LocationBase>
    )
}

export default Location;