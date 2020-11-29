import React from "react";
import { StyleText } from "../common/StyleText";

export const Header = () => {
  return (
    <div className="header">
      <StyleText className="step-counter" text="4/4" />
      <StyleText className="title" text="Last step!" />
      <StyleText className="subtitle" text="Enter your payment info below." />
    </div>
  );
};
