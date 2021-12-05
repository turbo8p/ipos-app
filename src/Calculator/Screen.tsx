import React from "react";

type IScreenProp = {
    children: string
}

function Screen(props: IScreenProp) {
    const displayNumber = Number(props.children).toFixed(2);
    
    return(
        <div className="calculator-screen">
            {props.children}
        </div>
    );
}

export default Screen;