import React, { PureComponent } from "react";
import "../../styles/components/_loader.scss";

export default class Loader extends PureComponent<ILoaderProps> {

  public render() {
    const {active} = this.props;

    if (!active) {
      return null;
    }

    return (
      <div className="q-loader">
        <div className="q-loading-animation"/>
      </div>
    );
  }
}

interface ILoaderProps {
  active: boolean;
  type?: string;
}
