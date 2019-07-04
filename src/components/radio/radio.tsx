import React from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_radio.scss";
import classNamesDefault from "../../utils/class-names-default";

class Radio extends React.PureComponent<IProps> {

  public render() {
    const { error, label, type, ...props } = this.props;
    return (
      <div className="radio-wrapper">
        <input type="radio" className={classNamesDefault({ error })} {...props} />
        {label && <label>{label}</label>}
      </div>
    );
  }
}

interface IProps extends IInput {
  error?: boolean;
  label?: string;
}

export default Radio;
