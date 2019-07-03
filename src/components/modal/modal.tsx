import classNames from "classnames";
import React, { ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import "../../styles/components/_modal.scss";
import { animationTypes, IconPosition, IconTypes } from "../../types/modal";
import Icon from "../icon";
import Actions from "./modal-actions";
import Content from "./modal-content";
import Title from "./modal-title";

const Modal = ({ show,
                 children,
                 animation = "slideInRight",
                 iconPosition = "right",
                 icon = "close",
                 onClose,
                 noIcon }: IProps) => {
  const modalClasses = classNames("modal-main");
  const iconBarClasses = classNames(
    "icon-bar",
    iconPosition === "left" && "modal-icon-left",
  );
  return(
        <CSSTransition in={show} unmountOnExit timeout={300} classNames={`${animation} modal`}>
          <div className={modalClasses}>
            <div className={iconBarClasses}>
              {!noIcon && <Icon onClick={onClose} name={icon}/>}
            </div>
            {children}
          </div>
        </CSSTransition>
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