import React, { useState } from "react";
import { StyleText } from "./StyleText";
import "./input.scss";
export const Input = ({
  label = "",
  type,
  placeholder,
  tailingIcon,
  width = "4vw",
}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="input">
      <StyleText className="label" text={label} />
      <div
        className="input-field"
        style={{
          border: clicked ? "1px solid  #63bafb" : "1px solid  #dce3ea",
          boxShadow: clicked && "0 8px 20px 0 rgba(127, 156, 230, 0.2)",
        }}
      >
        <input
          type={type}
          placeholder={placeholder}
          style={{ width: width }}
          onFocus={() => setClicked(true)}
          onBlur={() => setClicked(false)}
        />
        {tailingIcon && (
          <img src={tailingIcon} className="arrow-down" alt="arrow down" />
        )}
      </div>
    </div>
  );
};
