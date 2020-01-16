import classNames from "classnames";
import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "../../styles/components/_popup.scss";
import Icon from "../icon";
import Typography from "../typography";

export default class Popup extends PureComponent<IPopupProps> {

  constructor(props: IPopupProps) {
    super(props);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onExit = this.onExit.bind(this);
  }

  public componentDidUpdate(
    prevProps: Readonly<IPopupProps>,
  ): void {
    if (prevProps.show !== this.props.show) {
      if (prevProps.onChange) {
        prevProps.onChange(this.props.show);
      }
    }
  }

  public componentWillUnmount(): void {
    document.removeEventListener("touchmove", this.handleTouchMove);
  }

  public handleTouchMove(e: Event): void {
    e.stopImmediatePropagation();
    const scrollElement = document.getElementsByClassName("q-popup-content")[0];
    if (!e.composedPath().includes(scrollElement as EventTarget)) {
      e.preventDefault();
    }
  }

  public onEnter(): void {
    document.addEventListener("touchmove", this.handleTouchMove, { passive: false });
  }

  public onExit(): void {
    document.removeEventListener("touchmove", this.handleTouchMove);
  }

  public render() {
    if (typeof window === "undefined") {
      return null;
    }

    const {
      show,
      children,
      iconLeft,
      noIcon = false,
      closeOnOverlayClick = true,
      onChange,
      className,
      contentClassName,
      title,
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

    const popupContentClasses = classNames(
      contentClassName,
      "q-popup-content",
    );

    const overlayClick = () => {
      if (closeOnOverlayClick) {
        onChange(false);
      }
    };

    const handleIconClick = () => {
      onChange(false);
    };

    return ReactDOM.createPortal(
      <CSSTransition
        in={show}
        onEnter={this.onEnter}
        onExit={this.onExit}
        unmountOnExit
        timeout={150}
        classNames="q-zoomIn q-popup"
      >
        <div className={popupClasses} onClick={overlayClick}>
          <div className="q-popup-main" onClick={this.popupBodyClick}>
            {
              (!noIcon || title) && <div className="q-popup-header">
                <div className="q-popup-header-text">
                  {title}
                </div>
                {!noIcon && (
                  <Icon
                    className={popupIconClasses}
                    onClick={handleIconClick}
                    name="close"
                  />
                )}
              </div>
            }
            <div className={popupContentClasses}>
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

}

interface IPopupProps {
  show: boolean;
  onChange: (status: boolean) => void;
  iconLeft?: boolean;
  noIcon?: boolean;
  closeOnOverlayClick?: boolean;
  className?: string;
  contentClassName?: string;
  title?: React.ReactElement | string;
}
