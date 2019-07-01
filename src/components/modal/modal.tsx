import classNames from "classnames";
import React, { ReactNode } from "react";
import "../../styles/components/_modal.scss";
import Actions from "./modal-actions";
import Content from "./modal-content";
import Title from "./modal-title";

function Modal({ show, children, animation = "slideInRight", iconLeft = false, onClose }: IProps) {
  const modalClasses = classNames("modal-main", animation);
  const iconClasses = classNames(
    iconLeft && "modal-icon-left",
    "icon-close",
  );
  if (!show) {
    return null;
  }

  return(
    <div>
      <div className={modalClasses}>
        <div className="icon-bar">
          <i onClick={onClose} className={iconClasses}/>
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
  onClose?(event: React.SyntheticEvent): void;
}

Modal.Title = Title;
Modal.Actions = Actions;
Modal.Content = Content;

export default Modal;
