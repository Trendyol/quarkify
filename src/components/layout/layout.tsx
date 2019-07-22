import classNames from "classnames";
import React, { PureComponent, ReactNode } from "react";
import "../../styles/components/_layout.scss";
import classNamesDefault from "../../utils/class-names-default";

class Layout extends PureComponent<ILayoutProps> {

  public render() {
    const {
      fluid,
      children,
      className,
      ...props
    } = this.props;
    const layoutClasses = classNames(
      classNamesDefault({ fluid }),
      "q-layout",
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
  fluid?: boolean;
  children?: ReactNode;
  className?: string;
}

export default Layout;
