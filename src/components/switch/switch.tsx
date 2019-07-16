import classNames from "classnames";
import React from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_switch.scss";
import { switchTypes, variantTypes } from "../../types/switch";
import classNamesDefault from "../../utils/class-names-default";

class Switch extends React.PureComponent<IProps> {
  private static defaultProps = {
    type: "checkbox",
  };
  public render() {
    const { error, disabled, checked, label, type, className, ...props } = this.props;
    const switchClasses = classNames(
      "q-switch-wrapper",
      classNamesDefault({error, disabled}),
      className);
    return (
      <label className={switchClasses}>
        <input
          disabled={disabled}
          className={"q-input"}
          id={`switch-${this.props.value}`}
          type={type}
          {...props}
          defaultChecked={checked}
        />
        <span className="q-switch-slider"/>
        {label && (
          <label className={"q-label"} htmlFor={`switch-${this.props.value}`}>{label}</label>
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

export default Switch;
