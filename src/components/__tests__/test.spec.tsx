import { fireEvent, render } from "@testing-library/preact";
import React from "preact/compat";
import { TestComponent, TestComponentProps } from "../test-component";

describe("test-component", () => {
  it("should call onNextClick on animation end", async () => {
    //given
    const props = {
      onNextClick: jest.fn(),
    };

    //when
    const { container } = render(<TestComponent {...props} />);

    const countdownDiv = container.querySelector(
      "[data-countdown]"
    ) as HTMLElement;
    fireEvent.animationEnd(countdownDiv);

    //then
    expect(props.onNextClick).toHaveBeenCalledTimes(1);
  });
});
