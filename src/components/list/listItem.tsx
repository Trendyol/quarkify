import classNames from "classnames";
import React, { PureComponent, ReactNode } from "react";
import "../../styles/components/_list.scss";
import { colorTypes } from "../../types/color";
import Icon from "../icon";

export default class ListItem extends PureComponent<IItemProps> {
  public render() {
    const {
      icon,
      iconColor,
      children,
      className,
      ...props
    } = this.props;
    const listItemClasses = classNames(
      "q-list-item",
      className,
    );
    return (
      <li className={listItemClasses} {...props}>
        {icon && <Icon name={icon} color={iconColor}/>}
        {children}
      </li>
    );
  }
}

interface IItemProps {
  icon?: string;
  iconColor?: colorTypes;
  className?: string;
}
