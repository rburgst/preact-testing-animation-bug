import { FunctionComponent } from "preact";
import React from "preact/compat";

export interface TestComponentProps {
  onNextClick: () => void;
}

export const TestComponent: FunctionComponent<TestComponentProps> = ({
  onNextClick,
}) => {
  return (
    <div data-countdown onAnimationEnd={onNextClick}>
      FOO
    </div>
  );
};
