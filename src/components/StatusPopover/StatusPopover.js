import React from "react";
import {
    Status,
} from "./StatusPopover.styled"


const StatusPopover = (props) => {

    return (
        <Status onClick={props.handleClick} show={props.show}/>
    );
}

export default StatusPopover;