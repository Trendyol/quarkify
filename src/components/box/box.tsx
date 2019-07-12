import classNames from "classnames";
import React, { FunctionComponent } from "react";
import "../../styles/components/_box.scss";
import { textAlignTypes } from "../../types/box";

const Box: FunctionComponent<IBoxProps> = ({
  children,
  spaced = false,
  textAlign = "left",
  className,
}) => {
  const boxClasses = classNames(
    "box",
    spaced && "spaced",
    `${textAlign}-aligned`,
    className,
  );
  return <div className={boxClasses}>{children}</div>;
};

interface IBoxProps {
  spaced?: boolean;
  textAlign?: textAlignTypes;
  className?: string;
}

export default Box;
