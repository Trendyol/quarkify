import React from "react";
import "../../styles/components/_input.scss";
import classNamesDefault from "../../utils/class-names-default";

class Input extends React.PureComponent<IProps> {
  private static defaultProps = {
    type: "primary",
  };

  public render() {
    return (
      <input
        className={classNamesDefault(this.props)}
        disabled={this.props.disabled}
        placeholder={this.props.placeholder}
        type={this.props.type}
      />
    );
  }
}

interface IProps {
  type?: string;
  disabled?: boolean;
  className?: string;
  size?: string;
  fluid?: boolean;
  placeholder?: string;
}

export default Input;
