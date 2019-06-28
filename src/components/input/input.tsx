import React from "react";
import "../../styles/components/_input.scss";
import classNamesDefault from "../../utils/class-names-default";

class Input extends React.PureComponent<IProps> {
  private static defaultProps = {
    variant: "text",
  };

  public render() {
    return (
      <input
        className={classNamesDefault(this.props)}
        disabled={this.props.disabled}
        checked={this.props.checked}
        required={this.props.required}
        placeholder={this.props.placeholder}
        type={this.props.type}
        max={this.props.max}
        min={this.props.min}
        name={this.props.name}
        value={this.props.value}
        onClick={this.props.onClick}
      />
    );
  }
}

interface IProps {
  variant?: string;
  type?: string;
  disabled?: boolean;
  className?: string;
  size?: string;
  fluid?: boolean;
  placeholder?: string;
  required?: boolean;
  checked?: boolean;
  max?: number;
  min?: number;
  name?: string;
  value?: string;
  onClick?: () => void;
  error?: boolean;
}

export default Input;
