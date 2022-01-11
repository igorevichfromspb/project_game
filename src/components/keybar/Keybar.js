import key from "../../resources/img/key.png";
import "./keybar.scss";
const Keybar = () => {
  return (
    <div className="keybar">
      <div className="keybar-img">
        <img src={key} alt="keys" />
        <img src={key} alt="keys" />
        <img src={key} alt="keys" />
        <img src={key} alt="keys" />
      </div>
    </div>
  );
};
export default Keybar;
