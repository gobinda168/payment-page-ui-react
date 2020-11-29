import React from "react";
import "./styleText.scss";
export const StyleText = ({ text, className }) => {
  return <div className={`${className} text`}>{text}</div>;
};
