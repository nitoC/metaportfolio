import { useState } from "react";
import HeadingOrs from "./HeadingOrs";
import TabButton from "./TabButton";
import TransferButton from "./TransferButton";
import Metaicon from "../assets/icons/MetaIcon";
import MobileHeader from "./MobileHeader";

const Transfer = ({
  type,
  ele,
  handleElement,
}: {
  type: string;
  ele: string;
  handleElement: (e: string) => void;
}) => {
  const [tab, settab] = useState("Send");

  const tabs = ["Send", "Receive"];
  return (
    <div className="transfer-container">
      <div className="transaction-card-container">
        <div className="swap">
          <HeadingOrs type={type} />
          <MobileHeader ele={ele} handleElement={handleElement} />
          <div className="swap-content">
            <div className="swap-card no-swap-card">
              <TabButton tabs={tabs} settab={(val: string) => settab(val)} />
              {tab === "Receive" ? (
                <div className="receive">
                  {" "}
                  <TransferButton
                    type="from"
                    text="Select Wallet"
                    heading="Receive to"
                  />
                </div>
              ) : (
                <div className="send">
                  {" "}
                  <TransferButton
                    type="from"
                    text="Select Wallet"
                    heading="Send from"
                  />
                  <TransferButton
                    type="to"
                    text="Enter public address (0x) or ENS name"
                    heading="Send to"
                  />
                  <TransferButton
                    type="from"
                    text=" Select Asset"
                    heading="Asset"
                  />
                  <TransferButton type="amount" text=" 0.00" heading="Amount" />
                </div>
              )}
              <button className="connect-btn connect-transfer">
                <Metaicon />
                Connect wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
