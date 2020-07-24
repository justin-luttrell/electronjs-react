import React, { useState } from "react";
import {
    TicketsWrapper,
    TicketsBase,
    AddTicketButton
} from "./Tickets.styled"
import Ticket from "../Ticket/Ticket"
import data from "../../data.json"
import HorizontalScroll from "react-scroll-horizontal"

const Tickets = () => {
    const tickets = data.tickets
    const [ticketsData, setTicketsData] = useState(tickets);

    function addTicket() {
        tickets.push({ number: 'Number', locations: [] })
        setTicketsData({ ...tickets });
    }

    function addLocation(ticketIndex) {
        tickets[ticketIndex].locations.push({
            CLLI: "CLLI",
            notes: "Notes",
            status: "complete",
            date: new Date().toLocaleString('en-US', { dateStyle: "short", timeStyle: "short" })
        }
        )
        setTicketsData({ ...tickets })
    }

    function changeTicketNum(ticketIndex, newTicketNum) {
        tickets[ticketIndex].number = newTicketNum;
        setTicketsData({ ...tickets });
    }

    function changeLocationData(ticketIndex, locationNum, dataKey, newData) {
        tickets[ticketIndex].locations[locationNum][dataKey] = newData
        setTicketsData({ ...tickets })
    }

    return (
        <TicketsWrapper>
            <HorizontalScroll>
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
                </TicketsBase>
            </HorizontalScroll>
            <AddTicketButton onClick={addTicket} className="jam jam-plus"/>
        </TicketsWrapper>
    );
}

export default Tickets;