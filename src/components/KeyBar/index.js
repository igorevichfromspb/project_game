import { Image } from "react-bootstrap";
import keybarSrc from "../../resources/img/keybar.png";
import barsSrc from "../../resources/img/bars.svg";
import keySrc from "../../resources/img/key-green-big.png";
import style from "./KeyBar.module.scss";
import cn from "classnames";

export const KeyBar = () => {
  return (
    <div className={style.keybar}>
      <Image height={475} width={620} src={keybarSrc} className={style.img} />
      <img
        className={cn(style.key, style.floating)}
        src={keySrc}
        alt={keySrc}
      />
      <img className={cn(style.bars)} src={barsSrc} alt={barsSrc} />
    </div>
  );
};
