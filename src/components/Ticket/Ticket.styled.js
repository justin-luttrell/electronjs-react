import styled from "@emotion/styled";
import Modal from 'simple-react-modal';

export const TicketBase = styled.div`
    margin-bottom: 20px;
    margin-right: 20px;
    flex: 1;
    box-sizing: border-box;
    width: 450px;
    padding: 12px 12px 16px 12px;
    position: relative;
    background-color: #fbfbfb;
    border-radius: 6px;
    border: 1px solid rgba(0,0,0,.05);
    display: flex;
    flex-direction: column;
    cursor: default;
    box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
`

export const Control = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    user-select: none;
`


export const EditButton = styled.button`
    font-size: 16px;
    color: #292929;
    padding: 8px;
    background: none;
    border: none;
    margin-left: 4px;

    &:hover{
        color: #616161;
        cursor: pointer;
}

`

export const Locations = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledFormControl = styled.input`
    border: none;
    font-size: 16px;
    font-weight: 400;
    padding: 6px 12px 6px 0px;
    color: #292929;
    background-color: #ffffff;
    background-clip: padding-box;
    border-radius: .25rem;
    min-width: 0;
    background-color: #fbfbfb;
    cursor: ${props => props.editMode ? 'auto' : 'pointer'};

    &:focus {
        outline: none;
        border: none;
        box-shadow: none;
    }

`

export const Number = styled(StyledFormControl)`
    text-align: center;
    text-decoration: underline;
    padding: 0;
    margin: 0 auto;
    margin-bottom: 12px;
    font-size: 24px;
    font-weight: 700;
    margin: 20px 0px 12px;

    &::placeholder {
        text-decoration: underline;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none; 
        margin: 0;
    }
`

export const AddLocation = styled.button`
    width: 50%;
    margin: 0 auto;
    background: none;
    border: none;

    &:hover {
        cursor: pointer;
    }
`

export const StyledModal = styled(Modal)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 99999;
    pointer-events: auto;
    overflow-y: auto;

    & > div {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 4% 2% 4% 4%;
        background: #fff;
    }

`

export const ModalContents = styled.div`
    width: 80%;
    margin: auto;
`

export const ModalText = styled.div`
    font-size: 16px; 
    line-height: 24px;
    margin-bottom: 12px;
`

export const ModalButton = styled.button`
  background-color: #e7e7e7; 
  color: black;
  border: none;
  padding: 12px 16px;
  text-align: center;
  margin: auto;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  &:hover {
      background: #616161;
      color: white;
  }

  &:first-of-type{
      margin-right: 20px;
  }
`

export const TooltipContent = styled.span`
    visibility: hidden;
    width: 120px;
    background-color: #e4e1e1;
    color: black;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 110%;
    left: -50%;
    opacity: 0;
    transition: opacity 0.3s;

        
    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #e4e1e1 transparent transparent transparent;
    }

    .tooltip:hover & {
        visibility: visible;
        opacity: 1;
    }
`