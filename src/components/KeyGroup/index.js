import green from "../../resources/img/key.png";
import gray from "../../resources/img/gray-key.png";
import "./KeyGroup.scss";

// openKeys: { 1: boolean, 2: boolean, 3: boolean, 4: boolean }

export const KeyGroup = ({ openKeys }) => {
  return (
    <div className="keygroup">
      <img
        id="keygroup-key-1"
        src={openKeys[1] ? gray : green}
        alt="key-group-key"
      />
      <img
        id="keygroup-key-2"
        src={openKeys[2] ? gray : green}
        alt="key-group-key"
      />
      <img
        id="keygroup-key-3"
        src={openKeys[3] ? gray : green}
        alt="key-group-key"
      />
      <img
        id="keygroup-key-4"
        src={openKeys[4] ? gray : green}
        alt="key-group-key"
      />
    </div>
  );
};
