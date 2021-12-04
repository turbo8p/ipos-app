import React from "react";
import Button from "./Button";
import Screen from "./Screen";


function Calculator() {
    return(
        <div>
            My calculator
            <br />
            <Screen />
            <Button>7</Button>
            <Button className="no-side-borders">8</Button>
            <Button>9</Button>
        </div>
    );
}
export default Calculator;