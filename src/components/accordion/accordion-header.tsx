import React, { FunctionComponent } from "react";
import { IconTypes } from "../../types/accordion";
import Icon from "../icon";

const Header: FunctionComponent<IHeaderProps> = ({
  children,
  icon = "forward-button", noIcon = false,
  leftIcon,
  onClose,
  toggleContent,
}) => {
  const classNames = ["q-accordion-header", leftIcon && "q-has-left-icon"];
  return (
    <div className={classNames.join(" ")} onClick={toggleContent}>
      <div className="q-accordion-title">{children}</div>
      {!noIcon && (
        <Icon role="button" aria-label={icon} name={icon} onClick={onClose} />
      )}
    </div>
  );
};

export interface IHeaderProps {
  icon?: string;
  noIcon?: boolean;
  leftIcon?: IconTypes;
  toggleContent: () => void;
  leftIconOnClick?(event: React.SyntheticEvent): void;
  onClose?(event: React.SyntheticEvent): void;
}

export default Header;
