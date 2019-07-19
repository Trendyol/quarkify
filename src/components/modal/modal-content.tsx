import React, { PureComponent } from "react";

class Content extends PureComponent<IModalContentProps> {
  public render() {
    return <div className={`q-modal-content ${this.props.className}`}>{this.props.children}</div>;
  }
}

interface IModalContentProps {
  className?: string;
}

export default Content;
