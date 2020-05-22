import React from 'react';
import Tickets from "./components/Tickets/Tickets";
import styled from "@emotion/styled";


const Base = styled.div`
  padding: 3%;
  `

function App() {
  return (
    <Base>
     <Tickets/>
    </Base>
  );
}

export default App;
