import classNames from "classnames";
import React, { PureComponent } from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_checkbox.scss";
import classNamesDefault from "../../utils/class-names-default";

class CheckBox extends PureComponent<IProps> {
  public render() {
    const { checked, error, label, type, className, ...props } = this.props;
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
          <label className={"q-label"} htmlFor={`checkbox-${this.props.value}`}>{label}</label>
        )}
      </div>
    );
  }
}

interface IProps extends IInput {
  error?: boolean;
  label?: string;
  value: string;
  className?: string;
}

export default CheckBox;
