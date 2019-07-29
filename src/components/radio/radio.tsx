import classNames from "classnames";
import React, { PureComponent } from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_radio.scss";
import classNamesDefault from "../../utils/class-names-default";

export default class Radio extends PureComponent<IProps> {
  public render() {
    const { checked, error, label, type, value, className, ...props } = this.props;
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
          {...props}
          defaultChecked={checked}
        />
        {label && <label className={"q-label"} htmlFor={`radio-${value}`}>{label}</label>}
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
