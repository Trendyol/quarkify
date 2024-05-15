import classNames from "classnames";
import React, { PureComponent } from "react";
import ILink from "../../interfaces/link";
import { buttonSize, variantTypes } from "../../types/button";
import classNamesDefault from "../../utils/class-names-default";
import Icon from "../icon";
import Loader from "../loader";

export default class Link extends PureComponent<ILinkProps> {

  public render() {
    const {
      variant = "primary",
      size = "medium",
      fluid,
      disabled,
      icon,
      round,
      ripple = true,
      circular,
      children,
      className,
      loading = false,
      to,
      ...props
    } = this.props;
    const buttonClasses = classNames(
      classNamesDefault({ variant, fluid, disabled, round }),
      size && `q-button-${size}`,
      circular && "q-circular",
      loading && "loading",
      ripple && "q-ripple",
      className, "q-anchor",
      disabled && to && "q-anchor-disabled",
    );
    return (
      <a
        className={buttonClasses}
        href={to}
        {...props}
      >
        <Loader active={loading}/>
        {icon && <Icon name={icon}/>}
        {children && <span>{children}</span>}
      </a>
    );
  }
}

interface ILinkProps extends ILink {
  variant?: variantTypes;
  size?: buttonSize;
  fluid?: boolean;
  disabled?: boolean;
  icon?: string;
  round?: boolean;
  ripple?: boolean;
  circular?: boolean;
  className?: string;
  loading?: boolean;
  to: string;
  children?: React.ReactNode;
}
