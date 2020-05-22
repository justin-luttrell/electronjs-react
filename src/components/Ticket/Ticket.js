import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Location from "../Location/Location"
import {
    AddLocation,
    Control,
    ControlOptions,
    EditButton,
    Locations,
    Number,
    NumberEdit,
    TicketBase
} from "./Ticket.styled"


function Ticket(props) {

    const data = props.data;
    const [anyEditMode, setAnyEditMode] = useState(props.editMode); // true if any of ticket is edit mode
    const [numberEditMode, setNumberEditMode] = useState(props.editMode);
    const [ticketData, setTicketData] = useState(props.data);
    const [showControlOptions, setShowControlOptions] = useState(false);

    // function addLocation() {
    //     setTicketData(data.locations.push({}));
    // }

    function handleSave() {
        setAnyEditMode(false);
        setNumberEditMode(false);
    }

    function handleSubmit() {
        
    }

    function handleNumberChange(event) {
        setTicketData(data.number = event.target.value)
    }

    function handleLocationPropChange(event, property, index) {
        setTicketData(data.locations[index][property] = event.target.value);
    }

    return (
        <TicketBase>
            {!numberEditMode ? <Number onDoubleClick={() => {setNumberEditMode(true); setAnyEditMode(true)}}>{props.data.number}</Number> : <NumberEdit placeholder={data.number || "Number"} onChange={handleNumberChange} defaultValue={data.number}/>}
            <Control>
                {anyEditMode && <EditButton onClick={handleSave}><FontAwesomeIcon icon={faCheck}/></EditButton>}
                <EditButton onClick={() => setShowControlOptions(true)}><FontAwesomeIcon icon={faEllipsisV}/></EditButton>
            </Control>
            {showControlOptions && 
                <ControlOptions>
                    {/* <ControlOption>Set Stat</ControlOption> */}
                </ControlOptions>
            }
            <Locations>
                {props.data.locations.map(location => {
                    return (
                        <Location location={location} setAnyEditMode={setAnyEditMode} anyEditMode={anyEditMode}/>
                    )
                        
                })}
            </Locations>

        </TicketBase>
    )
}

export default Ticket;