import React from "react";
import "../../styles/components/_with-ripple.scss";
const withRipple = (WrappedComponent: any) => {
  return class extends React.Component<IRippleProps, IRippleState> {

    constructor(props: IRippleProps) {
      super(props);
      this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
      this.showRipple = this.showRipple.bind(this);
    }

    public render() {
      const {ripple = true, onClick, ...props} = this.props;
      if (!ripple) {
        return <WrappedComponent {...props} onClick={onClick}/>;
      }
      return <WrappedComponent {...props} onClick={this.showRipple}/>;
    }

    public showRipple(event: any) {
      event.persist();
      const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
      const size = Math.max(width, height);
      const x = (event.clientX - left) - size / 2;
      const y = (event.clientY - top) - size / 2;
      this.setState({show: true, rippleX: x, rippleY: y, rippleSize: size});
      const rippleSpan = document.createElement("span");
      event.currentTarget.classList.add("q-ripple");
      rippleSpan.classList.add("ripple");
      rippleSpan.style.height = `${size}px`;
      rippleSpan.style.left = `${x}px`;
      rippleSpan.style.top = `${y}px`;
      rippleSpan.style.width = `${size}px`;
      event.currentTarget.appendChild(rippleSpan);
      rippleSpan.addEventListener("animationend", function removeRipple() {
        rippleSpan.removeEventListener("animationend", removeRipple);
        if (rippleSpan.parentNode) {
          rippleSpan.parentNode.removeChild(rippleSpan);
        }
      });
      if (this.props.onClick) {
        this.props.onClick();
      }
    }

    public handleAnimationEnd() {
      this.setState({show: false});
    }

  };
};

interface IRippleState {
  show: boolean;
  rippleX: number;
  rippleY: number;
  rippleSize: number;
}

interface IRippleProps {
  ripple?: boolean;
  className?: string;
  onClick?: () => void;
}

export default withRipple;
