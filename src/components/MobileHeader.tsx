import { FaRegBell } from "react-icons/fa";
import Harmburger from "../assets/icons/Harmburger";
import MobileSidebar from "./Mobileside";
import { useState } from "react";

const MobileHeader = ({
  ele,
  handleElement,
}: {
  ele: string;
  handleElement: (e: string) => void;
}) => {
  const [mobile, setmobile] = useState("mobile-hide");

  const handlemobile = (val: string) => {
    setmobile(val);
  };
  return (
    <div className="header-mobile-container">
      <header className="header-mobile">
        <div className="mobile-logo-container">
          <img src="./metamobile.svg" alt="" className="mobile-logo" />
        </div>
        <nav className="nav">
          <div className="bell-icon-container nav-icon">
            <FaRegBell />
          </div>
          <button
            onClick={() => setmobile("mobile-show")}
            className="hamburger-btn"
          >
            <Harmburger />
          </button>
        </nav>
      </header>
      <MobileSidebar
        ele={ele}
        handleElement={handleElement}
        mobile={mobile}
        setmobile={handlemobile}
      />
    </div>
  );
};

export default MobileHeader;
