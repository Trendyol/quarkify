import classNames from "classnames";
import React from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_radio.scss";
import classNamesDefault from "../../utils/class-names-default";

class Radio extends React.PureComponent<IProps> {
  public render() {
    const { error, label, type, className, ...props } = this.props;
    const radioClasses = classNames(
      "q-radio-wrapper",
      classNamesDefault({error}),
      className,
    );
    return (
      <div className={radioClasses}>
        <input
          className={"q-input"}
          id={`radio-${this.props.value}`}
          type="radio"
          {...props}
        />
        {label && <label className={"q-label"} htmlFor={`radio-${this.props.value}`}>{label}</label>}
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

export default Radio;
