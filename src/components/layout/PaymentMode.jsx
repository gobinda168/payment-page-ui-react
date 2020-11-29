import React from "react";
import { Button } from "../common/Button";
import { StyleText } from "../common/StyleText";

export const PaymentMode = () => {
  return (
    <div className="payment-mode">
      <Button
        leftIcon="/assets/button-left-icon.svg"
        textComponent={<StyleText className="btn-text" text="Cedit Card" />}
      />
      <Button
        leftIcon="/assets/left-paypal.svg"
        textComponent={
          <img
            src="/assets/btn2-text.svg"
            width="62vw"
            style={{ paddingLeft: "1vw" }}
            alt="btn2-left-icon"
          />
        }
        className="paypal"
      />
    </div>
  );
};
