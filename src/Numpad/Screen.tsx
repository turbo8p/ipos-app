import React from "react";

type IScreenProp = {
  children: string;
};

function Screen(props: IScreenProp) {
  return (
    <div className="calculator-screen" data-testid="screen">
      {props.children}
    </div>
  );
}

export default Screen;
