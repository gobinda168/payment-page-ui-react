import React from "react";
import { Input } from "../common/Input";

export const Expiry = () => {
  return (
    <div className="expiry">
      <Input
        label="Expiration Date"
        type="text"
        placeholder="Month"
        tailingIcon="/assets/arrow-down.svg"
      />
      <div style={{ marginTop: "2vh" }}>
        <Input
          label=""
          type="text"
          placeholder="Day"
          tailingIcon="/assets/arrow-down.svg"
        />
      </div>
      <div style={{ marginLeft: "2vw" }}>
        <Input label="CVC" type="text" placeholder="123" />
      </div>
    </div>
  );
};
