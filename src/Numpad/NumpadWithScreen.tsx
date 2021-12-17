import React, { useCallback, useState } from "react";
import Keypad from "./Keypad";
import Screen from "./Screen";
import "./NumpadWithScreen.css";

type ICalculatorProp = {
  maxDigits?: number;
  maxFractionalDigits?: number;
  exact?: string;
};

function Calculator(props: ICalculatorProp) {
  const initialNumberOnScreen = "0";
  const [numberOnScreen, setNumberOnScreen] = useState(initialNumberOnScreen);
  const {
    maxDigits = 6,
    maxFractionalDigits = 2,
    exact = initialNumberOnScreen,
  } = props;

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
      if (numberOnScreen === "0" && input !== "0" && input !== ".") {
        return input;
      }
      return numberOnScreen + input;
    });
  }, []);

  const handleClearButtonClick = useCallback(() => {
    setNumberOnScreen(initialNumberOnScreen);
  }, []);

  const handleExactButtonClick = useCallback(() => {
    setNumberOnScreen(exact);
  }, []);

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
      <Screen>{`${numberOnScreen}`}</Screen>
      <Keypad onClick={handleInputButtonClick} dataTestId="num-7">
        7
      </Keypad>
      <Keypad
        className="no-side-borders"
        onClick={handleInputButtonClick}
        dataTestId="num-8"
      >
        8
      </Keypad>
      <Keypad
        onClick={handleInputButtonClick}
        className="no-right-border"
        dataTestId="num-9"
      >
        9
      </Keypad>
      <Keypad onClick={handleOnBackspaceClick} dataTestId="num-backspace">
        ←
      </Keypad>
      <br />
      <Keypad
        onClick={handleInputButtonClick}
        className="no-top-border"
        dataTestId="num-4"
      >
        4
      </Keypad>
      <Keypad
        className="no-side-borders no-top-border"
        dataTestId="num-5"
        onClick={handleInputButtonClick}
      >
        5
      </Keypad>
      <Keypad
        onClick={handleInputButtonClick}
        className="no-top-border"
        dataTestId="num-6"
      >
        6
      </Keypad>
      <Keypad
        onClick={handleClearButtonClick}
        className="no-left-border no-top-border"
        dataTestId="num-cancel"
      >
        C
      </Keypad>
      <br />
      <Keypad
        onClick={handleInputButtonClick}
        className="no-top-border"
        dataTestId="num-1"
      >
        1
      </Keypad>
      <Keypad
        className="no-side-borders no-top-border"
        onClick={handleInputButtonClick}
        dataTestId="num-2"
      >
        2
      </Keypad>
      <Keypad
        onClick={handleInputButtonClick}
        className="no-top-border"
        dataTestId="num-3"
      >
        3
      </Keypad>
      <Keypad
        onClick={handleExactButtonClick}
        className="no-top-border no-left-border"
        dataTestId="num-exact"
      >
        ˩
      </Keypad>
      <br />
      <Keypad
        onClick={handleInputButtonClick}
        className="no-top-border"
        dataTestId="num-0"
      >
        0
      </Keypad>
      <Keypad
        className="no-left-border no-top-border"
        onClick={handleInputButtonClick}
        dataTestId="num-dot"
      >
        .
      </Keypad>
    </div>
  );
}
export default Calculator;
