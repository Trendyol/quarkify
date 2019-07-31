import classNames from "classnames";
import React, { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_scroll-to-top.scss";
import { detectPassiveEvents } from "../../utils/detectPassiveEvents";
import Icon from "../icon";

class ScrollToTop extends PureComponent<IScrollToTopProps, IScrollToTopState> {
  public static defaultProps = {
    smooth: true,
  };
  private requestAnimationFrameId: number | null;
  private initialPosition: number;
  private startTime: number | null;
  private lastScrollPosition: number;

  constructor(props: IScrollToTopProps) {
    super(props);
    this.state = {
      show: false,
    };
    this.lastScrollPosition = 0;
    this.requestAnimationFrameId = null;
    this.initialPosition = 0;
    this.startTime = null;
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollStep = this.scrollStep.bind(this);
    this.stopScrolling = this.stopScrolling.bind(this);
  }

  public componentDidMount(): void  {
    // this.handleScroll();
    window.document.addEventListener("scroll", this.handleScroll, detectPassiveEvents() ? { passive: true} : false);
    window.document.addEventListener("wheel", this.stopScrolling, detectPassiveEvents() ? { passive: true } : false);
    window.document.addEventListener(
      "touchstart",
      this.stopScrolling,
      detectPassiveEvents() ? { passive: true } : false);
  }

  public componentWillUnmount(): void {
    window.document.removeEventListener("scroll", this.handleScroll);
    window.document.removeEventListener("wheel", this.handleScroll, false);
    window.document.removeEventListener("touchstart", this.handleScroll, false);
  }

  public render() {
    const scrollToTopClasses = classNames(
      "q-scroll-to-top",
      !this.state.show && "hide",
      this.props.className,
    );

    return (
      <div className={scrollToTopClasses} onClick={this.handleClick}>
        <Icon name="arrow-top" color="white"/>
      </div>
    );
  }

  private handleClick(): void {
    this.startTime = null;
    this.initialPosition = window.pageYOffset;
    if (!this.props.smooth) {
      // Scroll without animation
      window.scrollTo(0, 0);
    } else {
      this.requestAnimationFrameId = window.requestAnimationFrame(this.scrollStep);
    }
  }

  private handleScroll(): void {
    this.setState({show:
        window.pageYOffset <= this.lastScrollPosition &&
        window.pageYOffset > 0,
    });
    this.lastScrollPosition = window.pageYOffset;
  }

  private scrollStep(timestamp: number): void {
    window.document.removeEventListener("scroll", this.handleScroll);
    if (!this.startTime) { this.startTime = timestamp; }
    const scrollPosition = this.easeOutCubic(
      timestamp - this.startTime!,
      this.initialPosition,
      500,
    );
    if (window.pageYOffset > 0) {
      window.scrollTo(0, scrollPosition);
      this.requestAnimationFrameId = window.requestAnimationFrame(this.scrollStep);
    } else {
      this.stopScrolling();
    }
  }

  private stopScrolling() {
    if (this.requestAnimationFrameId) {
      window.cancelAnimationFrame(this.requestAnimationFrameId);
      window.document.addEventListener("scroll", this.handleScroll, detectPassiveEvents() ? { passive: true } : false);
      this.setState({show: false});
      this.requestAnimationFrameId = null;
    }
  }

  private easeOutCubic(currentTime: number, initialPosition: number, duration: number): number {
    const c = 0 - initialPosition;
    return c * ((currentTime = currentTime / duration - 1) * currentTime * currentTime + 1) + initialPosition;
  }
}

interface IScrollToTopProps extends IDiv {
  smooth?: boolean;
}

interface IScrollToTopState {
  show: boolean;
}

export default ScrollToTop;
