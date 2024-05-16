import React, { PureComponent } from "react";

export default class Actions extends PureComponent<IActionsProps> {
  public render() {
    const {children} = this.props;
    return <div className="q-modal-actions">{children}</div>;
  }
}

interface IActionsProps {
  children?: React.ReactNode;
}
