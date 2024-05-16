import classNames from "classnames";
import React, { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import Icon from "../icon";

export default  class Header extends PureComponent<IHeaderProps> {
  public render() {
    const { className, children, icon = "chevron-down", handleClick, expanded, ...props } = this.props;
    const accordionHeaderClasses = classNames("q-accordion-header", className);
    return (
      <div className={accordionHeaderClasses} onClick={handleClick} {...props}>
        <div className="q-accordion-title">{children}</div>
        <Icon
          className={expanded ? "expanded" : ""}
          role="button"
          aria-label={icon}
          name={icon}
          onClick={handleClick}
        />
      </div>
    );
  }
}

export interface IHeaderProps extends IDiv {
  icon?: string;
  expanded?: boolean;
  className?: string;
  children?: React.ReactNode;
  handleClick?: () => void;
}
