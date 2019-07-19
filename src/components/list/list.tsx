import classNames from "classnames";
import React, { PureComponent, ReactNode } from "react";
import "../../styles/components/_list.scss";
import ListItem from "./listItem";

class List extends PureComponent<IListProps> {

  public render() {
    const {
      noDot = false,
      children,
      className,
      ...props
    } = this.props;
    const listClasses = classNames(
      "q-list",
      noDot && "q-no-dot",
      className,
    );
    return(
      <ul className={listClasses} {...props}>
        {children}
      </ul>
    );
  }
}

interface IListProps {
  noDot?: boolean;
  className?: string;
  children?: ReactNode;
}

export default List;
