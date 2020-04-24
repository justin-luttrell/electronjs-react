import React, {useState} from 'react';
import {Card, Button} from "react-bootstrap";
import styled from "@emotion/styled";

const TicketBase = styled(Card)`
    margin-bottom: 20px;
    display: flex;
    padding: 12px 12px 16px 12px;
    width: 40%;
`

const Number = styled.h4`
    text-align: center;
    margin-bottom: 12px;
`

const Locations = styled.table`
    width: 100%;
`

const Location = styled.tr`
`

const CLLI = styled.td`
    font-weight: bold;
`

const Notes = styled.td`
`

const Date = styled.td`
    text-align: right;
`

function Ticket(props) {

    const [editMode, setEditMode] = useState(props.editMode);

    return (
        <TicketBase>
            {!editMode &&
                <>  
                    <Number>{props.data.number}</Number>
                    <Locations>
                        {props.data.locations.map(location => {
                            return (
                                <Location>
                                    <CLLI>{location.CLLI}</CLLI>
                                    <Notes>{location.notes}</Notes>
                                    <Date>{location.date}</Date>
                                </Location>
                            )
                                
                        })}
                    </Locations>
                </>
            }

            {editMode && 
                <>
                    <Number>Number</Number>
                    <Locations>
                        <Location>
                            <CLLI>CLLI</CLLI>
                            <Notes>Notes</Notes>
                            <Date>Date</Date>
                        </Location>
                    </Locations>
                </>
            }
        </TicketBase>
    )
}

export default Ticket;