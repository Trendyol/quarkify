import classNames from "classnames";
import React, { ReactNode } from "react";
import "../../styles/components/_modal.scss";
import Actions from "./modal-actions";
import Content from "./modal-content";
import Title from "./modal-title";

function Modal({ show, children, animation = "slideInRight" }: IProps) {
  const classes = classNames("modal-main", animation);
  if (!show) {
    return null;
  }
  return <div className={classes}>{children}</div>;
}

interface IProps {
  show: boolean;
  animation?: string;
  children?: ReactNode;
}

Modal.Title = Title;
Modal.Actions = Actions;
Modal.Content = Content;

export default Modal;
