import React, { PureComponent } from "react";

export default class Content extends PureComponent<IModalContentProps> {
  public render() {
    return <div className={`q-modal-content ${this.props.className}`}>{this.props.children}</div>;
  }
}

interface IModalContentProps {
  className?: string;
}
