import style from "./ButtonLevels.module.scss";
import cn from "classnames";

export const ButtonLevels = ({ children }) => {
  return <div className={cn(style["button-secondary-levels"])}>{children}</div>;
};
