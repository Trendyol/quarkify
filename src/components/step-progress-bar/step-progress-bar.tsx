import classNames from "classnames";
import React, { PureComponent, ReactNode } from "react";
import IList from "../../interfaces/list";
import { colorTypes } from "../../types/color";

export default class StepProgressBar extends PureComponent<IProps> {

  public render() {
    const {
      color = "green",
      children,
      className,
      ...props } = this.props;

    const stepProgressBarClasses = classNames(
      "q-spb",
      color && `${color}`,
      className,
    );

    return (
      <ul className={stepProgressBarClasses} {...props} >
        {children}
      </ul>
    );
  }
}

interface IProps extends IList {
  color?: colorTypes;
  children: ReactNode;
  className?: string;
}
