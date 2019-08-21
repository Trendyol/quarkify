import classNames from "classnames";
import React, { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_layout.scss";

export default class Layout extends PureComponent<ILayoutProps> {

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

interface ILayoutProps extends IDiv {
  fitted?: boolean;
}
