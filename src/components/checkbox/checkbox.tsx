import React from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_checkbox.scss";
import { variantTypes } from "../../types/input";
import classNamesDefault from "../../utils/class-names-default";

class CheckBox extends React.PureComponent<IProps> {
  private static defaultProps = {
    type: "checkbox",
  };

  public render() {
    const { error, variant, label, fluid, type, ...props } = this.props;
    return (
      <div className="checkbox-wrapper">
        <input type="checkbox" className={classNamesDefault({ error, variant, fluid })} {...props} />
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

export default CheckBox;
