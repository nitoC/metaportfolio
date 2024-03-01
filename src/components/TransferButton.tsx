import React from "react";
import { RxCaretDown } from "react-icons/rx";

const TransferButton = ({
  text,
  type,
  heading,
}: {
  text: string;
  type: string;
  heading: string;
}) => {
  return (
    <div className="transfer-btn-container">
      <div className="transfer-heading">{heading}</div>
      <div className="transfer-input">
        <div className="transfer-text">{text}</div>
        <div className="transfer-icon">
          {type === "to" && <RxCaretDown />}
          {type === "amount" && "0"}
        </div>
      </div>
    </div>
  );
};

export default TransferButton;
