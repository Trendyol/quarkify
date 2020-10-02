import classNames from "classnames";
import React, { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import { textAlignTypes } from "../../types/box";
import { colorTypes } from "../../types/color";
import Icon from "../icon";

export default class Badge extends PureComponent<IBadgeProps> {
  public render() {
    const {
      children,
      textAlign = "left",
      className,
      color,
      icon,
      ...props
    } = this.props;
    const badgeClasses = classNames(
      "q-badge",
      `q-${textAlign}-aligned`,
      color && `${color}`,
      className,
    );
    return (
      <div className={badgeClasses} {...props}>
        {icon && <Icon name={icon}/>}
        {children && <div>{children}</div>}
      </div>
    );
  }
}

interface IBadgeProps extends IDiv {
  textAlign?: textAlignTypes;
  className?: string;
  color?: colorTypes;
  icon?: string;
}
