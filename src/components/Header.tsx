import { connectWallet } from "../utils/connectWallet";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <h2 className="dash-header-text">Dashboard</h2>
        <button
          onClick={() => connectWallet("connecting...")}
          className="connect-btn"
        >
          Connect MetaMask
        </button>
      </header>
    </div>
  );
};

export default Header;
