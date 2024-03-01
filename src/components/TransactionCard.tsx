import HeadingOrs from "./HeadingOrs";
import MobileHeader from "./MobileHeader";

const TransactionCard = ({
  type,
  subheading,
  heading,
  text,
  checks,
  ele,
  handleElement,
}: {
  type: string;
  subheading: string | null;
  heading: string | null;
  text: string | null;
  checks: string[];
  ele: string;
  handleElement: (e: string) => void;
}) => {
  return (
    <div className="transaction-card-container">
      <div className="swap">
        <HeadingOrs type={type} />
        <MobileHeader ele={ele} handleElement={handleElement} />
        <div className="swap-content">
          <div className="swap-card transaction-card">
            <h2 className="trans-heading">{heading}</h2>
            <div className="trans-img-container">
              <img
                src="./transaction.png"
                alt="transaction-img"
                className="trans-img"
              />
            </div>
            {subheading !== null && (
              <h3 className="trans-subheading">{subheading}</h3>
            )}
            {text !== null && <div className="trans-text">{text}</div>}
            <div className="checks">
              {checks.map((item) => (
                <div className="checks-item" key={item}>
                  <div className="check-img-container">
                    <img
                      src="./transcheck.PNG"
                      alt="transaction checkmark"
                      className="check-img"
                    />
                  </div>
                  {item}
                </div>
              ))}
            </div>
            <button className="connect-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
