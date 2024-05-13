import "./Header.css";

export const Header = ({ title }) => {
  return (
    <header>
      <h1 className="title">{title}</h1>
      <div className="circleNumber">
        <span className="soloNummber">76</span>
        <span className="nummberOf">of 100</span>
      </div>
      <h2 className="subtitle">Great</h2>
      <p className="paragraphResult">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </header>
  );
};
