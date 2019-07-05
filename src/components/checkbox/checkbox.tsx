import React from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_checkbox.scss";
import classNamesDefault from "../../utils/class-names-default";

class CheckBox extends React.PureComponent<IProps> {
  public render() {
    const { error, label, type, ...props } = this.props;
    return (
      <div className="checkbox-wrapper">
        <input
          id={`checkbox-${this.props.value}`}
          type="checkbox"
          className={classNamesDefault({ error })}
          {...props}
        />
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
}

export default CheckBox;
