import "./Header.css";

export const Header = ({ title }) => {
  return (
    <header>
      <h1 className="title">{title}</h1>
      <div className="circleNumber">
        <div className="container-info-circle">
          <span className="soloNummber">76</span>
          <div className="continer-numberOf"><span className="nummberOf">of 100</span></div>
        </div>
      </div>
      <div className="continer-subtitle-paragraph">
        <h2 className="subtitle">Great</h2>
        <p className="paragraphResult">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </header>
  );
};
