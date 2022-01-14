import key from "../../resources/img/key.png";

import "./keys.scss";
const Keys = () => {
  return (
    <div className="keys">
      <p className="keys__remaining">
        <span className="keys__remaining-level">Level 2</span> keys remaining
      </p>
      <div className="keys__img">
        <img src={key} alt="keys" />
        <img src={key} alt="keys" />
        <img src={key} alt="keys" />
      </div>
      <p className="keys__number">X 65</p>
    </div>
  );
};
export default Keys;
