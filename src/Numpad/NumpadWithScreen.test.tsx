import "regenerator-runtime/runtime";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import NumpadWithScreen from "./NumpadWithScreen";

describe("<NumpadwithScreen />", () => {
  test("Should show the number on screen when pressing buttons", async () => {
    const { getByTestId } = render(<NumpadWithScreen />);
    fireEvent.click(getByTestId("num-1"));
    expect(getByTestId("screen").textContent).toBe("1");
    fireEvent.click(getByTestId("num-2"));
    expect(getByTestId("screen").textContent).toBe("12");
  });

  test("Should never show more than one dot.", async () => {
    const { getByTestId } = render(<NumpadWithScreen />);
    fireEvent.click(getByTestId("num-dot"));
    expect(getByTestId("screen").textContent).toBe("0.");
    fireEvent.click(getByTestId("num-dot"));
    expect(getByTestId("screen").textContent).toBe("0.");
  });

  test("Should show at most 2 precisions.", async () => {
    const { getByTestId } = render(<NumpadWithScreen />);
    fireEvent.click(getByTestId("num-dot"));
    expect(getByTestId("screen").textContent).toBe("0.");
    fireEvent.click(getByTestId("num-1"));
    fireEvent.click(getByTestId("num-2"));
    fireEvent.click(getByTestId("num-3"));
    expect(getByTestId("screen").textContent).toBe("0.12");
  });

  test("Should show at most 6 digits.", async () => {
    const { getByTestId } = render(<NumpadWithScreen />);
    fireEvent.click(getByTestId("num-1"));
    fireEvent.click(getByTestId("num-2"));
    fireEvent.click(getByTestId("num-3"));
    fireEvent.click(getByTestId("num-4"));
    fireEvent.click(getByTestId("num-5"));
    fireEvent.click(getByTestId("num-6"));
    fireEvent.click(getByTestId("num-7"));
    expect(getByTestId("screen").textContent).toBe("123456");
  });
});
