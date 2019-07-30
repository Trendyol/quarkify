import classNames from "classnames";
import React, { PureComponent } from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_switch.scss";
import { switchTypes, variantTypes } from "../../types/switch";
import classNamesDefault from "../../utils/class-names-default";

export default class Switch extends PureComponent<IProps> {
  public render() {
    const { error, disabled, checked, label, value, type = "checkbox", className, ...props } = this.props;
    const switchClasses = classNames(
      "q-switch-wrapper",
      classNamesDefault({ error, disabled }),
      className);
    return (
      <label className={switchClasses}>
        <input
          disabled={disabled}
          className={"q-input"}
          id={`switch-${value}`}
          type={type}
          {...props}
          defaultChecked={checked}
        />
        <span className="q-switch-slider"/>
        {label && (
          <label className={"q-label"} htmlFor={`switch-${value}`}>{label}</label>
        )}
      </label>
    );
  }
}

interface IProps extends IInput {
  type?: switchTypes;
  value: string;
  variant?: variantTypes;
  error?: boolean;
  disabled?: boolean;
  label?: string;
  className?: string;
}
