import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import Ticket from "./components/Ticket";
import styled from "@emotion/styled";
import data from "./data.json";

const Base = styled.div`
  padding: 5%;
`

const Tickets = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`

const AddButton = styled(Button)`
`

function App() {
  const tickets = data.tickets
  const [ticketsData, setTickets] = useState(tickets);

  function addTicket(){
    setTickets(tickets.push({}));
    console.log(data);
  }

  return (
    <Base>
      <Tickets>
        {data.tickets.map(ticket => {
          if (ticket.number)
            return <Ticket editMode={false} data={ticket}/>
          return <Ticket editMode={true} data={ticket}/>
        })}
      </Tickets>
      <Button variant="primary" onClick={addTicket}>Add Ticket</Button>
    </Base>
  );
}

export default App;
