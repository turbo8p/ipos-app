import React from "react";
import "./Keypad.css";
type IKeypadProps = {
    children: string,
    className?: string,
    onClick?: (inputNumber: string) => void
}

function Keypad (props: IKeypadProps) {
    const handleClick = () => {
        if(!props.onClick) {
            return;
        }
        props.onClick(props.children);
    };

    return (
        <button className={`calculator-button ${props.className}`} onClick={handleClick}>
            {props.children}
        </button>
    );
}

export default Keypad;