import React, { PureComponent } from "react";
import "../../styles/components/_loader.scss";

class Loader extends PureComponent<ILoaderProps> {

  public render() {
    if (!this.props.active) {
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

export default Loader;
