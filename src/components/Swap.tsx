import { useState } from "react";
import HeadingOrs from "./HeadingOrs";
import SwapNetwork from "./SwapNetwork";
import { RxCaretDown } from "react-icons/rx";
import { RiArrowUpDownLine } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
import MobileHeader from "./MobileHeader";
import SearchSwap from "./SearchSwap";

import SwapModal from "./SwapModal";

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
  //handlers
  const [value, setvalue] = useState({
    name: "Ethereum",
    img: "./ethereum.png",
  });

  //const [swapFrom, setswapFrom] = useState("");
  //const [swapTo, setswapTo] = useState("");
  const [swapModal, setswapModal] = useState(true);
  const [firstToken, setfirstToken] = useState(false);
  const [displayToken, setdisplayToken] = useState<
    string | { name: string; img: string }
  >("");
  const [secondToken, setsecondToken] = useState(false);
  const [displayToken2, setdisplayToken2] = useState<
    string | { name: string; img: string }
  >("");
  const [optionsval, setoptionsVal] = useState(false);

  // handle switch display options
  const toggleOptions = () => {
    setdisplayToken2(displayToken);
    setdisplayToken(displayToken2);
  };

  const handleToken = (val: { name: string; img: string }, type: string) => {
    if (type === "first") {
      setdisplayToken(val);
      return;
    }
    setdisplayToken2(val);
  };
  //handle modal for swap
  const handleSwapModal = (val: boolean) => {
    setswapModal(val);
  };

  const handleModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Check if the click occurred within the "swap-from" div
    if (
      (event.target as HTMLInputElement).classList.contains("swap-from-left") ||
      (event.target as HTMLInputElement).classList.contains("swap-to-left") ||
      (event.target as HTMLInputElement).classList.contains("swap-from-icon") ||
      (event.target as HTMLInputElement).classList.contains("swap-from-icon") ||
      (event.target as HTMLInputElement).classList.contains(
        "search-swap-wrapper"
      ) ||
      (event.target as HTMLInputElement).classList.contains("swap-to")
    ) {
      // If not, handle the modal

      return;
    }
    setfirstToken(false);
    setsecondToken(false);
  };
  const handleOptions = () => {
    setoptionsVal(!optionsval);
  };
  const handleOptionsVal = (item: { img: string; name: string }) => {
    setvalue(item);
    setoptionsVal(false);
  };

  return (
    <div onClick={(e) => handleModal(e)} className="swap">
      {swapModal && <SwapModal setSwap={handleSwapModal} />}
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
            {!firstToken ? (
              <div className="swap-from">
                <div
                  onClick={() => setfirstToken(true)}
                  className={`swap-from-left ${
                    typeof displayToken !== "string" && "swap-token-active"
                  }`}
                >
                  {typeof displayToken !== "string" && displayToken?.img ? (
                    <img src={displayToken?.img} alt="" className="val-img" />
                  ) : (
                    <div className="swap-from-img-container"></div>
                  )}
                  {typeof displayToken !== "string" && displayToken.name
                    ? displayToken.name
                    : "Sele..."}
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
            ) : (
              <SearchSwap handleDisp={handleToken} type="first" />
            )}
          </div>
          {/* arrow up down */}
          <div className="inflow-icon">
            <span onClick={toggleOptions} className="span-inflow">
              <RiArrowUpDownLine />
            </span>
          </div>
          {/* swap to */}
          <div className="swap-container">
            <div className="swap-text">Swap to</div>
            {!secondToken ? (
              <div
                onClick={() => {
                  setsecondToken(true);
                  console.log(secondToken);
                }}
                className="swap-to"
              >
                <span
                  onClick={() => {
                    setsecondToken(true);
                    console.log(secondToken);
                  }}
                  className={`swap-to-left ${
                    typeof displayToken2 !== "string" && "swap-token-active"
                  }`}
                >
                  {typeof displayToken2 !== "string" && displayToken2?.img ? (
                    <img src={displayToken2?.img} alt="" className="val-img" />
                  ) : (
                    <div className="swap-from-img-container"></div>
                  )}
                  {typeof displayToken2 !== "string" && displayToken2.name
                    ? displayToken2.name
                    : " Select a token"}
                </span>
                <span className="swap-from-icon">
                  <RxCaretDown />
                </span>
              </div>
            ) : (
              <SearchSwap handleDisp={handleToken} type="second" />
            )}
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
