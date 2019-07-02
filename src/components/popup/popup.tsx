import classNames from "classnames";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "../../styles/components/_popup.scss";

const insideClick = (event: any) => {
  event.stopPropagation();
};

function Popup({ show, children, onClose, iconLeft }: IProps) {
  const popupMainClasses = classNames("popup-main", "slideInUp");
  const popupIconClasses = classNames(
    iconLeft && "popup-icon-left",
    "icon-close",
    "popup-icon-position",
  );
  if (!show) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className={"popup-overlay"} onClick={onClose}>
      <div className={popupMainClasses} onClick={insideClick}>
        <i className={popupIconClasses} onClick={onClose}/>
        {children}
      </div>
    </div>,
    document.body,
  );
}

interface IProps {
  show: boolean;
  children?: ReactNode;
  slideIn?: string;
  onClose: () => void;
  iconLeft?: boolean;
}

export default Popup;
