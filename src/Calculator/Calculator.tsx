import React, { useCallback, useState } from "react";
import Button from "./Button";
import Screen from "./Screen";
import "./Calculator.css";

type ICalculatorProp = {
  maxDigits?: number;
  maxFractionalDigits?: number;
};

function Calculator(props: ICalculatorProp) {
  const initialNumberOnScreen = "0";
  const [numberOnScreen, setNumberOnScreen] = useState(initialNumberOnScreen);
  const { maxDigits = 6, maxFractionalDigits = 2 } = props;

  const handleInputButtonClick = useCallback((input: string) => {
    setNumberOnScreen((numberOnScreen) => {
      if (
        numberOnScreen.indexOf(".") === -1 &&
        numberOnScreen.length >= maxDigits &&
        input !== "."
      ) {
        return numberOnScreen;
      }
      const [, fractionalPart] = numberOnScreen.split(".");
      if (fractionalPart?.length >= maxFractionalDigits) {
        return numberOnScreen;
      }

      if (numberOnScreen.indexOf(".") !== -1 && input === ".") {
        return numberOnScreen;
      }
      if (numberOnScreen === "0" && input === "0") {
        return numberOnScreen;
      }
      if (numberOnScreen === "0" && input !== "0") {
        return input;
      }
      return numberOnScreen + input;
    });
  }, []);

  const handleCalculateButtonClick = useCallback(() => {}, []);

  const handleOnBackspaceClick = useCallback(() => {
    setNumberOnScreen((numberOnScreen) => {
      if (numberOnScreen.length === 1) {
        return initialNumberOnScreen;
      }

      return numberOnScreen.substring(0, numberOnScreen.length - 1);
    });
  }, []);

  return (
    <div>
      My calculator
      <br />
      <Screen>{`${numberOnScreen}`}</Screen>
      <Button onClick={handleInputButtonClick}>7</Button>
      <Button className="no-side-borders" onClick={handleInputButtonClick}>
        8
      </Button>
      <Button onClick={handleInputButtonClick}>9</Button>
      <Button onClick={handleOnBackspaceClick}>←</Button>
      <br />
      <Button onClick={handleInputButtonClick} className="no-top-border">
        4
      </Button>
      <Button
        className="no-side-borders no-top-border"
        onClick={handleInputButtonClick}
      >
        5
      </Button>
      <Button onClick={handleInputButtonClick} className="no-top-border">
        6
      </Button>
      <br />
      <Button onClick={handleInputButtonClick} className="no-top-border">
        1
      </Button>
      <Button
        className="no-side-borders no-top-border"
        onClick={handleInputButtonClick}
      >
        2
      </Button>
      <Button onClick={handleInputButtonClick} className="no-top-border">
        3
      </Button>
      <br />
      <Button onClick={handleInputButtonClick} className="no-top-border">
        0
      </Button>
      <Button
        className="no-side-borders no-top-border"
        onClick={handleInputButtonClick}
      >
        .
      </Button>
      <Button onClick={handleCalculateButtonClick} className="no-top-border">
        =
      </Button>
    </div>
  );
}
export default Calculator;
