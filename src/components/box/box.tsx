import classNames from "classnames";
import React, { PureComponent } from "react";
import "../../styles/components/_box.scss";
import { textAlignTypes } from "../../types/box";

class Box extends PureComponent<IBoxProps> {
  private static defaultProps = {
    textAlign: "left",
  };

  public render() {
    const {
      children,
      spaced,
      textAlign,
      className,
    } = this.props;
    const boxClasses = classNames(
      "q-box",
      spaced && "q-spaced",
      `q-${textAlign}-aligned`,
      className,
    );
    return (
      <div className={boxClasses}>{children}</div>
    );
  }
}

interface IBoxProps {
  spaced?: boolean;
  textAlign?: textAlignTypes;
  className?: string;
}

export default Box;
