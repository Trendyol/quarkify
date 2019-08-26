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

  public componentDidUpdate(
    prevProps: Readonly<IBottomSheetProps>,
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
    const scrollElement = document.getElementsByClassName("q-bottom-sheet-content")[0];
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
      onClose,
      className,
    } = this.props;

    const bottomSheetClasses = classNames(
      "q-bottom-sheet-overlay",
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
      timeout={150}
      classNames="q-slideInDown q-bottom-sheet"
    >
      <div className={bottomSheetClasses} onClick={overlayClick}>
        <div className="q-bottom-sheet-main" onClick={this.bottomSheetBodyClick}>
          <div className="q-bottom-sheet-content">
            {children}
          </div>
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
