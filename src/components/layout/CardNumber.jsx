import React from "react";
import { Input } from "../common/Input";

export const CardNumber = () => {
  return (
    <div className="card-number">
      <Input
        label="Card Number"
        type="text"
        placeholder="123 4567 8912 3456"
        width="22.5vw"
      />
    </div>
  );
};
