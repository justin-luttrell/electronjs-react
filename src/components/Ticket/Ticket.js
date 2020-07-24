import React, {useState, useEffect, useRef} from 'react';
import Location from "../Location/Location"
import {
    Control,
    EditButton,
    Locations,
    Number,
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
    
    function handleNumberChange(event) {
        if(event.target.value)
            props.changeTicketNum(props.ticketIndex, event.target.value);
        else
            props.changeTicketNum(props.ticketIndex, "0");
    }

    return (
        <TicketBase>
            <Number
                type="number"
                ref={editNumber}
                placeholder={ticket.number || "Number"}
                onChange={handleNumberChange}
                onBlur={() => setNumberEditMode(!numberEditMode)} defaultValue={ticket.number || "Number"}
                readOnly={!numberEditMode}
                onDoubleClick={() => setNumberEditMode(true)}
                editMode={numberEditMode}
            />
            <Control>
                <EditButton onClick={() => props.addLocation(props.ticketIndex)}><i className="jam jam-plus"/></EditButton>
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