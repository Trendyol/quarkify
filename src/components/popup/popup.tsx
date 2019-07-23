import classNames from "classnames";
import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "../../styles/components/_popup.scss";
import Icon from "../icon";

class Popup extends React.PureComponent<IPopupProps> {
  // public componentDidMount(): void {
  //   if (this.props.show && typeof window !== "undefined") {
  //     document.body.classList.add("q-disable-scroll");
  //   }
  // }

  public componentWillReceiveProps(
    prevProps: Readonly<IPopupProps>,
    nextProps: Readonly<IPopupProps>,
  ): void {
    if (prevProps.show !== nextProps.show) {
      if (prevProps.onChange) {
        prevProps.onChange();
      }
      if (typeof window !== "undefined") {
        this.toggleScrollLock();
      }
    }
  }

  public render() {
    if (typeof window === "undefined") {
      return null;
    }

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
            <div className="q-popup-content">
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>,
      document.body,
    );
  }

  private popupBodyClick = (event: React.SyntheticEvent) => {
    event.stopPropagation();
  }

  private toggleScrollLock = () => {
    if (document.body.classList.contains("q-disable-scroll")) {
      document.body.classList.remove("q-disable-scroll");
      document.documentElement.classList.remove("q-disable-scroll");
    } else {
      document.body.classList.add("q-disable-scroll");
      document.documentElement.classList.add("q-disable-scroll");
    }
  }
}

interface IPopupProps {
  show: boolean;
  onClose: () => void;
  onChange?: () => void;
  iconLeft?: boolean;
  noIcon?: boolean;
  closeOnOverlayClick?: boolean;
  className?: string;
}

export default Popup;
