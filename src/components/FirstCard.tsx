const FirstCard = ({
  img,
  heading,
  text,
  btnText,
}: {
  img: string;
  heading: string;
  text: string;
  btnText: string;
}) => {
  return (
    <div className="second-dash-container">
      <div className="card-img-container">
        <img src={img} alt="card image" className="card-img" />
      </div>
      <div className="card-intro">
        <h2 className="card-heading">{heading}</h2>
        <p className="card-text">{text}</p>
        <div className="card-btn">
          <button className="connect-btn">{btnText}</button>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
