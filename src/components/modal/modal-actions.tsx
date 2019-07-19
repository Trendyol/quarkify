import React, { PureComponent } from "react";

class Actions extends PureComponent {
  public render() {
    return <div className="q-modal-actions">{this.props.children}</div>;
  }
}

export default Actions;
