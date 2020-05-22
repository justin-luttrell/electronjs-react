import styled from "@emotion/styled";
import { Popover } from 'react-bootstrap';

export const StyledPopover = styled(Popover)`
  
`;

export const Status = styled.span`
    display: ${props => props.show ? 'block' : 'none'};
    border-radius: 50%;
    transform: translateY(-5px);
    background-color: green;
    height: 4px;
    width: 4px;
    position: absolute;
    right: 0;
    top: 0;
    padding: 8px;
    cursor: pointer;

`