import React, { useState, useRef, useEffect } from "react";
import {
    CLLI,
    DateStyled,
    Checkbox,
    LocationBase,
    Notes,
    NotesWrapper,
} from "./Location.styled"
import { TooltipContent } from "../Ticket/Ticket.styled"
import StatusPopover from "../StatusPopover/StatusPopover"


function Location(props) {
    const [isCLLIEditMode, setCLLIEditMode] = useState(false)
    const [isNotesEditMode, setNotesEditMode] = useState(false)
    const editCLLI = useRef(null)
    const editNotes = useRef(null)

    const statuses = {
        complete: "green",
        dispatch: "orange",
        shipping: "blue",
        alert: "red",
        mop: "purple"
    }

    useEffect(() => {
        if (isCLLIEditMode) {
            editCLLI.current.focus();
        }

        if (isNotesEditMode) {
            editNotes.current.focus();
        }
    })

    function updateDate() {
        const newDate = new Date().toLocaleString('en-US', { dateStyle: "short", timeStyle: "short" })
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

    function handleStatusChange(status) {
        props.changeLocationData(props.ticketIndex, props.locationNum, 'status', status);
        updateDate();
    }

    function changeLocationToDeleteStatus(status) {
        let locationsToDelete = props.locationsToDelete;
        locationsToDelete[props.locationNum] = status;
        props.setLocationsToDelete({...locationsToDelete})
    }

    return (
        <LocationBase>
            <CLLI
                ref={editCLLI}
                type="text"
                placeholder={"CLLI"}
                onChange={handleCLLIChange}
                onBlur={() => setCLLIEditMode(false)}
                defaultValue={props.location.CLLI}
                readOnly={!isCLLIEditMode}
                onContextMenu={(e) => { e.preventDefault(); setCLLIEditMode(true) }}
                spellcheck="false"
                editMode={isCLLIEditMode}

            />

            <NotesWrapper className="notes-wrapper">
                <Notes
                    type="text"
                    ref={editNotes}
                    placeholder={"Notes"}
                    onChange={handleNoteChange}
                    onBlur={() => setNotesEditMode(false)}
                    defaultValue={props.location.notes}
                    readOnly={!isNotesEditMode}
                    onContextMenu={(e) => { e.preventDefault(); setNotesEditMode(true) }}
                    spellcheck="false"
                    status={statuses[props.location.status]}
                    editMode={isNotesEditMode}
                />
                <StatusPopover
                    show={isNotesEditMode}
                    handleClick={handleStatusChange}
                    currentStatus={statuses[props.location.status]}
                />
            </NotesWrapper>

            {props.editLocationsMode ?
                <Checkbox>
                    <input 
                        type="checkbox"
                        onChange={(e) => changeLocationToDeleteStatus(e.target.checked)}
                    />
                </Checkbox> 
            :
                <DateStyled className="tooltip">
                    {props.location.date.split(',')[0]}
                    <TooltipContent>{props.location.date}</TooltipContent>
                </DateStyled>
            }
        </LocationBase>
    )
}

export default Location;