import classNames from "classnames";
import React, { PureComponent } from "react";

export default class Step extends PureComponent<IProps> {

  public render() {
    const {
      name,
      active = false,
      className,
      ...props } = this.props;

    const stepClasses = classNames(
      "q-spb-step",
      active && "active",
      className,
    );

    return (
      <li className={stepClasses} {...props}>{name}</li>
    );
  }
}

interface IProps {
  name: string;
  active?: boolean;
  className?: string;
}
