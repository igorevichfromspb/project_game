import "./levels.scss";
import { ButtonLevels } from "../ButtonLevels";
const Levels = () => {
  return (
    <div className="levels">
      <div className="levels-title">
        <title className="levels-title_level">Level 1</title>
      </div>
      <div className="levels-buttons">
        <ButtonLevels>Level 2</ButtonLevels>
        <ButtonLevels>Level 3</ButtonLevels>
      </div>
    </div>
  );
};
export default Levels;
