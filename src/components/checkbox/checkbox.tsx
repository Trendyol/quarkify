import classNames from "classnames";
import React, { PureComponent } from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_checkbox.scss";
import { colorTypes } from "../../types/color";
import { variantTypes } from "../../types/typography";
import classNamesDefault from "../../utils/class-names-default";
import Typography from "../typography";

export default  class CheckBox extends PureComponent<IProps> {
  public render() {
    const {
      checked,
      error,
      label,
      labelVariant = "body",
      labelColor= "black",
      type,
      value,
      className,
      ...props
    } = this.props;
    const checkBoxClasses = classNames(
      "q-checkbox-wrapper",
      classNamesDefault({ error }),
      className);
    return (
      <div className={checkBoxClasses}>
        <input
          onTouchStart={undefined}
          className={"q-input"}
          id={`checkbox-${this.props.value}`}
          type="checkbox"
          {...props}
          defaultChecked={checked}
        />
        {label && (
          <label className={"q-label"} htmlFor={`checkbox-${value}`}>
            <Typography variant={labelVariant} color={labelColor} display={"inline"}>
              {label}
            </Typography>
          </label>
        )}
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
