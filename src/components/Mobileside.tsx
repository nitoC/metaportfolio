import Bridgeicon from "../assets/icons/Bridgeicon";
import Buyicon from "../assets/icons/Buyicon";
import Exploreicon from "../assets/icons/Exploreicon";
import Metaicon from "../assets/icons/MetaIcon";
import Sellicon from "../assets/icons/Sellicon";
import Sendicon from "../assets/icons/Sendicon";
import Stakeicon from "../assets/icons/Stakeicon";
import Swapicon from "../assets/icons/Swapicon";
import DashIcon from "../assets/icons/dashIcon";
import Termsicon from "./Termsicon";
import { MdClose } from "react-icons/md";

const MobileSidebar = ({
  mobile,
  setmobile,
  ele,
  handleElement,
}: {
  mobile: string;
  setmobile: (arg0: string) => void;
  ele: string;
  handleElement: (e: string) => void;
}) => {
  const handleIconClick = (componentName: string) => {
    handleElement(componentName);
    setmobile("mobile-hide");

    console.log(ele, "active");
  };

  return (
    <div className={`mobile-overlay ${mobile}`}>
      <div className={`mobile-sidebar`}>
        <div className="meta-container">
          <div className="cancelicon" onClick={() => setmobile("mobile-hide")}>
            <MdClose />
          </div>
          <div className="header-content">
            <div className="side-header">Metamask Portfolio</div>
            <div className="meta-side">
              <div className="meta-button">
                <button className="connect-btn connect-mobile">
                  <Metaicon />
                  Connect wallet
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="side-icons">
          <div
            className={`icon ${ele === "Dashboard" ? "icon-active" : ""}`}
            onClick={() => handleIconClick("Dashboard")}
          >
            <DashIcon />
            <div className="icon-text">Dashboard</div>
          </div>
          <div
            className={`icon ${ele === "Explore" ? "icon-active" : ""}`}
            onClick={() => handleIconClick("Explore")}
          >
            <Exploreicon />
            <div className="icon-text">Explore</div>
          </div>
          <div
            className={`icon ${ele === "Buy" ? "icon-active" : ""}`}
            onClick={() => handleIconClick("Buy")}
          >
            <Buyicon />
            <div className="icon-text">Buy</div>
          </div>
          <div
            className={`icon ${ele === "Sell" ? "icon-active" : ""}`}
            onClick={() => handleIconClick("Sell")}
          >
            <Sellicon />
            <div className="icon-text">Sell</div>
          </div>
          <div
            className={`icon ${ele === "Swap" ? "icon-active" : ""}`}
            onClick={() => handleIconClick("Swap")}
          >
            <Swapicon />
            <div className="icon-text">Swap</div>
          </div>
          <div
            className={`icon ${ele === "Bridge" ? "icon-active" : ""}`}
            onClick={() => handleIconClick("Bridge")}
          >
            <Bridgeicon />
            <div className="icon-text">Bridge</div>
          </div>
          <div
            className={`icon ${ele === "Stake" ? "icon-active" : ""}`}
            onClick={() => handleIconClick("Stake")}
          >
            <Stakeicon />
            <div className="icon-text">Stake</div>
          </div>
          <div
            className={`icon ${ele === "Transfer" ? "icon-active" : ""}`}
            onClick={() => handleIconClick("Transfer")}
          >
            <Sendicon />
            <div className="icon-text">Send & Receive</div>
          </div>
        </div>
        <div className="terms" onClick={() => handleIconClick("Terms")}>
          <div className="terms-text">Terms of service</div>
          <div className="terms-icon-container">
            <Termsicon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
