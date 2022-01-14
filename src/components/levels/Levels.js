import "./levels.scss";
const Levels = () => {
  return (
    <div className="levels">
      <div className="levels__title">
        <title className="levels__title-level">Level 1</title>
      </div>
      <div className="levels__buttons">
        <button className="button button__secondary">Level 2</button>
        <button className="button button__secondary">Level 3</button>
      </div>
    </div>
  );
};
export default Levels;
