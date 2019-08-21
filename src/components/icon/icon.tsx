import classNames from "classnames";
import React, { PureComponent } from "react";
import IIcon from "../../interfaces/icon";
import "../../styles/components/_icon.scss";
import { colorTypes } from "../../types/color";
import { sizeTypes } from "../../types/icon";
import classNamesDefault from "../../utils/class-names-default";

export default class Icon extends PureComponent<IProps> {

  public render() {
    const { name, size, sizePixel, color, circular, disabled, children, className, ...props } = this.props;
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
    return (
      <i className={iconClass} style={sizePixelWrapper} {...props}>
        {children}
      </i>
    );
  }
}

interface IProps extends IIcon {
  name: string;
  size?: sizeTypes;
  sizePixel?: number;
  disabled?: boolean;
  circular?: boolean;
  color?: colorTypes;
  onClick?: (event: any) => any;
  className?: string;
}
