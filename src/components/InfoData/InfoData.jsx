import "./InfoData.css";

export const InfoData = ({bg, color, nameInfo, primaryNumber, secondNumber}) => {

  return (
    <>
      <article className={`${bg} info-data`}>
        <div className="icon-Info">
          <img src={`src/assets/images/icon-${nameInfo}.svg`} alt="" />
          <span className={`texto ${color}`}>{nameInfo}</span>
        </div>
        <div className="numOfNum">
          <span className="boldNumber">{primaryNumber}</span>
          <span>/</span>
          <span>{secondNumber}</span>
        </div>
      </article> 
    </>
  );
};
