import classNames from "classnames";
import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Icon from "../icon";

export default class Popup extends PureComponent<IPopupProps, IPopupState> {
  constructor(props: IPopupProps) {
    super(props);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onExit = this.onExit.bind(this);
    this.state = { scrollPosition: 0 };
  }

  public componentDidMount() {
    if (this.props.show && typeof window !== "undefined") {
      this.lockWebKitBodyScrolling();
    }
  }

  public componentWillUpdate(
    nextProps: Readonly<IPopupProps>,
    nextState: Readonly<{}>,
    nextContext: any,
  ) {
    if (
      nextProps.show !== this.props.show &&
      nextProps.show &&
      typeof window !== "undefined"
    ) {
      this.lockWebKitBodyScrolling();
    } else if (
      nextProps.show !== this.props.show &&
      !nextProps.show &&
      typeof window !== "undefined"
    ) {
      this.unlockWebKitBodyScrolling();
    }
  }

  public componentDidUpdate(prevProps: Readonly<IPopupProps>): void {
    if (prevProps.show !== this.props.show) {
      if (prevProps.onChange) {
        prevProps.onChange(this.props.show);
      }
    }
  }

  public componentWillUnmount(): void {
    window.document.removeEventListener("touchmove", this.handleTouchMove);
    this.unlockWebKitBodyScrolling();
  }

  public handleTouchMove(e: Event): void {
    e.stopImmediatePropagation();
    const scrollElement = document.getElementsByClassName("q-popup-content")[0];
    if (!e.composedPath().includes(scrollElement as EventTarget)) {
      e.preventDefault();
    }
  }

  public onEnter(): void {
    window.document.addEventListener("touchmove", this.handleTouchMove, {
      passive: false,
    });
  }

  public onExit(): void {
    window.document.removeEventListener("touchmove", this.handleTouchMove);
  }

  public lockWebKitBodyScrolling(): void {
    const scrollPosition = window.pageYOffset;
    this.setState({ scrollPosition });

    window.document.body.style.overflow = "hidden";
    window.document.body.style.position = "fixed";
    window.document.body.style.top = `-${scrollPosition}px`;
    window.document.body.style.width = "100%";
  }

  public unlockWebKitBodyScrolling(): void {
    window.document.body.style.removeProperty("overflow");
    window.document.body.style.removeProperty("position");
    window.document.body.style.removeProperty("top");
    window.document.body.style.removeProperty("width");
    window.scrollTo(0, this.state.scrollPosition);
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
      withTitleBorder,
    } = this.props;

    const popupClasses = classNames("q-popup-overlay", className);

    const popupIconClasses = classNames(
      iconLeft && "q-popup-icon-left",
      "icon-close",
      "q-popup-icon-position",
    );

    const popupContentClasses = classNames(contentClassName, "q-popup-content");

    const popupTitleClasses = classNames({
      "q-popup-header": true,
      "with-border": withTitleBorder === true,
    });

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
            {(!noIcon || title) && (
              <div className={popupTitleClasses}>
                <div className="q-popup-header-text">{title}</div>
                {!noIcon && (
                  <Icon
                    className={popupIconClasses}
                    onClick={handleIconClick}
                    name="close"
                  />
                )}
              </div>
            )}
            <div className={popupContentClasses}>{children}</div>
          </div>
        </div>
      </CSSTransition>,
      window.document.body,
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
  withTitleBorder?: boolean;
}

interface IPopupState {
  scrollPosition: number;
}
