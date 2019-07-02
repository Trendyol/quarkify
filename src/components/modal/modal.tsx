import classNames from "classnames";
import React, { ReactNode } from "react";
import "../../styles/components/_modal.scss";
import { animationTypes, IconPosition, IconTypes } from "../../types/modal";
import Icon from "../icon";
import Actions from "./modal-actions";
import Content from "./modal-content";
import Title from "./modal-title";

const Modal = ({ show, children, animation = "slideInRight",
                 iconPosition = "right", icon = "close", onClose, noIcon }: IProps) => {
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
          {!noIcon && <Icon onClick={onClose} name={icon}/>}
        </div>
        {children}
      </div>
    </div>
  );
};

interface IProps {
  show: boolean;
  animation?: animationTypes;
  children?: ReactNode;
  iconPosition?: IconPosition;
  icon?: IconTypes;
  noIcon?: boolean;
  onClose?(event: React.SyntheticEvent): void;
}

Modal.Title = Title;
Modal.Actions = Actions;
Modal.Content = Content;

export default Modal;
