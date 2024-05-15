import classNames from "classnames";
import React, { PureComponent } from "react";
import IIcon from "../../interfaces/icon";
import { colorTypes } from "../../types/color";
import { sizeTypes } from "../../types/icon";
import classNamesDefault from "../../utils/class-names-default";

export default class Icon extends PureComponent<IProps> {

  public render() {
    const { name, size, sizePixel, color, circular, disabled, children, stroke, className, ...props } = this.props;
    const iconClass = classNames(
      classNamesDefault({ name, disabled }),
      "q-icon",
      size && `q-icon-${size}`,
      `icon-${name}`,
      circular && "q-circular",
      color && `${color}`,
      className,
    );
    const sizePixelWrapper = sizePixel ? {
      fontSize: `${sizePixel}px`,
    } : {};

    const renderSpanElements = (): JSX.Element[] =>
      new Array(stroke)
        .fill(undefined)
        .map((_, i) => <span key={i} className={`path${i + 1}`} />);

    return (
      <i className={iconClass} style={sizePixelWrapper} {...props}>
        {!!stroke && renderSpanElements()}
        {children}
      </i>
    );
  }
}

export interface IProps extends IIcon {
  name: string;
  size?: sizeTypes;
  sizePixel?: number;
  disabled?: boolean;
  circular?: boolean;
  color?: colorTypes;
  onClick?: (event: any) => any;
  stroke?: number;
  className?: string;
  children?: React.ReactNode;
}
