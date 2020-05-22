import styled from "@emotion/styled";

export const LocationBase = styled.div`
    display: flex;
`

const StyledInput = styled.input`
    border: none;
    font-size: 16px;
    font-weight: 400;
    padding: 6px 12px 6px 0px;
    color: #495057;
    background-color: #ffffff;
    background-clip: padding-box;
    min-width: 0;

    &:focus {
        outline: none;
        border: none;
        box-shadow: none;
    }
`

export const CLLI = styled.div`
    font-weight: bold;
    padding: 6px 12px 6px 0px;
    flex: 2;
`

export const CLLIEdit = styled(StyledInput)`
    font-weight: bold;
    flex: 2;
    width: 0;
`
 
export const NotesWrapper = styled.div`
    flex: 3;
    position: relative;
`

export const NoteStatus = styled.span`
        
    border-radius: 50%;
    transform: translateY(-5px);
    background-color: green;
    height: 4px;
    width: 4px;
    position: absolute;
    right: 0;
    top: 0;
    padding: 4px;
    &:hover {
        cursor: pointer;
    }
`

export const Notes = styled.div`
    padding: 6px 12px 6px 0px;
`

export const NotesEdit = styled(StyledInput)`
    width: 0;
    flex: 3;
`

export const DateStyled = styled.div`
    text-align: right;
    padding: 6px 0;
    flex: 2;
`