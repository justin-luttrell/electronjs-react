import styled from "@emotion/styled";
import TextareaAutosize from "react-textarea-autosize"

export const LocationBase = styled.div`
    display: flex;
`

const StyledInput = styled(TextareaAutosize)`
    border: none;
    font-size: 16px;
    font-weight: 400;
    padding: 10px 12px 6px 0px;
    color: ${props => props.status};
    background-color: #fbfbfb;
    resize: none;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    cursor: ${props => props.editMode ? 'auto' : 'pointer'};
    text-decoration: ${props => props.editMode ? 'dotted' : 'none'};

    &:focus {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ::-webkit-scrollbar {
        width: 0px;  
        background: transparent;  
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

export const TooltipContent = styled.span`
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
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
        border-color: #555 transparent transparent transparent;
    }

    .tooltip:hover & {
        visibility: visible;
        opacity: 1;
    }
`