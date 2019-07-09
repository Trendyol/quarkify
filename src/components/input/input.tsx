import React from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_input.scss";
import classNamesDefault from "../../utils/class-names-default";

class Input extends React.PureComponent<IProps> {
  private static defaultProps = {
    type: "text",
  };

  public render() {
    let newType = this.props.type;
    const {
      error,
      fluid,
      subtext,
      type,
      label,
      disabled,
      ...props
    } = this.props;
    if (type === "checkbox" || type === "radio") {
      newType = "text";
    }
    return (
      <div className={`input-wrapper ${fluid ? "fluid" : ""}`}>
        {label && <label className={`${disabled ? "disabled" : ""}`}>{label}</label>}
        {subtext && <span className="input-subtext">{subtext}</span>}
        <input
          disabled={disabled}
          type={newType}
          className={classNamesDefault({ error, disabled })}
          {...props}
        />
      </div>
    );
  }
}

interface IProps extends IInput {
  disabled?: boolean;
  error?: boolean;
  label?: string;
  subtext?: string;
  fluid?: boolean;
}

export default Input;
