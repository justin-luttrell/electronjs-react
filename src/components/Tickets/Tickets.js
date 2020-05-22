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
    const tickets = data.tickets
    const [ticketsData, setTicketsData] = useState(tickets);

    function addTicket() {
        tickets.push({number: 'Number', locations: []})
        setTicketsData({...tickets});
    }

    function addLocation(ticketIndex) {
        tickets[ticketIndex].locations.push({
            CLLI: "CLLI", 
            notes: "...Notes", 
            date: new Date().toLocaleString('en-US',{dateStyle: "short", timeStyle: "short"})} 
        )
        setTicketsData({...tickets})
    }

    function changeTicketNum(ticketIndex, newTicketNum) {
        tickets[ticketIndex].number = newTicketNum;
        setTicketsData({...tickets});
    }

    function changeLocationData(ticketIndex, locationNum, dataKey, newData){
        tickets[ticketIndex].locations[locationNum][dataKey] =  newData
        setTicketsData({...tickets})
    }

    return (
        <TicketsBase>
            {tickets.map((ticket, index) => {
                if (ticket.number)
                    return (
                        <Ticket 
                            editMode={false}
                            data={ticketsData[index]}
                            ticketIndex={index}
                            addLocation={addLocation}
                            changeTicketNum={changeTicketNum}
                            changeLocationData={changeLocationData}
                        />
                    )
                return <Ticket editMode={true} data={{ locations: [] }} />
            })}
            <AddTicketButton variant="primary" onClick={addTicket}><FontAwesomeIcon icon={faPlusCircle} /></AddTicketButton>
        </TicketsBase>
    );
}

export default Tickets;