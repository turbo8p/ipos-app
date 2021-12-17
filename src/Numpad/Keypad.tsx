import React from "react";
import "./Keypad.css";
type IKeypadProps = {
    children: string,
    className?: string,
    onClick?: (inputNumber: string) => void,
    dataTestId?: string
}

function Keypad (props: IKeypadProps) {
    const handleClick = () => {
        if(!props.onClick) {
            return;
        }
        props.onClick(props.children);
    };

    return (
        <button className={`calculator-button ${props.className}`} data-testid={props.dataTestId} onClick={handleClick}>
            {props.children}
        </button>
    );
}

export default Keypad;