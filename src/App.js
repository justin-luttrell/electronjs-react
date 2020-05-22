import React, {useState} from 'react';
import Ticket from "./components/Ticket/Ticket";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import data from "./data.json";

const Base = styled.div`
  padding: 3%;
  `

const Tickets = styled.div`
  height: 80vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #f3f3f3;
  border-radius: 24px;
  padding: 32px 2%;
`

const AddTicketButton = styled.button`
  width: 4%;
  font-size: 32px;
  margin: 0 17%;
  border: none;
  background: none;
  color: #292929;

  &:hover{
    color: #616161;
    cursor: pointer;
  }
`

function App() {
  const tickets = data.tickets
  const [ticketsData, setTickets] = useState(tickets);

  function addTicket(){
    setTickets(tickets.push({}));
  }

  return (
    <Base>
      <Tickets>
        {data.tickets.map(ticket => {
          if (ticket.number)
            return <Ticket editMode={false} data={ticket}/>
          return <Ticket editMode={true} data={{locations: []}}/>
        })}
      <AddTicketButton variant="primary" onClick={addTicket}><FontAwesomeIcon icon={faPlusCircle}/></AddTicketButton>
      </Tickets>
    </Base>
  );
}

export default App;
