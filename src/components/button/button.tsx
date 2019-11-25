import classNames from "classnames";
import React, { PureComponent } from "react";
import IButton from "../../interfaces/button";
import "../../styles/components/_button.scss";
import { buttonSize, variantTypes } from "../../types/button";
import classNamesDefault from "../../utils/class-names-default";
import Icon from "../icon";
import Loader from "../loader";

export default class Button extends PureComponent<IButtonProps> {

  public render() {
    const {
      variant = "primary",
      fluid,
      disabled,
      round,
      size = "medium",
      circular,
      loading = false,
      ripple,
      icon,
      children,
      className,
      ...props
    } = this.props;
    const buttonClasses = classNames(
      classNamesDefault({ variant, fluid, disabled, round }),
      size && `q-button-${size}`,
      circular && "q-circular",
      loading && "loading", "q-button",
      className,
    );

    if (ripple && process.env.NODE_ENV === "development") {
      console.warn(`quarkify: 'ripple' prop for Button component is no longer supported.
        Please remove 'ripple' prop from Buttons.`);
    }

    return (
      <button
        className={buttonClasses}
        disabled={disabled || loading}
        {...props}
      >
        <Loader active={loading} />
        {icon && <Icon name={icon} />}
        {children && <span>{children}</span>}
      </button>
    );
  }
}

interface IButtonProps extends IButton {
  variant?: variantTypes;
  size?: buttonSize;
  fluid?: boolean;
  disabled?: boolean;
  icon?: string;
  round?: boolean;
  circular?: boolean;
  className?: string;
  loading?: boolean;
  ripple?: boolean;
}
