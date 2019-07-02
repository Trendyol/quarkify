import React from "react";
import IButton from "../../interfaces/button";
import "../../styles/components/_button.scss";
import { sizeTypes, variantTypes } from "../../types/button";
import classNamesDefault from "../../utils/class-names-default";

class Button extends React.PureComponent<IProps> {
  private static defaultProps = {
    variant: "primary",
  };

  public render() {
    const { variant, size, fluid, disabled, ...props } = this.props;
    return (
      <button
        className={classNamesDefault({ variant, size, fluid, disabled })}
        disabled={disabled}
        {...props}
      >
        {this.props.children}
      </button>
    );
  }
}

interface IProps extends IButton {
  variant?: variantTypes;
  size?: sizeTypes;
  fluid?: boolean;
  disabled?: boolean;
}

export default Button;
