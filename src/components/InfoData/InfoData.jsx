import "./InfoData.css";

export const InfoData = ({ nameInfo, primaryNumber, secondNumber }) => {
  return (
    <article className="info-data">
      <div className="icon-Info">
        <img src={`src/assets/images/icon-${nameInfo}.svg`} alt="" />
        <span>{nameInfo}</span>
      </div>
      <div className="numOfNum">
        {primaryNumber} / {secondNumber}
      </div>
    </article>
  );
};
