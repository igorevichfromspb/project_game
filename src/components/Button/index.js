import style from "./Button.module.scss";
import cn from "classnames";

export const Button = ({ children }) => {
  return (
    <div className={cn(style["button-primary"], style["button-big"])}>
      {children}
    </div>
  );
};
