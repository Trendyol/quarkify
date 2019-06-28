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
        onClick={this.props.onClick}
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
  onClick: () => void;
}

export default Input;
