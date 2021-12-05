import React from "react";
import "./Button.css";
type IButtonProps = {
    children: string,
    className?: string,
    onClick?: (inputNumber: string) => void
}

function Button (props: IButtonProps) {
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

export default Button;