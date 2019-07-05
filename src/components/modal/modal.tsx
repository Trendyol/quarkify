import React, { ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import "../../styles/components/_modal.scss";
import { animationTypes } from "../../types/modal";
import Actions from "./modal-actions";
import Content from "./modal-content";
import Header from "./modal-header";

const Modal = ({ show, children, animation = "slideInRight" }: IModalProps) => {
  return (
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={300}
      classNames={`${animation} modal`}
    >
      <div className="modal-main">{children}</div>
    </CSSTransition>
  );
};

interface IModalProps {
  show: boolean;
  animation?: animationTypes;
  children?: ReactNode;
}

Modal.Header = Header;
Modal.Actions = Actions;
Modal.Content = Content;

export default Modal;
