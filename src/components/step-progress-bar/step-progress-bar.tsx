import classNames from "classnames";
import React, { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_rating.scss";
import { colorTypes } from "../../types/color";
import { ratingSize } from "../../types/rating";
import classNamesDefault from "../../utils/class-names-default";

export default class StepProgressBar extends PureComponent<IProps> {

  public render() {
    const {
      value = 0,
      size = "medium",
      color = "green",
      disabled,
      className,
      ...props } = this.props;

    const stepProgressBarClasses = classNames(
      "q-spb",
      classNamesDefault({ disabled, size }),
      color && `${color}`,
      className,
    );

    return (
      <div className={stepProgressBarClasses} {...props} />
    );
  }
}

interface IProps extends IDiv {
  value?: number;
  size?: ratingSize;
  color?: colorTypes;
  disabled?: boolean;
  className?: string;
}
