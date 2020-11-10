import styled from "@emotion/styled";
import TextareaAutosize from "react-textarea-autosize"

export const LocationBase = styled.div`
    display: flex;
`

const StyledInput = styled(TextareaAutosize)`
    border: none;
    font-size: 16px;
    font-weight: 400;
    padding: 10px 12px 6px 4px;
    color: ${props => props.status};
    background: ${props => props.editMode ? `#e4e1e1` : `#fbfbfb`};
    resize: none;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    cursor: ${props => props.editMode ? 'auto' : 'pointer'};
    text-decoration: ${props => props.editMode ? 'dotted' : 'none'};
    border-radius: 10px;

    &:focus {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ::-webkit-scrollbar {
        width: 0px;  
        background: transparent;  
    }

    &:hover {
        background: #e4e1e1;
    }
`

export const CLLI = styled(StyledInput)`
    font-weight: 500;
    flex: 1;
    width: 0;
`

export const NotesWrapper = styled.div`
    display: flex;
    flex: 3;
`

export const Notes = styled(StyledInput)`
    width: fit-content;
    font-size: 14px;
    flex: 3;
`

export const DateStyled = styled.div`
    text-align: right;
    padding: 10px 0 6px 12px;
    flex: 0;
    font-size: 12px;
    position: relative;
    cursor: pointer;
`

export const Checkbox = styled.div`
    padding: 4px 0 6px 35px;
    flex: 0;
    font-size: 12px;
    position: relative;

    & input {
        transform: scale(1.35);
        cursor: pointer;
    }
`