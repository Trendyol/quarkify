import React, { PureComponent } from "react";

export default class Actions extends PureComponent {
  public render() {
    return <div className="q-modal-actions">{this.props.children}</div>;
  }
}
