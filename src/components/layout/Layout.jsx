import React, { useState } from "react";
import { Success } from "../Success";
import "./layout.scss";
import { Section } from "./Section";

export const Layout = () => {
  const [success, setSuccess] = useState(false);
  return (
    <div className="container">
      {!success ? (
        <>
          <div className="left-image">
            <img src="/assets/left-banner.svg" alt="cup" />
          </div>
          <Section setSuccess={setSuccess} />
        </>
      ) : (
        <Success />
      )}
    </div>
  );
};
