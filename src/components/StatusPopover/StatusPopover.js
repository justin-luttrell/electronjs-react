import React from "react";
import {
    Status,
 } from "./StatusPopover.styled"
import { OverlayTrigger, Popover } from 'react-bootstrap';

const StatusPopover = (props) => {

    const popover = (
        <Popover>
            <Popover.Title as="h3">Select status</Popover.Title>
            <Popover.Content>
                Hello World
            </Popover.Content>
        </Popover>
    )

    return (
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            <Status onClick={props.handleClick} show={props.show}/>
        </OverlayTrigger>
    );
}

export default StatusPopover;