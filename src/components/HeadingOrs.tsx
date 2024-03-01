import { FaRegBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdLocalGasStation } from "react-icons/md";

const HeadingOrs = ({ type }: { type: string }) => {
  return (
    <div className="header-container">
      <header className="header">
        <h2 className="header-ors-text">{type}</h2>
        <nav className="nav">
          <div className="search">
            <div className="search-icon">
              <IoIosSearch />
            </div>
            <input
              type="text"
              className="nav-search-input"
              placeholder="Search for a token..."
            />
          </div>
          <div className="station-icon-container nav-icon">
            <MdLocalGasStation />
          </div>
          <div className="bell-icon-container nav-icon">
            <FaRegBell />
          </div>
          <button className="connect-btn-lite">Connect MetaMask</button>
        </nav>
      </header>
    </div>
  );
};

export default HeadingOrs;
