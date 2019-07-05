import React, { FunctionComponent } from "react";
import { IconTypes } from "../../types/modal";
import Icon from "../icon";

const Header: FunctionComponent<IProps> = ({
  children,
  icon = "close",
  noIcon = false,
  leftIcon,
  leftIconOnClick,
  onClose,
}) => {
  const classNames = [
    "modal-header",
    leftIcon && "has-left-icon",
  ];
  return (
    <div className={classNames.join(" ")}>
      {leftIcon && <Icon name={leftIcon} onClick={leftIconOnClick} />}
      <h1 className="modal-title">{children}</h1>
      {!noIcon && <Icon name={icon} onClick={onClose} />}
    </div>
  );
};

interface IProps {
  icon?: IconTypes;
  noIcon?: boolean;
  leftIcon?: IconTypes;
  leftIconOnClick?(event: React.SyntheticEvent): void;
  onClose?(event: React.SyntheticEvent): void;
}

export default Header;
