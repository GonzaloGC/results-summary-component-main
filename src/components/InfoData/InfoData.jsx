import "./InfoData.css";

export const InfoData = ({bg, color, nameInfo, primaryNumber, secondNumber, icon}) => {

  return (
    <>
      <article className={`${bg} info-data`}>
        <div className="icon-Info">
          <img src={icon} alt="" />
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
