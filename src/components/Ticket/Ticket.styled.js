import styled from "@emotion/styled";


export const TicketBase = styled.div`
    margin-bottom: 20px;
    margin-right: 20px;
    flex: 1;
    /* flex-basis: 35%; */
    /* max-width: 400px; */
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