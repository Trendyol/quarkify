import React, { CSSProperties } from "react";

export default class Ripple extends React.PureComponent<IRipplesProps, IRippleState> {
  public static displayName = "Ripples";

  public static defaultProps = {
    active: true,
    className: "",
    color: "rgba(0, 0, 0, 0.3)",
    display: "inline-flex",
    during: 600,
  };

  private boxStyle: CSSProperties;

  public constructor(props: IRipplesProps) {
    super(props);
    this.state = {
      rippleStyle: {
        backgroundColor: props.color,
        borderRadius: "50%",
        height: 35,
        opacity: 0,
        pointerEvents: "none",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        width: 35,
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
    const {
      pageX,
      pageY,
      currentTarget: { offsetLeft, offsetTop, offsetWidth, offsetHeight },
    } = event;
    const left = pageX - offsetLeft;
    const top = pageY - offsetTop;
    const size = Math.max(offsetWidth, offsetHeight);

    this.setState(
      (state) => {
        return {
          rippleStyle: {
            ...state.rippleStyle,
            left,
            opacity: 1,
            top,
            transform: "translate(-50%, -50%) scale(1)",
            transition: "initial",
          },
        };
      },
      () => {
        setTimeout(() => {
          this.setState((state) => ({
            rippleStyle: {
              ...state.rippleStyle,
              opacity: 0,
              transform: `translate(-50%, -50%) scale(${size / 9})`,
              transition: `all ${during}ms`,
            },
          }));
        }, 0);
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
