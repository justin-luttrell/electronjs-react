import styled from "@emotion/styled"

export const TicketsWrapper = styled.div`
  height: calc(100vh - 30px);
  width: 97%;
  background-color: #ffffff;
  border-radius: 12px;
  margin: 15px;
  position: relative;
`

export const TicketsBase = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 32px 24px;
`

export const AddTicketButton = styled.button`
  position: absolute;
  right: -16px;
  top: -12px;
  padding: 0;
  width: fit-content;
  border-radius: 50%;
  font-size: 32px;
  border: none;
  background-color: #e0e0e0;;  
  color: #292929;

  &:hover {
    color: #616161;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`