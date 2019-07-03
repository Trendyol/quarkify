import * as React from "react";
import { IconTypes } from "../../types/modal";
import Icon from "../icon";

const Header = ({children, icon = "close", noIcon = false, onClose}: IProps) => {
  return (
    <div className="modal-header">
      <h1 className="modal-title">{children}</h1>
      {!noIcon && <Icon name={icon} onClick={onClose}/>}
    </div>
  );
};

interface IProps {
  children: any;
  icon?: IconTypes;
  noIcon?: boolean;
  onClose?(event: React.SyntheticEvent): void;
}

export default Header;
