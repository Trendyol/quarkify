import classNames from "classnames";
import React from "react";
import IIcon from "../../interfaces/icon";
import "../../styles/components/_icon.scss";
import { sizeTypes } from "../../types/icon";
import classNamesDefault from "../../utils/class-names-default";

class Icon extends React.PureComponent<IProps> {
  private static defaultProps = {
    disabled: false,
  };

  public render() {
    const { name, size, disabled, className, ...props } = this.props;
    const iconClass = classNames(
      classNamesDefault({ name, size, disabled }),
      `icon-${name}`,
      className,
    );
    return (
      <i className={iconClass} {...props}>
        {this.props.children}
      </i>
    );
  }
}

interface IProps extends IIcon {
  name: string;
  size?: sizeTypes;
  disabled?: boolean;
  className?: string;
}

export default Icon;
