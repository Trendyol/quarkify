import React from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_checkbox.scss";
import classNamesDefault from "../../utils/class-names-default";

class CheckBox extends React.PureComponent<IProps> {

  public render() {
    const { error, label, type, ...props } = this.props;
    return (
      <div className="checkbox-wrapper">
        <input type="checkbox" className={classNamesDefault({ error })} {...props} />
        {label && <label>{label}</label>}
      </div>
    );
  }
}

interface IProps extends IInput {
  error?: boolean;
  label?: string;
}

export default CheckBox;
