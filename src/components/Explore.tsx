import { useState } from "react";
import HeadingOrs from "./HeadingOrs";
import TabButton from "./TabButton";
import MobileHeader from "./MobileHeader";

const Explore = ({
  ele,
  handleElement,
}: {
  ele: string;
  handleElement: (e: string) => void;
}) => {
  const [tab, settab] = useState("Top Gains");
  const vals = [" Top Gains", "Top Losses", "Watchlist"];
  const vals2 = [" Defi", "NFT Marketplaces"];
  console.log(tab);

  return (
    <div className="explore">
      <div className="explore-container">
        <HeadingOrs type="Explore" />
        <MobileHeader ele={ele} handleElement={handleElement} />
        <div className="explore-item">
          <div className="explore-card">
            <h3 className="explore-tokens">Tokens</h3>
            <TabButton tabs={vals} settab={(val: string) => settab(val)} />
            <div className="explore-token-background"></div>
          </div>
          {/* web apps */}
          <div className="explore-card">
            <h3 className="explore-tokens">Web3 Apps</h3>
            <TabButton tabs={vals2} settab={(val: string) => settab(val)} />
            <div className="explore-web3-background">
              <img
                src="./defi.PNG"
                alt=""
                className="web3"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
          {/* learn */}
          <div className="explore-card">
            <h3 className="explore-tokens">Learn articles</h3>
            <div className="explore-web3-background">
              <img
                src="./learnarticlse.PNG"
                alt=""
                className="web3"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
