import React, { PureComponent } from "react";

export default class Content extends PureComponent<IModalContentProps> {
  public render() {
    const {children, className} = this.props;
    return <div className={`q-modal-content ${className}`}>{children}</div>;
  }
}

interface IModalContentProps {
  className?: string;
}
