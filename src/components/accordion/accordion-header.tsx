import React, { PureComponent } from "react";
import Icon from "../icon";

class Header extends PureComponent<IHeaderProps> {
  public render() {
    const { children, icon = "chevron-down", handleClick, expanded } = this.props;
    return(
      <div className="q-accordion-header" onClick={handleClick}>
        <div className="q-accordion-title">{children}</div>
        <Icon
          className={expanded ? "expanded" : ""}
          role="button"
          aria-label={icon}
          name={icon}
          onClick={handleClick}
        />
      </div >
    );
  }
}

export interface IHeaderProps {
  icon?: string;
  expanded?: boolean;
  handleClick?: () => void;
}

export default Header;
