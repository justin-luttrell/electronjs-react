import React, { useState } from "react";
import {
    StatusButton,
    SelectStatuses,
    Statuses,
    Status
} from "./StatusPopover.styled"
import Popover from "react-tiny-popover";


const StatusPopover = (props) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    return (
        <Popover
            isOpen={isPopoverOpen}
            position={'top'} // preferred position
            onClickOutside={() => setIsPopoverOpen(!isPopoverOpen)}
            transitionDuration={.1}
            content={
                <SelectStatuses>
                    <Statuses>
                        <Status status="green" onClick={() => props.handleClick("complete")}>Complete</Status>
                        <Status status="orange" onClick={() => props.handleClick("dispatch")}>Dispatch</Status>
                        <Status status="purple" onClick={() => props.handleClick("mop")}>MOP</Status>
                        <Status status="blue" onClick={() => props.handleClick("shipping")}>Shipping</Status>
                        <Status status="red" onClick={() => props.handleClick("alert")}>Alert</Status>

                    </Statuses>
                </SelectStatuses>
            }
        >
            {ref => (
                <StatusButton 
                    ref={ref} 
                    onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                    currentStatus={props.currentStatus}
                >
                    <i className="jam jam-flag"/>
                </StatusButton>
            )}
        </Popover>
    );
}

export default StatusPopover;