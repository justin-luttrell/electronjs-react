import styled from "@emotion/styled"

export const TicketsBase = styled.div`
  height: 80vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #f3f3f3;
  border-radius: 24px;
  padding: 32px 2%;
`

export const AddTicketButton = styled.button`
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