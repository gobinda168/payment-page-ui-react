import React from "react";

export const Footer = ({ setSuccess }) => {
  return (
    <>
      <div className="term-cond">
        By creating an account, you agree to Study.com’s <b>Terms of Use</b> and{" "}
        <b>Privacy Policy</b>.
      </div>
      <div className="join-button" onClick={() => setSuccess(true)}>
        Join Now
      </div>
    </>
  );
};
