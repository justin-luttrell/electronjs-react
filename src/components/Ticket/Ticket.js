import React, {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Location from "../Location/Location"
import {
    Control,
    EditButton,
    Locations,
    Number,
    NumberEdit,
    TicketBase
} from "./Ticket.styled"


function Ticket(props) {

    const ticket = props.data;
    const [anyEditMode, setAnyEditMode] = useState(props.editMode); // true if any of ticket is edit mode
    const [numberEditMode, setNumberEditMode] = useState(props.editMode);
    const editNumber = useRef(null);

    useEffect(() => {
        if(numberEditMode)
            editNumber.current.focus();
    });
    
    function handleSave() {
        setAnyEditMode(false);
        setNumberEditMode(false);
    }

    function handleNumberChange(event) {
        props.changeTicketNum(props.ticketIndex, event.target.value);
    }

    return (
        <TicketBase>
            {!numberEditMode ? <Number onDoubleClick={() => {setNumberEditMode(true); setAnyEditMode(true)}}>{ticket.number || "Number"}</Number> : <NumberEdit ref={editNumber} placeholder={ticket.number || "Number"} onChange={handleNumberChange} onBlur={() => setNumberEditMode(!numberEditMode)} defaultValue={ticket.number || "Number"}/>}
            <Control>
                {anyEditMode && <EditButton onClick={handleSave}><FontAwesomeIcon icon={faCheck}/></EditButton>}
                <EditButton onClick={() => props.addLocation(props.ticketIndex)}><FontAwesomeIcon icon={faPlusCircle}/></EditButton>
            </Control>
            <Locations>
                {ticket.locations.map((location, index) => {
                    return (
                        <Location 
                            location={location} 
                            setAnyEditMode={setAnyEditMode} 
                            anyEditMode={anyEditMode}
                            ticketIndex={props.ticketIndex}
                            locationNum={index}
                            changeLocationData={props.changeLocationData}
                            
                        />
                    )
                        
                })}
            </Locations>

        </TicketBase>
    )
}

export default Ticket;