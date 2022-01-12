import key from "../../resources/img/key.png";

import "./keys.scss";
const Keys = () => {
  return (
    <div className="keys">
      <p className="keys-remaining">Level 2 keys remaining</p>
      <div className="keys-img">
        <img src={key} alt="keys" />
        <img src={key} alt="keys" />
        <img src={key} alt="keys" />
      </div>
      <p>X 65</p>
    </div>
  );
};
export default Keys;
