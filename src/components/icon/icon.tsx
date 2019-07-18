import classNames from "classnames";
import React, { CSSProperties, PureComponent } from "react";
import IIcon from "../../interfaces/icon";
import "../../styles/components/_icon.scss";
import { sizeTypes, variantTypes } from "../../types/icon";
import classNamesDefault from "../../utils/class-names-default";

class Icon extends PureComponent<IProps> {
  private static defaultProps = {
    disabled: false,
  };

  public render() {
    const { name, color, size, disabled, className, style, variant, ...props } = this.props;
    const iconClass = classNames(
      classNamesDefault({ variant, name, size, disabled }),
      `icon-${name}`,
      "q-i",
      className,
    );
    return (
      <i style={{color, ...style}} className={iconClass} {...props}>
        {this.props.children}
      </i>
    );
  }
}

interface IProps extends IIcon {
  name: string;
  size?: sizeTypes;
  disabled?: boolean;
  color?: string;
  style?: CSSProperties;
  className?: string;
  variant?: variantTypes;
}

export default Icon;
