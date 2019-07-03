import React from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_radio.scss";
import { variantTypes } from "../../types/input";
import classNamesDefault from "../../utils/class-names-default";

class Radio extends React.PureComponent<IProps> {

  public render() {
    const { error, variant, label, fluid, type, ...props } = this.props;
    return (
      <div className="radio-wrapper">
        <input type="radio" className={classNamesDefault({ error, variant, fluid })} {...props} />
        {label && <label>{label}</label>}
      </div>
    );
  }
}

interface IProps extends IInput {
  variant?: variantTypes;
  error?: boolean;
  label?: string;
  fluid?: boolean;
}

export default Radio;
