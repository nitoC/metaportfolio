import { useState } from "react";
import HeadingOrs from "./HeadingOrs";
import SwapNetwork from "./SwapNetwork";
import { RxCaretDown } from "react-icons/rx";
import { RiArrowUpDownLine } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
import MobileHeader from "./MobileHeader";

const options = [
  {
    name: "Ethereum",
    img: "./ethereum.png",
  },
  {
    name: "Optimism",
    img: "./optimism.png",
  },
  {
    name: "BNB",
    img: "./bnb.png",
  },
  {
    name: "Polygon",
    img: "./polygon-token.png",
  },
];

const Swap = ({
  ele,
  handleElement,
}: {
  ele: string;
  handleElement: (arg: string) => void;
}) => {
  const [value, setvalue] = useState({
    name: "Ethereum",
    img: "./ethereum.png",
  });
  const [optionsval, setoptionsVal] = useState(false);

  const handleOptions = () => {
    setoptionsVal(!optionsval);
  };
  const handleOptionsVal = (item: { img: string; name: string }) => {
    setvalue(item);
    setoptionsVal(false);
  };

  return (
    <div className="swap">
      <HeadingOrs type="Swap" />
      <MobileHeader ele={ele} handleElement={handleElement} />
      <div className="swap-content">
        <div className="swap-card swap-no-background">
          <div className="swap-network-container">
            <span onClick={handleOptions}>
              <SwapNetwork name={value.name} img={value.img} />
            </span>
            {optionsval && (
              <div className="swap-options">
                {options.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleOptionsVal(item)}
                    className={`${
                      value.name === item.name ? "active" : ""
                    } swap-option`}
                  >
                    <span className="swap-net-left">
                      <div className="row-value-container">
                        <div className="good">
                          {value.name === item.name && <IoMdCheckmark />}
                        </div>
                        <img src={item.img} alt="" className="val-img" />
                      </div>
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="swap-container">
            <div className="swap-text">Swap from</div>
            <div className="swap-from">
              <div className="swap-from-left">
                <div className="swap-from-img-container"></div>
                Sele...
                <span className="swap-from-icon">
                  <RxCaretDown />
                </span>
              </div>
              <div className="swap-from-right">
                <input
                  type="number"
                  className="swap-from-input"
                  placeholder="0"
                />
              </div>
            </div>
          </div>
          {/* arrow up down */}
          <div className="inflow-icon">
            <RiArrowUpDownLine />
          </div>
          {/* swap to */}
          <div className="swap-container">
            <div className="swap-text">Swap to</div>
            <div className="swap-to">
              <span className="swap-to-left">
                <div className="swap-from-img-container"></div>
                Select a token
              </span>
              <span className="swap-from-icon">
                <RxCaretDown />
              </span>
            </div>
          </div>

          {/* advanced */}
          <div className="advanced-btn-container">
            <button className="advanced-btn">Advanced Options</button>
            <span className="swap-advanced-icon">
              <RxCaretDown />
            </span>
          </div>
          {/* connect wallet */}
          <button className="connect-btn">Connect MetaMask</button>
          <a
            href="https://consensys.io/terms-of-use"
            target="_blank"
            className="terms-service-link"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Swap;
