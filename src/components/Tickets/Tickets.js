import React, { useState, useEffect } from "react";
import {
    TicketsWrapper,
    TicketsBase,
    AddTicketButton
} from "./Tickets.styled"
import Ticket from "../Ticket/Ticket"
import data from "../../data.json"
import HorizontalScroll from "react-scroll-horizontal"

const ipcRenderer = window.require('electron').ipcRenderer;

const Tickets = () => {
    let tickets = data.tickets
    const [ticketsData, setTicketsData] = useState(tickets);

    useEffect(() => {
        ipcRenderer.on('save-before-exit', () => 
            ipcRenderer.invoke('saving-before-exit', JSON.stringify({tickets: tickets}))
        );

        ipcRenderer.on('periodically-save', (e) => 
            e.sender.send('save', JSON.stringify({tickets: tickets}))
        );
    })

    function addTicket() {
        tickets.push({ number: 'Number', locations: [] })
        setTicketsData({ ...tickets });
    }

    function deleteTicket(ticketIndex) {
        tickets.splice(ticketIndex, 1);
        setTicketsData({...tickets});
    }

    function removeLocations(ticketIndex, locationsToDelete) {
        console.log(tickets[ticketIndex].locations)
        
        Object.values(locationsToDelete).forEach((location, locationIndex) => {
            if(location)
                tickets[ticketIndex].locations.splice(locationIndex, 1)
        })
        console.log(tickets[ticketIndex].locations)
        setTicketsData({...tickets})
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
                                    deleteTicket={deleteTicket}
                                    removeLocations={removeLocations}
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