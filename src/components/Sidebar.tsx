import Bridgeicon from "../assets/icons/Bridgeicon";
import Buyicon from "../assets/icons/Buyicon";
import Exploreicon from "../assets/icons/Exploreicon";
import Sellicon from "../assets/icons/Sellicon";
import Sendicon from "../assets/icons/Sendicon";
import Stakeicon from "../assets/icons/Stakeicon";
import Swapicon from "../assets/icons/Swapicon";
import DashIcon from "../assets/icons/dashIcon";
import Termsicon from "./Termsicon";

const Sidebar = ({
  ele,
  handleElement,
}: {
  ele: string;
  handleElement: (arg: string) => void;
}) => {
  const handleClick = (componentName: string) => {
    console.log("in side");
    handleElement(componentName);
  };
  console.log(ele);

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src="./metalogo.svg" alt="" className="logo" />
      </div>
      <div className={`side-icons`}>
        <div
          className={`icon ${ele == "Dashboard" && "icon-active"}`}
          onClick={() => handleClick("Dashboard")}
        >
          <DashIcon />
          <div className="icon-text">Dashboard</div>
        </div>
        <div
          className={`icon ${ele == "Explore" && "icon-active"}`}
          onClick={() => handleClick("Explore")}
        >
          <Exploreicon />
          <div className="icon-text">Explore</div>
        </div>
        <div
          className={`icon ${ele == "Buy" && "icon-active"}`}
          onClick={() => handleClick("Buy")}
        >
          <Buyicon />
          <div className="icon-text">Buy</div>
        </div>
        <div
          className={`icon ${ele == "Sell" && "icon-active"}`}
          onClick={() => handleClick("Sell")}
        >
          <Sellicon />
          <div className="icon-text">Sell</div>
        </div>
        <div
          className={`icon ${ele == "Swap" && "icon-active"}`}
          onClick={() => handleClick("Swap")}
        >
          <Swapicon />
          <div className="icon-text">Swap</div>
        </div>
        <div
          className={`icon ${ele == "Bridge" && "icon-active"}`}
          onClick={() => handleClick("Bridge")}
        >
          <Bridgeicon />
          <div className="icon-text">Bridge</div>
        </div>
        <div className={`icon ${ele == "Stake" && "icon-active"}`}>
          <Stakeicon />
          <div className="icon-text">Stake</div>
        </div>
        <div
          className={`icon ${ele == "Transfer" && "icon-active"}`}
          onClick={() => handleClick("Transfer")}
        >
          <Sendicon />
          <div className="icon-text">Send & Receive</div>
        </div>
      </div>
      <div className="terms">
        <div className="terms-text">Terms of service</div>
        <div className="terms-icon-container">
          <Termsicon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
