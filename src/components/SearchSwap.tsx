import { IoSearchOutline } from "react-icons/io5";

let optionsTokens = [
  {
    name: "Dai",
    img: "./dai.png",
    abbr: "Dai stable coin",
  },
  {
    name: "Shiba",
    img: "./shib.png",
    abbr: "Shiba coin",
  },
  {
    name: "Ethereum",
    img: "./ethereum.png",
    abbr: "Ethereum",
  },
  {
    name: "Optimism",
    img: "./optimism.png",
    abbr: "Optimism coin",
  },
  {
    name: "BNB",
    img: "./bnb.png",
    abbr: "Binance smart chain",
  },
  {
    name: "Polygon",
    img: "./polygon-token.png",
    abbr: "Polygon",
  },
  {
    name: "USDC",
    img: "./usdc.png",
    abbr: "USDC",
  },
  {
    name: "USDT",
    img: "./usdt.png",
    abbr: "Tether USD",
  },
];

type Token = {
  name: string;
  img: string;
  abbr: string;
};

type SearchSwapProps = {
  type: string;
  firstToken: string;
  handleDisp: (val: Token, type: string) => void;
};

const SearchSwap = ({ type, handleDisp, firstToken }: SearchSwapProps) => {
  //{
  //   name,
  //   img,
  //   abbr,
  // }: {
  //   name: string;
  //   img: string;
  //   abbr: string;
  // }

  if (firstToken != "" || firstToken.length > 1) {
    optionsTokens = optionsTokens.filter((item) => item.name !== firstToken);
  }
  return (
    <div className="search-swap-wrapper">
      <div className="search-swap-container">
        <div className="search-swap-icon">
          <IoSearchOutline />
        </div>
        <input
          type="text"
          className="swap-search-input"
          placeholder="Search name or paste address"
        />
      </div>
      <div className="token-dropdown">
        {optionsTokens.map((token, index) => {
          return (
            <div
              key={index}
              onClick={() => handleDisp(token, type)}
              className="token"
            >
              <div className="token-left">
                <img src={token.img} alt="token image" className="token-img" />
              </div>
              <div className="token-right">
                <span className="token-name">{token.name}</span>
                <span className="token-abbr">{token.abbr}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchSwap;
