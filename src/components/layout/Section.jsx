import React from "react";
import { PaymentMode } from "./PaymentMode";
import { CardNumber } from "./CardNumber";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Expiry } from "./Expiry";

export const Section = ({ setSuccess }) => {
  return (
    <div className="section">
      <Header />
      <PaymentMode />
      <CardNumber />
      <Expiry />
      <Footer setSuccess={setSuccess} />
    </div>
  );
};
