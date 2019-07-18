import React, { PureComponent, ReactNode } from "react";
import "../../styles/components/_list.scss";

class List extends PureComponent<IListProps> {

  public render() {
    const {
      children,
      className,
      ...props
    } = this.props;
    return(
      <ul className={"q-list"} {...props}>
        {children}
      </ul>
    );
  }
}

interface IListProps {
  className?: string;
  children?: ReactNode;
}

export default List;
