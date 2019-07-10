import React, { ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import "../../styles/components/_modal.scss";
import { animationTypes } from "../../types/modal";
import Actions from "./modal-actions";
import Content from "./modal-content";
import Header from "./modal-header";

class Modal extends React.Component<IModalProps> {
  public static Header = Header;
  public static Actions = Actions;
  public static Content = Content;

  public componentDidMount(): void {
    if (this.props.show && typeof window !== "undefined") {
      document.body.classList.add("disable-scroll");
    }
  }

  public shouldComponentUpdate(
    nextProps: Readonly<IModalProps>,
    nextState: Readonly<{}>,
    nextContext: any,
  ): boolean {
    if (nextProps.show !== this.props.show && this.props.onChange) {
      this.props.onChange();
    }
    if (nextProps.show && typeof window !== "undefined") {
      document.body.classList.add("disable-scroll");
    } else if (typeof window !== "undefined") {
      document.body.classList.remove("disable-scroll");
    }
    return true;
  }

  public render() {
    const { show, children, animation = "slideInRight" } = this.props;
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
  }
}

interface IModalProps {
  show: boolean;
  animation?: animationTypes;
  children?: ReactNode;
  onChange?: () => void;
}

export default Modal;
