import classNames from "classnames";
import React, { ReactNode } from "react";
import "../../styles/components/_modal.scss";
import Actions from "./modal-actions";
import Content from "./modal-content";
import Title from "./modal-title";

function Modal({ show, children, animation = "slideInRight", iconLeft = false, backButton = false, onClose }: IProps) {
  const modalClasses = classNames("modal-main", animation);
  const iconBarClasses = classNames(
    "icon-bar",
    iconLeft && "modal-icon-left",
  );
  if (!show) {
    return null;
  }

  return(
    <div>
      <div className={modalClasses}>
        <div className={iconBarClasses}>
          <i onClick={onClose} className={backButton ? "icon-back-button" : "icon-close"}/>
        </div>
        {children}
      </div>
    </div>
  );
}

interface IProps {
  show: boolean;
  animation?: string;
  children?: ReactNode;
  iconLeft?: boolean;
  backButton?: boolean;
  onClose?(event: React.SyntheticEvent): void;
}

Modal.Title = Title;
Modal.Actions = Actions;
Modal.Content = Content;

export default Modal;
