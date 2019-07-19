import classNames from "classnames";
import React, { PureComponent } from "react";
import Icon from "../icon";

class Header extends PureComponent<IHeaderProps> {
  public render() {
      const {
        children,
        rightIcon,
        leftIcon,
        leftIconOnClick,
        rightIconOnClick,
      } = this.props;
      const headerClasses = classNames("q-modal-header", leftIcon && "q-has-left-icon");
      return (
        <div className={headerClasses}>
          {leftIcon &&
          <Icon className={"q-i"} aria-label={leftIcon} name={leftIcon} onClick={leftIconOnClick} />}
          <h1 className="q-modal-title">{children}</h1>
          {rightIcon &&
          <Icon className={"q-i"} aria-label={rightIcon} name={rightIcon} onClick={rightIconOnClick} />
          }
        </div>
      );
    }
  }

export interface IHeaderProps {
  leftIcon?: string;
  rightIcon?: string;
  leftIconOnClick?(event: React.SyntheticEvent): void;
  rightIconOnClick?(event: React.SyntheticEvent): void;
}

export default Header;
