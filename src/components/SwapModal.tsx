import Metaicon from "../assets/icons/MetaIcon";

const SwapModal = ({ setSwap }: { setSwap: (swap: boolean) => void }) => {
  return (
    <div className="swap-connect-modal">
      <div onClick={() => setSwap(false)} className="swap-modal-overlay"></div>
      <div className="transaction-card-container swap-modal-card-container">
        <div className="swap">
          <div className="swap-modal-content">
            <div className="swap-card swap-modal-card">
              <h3 className="trans-heading">
                Please Connect Wallet to Proceed
              </h3>
              <div className="trans-img-container">
                <img
                  src="./transaction.png"
                  alt="transaction-img"
                  className="trans-img"
                />
              </div>
              <button className="connect-btn swap-modal-btn">
                <Metaicon />
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapModal;
