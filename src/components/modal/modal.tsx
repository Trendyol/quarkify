import classNames from "classnames";
import React, { ReactNode } from "react";
import "../../styles/components/_modal.scss";
import Actions from "./modal-actions";
import Content from "./modal-content";
import Title from "./modal-title";

function Modal({ show, children, animation = "slideInRight",
                 iconPosition = "right", icon = "close", onClose, noIcon }: IProps) {
  const modalClasses = classNames("modal-main", animation);
  const iconBarClasses = classNames(
    "icon-bar",
    iconPosition === "left" && "modal-icon-left",
  );
  if (!show) {
    return null;
  }
  return(
    <div>
      <div className={modalClasses}>
        <div className={iconBarClasses}>
          {!noIcon && <i onClick={onClose} className={icon === "back" ? "icon-back-button" : "icon-close"}/>}
        </div>
        {children}
      </div>
    </div>
  );
}

interface IProps {
  show: boolean;
  animation?: animationTypes;
  children?: ReactNode;
  iconPosition?: IconPosition;
  icon?: IconTypes;
  noIcon?: boolean;
  onClose?(event: React.SyntheticEvent): void;
}

type IconTypes = "close" | "back";
type IconPosition = "left" | "right";
type animationTypes = "slideInLeft" | "slideInRight";

Modal.Title = Title;
Modal.Actions = Actions;
Modal.Content = Content;

export default Modal;
