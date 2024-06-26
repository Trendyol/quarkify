import classNames from "classnames";
import React, { PureComponent } from "react";
import IDiv from "../../interfaces/div";

export default class Layout extends PureComponent<ILayoutProps> {

  public render() {
    const {
      fitted,
      fullScreen,
      children,
      className,
      ...props
    } = this.props;
    const layoutClasses = classNames(
      "q-layout",
      fitted && "q-fitted",
      fullScreen && "q-fullscreen",
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
  fullScreen?: boolean;
  children?: React.ReactNode;
}
