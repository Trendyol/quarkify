import classNames from "classnames";
import React, { PureComponent, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import "../../styles/components/_bottom-sheet.scss";

export default class BottomSheet extends PureComponent<IBottomSheetProps> {

  constructor(props: IBottomSheetProps) {
    super(props);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onExit = this.onExit.bind(this);
  }

  public componentDidMount(): void {
    if (this.props.show && typeof window !== "undefined") {
      document.body.classList.add("q-disable-scroll");
    }
  }

  public componentWillUpdate(
    nextProps: Readonly<IBottomSheetProps>,
    nextState: Readonly<{}>,
    nextContext: any,
  ) {
    if (nextProps.show !== this.props.show && nextProps.show && typeof window !== "undefined") {
      document.body.classList.add("q-disable-scroll");
      document.documentElement.classList.add("q-disable-scroll");
    } else if (nextProps.show !== this.props.show && !nextProps.show && typeof window !== "undefined") {
      document.body.classList.remove("q-disable-scroll");
      document.documentElement.classList.remove("q-disable-scroll");
    }
  }

  public componentDidUpdate(
    prevProps: Readonly<IBottomSheetProps>,
  ): void {
    if (prevProps.show !== this.props.show) {
      if (prevProps.onChange) {
        prevProps.onChange(this.props.show);
      }
    }
  }

  public handleTouchMove(e: Event): void {
    e.stopImmediatePropagation();
    const scrollElement = document.getElementsByClassName("q-bottom-sheet-main")[0];
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

  public componentWillUnmount(): void {
    document.removeEventListener("touchmove", this.handleTouchMove);
    document.body.classList.remove("q-disable-scroll");
    document.documentElement.classList.remove("q-disable-scroll");
  }

  public render() {
    if (typeof window === "undefined") {
      return null;
    }

    const {
      show,
      children,
      onClose,
      className,
    } = this.props;

    const bottomSheetClasses = classNames(
      "q-bottom-sheet-main",
      className,
    );

    const overlayClick = () => {
      onClose();
    };

    return <CSSTransition
      in={show}
      onEnter={this.onEnter}
      onExit={this.onExit}
      unmountOnExit
      timeout={{
        enter: 0,
        exit: 500,
      }}
      classNames="q-slideInDown q-bottom-sheet"
    >
      <div className={"q-bottom-sheet-overlay"} onClick={overlayClick}>
        <div className={bottomSheetClasses} onClick={this.bottomSheetBodyClick}>
            {children}
        </div>
      </div>
    </CSSTransition>;
  }
  private bottomSheetBodyClick = (event: React.SyntheticEvent) => {
    event.stopPropagation();
  }
}

interface IBottomSheetProps {
  show: boolean;
  children?: ReactNode;
  onChange?: (status: boolean) => void;
  className?: string;
  onClose: () => void;
}
