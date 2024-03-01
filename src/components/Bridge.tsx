import { CgNotes } from "react-icons/cg";

import Optionicon from "../assets/icons/Optionicon";
import { RxCaretDown } from "react-icons/rx";
import { RiArrowUpDownLine } from "react-icons/ri";
import HeadingOrs from "./HeadingOrs";
import MobileHeader from "./MobileHeader";

const Bridge = ({
  ele,
  handleElement,
}: {
  ele: string;
  handleElement: (e: string) => void;
}) => {
  return (
    <div className="bridge-container">
      <HeadingOrs type="Bridge" />
      <MobileHeader ele={ele} handleElement={handleElement} />
      <div className="bridge">
        <div className="bridge-card">
          <div className="bridge-header">
            <div className="bridge-header-top">
              <div className="bridge-heading">Bridge tokens</div>
              <div className="bridge-icons-container">
                <div className="note-icon bridge-icon">
                  <CgNotes />
                </div>
                <div className="option-icon bridge-icon">
                  <Optionicon />
                </div>
              </div>
            </div>
            <p className="bridge-header-text">
              Transfer your tokens from one network to another.
            </p>
            <p className="header-bt-link">Show more</p>
          </div>
          <div className="bridge-content">
            <div className="bridge-content-left">
              <div className="swap-container">
                <div className="swap-text">From this network</div>
                <div className="swap-to">
                  <span className="swap-to-left">
                    <div>
                      <div className="value-container">
                        <img
                          src="./ethereum.png"
                          alt=""
                          className="swap-from-img-container"
                        />
                      </div>
                    </div>
                    Ethereum
                  </span>
                  <span className="swap-from-icon">
                    <RxCaretDown />
                  </span>
                </div>
              </div>
              <div className="swap-container">
                <div className="swap-text">You send</div>
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
            </div>
            <div className="inflow-icon bridge-inflow">
              <RiArrowUpDownLine />
            </div>
            <div className="bridge-content-right">
              <div className="swap-container">
                <div className="swap-text">To this network</div>
                <div className="swap-to">
                  <span className="swap-to-left">
                    <div className="swap-from-img-container"></div>
                    Select a network
                  </span>
                  <span className="swap-from-icon">
                    <RxCaretDown />
                  </span>
                </div>
              </div>
              <div className="swap-container">
                <div className="swap-text">You receive</div>
                <div className="swap-to bridge-receive">
                  <span className="swap-to-left">
                    <div className="swap-from-img-container"></div>
                  </span>
                  <span className="swap-from-icon">
                    <RxCaretDown />
                  </span>
                </div>
              </div>
            </div>
            {/* inputs for bridge */}
          </div>
        </div>
        <div className="bridge-card bridge-mobile">
          <div className="bridge-bottom-container">
            <div className="bridge-bottom-left">
              <h3 className="bridge-bottom-heading">Total (send + gas)</h3>
              <h2 className="bridge-bottom-amount">$0.00</h2>
              <p className="bridge-bottom-subheading">
                Includes a 0.875% MetaMask fee
              </p>
            </div>
            <div className="bridge-bottom-right">
              <button className="connect-btn">Connect MetaMask</button>
            </div>
          </div>
          <p className="bridge-terms terms-mobile">
            By confirming, you agree to MetaMask's{" "}
            <a
              href="https://consensys.io/terms-of-use"
              target="_blank"
              className="terms-service-link terms-link-bold"
            >
              Terms of Use
            </a>
          </p>
        </div>
        <p className="bridge-terms terms-main">
          By confirming, you agree to MetaMask's{" "}
          <a
            href="https://consensys.io/terms-of-use"
            target="_blank"
            className="terms-service-link terms-link-bold"
          >
            Terms of Use
          </a>
        </p>
      </div>
    </div>
  );
};

export default Bridge;
