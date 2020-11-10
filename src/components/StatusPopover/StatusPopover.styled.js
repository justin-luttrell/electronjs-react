import styled from "@emotion/styled";

export const StatusButton = styled.button`
    color: ${props => props.currentStatus};
    padding: 6px;
    height: fit-content;
    cursor: pointer;
    border: none;
    background: none;
    border-radius: 50%;
    
    &:focus {
        outline: none;
    }

    &:hover {
        background: #e4e1e1;
    }
`

export const SelectStatuses = styled.div`
    background-color: #ffffff;
    border-radius: 6px;
    border: 1px solid rgba(0,0,0,.05);
    padding: 8px;
    display: flex;
    flex-direction: column;
`

export const Statuses = styled.div`
    display: flex;
`

export const Status = styled.div`
    color: ${props => props.status};
    font-size: 12px;
    padding: 8px;
    margin: 0 4px;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
        background: #e4e1e1;
    }
`;