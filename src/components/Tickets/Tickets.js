import React, { useState } from "react";
import {
    TicketsBase,
    AddTicketButton
} from "./Tickets.styled"
import Ticket from "../Ticket/Ticket"
import data from "../../data.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";


const Tickets = () => {
    console.log(data)
    const tickets = data.tickets
    const [ticketsData, setTickets] = useState(tickets);

    function addTicket() {
        setTickets(tickets.push({}));
    }

    return (
        <TicketsBase>
            {data.tickets.map(ticket => {
                console.log(ticket)
                if (ticket.number)
                    return <Ticket editMode={false} data={ticket} />
                return <Ticket editMode={true} data={{ locations: [] }} />
            })}
            <AddTicketButton variant="primary" onClick={addTicket}><FontAwesomeIcon icon={faPlusCircle} /></AddTicketButton>
        </TicketsBase>
    );
}

export default Tickets;