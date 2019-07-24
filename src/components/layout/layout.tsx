import classNames from "classnames";
import React, { PureComponent, ReactNode } from "react";
import "../../styles/components/_layout.scss";

class Layout extends PureComponent<ILayoutProps> {

  public render() {
    const {
      fitted,
      children,
      className,
      ...props
    } = this.props;
    const layoutClasses = classNames(
      "q-layout",
      fitted && "q-fitted",
      className);
    return (
      <div
        className={layoutClasses}
        {...props}
      >
        {children}
      </div>
    );
  }
}

interface ILayoutProps {
  fitted?: boolean;
  children?: ReactNode;
  className?: string;
}

export default Layout;
