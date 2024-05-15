import classNames from "classnames";
import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";

export default class BottomSheet extends PureComponent<
  IBottomSheetProps,
  IBottomSheetState
> {
  constructor(props: IBottomSheetProps) {
    super(props);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onExit = this.onExit.bind(this);
    this.state = { scrollPosition: 0 };
  }

  public componentDidMount(): void {
    if (this.props.show && typeof window !== "undefined") {
      this.lockWebKitBodyScrolling();
    }
  }

  public componentWillUpdate(
    nextProps: Readonly<IBottomSheetProps>,
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

  public componentDidUpdate(prevProps: Readonly<IBottomSheetProps>): void {
    if (prevProps.show !== this.props.show) {
      if (prevProps.onChange) {
        prevProps.onChange(this.props.show);
      }
    }
  }

  public handleTouchMove(e: Event): void {
    e.stopImmediatePropagation();
    const scrollElement = document.getElementsByClassName(
      "q-bottom-sheet-main",
    )[0];
    if (!e.composedPath().includes(scrollElement as EventTarget)) {
      e.preventDefault();
    }
  }

  public onEnter(): void {
    document.addEventListener("touchmove", this.handleTouchMove, {
      passive: false,
    });
  }

  public onExit(): void {
    document.removeEventListener("touchmove", this.handleTouchMove);
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

  public componentWillUnmount(): void {
    document.removeEventListener("touchmove", this.handleTouchMove);
    this.unlockWebKitBodyScrolling();
  }

  public render() {
    if (typeof window === "undefined") {
      return null;
    }

    const { show, children, onClose, className, transitionTimeout } =
      this.props;

    const bottomSheetClasses = classNames("q-bottom-sheet-main", className);

    const overlayClick = () => {
      onClose();
    };

    return (
      <CSSTransition
        in={show}
        onEnter={this.onEnter}
        onExit={this.onExit}
        unmountOnExit
        timeout={{
          enter: 0,
          exit: 200,
          ...transitionTimeout,
        }}
        classNames="q-slideInDown q-bottom-sheet"
      >
        <div className={"q-bottom-sheet-overlay"} onClick={overlayClick}>
          <div
            className={bottomSheetClasses}
            onClick={this.bottomSheetBodyClick}
          >
            {children}
          </div>
        </div>
      </CSSTransition>
    );
  }
  private bottomSheetBodyClick = (event: React.SyntheticEvent) => {
    event.stopPropagation();
  };
}

interface IBottomSheetProps {
  show: boolean;
  children?: React.ReactNode;
  onChange?: (status: boolean) => void;
  className?: string;
  onClose: () => void;
  transitionTimeout?: {
    enter: number;
    exit: number;
  };
}

interface IBottomSheetState {
  scrollPosition: number;
}
