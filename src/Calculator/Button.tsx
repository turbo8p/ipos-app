import React from "react";
import "./Button.css";
type IButtonProps = {
    children: string,
    className?: string
}

function Button (props: IButtonProps) {
    return (
        <button className={`calculator-button ${props.className}`}>
            {props.children}
        </button>
    );
}

export default Button;