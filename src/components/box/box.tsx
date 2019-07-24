import classNames from "classnames";
import React, { PureComponent } from "react";
import "../../styles/components/_box.scss";
import { textAlignTypes } from "../../types/box";

class Box extends PureComponent<IBoxProps> {
  public render() {
    const {
      children,
      spaced,
      fitted,
      textAlign = "left",
      className,
    } = this.props;
    const boxClasses = classNames(
      "q-box",
      spaced && "q-spaced",
      fitted && "q-fitted",
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
  fitted?: boolean;
  textAlign?: textAlignTypes;
  className?: string;
}

export default Box;
