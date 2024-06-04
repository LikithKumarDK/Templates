import React from "react";
import { Steps as Step } from "primereact/steps";

export const Steps = (props) => {
  const { parentClassName, parentStyle, stepsProps } = props;
  const { stepsClassName, items, activeIndex, readOnly, ...restProps } =
    stepsProps;

  return (
    <div className={`${parentClassName}`} style={parentStyle}>
      <Step
        className={`${stepsClassName}`}
        model={items}
        activeIndex={activeIndex}
        readOnly={readOnly}
        {...restProps}
      />
    </div>
  );
};
