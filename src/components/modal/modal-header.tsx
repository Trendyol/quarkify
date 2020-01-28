import classNames from "classnames";
import React, { PureComponent } from "react";
import Icon from "../icon";

export default class Header extends PureComponent<IHeaderProps> {
  public render() {
    const {
      children,
      rightIcon,
      leftIcon,
      leftIconOnClick,
      rightIconOnClick,
      className,
    } = this.props;
    const headerClasses = classNames("q-modal-header", leftIcon && "q-has-left-icon", className);
    return (
      <div className={headerClasses}>
        {leftIcon &&
        <Icon className={"q-i"} aria-label={leftIcon} name={leftIcon} onClick={leftIconOnClick}/>}
        <h1 className="q-modal-title">{children}</h1>
        {rightIcon &&
        <Icon className={"q-i"} aria-label={rightIcon} name={rightIcon} onClick={rightIconOnClick}/>
        }
      </div>
    );
  }
}

export interface IHeaderProps {
  leftIcon?: string;
  rightIcon?: string;
  className?: string;
  leftIconOnClick?: (event: any) => any;
  rightIconOnClick?: (event: any) => any;
}
