import React, { FunctionComponent } from "react";
import { IconTypes } from "../../types/modal";
import Icon from "../icon";

const Header: FunctionComponent<IProps> = ({
  children,
  icon = "close",
  noIcon = false,
  onClose,
}) => {
  return (
    <div className="modal-header">
      <h1 className="modal-title">{children}</h1>
      {!noIcon && (
        <Icon role="button" aria-label="Close" name={icon} onClick={onClose} />
      )}
    </div>
  );
};

interface IProps {
  icon?: IconTypes;
  noIcon?: boolean;
  onClose?(event: React.SyntheticEvent): void;
}

export default Header;
