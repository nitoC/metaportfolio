import FirstCard from "./FirstCard";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import { connectWallet } from "../utils/connectWallet";

const vals = [
  {
    img: "card1.webp",
    heading: "Easily on-ramp or off-ramp",
    text: "Convert cash to crypto or crypto for cash while maintaining control of your assets, no centralized exchange necessary.",
    btnText: "Buy crypto",
  },
  {
    img: "card2.webp",
    heading: "Move your crypto almost anywhere",
    text: "Seamlessly swap, bridge, and send crypto in the same place you manage all of your assets.",
    btnText: "Send crypto",
  },
  {
    img: "card3.webp",
    heading: "Diversify your portfolio with DeFi",
    text: "Track and manage all your assets, stake with multiple providers, set spending caps, and more.",
    btnText: "Stake crypto",
  },
];

const Dashboard = ({
  ele,
  handleElement,
}: {
  ele: string;
  handleElement: (e: string) => void;
}) => {
  return (
    <div className="body">
      <Header />
      <MobileHeader ele={ele} handleElement={handleElement} />
      <div className="dashboard-body">
        <div className="first-dash">
          <div className="right-img-container ">
            <img
              src="./asset1.webp"
              alt=""
              className="right-img first-dash-img first-dash-img"
            />
          </div>
          <div className="first-intro">
            <h2 className="first-heading">
              Get started with MetaMask Portfolio
            </h2>
            <div className="first-text">
              Get a clear, comprehensive view of your accounts and wallets,
              across all networks. Connect a MetaMask wallet or watch any
              Ethereum address.
            </div>
            <div className="first-intro-btns">
              <button className="watch-btn">Watch an address</button>
              <button
                onClick={() => connectWallet("connecting...")}
                className="connect-btn"
              >
                Connect MetaMask
              </button>
            </div>
          </div>
          <div className="left-img-container ">
            <img
              src="./asset2.webp"
              alt=""
              className="left-img first-dash-img first-dash-img"
            />
          </div>
        </div>
      </div>
      <div className="secondary-dash">
        {vals.map((item, index) => {
          return (
            <FirstCard
              key={index}
              img={item.img}
              heading={item.heading}
              text={item.text}
              btnText={item.btnText}
            />
          );
        })}
      </div>
      <div className="dash-footer">
        <div className="dash-footer-content">
          <h2 className="dash-footer-heading">
            Self-custody is easy with MetaMask Portfolio
          </h2>
          <p className="dash-footer-text">
            MetaMask is the leading self-custodial wallet. The safe and simple
            way to access blockchain applications and web3. Trusted by millions
            of users worldwide.
          </p>
          <button className="connect-btn">Explore Web3</button>
        </div>
        <div className="footer-img-container">
          <img src="./footer.webp" alt="footer image" className="footer-img" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
