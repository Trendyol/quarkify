import classNames from "classnames";
import React, { PureComponent } from "react";
import IInput from "../../interfaces/input";
import { colorTypes } from "../../types/color";
import { variantTypes } from "../../types/typography";
import classNamesDefault from "../../utils/class-names-default";
import Typography from "../typography";

export default class Radio extends PureComponent<IProps> {
  public render() {
    const {
      error,
      label,
      labelVariant = "body",
      labelColor = "black",
      type,
      value,
      className,
      ...props
    } = this.props;
    const radioClasses = classNames(
      "q-radio-wrapper",
      classNamesDefault({ error }),
      className,
    );
    return (
      <div className={radioClasses}>
        <input
          onTouchStart={undefined}
          className={"q-input"}
          id={`radio-${value}`}
          type="radio"
          value={value}
          {...props}
        />
        <label className={"q-label"} htmlFor={`radio-${value}`}>
          <span />
          <Typography variant={labelVariant} color={labelColor} display={"inline"}>
            {label}
          </Typography>
        </label>
      </div>
    );
  }
}

interface IProps extends IInput {
  error?: boolean;
  label?: string;
  labelVariant?: variantTypes;
  labelColor?: colorTypes;
  value: any;
  className?: string;
}
