import React from "react";
import "../../styles/components/_button.scss";
import classNamesDefault from "../../utils/class-names-default";

class Button extends React.PureComponent<IProps> {
  private static defaultProps = {
    variant: "primary",
  };

  public render() {
    const { variant, size, fluid, ...props } = this.props;
    return (
      <button
        className={classNamesDefault({ variant, size, fluid })}
        {...props}
      >
        {this.props.children}
      </button>
    );
  }
}

interface IProps {
  variant?: string;
  size?: string;
  fluid?: boolean;
}

export default Button;
