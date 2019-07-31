import React, { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import Icon from "../icon";

export default  class Header extends PureComponent<IHeaderProps> {
  public render() {
    const { children, icon = "chevron-down", handleClick, expanded, ...props } = this.props;
    return (
      <div className="q-accordion-header" onClick={handleClick} {...props}>
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
  handleClick?: () => void;
}
