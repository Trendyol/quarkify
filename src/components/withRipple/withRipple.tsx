import React from "react";
const withRipple = (WrappedComponent: any) => {
  return class extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        rippleSize: 0,
        rippleX: 0,
        rippleY: 0,
        show: false,
      };
      this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
      this.showRipple = this.showRipple.bind(this);
    }

    public render() {
      return <WrappedComponent className="q-ripple" {...this.props} onClick={this.showRipple}>
          {this.state.show &&
          <span
            className="ripple"
            style={{
              height: `${this.state.rippleSize}px`,
              left: `${this.state.rippleX}px`,
              top: `${this.state.rippleY}px`,
              width: `${this.state.rippleSize}px`,
            }}
            onAnimationEnd={this.handleAnimationEnd}
          />}
          {this.props.children}
      </WrappedComponent>;
    }

    private showRipple(event: any) {
      const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
      const size = Math.max(width, height);
      const x = (event.clientX - left) - size / 2;
      const y = (event.clientY - top) - size / 2;
      this.setState({show: true, rippleX: x, rippleY: y, rippleSize: size});
      this.props.onClick();
    }

    private handleAnimationEnd() {
      this.setState({show: false});
    }

  };

  interface IRippleState {
    show: boolean;
    rippleX: number;
    rippleY: number;
    rippleSize: number;
  }
};

export default withRipple;
