import React from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_input.scss";
import { variantTypes } from "../../types/input";
import classNamesDefault from "../../utils/class-names-default";

class Input extends React.PureComponent<IProps> {
  private static defaultProps = {
    type: "text",
  };

  public render() {
    let newType = this.props.type;
    const {
      error,
      variant,
      fluid,
      subtext,
      type,
      label,
      ...props
    } = this.props;
    if (type === "checkbox" || type === "radio") {
      newType = "text";
    }
    return (
      <div className={`input-wrapper ${fluid ? "fluid" : ""}`}>
        {label && <label>{label}</label>}
        {subtext && <span className="input-subtext">{subtext}</span>}
        <input
          type={newType}
          className={classNamesDefault({ error, variant })}
          {...props}
        />
      </div>
    );
  }
}

interface IProps extends IInput {
  variant?: variantTypes;
  error?: boolean;
  label?: string;
  subtext?: string;
  fluid?: boolean;
}

export default Input;
