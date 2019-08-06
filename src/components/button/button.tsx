import classNames from "classnames";
import React, { PureComponent } from "react";
import IButton from "../../interfaces/button";
import "../../styles/components/_button.scss";
import { variantTypes } from "../../types/button";
import classNamesDefault from "../../utils/class-names-default";
import Icon from "../icon";
import Loader from "../loader";
import Ripple from "../ripple";

export default class Button extends PureComponent<IButtonProps> {

  public render() {
    const {
      variant = "primary",
      fluid,
      disabled,
      icon,
      round,
      circular,
      children,
      className,
      loading = false,
      ripple = true,
      ...props
    } = this.props;
    const buttonClasses = classNames(
      classNamesDefault({ variant, fluid, disabled, round }),
      circular && "q-circular",
      loading && "loading", "q-button");
    return (
      <Ripple
        className={className}
        display={fluid ? "block" : "inline-block"}
        active={ripple && !(disabled || loading)}
      >
        <button
          className={buttonClasses}
          disabled={disabled || loading}
          {...props}
        >
          <Loader active={loading}/>
          {icon && <Icon name={icon}/>}
          {children && <span>{children}</span>}
        </button>
      </Ripple>
    );
  }
}

interface IButtonProps extends IButton {
  variant?: variantTypes;
  fluid?: boolean;
  disabled?: boolean;
  icon?: string;
  round?: boolean;
  circular?: boolean;
  className?: string;
  loading?: boolean;
  ripple?: boolean;
}
