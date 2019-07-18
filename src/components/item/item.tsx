import classNames from "classnames";
import React, { PureComponent, ReactNode } from "react";
import "../../styles/components/_item.scss";
import Icon from "../icon";

class Item extends PureComponent<IItemProps> {
  private static defaultProps = {
    dotted: true,
  };
  public render() {
    const {
      children,
      className,
      icon,
      dotted,
      ...props
    } = this.props;
    return(
      <li className={classNames(dotted && "q-item-dotted", "q-item", className)} {...props}>
        {icon && <Icon name={icon || "search"}/>}
        {children}
      </li>
    );
  }
}

interface IItemProps {
  icon?: string;
  dotted?: boolean;
  className?: string;
  children?: ReactNode;
}

export default Item;
