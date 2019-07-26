import classNames from "classnames";
import React, { PureComponent } from "react";
import ILink from "../../interfaces/link";
import "../../styles/components/_button.scss";
import { variantTypes } from "../../types/button";
import classNamesDefault from "../../utils/class-names-default";
import Icon from "../icon";
import Loader from "../loader";

class Link extends PureComponent<ILinkProps> {

  public render() {
    const {
      variant = "primary",
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
      circular && "q-circular",
      loading && "loading",
      ripple && "q-ripple",
      className, "q-button",
      to && "q-anchor",
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
  fluid?: boolean;
  disabled?: boolean;
  icon?: string;
  round?: boolean;
  ripple?: boolean;
  circular?: boolean;
  className?: string;
  loading?: boolean;
  to: string;
}

export default Link;
