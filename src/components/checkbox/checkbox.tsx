import classNames from "classnames";
import React from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_checkbox.scss";
import classNamesDefault from "../../utils/class-names-default";

class CheckBox extends React.PureComponent<IProps> {
  public render() {
    const { error, label, type, className, ...props } = this.props;
    const checkBoxClasses = classNames(
      "checkbox-wrapper",
      classNamesDefault({error}),
      className);
    return (
      <div className={checkBoxClasses}>
        <input id={`checkbox-${this.props.value}`} type="checkbox" {...props} />
        {label && (
          <label htmlFor={`checkbox-${this.props.value}`}>{label}</label>
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
