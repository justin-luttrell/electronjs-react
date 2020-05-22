import React, {useState, useRef, useEffect} from "react";
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
import StatusPopover from "../StatusPopover/StatusPopover"


function Location(props) {
    const [isCLLIEditMode, setCLLIEditMode] = useState(false)
    const [isNotesEditMode, setNotesEditMode] = useState(false)
    const editCLLI = useRef(null)
    const editNotes = useRef(null)

    useEffect(() => {
        if(isCLLIEditMode){
            editCLLI.current.focus();
        }

        if(isNotesEditMode) {
            editNotes.current.focus();
        }
    })        

    function handleDoubleClick(field) {
        if(field == "CLLI"){
            setCLLIEditMode(true);
        }
        if(field == "Notes")
            setNotesEditMode(true);
        props.setAnyEditMode(true);
    }

    function updateDate(){
        const newDate = new Date().toLocaleString('en-US',{dateStyle: "short", timeStyle: "short"}) 
        props.changeLocationData(props.ticketIndex, props.locationNum, 'date', newDate)
    }

    function handleCLLIChange(event) {
        props.changeLocationData(props.ticketIndex, props.locationNum, 'CLLI', event.target.value);
        updateDate();
    }

    function handleNoteChange(event) {
        props.changeLocationData(props.ticketIndex, props.locationNum, 'notes', event.target.value);
        updateDate();
    }

    function handleStatusClick() {
        console.log("hello")
    }   

    return (
        <LocationBase>
            {(isCLLIEditMode && props.anyEditMode) ? 
                <CLLIEdit 
                    ref={editCLLI}
                    type="text" 
                    placeholder={props.location.CLLI || "CLLI"} 
                    onChange={handleCLLIChange}
                    onBlur={() => {setCLLIEditMode(false); props.setAnyEditMode(false)}} 
                    defaultValue={props.location.CLLI} 
                />
                :
                <CLLI 
                    onDoubleClick={() => handleDoubleClick("CLLI")}>
                        {props.location.CLLI}
                </CLLI>
            }
            {(isNotesEditMode && props.anyEditMode) ?
                <NotesWrapper className="notes-wrapper">
                    <NotesEdit 
                        type="text" 
                        ref={editNotes}
                        placeholder={props.location.notes || "Notes"} 
                        onChange={handleNoteChange} 
                        onBlur={() => {setNotesEditMode(false); props.setAnyEditMode(false)}} 
                        defaultValue={props.location.notes}
                    />
                    <StatusPopover show={isNotesEditMode} handleClick={handleStatusClick}/>
                </NotesWrapper> 
                :
                <Notes onDoubleClick={() => handleDoubleClick("Notes")} status="green">{props.location.notes}</Notes>
            }
            <DateStyled>{props.location.date}</DateStyled>
        </LocationBase>
    )
}

export default Location;