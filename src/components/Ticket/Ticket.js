import React, { useState, useEffect, useRef } from 'react';
import Location from "../Location/Location"
import {
    Control,
    EditButton,
    Locations,
    Number,
    TicketBase,
    StyledModal,
    ModalContents,
    ModalText,
    ModalButton, 
    TooltipContent
} from "./Ticket.styled"

function Ticket(props) {

    const ticket = props.data;
    const [anyEditMode, setAnyEditMode] = useState(props.editMode); // true if any of ticket is edit mode
    const [numberEditMode, setNumberEditMode] = useState(props.editMode);
    const [ editLocationsMode, setEditLocationsMode ] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const editNumber = useRef(null);
    useEffect(() => {
        if (numberEditMode)
            editNumber.current.focus();
    });

    const ticketsToDeleteInit = ticket.locations.map(() => false);
    const [locationsToDelete, setLocationsToDelete] = useState(ticketsToDeleteInit)
    

    function handleNumberChange(event) {
        if (event.target.value)
            props.changeTicketNum(props.ticketIndex, event.target.value);
        else
            props.changeTicketNum(props.ticketIndex, "0");
    }

    function handleEditLocationsModeButtonClick() {
        editLocationsMode && props.removeLocations(props.ticketIndex, locationsToDelete)
        return setEditLocationsMode(!editLocationsMode)
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
                onContextMenu={(e) => { e.preventDefault(); setNumberEditMode(true); }}
                editMode={numberEditMode}
            />
            <Control>
                <EditButton onClick={() => setOpenDeleteModal(true)} className="tooltip">
                    <i className="jam jam-trash" />
                    <TooltipContent style={{left: "-37%"}}>Delete Project</TooltipContent>
                </EditButton>
                <EditButton onClick={() => props.addLocation(props.ticketIndex)} className="tooltip">
                    <i className="jam jam-plus" />
                    <TooltipContent style={{left: "-4%"}}>Add Location</TooltipContent>
                </EditButton>
                <EditButton onClick={() => handleEditLocationsModeButtonClick()} className="tooltip">
                    <i className={`jam jam-${editLocationsMode ? `check` : `minus`}`} />
                    <TooltipContent style={{left: "30%"}}>{editLocationsMode ? `Confirm` : `Remove Locations`}</TooltipContent>
                </EditButton>
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
                            editLocationsMode={editLocationsMode}
                            locationsToDelete={locationsToDelete}
                            setLocationsToDelete={setLocationsToDelete}
                        />
                    )

                })}
            </Locations>
            <StyledModal show={openDeleteModal}>
                <ModalContents>
                    <ModalText>Are you sure you want to delete this project?</ModalText>
                    <ModalButton onClick={() => { props.deleteTicket(props.ticketIndex); setOpenDeleteModal(false) }}>Yes</ModalButton>
                    <ModalButton onClick={() => setOpenDeleteModal(false)}>No</ModalButton>
                </ModalContents>
            </StyledModal>
        </TicketBase>
    )
}

export default Ticket;