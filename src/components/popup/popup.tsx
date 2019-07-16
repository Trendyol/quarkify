import classNames from "classnames";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "../../styles/components/_popup.scss";
import Icon from "../icon";

class Popup extends React.Component<IProps> {
  public componentDidMount(): void {
    if (this.props.show && typeof window !== "undefined") {
      document.body.classList.add("q-disable-scroll");
    }
  }

  public shouldComponentUpdate(
    nextProps: Readonly<IProps>,
    nextState: Readonly<{}>,
    nextContext: any,
  ): boolean {
    if (nextProps.show !== this.props.show && this.props.onChange) {
      this.props.onChange();
    }
    if (nextProps.show && typeof window !== "undefined") {
      document.body.classList.add("q-disable-scroll");
      document.documentElement.classList.add("q-disable-scroll");
    } else if (typeof window !== "undefined") {
      document.body.classList.remove("q-disable-scroll");
      document.documentElement.classList.remove("q-disable-scroll");
    }
    return true;
  }

  public render() {
    const {
      show,
      children,
      onClose,
      iconLeft,
      noIcon = false,
      closeOnOverlayClick = true,
      className,
    } = this.props;
    const popupClasses = classNames(
      "q-popup-overlay",
      className,
    );
    const popupIconClasses = classNames(
      iconLeft && "q-popup-icon-left",
      "icon-close",
      "q-popup-icon-position",
    );

    const overlayClick = () => {
      if (closeOnOverlayClick) {
        onClose();
      }
    };

    if (typeof window === "undefined") {
      return null;
    }

    return ReactDOM.createPortal(
      <CSSTransition
        in={show}
        unmountOnExit
        timeout={150}
        classNames="q-zoomIn q-popup"
      >
        <div className={popupClasses} onClick={overlayClick}>
          <div className="q-popup-main" onClick={this.popupBodyClick}>
            {!noIcon && (
              <Icon
                className={popupIconClasses}
                onClick={onClose}
                name="close"
              />
            )}
            {children}
          </div>
        </div>
      </CSSTransition>,
      document.body,
    );
  }

  private popupBodyClick = (event: React.SyntheticEvent) => {
    event.stopPropagation();
  }
}

interface IProps {
  show: boolean;
  children?: ReactNode;
  slideIn?: string;
  onClose: () => void;
  onChange?: () => void;
  iconLeft?: boolean;
  noIcon?: boolean;
  closeOnOverlayClick?: boolean;
  className?: string;
}

export default Popup;
