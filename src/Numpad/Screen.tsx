import React from "react";

type IScreenProp = {
    children: string
}

function Screen(props: IScreenProp) {
    return(
        <div className="calculator-screen">
            {props.children}
        </div>
    );
}

export default Screen;