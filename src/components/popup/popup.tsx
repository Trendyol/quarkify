import classNames from "classnames";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "../../styles/components/_popup.scss";
import Icon from "../icon";

const Popup = ({ show, children, onClose, iconLeft, noIcon = false, closeOnOverlayClick = true }: IProps) => {
  const popupMainClasses = classNames("popup-main", "slideInUp");
  const popupIconClasses = classNames(
    iconLeft && "popup-icon-left",
    "icon-close",
    "popup-icon-position",
  );

  if (!show) {
    return null;
  }

  const popupBodyClick = (event: React.SyntheticEvent) => {
    event.stopPropagation();
  };

  const overlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className="popup-overlay" onClick={overlayClick}>
      <div className={popupMainClasses} onClick={popupBodyClick}>
        {!noIcon && <Icon className={popupIconClasses} onClick={onClose} name="close"/>}
        {children}
      </div>
    </div>,
    document.body,
  );
};

interface IProps {
  show: boolean;
  children?: ReactNode;
  slideIn?: string;
  onClose: () => void;
  iconLeft?: boolean;
  noIcon?: boolean;
  closeOnOverlayClick?: boolean;
}

export default Popup;
