import classNames from "classnames";
import React, { FunctionComponent } from "react";
import "../../styles/components/_box.scss";
import { textAlignTypes } from "../../types/box";

const Box: FunctionComponent<IBoxProps> = ({
  children,
  spaced = false,
  textAlign = "left",
}) => {
  const boxClasses = classNames(
    "box",
    spaced && "spaced",
    `${textAlign}-aligned`,
  );
  return <div className={boxClasses}>{children}</div>;
};

interface IBoxProps {
  spaced?: boolean;
  textAlign?: textAlignTypes;
}

export default Box;
