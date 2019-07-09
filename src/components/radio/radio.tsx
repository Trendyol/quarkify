import React from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_radio.scss";
import classNamesDefault from "../../utils/class-names-default";

class Radio extends React.PureComponent<IProps> {
  public render() {
    const { error, label, type, ...props } = this.props;
    return (
      <div className={error ? `error radio-wrapper` : `radio-wrapper`}>
        <input
          id={`radio-${this.props.value}`}
          type="radio"
          className={classNamesDefault({ error })}
          {...props}
        />
        {label && <label htmlFor={`radio-${this.props.value}`}>{label}</label>}
      </div>
    );
  }
}

interface IProps extends IInput {
  error?: boolean;
  label?: string;
  value: string;
}

export default Radio;
