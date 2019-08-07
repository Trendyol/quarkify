import React, { CSSProperties } from "react";

export default class Ripple extends React.PureComponent<IRipplesProps, IRippleState> {
  public static displayName = "Ripples";

  public static defaultProps = {
    active: true,
    className: "",
    color: "rgba(0, 0, 0, 0.3)",
    display: "inline-flex",
    during: 550,
  };

  private boxStyle: CSSProperties;

  public constructor(props: IRipplesProps) {
    super(props);
    this.state = {
      rippleStyle: {
        backgroundColor: props.color,
        borderRadius: "50%",
        height: 1,
        opacity: 0,
        pointerEvents: "none",
        position: "absolute",
        transform: "translate(-50%, -50%) scale(0)",
        width: 1,
      },
    };
    this.boxStyle = {
      display: this.props.display,
      overflow: "hidden",
      position: "relative",
    };
    this.onClick = this.onClick.bind(this);
  }

  public render() {
    if (!this.props.active) {
      return <>{this.props.children}</>;
    }

    const {
      children,
      during,
      color,
      onClick,
      className,
      active,
      display,
      ...props
    } = this.props;
    const { rippleStyle } = this.state;

    return (
      <div
        {...props}
        className={`q-ripple ${className}`.trim()}
        style={this.boxStyle}
        onClick={this.onClick}
      >
        {children}
        <s style={rippleStyle} />
      </div>
    );
  }

  private onClick(event: React.MouseEvent<HTMLDivElement>) {
    const { during, onClick } = this.props;
    event.stopPropagation();
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const size = Math.max(width, height);
    const rippleX = Math.round(event.clientX - left);
    const rippleY = Math.round(event.clientY - top);

    this.setState(
      (state) => {
        return {
          rippleStyle: {
            ...state.rippleStyle,
            height: size,
            left: rippleX,
            opacity: 1,
            top: rippleY,
            transform: "translate(-50%, -50%) scale(0)",
            transition: "initial",
            width: size,
          },
        };
      },
      () => {
        setTimeout(() => {
          this.setState((state) => ({
            rippleStyle: {
              ...state.rippleStyle,
              opacity: 0,
              transform: `translate(-50%, -50%) scale(2)`,
              transition: `all ${during}ms cubic-bezier(0.4, 0, 0.2, 1) 0s`,
            },
          }));
        }, 50);
      },

    );

    if (onClick) { onClick(event); }
  }
}

export interface IRipplesProps {
  active?: boolean;
  during?: number;
  display?: string;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => any;
  className?: string;
}

type IRippleState = Readonly<{
  rippleStyle: CSSProperties,
}>;
