import { RxCaretDown } from "react-icons/rx";

const SwapNetwork = ({ name, img }: { name: string; img: string }) => {
  return (
    <div className="swap-network">
      <div className="swap-net-dropdown">
        <span className="swap-net-left">
          <div className="value-container">
            <img src={img} alt="" className="val-img" />
          </div>
          {name}
        </span>

        <RxCaretDown />
      </div>
    </div>
  );
};

export default SwapNetwork;
