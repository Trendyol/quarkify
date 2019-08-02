import classNames from "classnames";
import React, { PureComponent } from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_input.scss";
import classNamesDefault from "../../utils/class-names-default";

export default class Input extends PureComponent<IProps> {
  public render() {
    const {
      error,
      errorMessage,
      fluid,
      subtext,
      type = "text",
      label,
      disabled,
      className,
      ...props
    } = this.props;
    const newType = type === "checkbox" || type === "radio" ? "text" : type;
    const inputClasses = classNames(
      "q-input-wrapper",
      classNamesDefault({ error, disabled, fluid }),
      className);
    return (
      <div className={inputClasses}>
        {label && (
          <label className={"q-label"}>{label}</label>
        )}
        {subtext && <span className="q-span q-input-subtext">{subtext}</span>}
        <input
          className={"q-input"}
          disabled={disabled}
          type={newType}
          {...props}
        />
        {error && errorMessage && (
          <span className="q-span q-input-error">{errorMessage}</span>
        )}
      </div>
    );
  }
}

interface IProps extends IInput {
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  subtext?: string;
  fluid?: boolean;
  className?: string;
}
