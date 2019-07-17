import React, { FunctionComponent } from "react";
import Icon from "../icon";

const Header: FunctionComponent<IHeaderProps> = ({
  children,
  rightIcon,
  leftIcon,
  leftIconOnClick,
  rightIconOnClick,
}) => {
  const classNames = ["q-modal-header", leftIcon && "q-has-left-icon"];
  return (
    <div className={classNames.join(" ")}>
      {leftIcon &&
      <Icon className={"q-i"} aria-label={leftIcon} name={leftIcon} onClick={leftIconOnClick} />}
      <h1 className="q-modal-title">{children}</h1>
      {rightIcon &&
        <Icon className={"q-i"} aria-label={rightIcon} name={rightIcon} onClick={rightIconOnClick} />
      }
    </div>
  );
};

export interface IHeaderProps {
  leftIcon?: string;
  rightIcon?: string;
  leftIconOnClick?(event: React.SyntheticEvent): void;
  rightIconOnClick?(event: React.SyntheticEvent): void;
}

export default Header;
