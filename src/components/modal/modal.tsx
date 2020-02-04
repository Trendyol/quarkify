import classNames from "classnames";
import React, { ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import "../../styles/components/_modal.scss";
import { animationTypes } from "../../types/modal";
import Actions from "./modal-actions";
import Content from "./modal-content";
import Header from "./modal-header";

export default class Modal extends React.Component<IModalProps> {
  public static Header = Header;
  public static Actions = Actions;
  public static Content = Content;

  public componentDidMount(): void {
    if (this.props.show && typeof window !== "undefined") {
      document.body.classList.add("q-disable-scroll");
    }
  }

  public componentWillUpdate(
    nextProps: Readonly<IModalProps>,
    nextState: Readonly<{}>,
    nextContext: any,
  ) {
    if (nextProps.show !== this.props.show && this.props.onChange) {
      this.props.onChange();
    }
    if (nextProps.show !== this.props.show && nextProps.show && typeof window !== "undefined") {
      document.body.classList.add("q-disable-scroll");
      document.documentElement.classList.add("q-disable-scroll");
    } else if (nextProps.show !== this.props.show && !nextProps.show && typeof window !== "undefined") {
      document.body.classList.remove("q-disable-scroll");
      document.documentElement.classList.remove("q-disable-scroll");
    }
  }

  public render() {
    const { show, children, animation = "slideInRight", className } = this.props;
    const modalClasses = classNames(
      "q-modal-main",
      className,
    );
    return <CSSTransition
      in={show}
      unmountOnExit
      timeout={300}
      classNames={`q-${animation} q-modal`}
    >
      <div className={modalClasses}>{children}</div>
    </CSSTransition>;
  }
}

interface IModalProps {
  show: boolean;
  animation?: animationTypes;
  children?: ReactNode;
  onChange?: () => void;
  className?: string;
}
