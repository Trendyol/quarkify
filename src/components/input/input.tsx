import React from "react";
import "../../styles/components/_input.scss";
import classNamesDefault from "../../utils/class-names-default";

class Input extends React.PureComponent<IProps> {
  private static defaultProps = {
    type: "text",
    variant: "primary",
  };

  public render() {
    const { error, variant, ...props } = this.props;
    return (
      <input className={classNamesDefault({ error, variant })} {...props} />
    );
  }
}

interface IProps {
  variant?: string;
  error?: boolean;
}

export default Input;
